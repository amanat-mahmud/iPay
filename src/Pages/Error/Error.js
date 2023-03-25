import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../assests/error/error.jpg'
const Error = () => {
    return (
        <div>
            <img src={errorImg} alt="error"/>
            <div className='bg-white text-center pb-10'>
            <button className="btn"><Link to='/'>Back to home</Link></button>
            </div>
        </div>
    );
};

export default Error;