import React, { Component } from 'react';
import hamburger from './images/icon-hamburger.svg';
import close from './images/icon-close.svg';
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen : false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    toggle() {
        this.setState((state) => {
          return {isOpen: !state.isOpen};
        });
    }

    handleClick() {
        this.toggle();
    }

    render() {
        const icon = this.state.isOpen ? close : hamburger;
        return (
            <nav className="NavBar">
                <div className="NavBar__brand">
                    <button className="NavBar__hamburger" onClick={this.handleClick}>
                        <span><img src={icon} alt="hamburger" /></span>
                    </button>
                    <a href="#">room</a>
                </div>
                <div className={this.state.isOpen ? 'NavBar__items active' : 'NavBar__items'}>
                    <a href="#">home</a>
                    <a href="#">shop</a>
                    <a href="#">about</a>
                    <a href="#">contact</a>
                </div>
            </nav>
        );
    }
}

export default NavBar;
