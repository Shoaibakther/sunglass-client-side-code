import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../Images/photo/banner-06_980x700_crop_center.jpg'
import './Section.css'
const Section = () => {
    return (
        <div className="section">
            <div className="image">
                <img src={photo} alt="" />
            </div>
            <div className="title">
                <h1>Sale OFF 20% all products</h1>
                <p>Our store is more than just another average online retailer. We sell not only top quality products, but give our customers a positive online shopping experience.</p>
                <Link to="/explore"><Button>Shop Now</Button></Link>
            </div>
        </div>
    );
};

export default Section;