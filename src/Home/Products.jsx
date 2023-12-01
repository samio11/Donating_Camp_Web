import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ product }) => {
    const { button_color, card_bg, category, category_bg, picture, text_color, title,id } = product || {}
    return (
        <div>
            <Link to={`/${id}`}>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={picture} alt="Shoes" className='h-[250px] w-full' /></figure>
                    <div className="card-body" style={{ backgroundColor: `${card_bg}` }}>
                        <div className='w-full flex justify-start'>
                            <h3 className='p-3 rounded-md font-semibold' style={{ backgroundColor: `${category_bg}`, color: `${text_color}` }}>{category}</h3>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold' style={{ color: `${text_color}` }}>{title}</h2>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Products;