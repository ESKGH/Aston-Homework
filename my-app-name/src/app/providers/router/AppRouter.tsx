import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PostPage from '../../../pages/PostsPage/PostPage';
import PostDetailPage from '../../../pages/PostDetailPage/PostDetailPage';
import UserAlbumsPage from '../../../pages/UserAlbumsPage/UserAlbumsPage';
import AlbumPhotosPage from '../../../pages/AlbumPhotosPage/AlbumPhotosPage';
import UserTodosPage from '../../../pages/UserTodosPage/UserTodosPage';
import UserPostsPage from '../../../pages/UserPostsPage/UserPostsPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/users/:id/albums" element={<UserAlbumsPage />} />
        <Route path="/albums/:id/photos" element={<AlbumPhotosPage />} />
        <Route path="/users/:id/todos" element={<UserTodosPage />} />
        <Route path="/users/:id/posts" element={<UserPostsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
