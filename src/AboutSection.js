import React, { Component } from 'react';
import imgDark from './images/image-about-dark.jpg';
import imgLight from './images/image-about-light.jpg';
import './AboutSection.css';

class AboutSection extends Component {
    render() {
        return (
            <div className="AboutSection">
                <div className="AboutSection__card">
                    <div className="AboutSection__card--wrapper"><img src={imgDark} alt="about dark" /></div>
                    <div className="AboutSection__card--body">
                        <h4 className="AboutSection__card--title">About our furniture</h4>
                        <p className="AboutSection__card--description">Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
                    </div>
                </div>
                <div>
                    <img src={imgLight} alt="about light" />
                </div>
            </div>
        );
    }
}

export default AboutSection;
