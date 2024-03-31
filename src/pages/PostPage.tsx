import BlogLayout from '../ui/BlogLayout';
import PostSuggestions from '../features/posts/PostSuggestions';
import Post from '../features/posts/Post';

function PostPage() {
  return (
    <BlogLayout>
      <Post />
      <PostSuggestions />
    </BlogLayout>
  );
}

export default PostPage;
