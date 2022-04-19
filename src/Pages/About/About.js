import React from 'react';
import aboutimg from '../../image/about/images.png'
const About = () => {
    return (
        <div id='home' className='w-50 mt-5 mb-5 mx-auto d-block'>
            <div className='mx-auto d-block text-center'>
            <img className='w-50'  src={aboutimg} alt="" />
            <p className='text-primary '><span>MD: Robius Sani Raju</span></p>
            </div>
            <div className=' text-muted text-center'>
                <h2>international lawyers consultation</h2>
                <p>It is a platform for legal advice,
Here, experts in various fields of law advise on any domestic or international issue,
InshaAllah I will make this platform suitable for further development</p>
            </div>
        </div>
    );
};

export default About;