import { useEffect, useState } from 'react';

export interface Post {
  id: number;
  title: string;
  body: string;
}

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      });
  }, []);

  return { posts, isLoading };
};

export default usePosts;
