import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import { IoPlay } from "react-icons/io5";
import { TimeContext } from '@/context/TimeContext';

const convertTimeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  return (hours * 60 + minutes) * 60;
};

const convertMinutesToTime = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes % 60);
  const seconds = Math.floor((totalMinutes * 60) % 60);

  const hoursString = hours > 0 ? `${String(hours).padStart(2, '0')}:` : '';
  const minutesString = String(minutes).padStart(2, '0');
  const secondsString = String(seconds).padStart(2, '0');

  return `${hoursString}${minutesString}:${secondsString}`;
};

const Modal = ({ selectedCard, handleClose, handleFinish }: any) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [displayText, setDisplayText] = useState(false);
  const requireTime = selectedCard?.totalTime;

  const beforeFinish = () => {
    setDisplayText(true);
    setTimeout(() => {
      handleFinish();
      setDisplayText(false);
    }, 1000);
  }

  useEffect(() => {
    if (currentTime < requireTime) {
      const timer = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 0.1);
      }, 100);

      return () => clearInterval(timer); // Cleanup interval on component unmount or when time reaches total time
    } else {
      beforeFinish();
    }
  }, [currentTime, requireTime]);

  return (
    <div className={styles.modal}>
      <span className={styles.close} onClick={handleClose}>&times;</span>
      <div className={styles.imageContainer}>
          <Image
            className={styles.fullScreenImage}
            src={selectedCard?.src}
            height={0} width={0}
            sizes='100vw'
            alt="Selected"
            layout="responsive"
            style={{ position: 'relative', filter: displayText ? "blur(8px)" : ""}}
          />
          {!displayText && <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700" style={{ position: 'absolute', bottom: 0, background: 'transparent', height: '4px' }}>
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(currentTime / requireTime) * 100 > 100 ? 100 : (currentTime / requireTime) * 100}%`, height: '4px', opacity: "60%", transition: "width .1s linear" }}></div>
          </div>}
      </div>
      {displayText && <div className='d-flex items-center justify-center absolute text-white' style={{ fontSize: '35px' }}>Ready For The Next Ride</div>}
    </div>
  )
}

const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const [animateData, setAnimateData] = useState(
    [
      {
        id: 1,
        src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThsdnpzcmdrNGNlZmcxMXhlaWM0NDJhazRvcnBlNWowcTVpbHk1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QNk6jCXXEbCIU/giphy.gif",
        totalTime: 0,
      },
      {
        id: 2,
        src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThsdnpzcmdrNGNlZmcxMXhlaWM0NDJhazRvcnBlNWowcTVpbHk1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QNk6jCXXEbCIU/giphy.gif",
        totalTime: 0,
      },
      {
        id: 3,
        src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThsdnpzcmdrNGNlZmcxMXhlaWM0NDJhazRvcnBlNWowcTVpbHk1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QNk6jCXXEbCIU/giphy.gif",
        totalTime: 0,
      },
      {
        id: 4,
        src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThsdnpzcmdrNGNlZmcxMXhlaWM0NDJhazRvcnBlNWowcTVpbHk1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QNk6jCXXEbCIU/giphy.gif",
        totalTime: 0,
      },
      {
        id: 5,
        src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThsdnpzcmdrNGNlZmcxMXhlaWM0NDJhazRvcnBlNWowcTVpbHk1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QNk6jCXXEbCIU/giphy.gif",
        totalTime: 0,
      },
      {
        id: 6,
        src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThsdnpzcmdrNGNlZmcxMXhlaWM0NDJhazRvcnBlNWowcTVpbHk1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QNk6jCXXEbCIU/giphy.gif",
        totalTime: 0,
      },
      {
        id: 7,
        src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThsdnpzcmdrNGNlZmcxMXhlaWM0NDJhazRvcnBlNWowcTVpbHk1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QNk6jCXXEbCIU/giphy.gif",
        totalTime: 0,
      },
      {
        id: 8,
        src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThsdnpzcmdrNGNlZmcxMXhlaWM0NDJhazRvcnBlNWowcTVpbHk1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QNk6jCXXEbCIU/giphy.gif",
        totalTime: 0,
      },
      {
        id: 9,
        src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThsdnpzcmdrNGNlZmcxMXhlaWM0NDJhazRvcnBlNWowcTVpbHk1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QNk6jCXXEbCIU/giphy.gif",
        totalTime: 0,
      },
    ]
  )
  const { time } = useContext(TimeContext);
  
  useEffect(() => {
    if(time){
      const tempAnimateData = JSON.parse(JSON.stringify(animateData));
      const totalTime = convertTimeToMinutes(time) / animateData.length;
      setAnimateData(tempAnimateData.map((animateDetails: any) => ({ ...animateDetails, totalTime })))
    }
  }, [time, JSON.stringify(animateData)])

  const handleCardClick = (cardDetail: any) => {
    setSelectedCard(cardDetail);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  const handlePlayInitiate = () => {
    setSelectedCard(animateData[0]);
  }

  const handleFinish = () => {
    const currentCard = animateData.findIndex((cards) => selectedCard.id === cards.id);
    if(currentCard !== animateData.length){
      setSelectedCard(animateData[currentCard + 1])
    }else{
      setSelectedCard(null);
    }
  }

  return (
    <div>
      <div className={styles.gridContainer} style={{ backgroundColor: theme.body, color: theme.text }}>
        {animateData.map(animate => (
          <div key={animate?.id} className={styles.box} style={{ backgroundColor: theme.body, color: theme.text }} onClick={() => handleCardClick(animate)}>
            <Image layout="responsive" sizes='100vw' className={styles.gifs} height={0} width={0} src={animate.src} alt="spider" ></Image>
            <div className={styles.timeContainer} style={{ background: 'rgba(0,0,0,0.6)' }}>{convertMinutesToTime(animate?.totalTime ? (animate?.totalTime / 60) : 0)}</div>
          </div>
        ))}
      </div>
      {selectedCard && (
        <Modal key={selectedCard?.id} selectedCard={selectedCard} handleClose={handleClose} handleFinish={handleFinish} />
      )}
      <button className='play-button' style={{ backgroundColor: theme.header }}><IoPlay onClick={handlePlayInitiate} className='text-white' size={20} /></button>
    </div>
  );
};

export default Home;