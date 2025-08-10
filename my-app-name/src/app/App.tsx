import { useState } from 'react'
import MainLayout from '../shared/layouts/MainLayout';
import Header from '../widgets/LayoutHeader/Header';
import Footer from '../widgets/LayoutFooter/Footer';
import PostList from '../widgets/PostList/PostList';
import ThemeProvider from '../shared/lib/theme/ThemeProvider';
import { Modal } from '../shared/ui/Modal/Modal';
import './App.css'


function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <ThemeProvider>
      <MainLayout header={<Header onOpenModal={openModal} />} footer={<Footer />}>
        <PostList />
      </MainLayout>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>О проекте</h2>
        <p>Данный проект является интелектуальной собственностью Aston. Указанный в футере автор лишь создаёт его в рамках учебной программы. </p>
      </Modal>
    </ThemeProvider>
  );
}

export default App;