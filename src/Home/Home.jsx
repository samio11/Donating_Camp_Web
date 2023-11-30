import React from 'react';
import './Bg_banner.css'

const Home = () => {
    return (
        <section>
            {/* This is bannner section */}
            <div className='h-[60vh] bg1'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div>
                        <h3 className='text-xl lg:text-3xl font-semibold'>I Grow by Helping people in Need</h3>
                        <div className='flex justify-center items-center gap-2 mt-5'>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                        <button className='btn btn-outline btn-error'>Search</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Home;