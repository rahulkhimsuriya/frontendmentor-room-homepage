import React, { Component } from 'react';
import './Slide.css';

class Slide extends Component {   
    render() {
        const {title, description, imgSrc, url} = this.props.slide;
        return (
            <div className="Slide">
                <div className="Slide__wraper">
                    <img src={imgSrc} alt={title} className="Slide__image" />
                </div>
                <div className="Slide__body">
                    <h2 className="Slide__body--title">{title}</h2>
                    <p className="Slide__body--description">{description}</p>
                    <a href={url} className="Slide__body--button">
                        Shop Now
                        <span>
                            <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="currentColor" /></svg>
                        </span>
                    </a>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Slide;
