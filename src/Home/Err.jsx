import React from 'react';
import Error from '../../public/Error.json'
import Lottie from 'lottie-react';

const Err = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
           <Lottie animationData={Error} className='w-[60%] h-[50%]'/>
        </div>
    );
};

export default Err;