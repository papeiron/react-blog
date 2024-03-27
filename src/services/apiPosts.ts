import supabase, { supabaseUrl } from './supabase';
import { SortBy as SortByType, newPostData as newPostDataType } from '../types/types';
import { fetchRelatedTag } from './apiTags';

type FetchPostsArgs = {
  sortBy: SortByType;
  page: number;
  postByPage?: number;
};

export async function fetchPosts({ sortBy, page, postByPage }: FetchPostsArgs) {
  let query = supabase.from('posts').select('*', { count: 'exact' });

  // SORT
  if (sortBy) {
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === 'dec'
    });
  }

  // PAGINATION
  if (page && postByPage) {
    const from = (page - 1) * postByPage;
    const to = from + postByPage - 1;

    query = query.range(from, to);
  }

  const { data: posts, error, count } = await query;

  if (error) {
    console.log(error.message);
    throw new Error('Posts could not be loaded');
  }

  let { data: post_tags, error: error2 } = await supabase.from('post_tags').select(`
    postId,
    tags (
      id,
      created_at,
      tagName
    )
  `);

  if (error2) {
    console.log(error2.message);
    throw new Error('Posts could not be loaded');
  }

  const postsWithTags = [];
  if (!post_tags || !posts) return;
  for (let post of posts) {
    const postTags = post_tags.filter((postTag) => postTag.postId === post.id);
    const tags = postTags.map((postTag) => postTag.tags);
    postsWithTags.push({ ...post, tags: tags });
  }

  return { postsWithTags, count };
}

export async function fetchPost(slug: string) {
  let { data: post, error } = await supabase.from('posts').select('*').eq('slug', slug).single();

  if (error) {
    console.log(error.message);
    throw new Error('Post could not be loaded');
  }

  const tags = await fetchRelatedTag(post?.id);

  const postWithTags = { ...post, tags };

  return postWithTags;
}

type NewPost = newPostDataType;

export async function createNewPost(newPost: NewPost, tagIds: number[]) {
  // image path,url
  if (typeof newPost.coverImage == 'string') return;
  const imageName = `${Math.random()}-${newPost.coverImage.name}`.replaceAll('/', '');
  const imageUrl = `${supabaseUrl}/storage/v1/object/public/post-images/${imageName}`;

  const imgUrlAddedNewPost = {
    ...newPost,
    coverImage: imageUrl
  };

  // insert newPost
  const { data: newCreatedPost, error } = await supabase
    .from('posts')
    .insert([imgUrlAddedNewPost])
    .select();

  if (error) {
    console.log(error.message);
    throw new Error('Posts could not be created');
  }

  // if there is no error on creating post upload image
  const { error: uploadImgError } = await supabase.storage
    .from('post-images')
    .upload(imageName, newPost.coverImage);

  if (uploadImgError) throw new Error('An error occurred while uploading the image.');

  // post tags relation
  const newPostId = newCreatedPost[0].id;

  const postTags = tagIds.map((tagId: number) => ({
    postId: newPostId,
    tagId
  }));

  const { error: tagInsertError } = await supabase.from('post_tags').insert(postTags);

  if (tagInsertError) {
    console.log(tagInsertError.message);
    throw new Error('Posts could not be created.');
  }
}

export async function deletePost(postId: number) {
  // delete post tags relation
  const { error: postTagRelationError } = await supabase
    .from('post_tags')
    .delete()
    .eq('postId', postId);
  // console.log(data);
  if (postTagRelationError) {
    console.log(postTagRelationError.message);
    throw new Error('Posts could not be deleted.');
  }

  // if there is no error
  // delete post
  const { error } = await supabase.from('posts').delete().eq('id', postId);

  if (error) {
    console.log(error.message);
    throw new Error('Posts could not be deleted.');
  }
}

export async function editPost(newPost: NewPost, postId: number, tagIds: number[]) {
  let imageName;
  let imageUrl;

  // image path,url
  if (typeof newPost.coverImage !== 'string') {
    imageName = `${Math.random()}-${newPost.coverImage.name}`.replaceAll('/', '');
    imageUrl = `${supabaseUrl}/storage/v1/object/public/post-images/${imageName}`;
  }

  // edit post

  const imgUrlAddedNewPost = {
    ...newPost,
    coverImage: imageUrl
  };

  const { data: editedPost, error: editedPostError } = await supabase
    .from('posts')
    .update({ ...imgUrlAddedNewPost, modified_at: new Date().toISOString() })
    .eq('id', postId)
    .select();

  if (editedPostError) {
    console.log(editedPostError.message);
    throw new Error('Posts could not be edited.');
  }

  // if there is no error on creating post upload image

  if (imageName) {
    const { error: uploadImgError } = await supabase.storage
      .from('post-images')
      .upload(imageName, newPost.coverImage);

    if (uploadImgError) throw new Error('An error occurred while uploading the image.');
  }

  // // edit tags
  // if exists
  const editedPostId = editedPost[0].id;

  // let { data: isPostExistOnPostTags } = await supabase
  //   .from('post_tags')
  //   .select('postId', { head: true }) // Explicitly specify the type for select()
  //   .eq('postId', editedPostId);

  let { data: isPostExistOnPostTags } = await supabase
    .from('post_tags')
    .select('*') // Select all columns
    .eq('postId', editedPostId);

  // delete previous post_tags relation

  if (isPostExistOnPostTags) {
    const { error: postTagRelationError } = await supabase
      .from('post_tags')
      .delete()
      .eq('postId', editedPostId);

    if (postTagRelationError) {
      console.log(postTagRelationError.message);
      throw new Error('Posts could not be edited.');
    }
  }

  // add new post_tags relation
  const postTags = tagIds.map((tagId: number) => ({
    postId: editedPostId,
    tagId
  }));

  const { error: editedTagsError } = await supabase.from('post_tags').insert(postTags).select();

  if (editedTagsError) {
    console.log(editedTagsError.message);
    throw new Error('Posts could not be edited.');
  }

  return editedPost;
}

export async function fetchPostTags() {
  let { data: post_tags } = await supabase.from('post_tags').select('*');

  return post_tags;
}

export async function createRelation({ postId, tagId }: { postId: number; tagId: number }) {
  const { error } = await supabase.from('post_tags').insert([{ postId: postId, tagId }]);

  if (error) {
    console.log(error);
    throw new Error('An error occured.');
  }
}
