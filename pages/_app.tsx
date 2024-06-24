import React from 'react';
import { AppProps } from 'next/app';
import '../styles/global.scss'
import '../styles/globals.css'
import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/Header';
import SidePanel from '@/components/SidePanel';
import Footer from '@/components/Footer';
import { useMedia } from 'use-media';
import { TimeProvider } from '@/context/TimeContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const isMobile = useMedia({maxWidth: '426px'});

  return (
    <ThemeProvider>
      <TimeProvider>
      <div className="layout">
        <Header />
        <div className="main">
          {!isMobile && <SidePanel />}
          <div className="content">
            <Component {...pageProps} />
          </div>
        </div>
        <Footer />
      </div>
      </TimeProvider>
    </ThemeProvider>
  );
};

export default MyApp;