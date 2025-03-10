import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface CustomLinkProps {
    type: 'nav' | 'default';
    to: string;
    children: React.ReactNode;
    className?: string;
}
const CustomLink: React.FC<CustomLinkProps> = ({ type, to, children, className}) => {

    const style = {
        textDecoration: 'none'
    }

    if(type === 'nav') {
        return <NavLink to={to} style={style} className={({ isActive }) => `${isActive ? 'active-link' : ''} ${className ?? ""}`}>{children}</NavLink>
    }

    return <Link to={to} style={style} className={className}>{children}</Link>
};

export default CustomLink;