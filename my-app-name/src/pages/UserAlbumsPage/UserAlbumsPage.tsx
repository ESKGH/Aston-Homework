import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './UserAlbumsPage.module.css';

interface Album {
  id: number;
  title: string;
}

const UserAlbumsPage: React.FC = () => {
  const { id } = useParams();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className={styles.message}>Загрузка...</p>;

  return (
    <div className={styles.page}>
      <h2>Альбомы пользователя {id}</h2>
      <ul className={styles.list}>
        {albums.map((album) => (
          <li
            key={album.id}
            className={styles.albumItem}
            onClick={() => navigate(`/albums/${album.id}/photos`)}
          >
            {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAlbumsPage;

