import type { NextPage } from 'next';
import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import TransactionStep from '../components/organisms/TransactionStep';
import FeatureGame from '../components/organisms/FeatureGame';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import Footer from '../components/organisms/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>StoreGG - Get Started</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta property="og:title" content="StoreGG - Get Started" />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta property="og:image" content="https://www.imageurl" />
        <meta property="og:url" content="https://www.storegg.com/" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeatureGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
};

export default Home;
