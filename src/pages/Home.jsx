import React,{useLayoutEffect} from 'react'
import Header from '../components/Header';
import GetStarted from '../components/GetStarted';
import Carousel from '../components/CarouselPage';
import GetInTouch from '../components/GetInTouch';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
    return () => {
      if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
      }
    };
  }, [pathname]);
  return (
    <>
    <Header />
    <GetStarted />
    <Carousel/>
    <GetInTouch />
    </>

  )
}

export default Home