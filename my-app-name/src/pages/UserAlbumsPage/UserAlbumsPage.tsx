/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import UserTabs from '../../widgets/UserTabs/UserTabs';
import styles from './UserAlbumsPage.module.css';
import { albumsApi } from '../../entities/albums/api/albumsApi';

type Album = {
  id: number;
  title: string;
};

const UserAlbumsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = id ? Number(id) : null;

  const { data: albums, isLoading, isError } = albumsApi.useGetUserAlbumsQuery(userId!, {
    skip: !userId,
  });

  if (!userId) return <p className={styles.message}>Некорректный пользователь</p>;
  if (isLoading) return <p className={styles.message}>Загрузка…</p>;
  if (isError) return <p className={styles.message}>Ошибка загрузки альбомов</p>;

  return (
    <div className={styles.page}>
      <UserTabs userId={userId} />
      <h2>Альбомы пользователя {userId}</h2>
      <ul className={styles.list}>
        {albums?.map((album) => (
          <li key={album.id} className={styles.item}>
            {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAlbumsPage;
