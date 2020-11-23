import React from 'react';

export const Footer = () => {

    return (
        <div className="footer">
           © copyright {(new Date().getFullYear())}
        </div>
    )
}