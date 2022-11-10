import React from 'react';
import cs from './Header.module.css'
import {IoIosLeaf} from 'react-icons/io'

const Header = () => {
    return (
        <header>
            <nav className={cs.menu}>
                <IoIosLeaf className={cs.leaf__ico}/>
                <h1>DGree</h1>
            </nav>
        </header>
    );
};

export default Header;