import React, { Component } from 'react';
import Slide from './Slide'
import './Slider.css';

class Slider extends Component {
    static defaultProps = {
        slides: [
            {
                id: 1, 
                title: 'Discover innovative ways to decorate', 
                description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
                imgSrc: require('./images/desktop-image-hero-1.jpg'),
                url: '#'
            },
            {
                id: 2,
                title: 'We are available all across the globe',
                description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
                imgSrc: require('./images/desktop-image-hero-2.jpg'),
                url: '#'
            },
            {
                id: 3,
                title: 'Manufactured with the best materials',
                description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
                imgSrc: require('./images/desktop-image-hero-3.jpg'),
                 url: '#'
            },
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            currentSlide : 0,
        };
        this.handlePreSlide = this.handlePreSlide.bind(this);
        this.handleNextSlide = this.handleNextSlide.bind(this);
    }

    handlePreSlide() {
        const currentSlide = this.state.currentSlide;
        const slide = currentSlide === 0 ? this.props.slides.length - 1 : currentSlide - 1;
        this.setState(() => ({ currentSlide: slide }));
    }

    handleNextSlide() {
        const currentSlide = this.state.currentSlide;
        const slide = currentSlide === this.props.slides.length - 1 ? 0 : currentSlide + 1;
        this.setState(() => ({ currentSlide: slide }));
    }

    render() {
        return (
            <div className="Slider">
                <Slide slide={this.props.slides[this.state.currentSlide]}>
                    <div className="Slider__buttons">
                        <button className="Slider__button" onClick={this.handlePreSlide}>
                            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd"/></svg>
                        </button>
                        <button className="Slider__button" onClick={this.handleNextSlide}>
                            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd"/></svg>
                        </button>
                    </div>
                </Slide>
            </div>
        );
    }
}

export default Slider;
