import type { NextPage } from 'next'
import {useEffect} from 'react'
import Navbar from '../components/organisms/Navbar'
import MainBanner from '../components/organisms/MainBanner'
import TransactionStep from '../components/organisms/TransactionStep'
import FeatureGame from '../components/organisms/FeatureGame'
import Reached from '../components/organisms/Reached'
import Story from '../components/organisms/Story'
import Footer from '../components/organisms/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Home: NextPage = () => {
  useEffect(() => {
     AOS.init();
   }, [])
  return (
    <>
    
    <Navbar />
    <MainBanner />
    <TransactionStep />
    <FeatureGame />
    <Reached />
    <Story />
    <Footer />
    
    </>
  )
}

export default Home
