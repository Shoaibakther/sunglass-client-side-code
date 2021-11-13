import React from 'react';
import Products from '../../Products/Products';
import Section from '../../Section/Section';
import BuyerReview from '../BuyerReview/BuyerReview';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Section></Section>
            <BuyerReview></BuyerReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;