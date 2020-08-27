import React, { Component } from 'react'
import './NavBar.css'

export default class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            display: false
        }
        this.handleSlide = this.handleSlide.bind(this)
    }

    handleSlide() {
        this.setState({
            display: !this.state.display
        })
    }

    render() {
        return (
            <section className='header'>
                <div className='navbar'>
                    <div className='logo'>
                        <img src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' alt='start bootstrap logo' />
                    </div>
                    <div className='navbar-icon' onClick={this.handleSlide}>Menu &#9776;</div>
                    <div className='link-side'>
                        <button className='nav'>SERVICES</button>
                        <button className='nav'>PORTFOLIO</button>
                        <button className='nav'>ABOUT</button>
                        <button className='nav'>TEAM</button>
                        <button className='nav'>CONTACT</button>
                    </div>
                    <div className={this.state.display ? 'dropdown' : 'hidden'}>
                        <button className='nav'>SERVICES</button>
                        <button className='nav'>PORTFOLIO</button>
                        <button className='nav'>ABOUT</button>
                        <button className='nav'>TEAM</button>
                        <button className='nav'>CONTACT</button>
                    </div>
                </div>
            </section>
        )
    }
}