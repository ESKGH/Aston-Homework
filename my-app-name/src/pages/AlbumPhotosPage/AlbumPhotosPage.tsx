import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './AlbumPhotosPage.module.css';

interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
}

const AlbumPhotosPage: React.FC = () => {
  const { id } = useParams();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className={styles.message}>Загрузка...</p>;

  return (
    <div className={styles.page}>
      <h2>Фотографии альбома {id}</h2>
      <div className={styles.grid}>
        {photos.map((photo) => (
          <div key={photo.id} className={styles.photoCard}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumPhotosPage;