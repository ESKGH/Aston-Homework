import { useMemo, useState } from 'react';
import MainLayout from '../shared/layouts/MainLayout';
import Header from '../widgets/LayoutHeader/Header';
import Footer from '../widgets/LayoutFooter/Footer';
import ThemeProvider from '../shared/lib/theme/ThemeProvider';
import { Modal } from '../shared/ui/Modal/Modal';
import PostList, { type Post } from '../widgets/PostList/PostList';
import { withLoading } from '../shared/lib/hoc/withLoading';
import { filterByLength } from '../features/PostLengthFilter/lib/filterByLength';
import PostLengthFilter from '../features/PostLengthFilter/ui/PostLengthFilter';
import CommentList from '../widgets/CommentList/ui/CommentList';
import './App.css';
import Button from '../shared/ui/Button/Button';

const PostListWithLoading = withLoading(PostList);

const allPosts: Post[] = [
  { id: 1, title: '1 пост', content: 'Hello, 1 World!' },
  { id: 2, title: 'Пост 22', content: 'Hello, 2 World!.' },
  { id: 3, title: 'Очень длинный заголовок поста', content: 'Hello, 3 World!' },
  { id: 4, title: 'Короткий', content: 'Hello, 4 World!' },
  { id: 5, title: 'Не сильно длинный', content: 'Hello, 5 World!' },
  { id: 6, title: 'Не очень сильно длинный', content: 'Hello, 5 World!' },
  { id: 7, title: 'Не слишком сильно длинный', content: 'Hello, 5 World!' },
  { id: 8, title: 'Не супер сильно длинный', content: 'Hello, 5 World!' },
];

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [minLength, setMinLength] = useState(0);
  const [isLoading] = useState(false); 

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const filteredPosts = useMemo(
    () => filterByLength(allPosts, minLength),
    [minLength]
  );

  return (
    <ThemeProvider>
      <MainLayout header={<Header onOpenModal={openModal} />} footer={<Footer />}>
  <div className="content">
    <div className="postsSection">
      <PostLengthFilter value={minLength} onChange={setMinLength} />
      <PostListWithLoading isLoading={isLoading} posts={filteredPosts} />
    </div>
    <aside className="commentsSection">
      <CommentList />
    </aside>
  </div>
</MainLayout>

     <Modal isOpen={isModalOpen} onClose={closeModal}>
  <Modal.Header>О проекте</Modal.Header>
  <Modal.Body>
    <p>
      Данный проект является учебным примером, созданным в рамках программы Aston для FrontEnd разработчиков.
      В этой версии были реализованы:
      <ul>
        <li>1. Модальное окно с compound components</li>
        <li>2. Фильтрация постов по длине заголовка</li>
        <li>3. Свертывание/разворачивание комментариев</li>
        <li>4. Оптимизация через HOC и хуки</li>
      </ul>
    </p>
    <p>
      Версия: 0.0.3
    </p>
  </Modal.Body>
  <Modal.Footer>
    <Button onClick={closeModal}>Закрыть</Button>
  </Modal.Footer>
</Modal>
    </ThemeProvider>
  );
}

export default App;
