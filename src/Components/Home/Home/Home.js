import React from 'react';
import Products from '../../Products/Products';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;