import React from 'react';
import { Navbar } from '../Components';

const Family = () => {
    return (
        <div className='body'>
        <Navbar />
        <div className="navStyle">
            <img src="./images/kids.jpg" alt="" className='familyImg'/>
            <p className="textStyle">
                This could be my kids, its not. 
                But i have as the picture two little ones, 
                a little boy and a two year older girl.</p>
        </div>
      </div>
    );
}

export default Family;
