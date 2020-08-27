import React, { Component } from 'react'
import './First.css'

export default class First extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className='body'>
                    <div className='text-content'>
                        <h2 className='sub-header'>Welcome To Our Studio!</h2>
                        <h1 className='header'>it's nice to meet you</h1>
                        <button className='info-link'>tell me more</button>
                    </div>
                </div>
            </div>
        )
    }
}