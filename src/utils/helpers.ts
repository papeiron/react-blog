import supabase, { supabaseUrl } from '../services/supabase';

import { createRelation } from '../services/apiPosts';
import { addTags } from '../services/apiTags';

import { format, parseISO } from 'date-fns';

export const dateFormatter = (date: string) => {
  return format(parseISO(date), 'dd/MM/yyyy HH:mm:ss');
};

export const secondDateFormatter = (date: string) => {
  return format(parseISO(date), 'MMMM d, yyyy');
};

export async function imageUploadHandler(image: File) {
  const imageName = `${Math.random()}-${image.name}`.replaceAll('/', '');

  const { error } = await supabase.storage.from('post-images').upload(imageName, image);

  if (error) throw new Error('An error occurred while uploading the image.');

  const imageUrl = `${supabaseUrl}/storage/v1/object/public/post-images/${imageName}`;

  return imageUrl;
}

export function toTop() {
  window.scrollTo(0, 0);
}

export async function uploadFakeData({ post, tags }: { post: any; tags: string[] }) {
  let addedTags = await addTags(tags);

  console.log(post);
  console.log(addedTags);

  const { data: addedPost, error } = await supabase.from('posts').insert([post]).select();
  if (error) {
    console.log(error);
    throw new Error('An error occured.');
  }

  for (let addedTag of addedTags) {
    console.log(' ');
    createRelation({ postId: addedPost[0].id, tagId: addedTag.id });
  }
}

export function countWords(markdownText: string) {
  const cleanText = markdownText.replace(/(#|\*|_|!|\[|\]|<([^>]+)>)/g, '').replace(/\n/g, ' ');
  const words = cleanText.trim().split(/\s+/);

  const wordsPerMinute = 200;
  const readingTime = Math.ceil(words.length / wordsPerMinute);

  return readingTime;
}
