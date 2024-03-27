import { usePost } from '../features/posts/usePost';
import { PostWithTags } from '../types/types';

import BlogLayout from '../ui/BlogLayout';
import PostSuggestions from '../features/posts/PostSuggestions';
import Post from '../features/posts/Post';

function PostPage() {
  const { post, isPending } = usePost() as { post: PostWithTags; isPending: boolean };

  return (
    <BlogLayout>
      <Post post={post} isPending={isPending} />
      <PostSuggestions />
    </BlogLayout>
  );
}

export default PostPage;
