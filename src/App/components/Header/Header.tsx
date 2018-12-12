import React from 'react';
import './Header.css';

interface IProps {
    title: string;
}

const Header = (props: IProps) => {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-3">
                <a href="" className="brand-logo center">{props.title}</a>
            </div>
        </nav>
    );
};

export default Header;
