import { useGetPostsQuery } from '../../../../entities/post/api/postsApi';

const usePosts = () => {
  const { data: posts = [], isLoading } = useGetPostsQuery();
  return { posts, isLoading };
};

export default usePosts;
