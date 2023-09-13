import React from 'react';
import logo from '../../../public/image/img_path_logo_medium.png'
export default function ApplicationLogo({ className }) {
    return (
        <img src={ logo } style={{height:50, width:'100%'}}/>
    );
}
