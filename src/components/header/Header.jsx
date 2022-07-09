import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Total from './Total';
import Button from '../details/Button';

const Header = () => {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <Logo />

                    <Nav />

                    <Total />

                    <Button
                        title = "Create Record"
                        classes="btn btn-outline-warning btn-lg d-none d-lg-inline-block"
                        toggle="modal"
                        modalId="#modalFormNewRecord"
                    />
                    
                </div>
            </div>
        </header>
    );
}

export default Header;