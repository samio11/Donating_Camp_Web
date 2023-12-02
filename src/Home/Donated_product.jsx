import React from 'react';
import { Link } from 'react-router-dom';

const Donated_product = ({ product }) => {
    const { picture, card_bg, category, text_color, category_bg, title, price, id } = product
    return (
        <div className='flex justify-center mt-5 h-[200px]' style={{ backgroundColor: `${card_bg}` }}>
            <div className='flex-1'>
                <img src={picture} className='h-[200px]' alt="" />
            </div>

            <div className='flex-1 space-y-3'>
                <div className='mt-4'>
                    <span className='ml-3 p-2 rounded-lg' style={{ backgroundColor: `${category_bg}`, color: `${text_color}` }}>{category}</span>
                </div>
                <h3 className='ml-3 text-xl font-semibold'>{title}</h3>
                <p className='ml-3' style={{ color: `${text_color}` }}>${price}.00</p>
                <Link to={`/${id}`}>
                    <button className='ml-3 mt-3 p-2 rounded-xl text-white' style={{ backgroundColor: `${text_color}` }}>View Details</button>
                </Link>
            </div>

        </div>
    );
};

export default Donated_product;