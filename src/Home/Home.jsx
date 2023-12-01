import React from 'react';
import './Bg_banner.css'
import { useLoaderData } from 'react-router-dom';
import Products from './Products';

const Home = () => {
    const loadData = useLoaderData();
  
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5'>
                {
                    loadData?.map(product => <Products key={product.title} product={product}></Products>)
                }
            </div>
        </section>
    );
};

export default Home;