import React from 'react';
import Products from '../../Products/Products';
import Section from '../../Section/Section';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Section></Section>
            <Footer></Footer>
        </div>
    );
};

export default Home;