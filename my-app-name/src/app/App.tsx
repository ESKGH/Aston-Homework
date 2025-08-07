// import { useState } from 'react'
import MainLayout from '../shared/layouts/MainLayout';
import Header from '../widgets/LayoutHeader/Header';
import Footer from '../widgets/LayoutFooter/Footer';
import PostList from '../widgets/PostList/PostList';
import './App.css'

function App() {

   return (
    <MainLayout
      header={<Header />}
      footer={<Footer />}
    >
      <PostList />
    </MainLayout>
  );
}

export default App
