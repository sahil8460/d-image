import React from 'react';
import { AppProps } from 'next/app';
import '../styles/global.scss'
import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/Header';
import SidePanel from '@/components/SidePanel';
import Footer from '@/components/Footer';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <div className="layout">
        <Header />
        <div className="main">
          <SidePanel />
          <div className="content">
            <Component {...pageProps} />
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default MyApp;