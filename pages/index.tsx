import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';

const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCardClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className={styles.gridContainer} style={{ backgroundColor: theme.body, color: theme.text }}>
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i} className={styles.box} style={{ backgroundColor: theme.body, color: theme.text }} onClick={() => handleCardClick("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThsdnpzcmdrNGNlZmcxMXhlaWM0NDJhazRvcnBlNWowcTVpbHk1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QNk6jCXXEbCIU/giphy.gif")}>
            <Image layout="responsive" sizes='100vw' className={styles.gifs} height={0} width={0} src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThsdnpzcmdrNGNlZmcxMXhlaWM0NDJhazRvcnBlNWowcTVpbHk1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QNk6jCXXEbCIU/giphy.gif" alt="spider" ></Image>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className={styles.modal}>
          <span className={styles.close} onClick={handleClose}>&times;</span>
          <div className={styles.imageContainer}>
            <Image
              className={styles.fullScreenImage}
              src={selectedImage}
              height={0} width={0}
              sizes='100vw'
              alt="Selected"
              layout="responsive"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;