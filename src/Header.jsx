import React from 'react'
import logo from './Images/MASKLogo v2.jpg'

export default function Header() {
    return (
   
        <div className="container-fluid header bg-light-gray">
            <div className="headerCon">
                <img src={logo} alt="logo"/>
                <h1 className="text-center">Keep Note</h1>
            </div>
        </div>
    )
}
