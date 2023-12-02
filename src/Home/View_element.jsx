import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const View_element = () => {
    const load1 = useLoaderData();
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        const phone = load1.find(p1 => p1.id == id)
        setData(phone)
    }, [load1, id])
    const { picture, price, title, description } = data
    console.log(data)
    const saveLocal = () => {
        console.log('button clicked')
        const arr1 = [];
        const donate = JSON.parse(localStorage.getItem('item'));
        if (!donate) {
            arr1.push(data);
            localStorage.setItem('item', JSON.stringify(arr1))
            toast("🛒Added To Donate Section");
        }
        else {
            const isExist = donate.find(p1 => p1.id == id);
            if (isExist) {
                toast("⛔Cant Added Twice in DOnate Section");
            }
            else {
                arr1.push(...donate, data)
                localStorage.setItem('item', JSON.stringify(arr1))
                toast("🛒Added To Donate Section");
            }
        }
    }

    return (
        <div>
            <div className='w-full h-[70vh] relative'>

                <img src={picture} className='w-full h-full' alt="" />
                <div className='w-full h-[70px] absolute bottom-0 left-0 bg-transparent shadow-xl flex justify-start items-center'>
                    <button onClick={()=>saveLocal()} className='btn btn-error ml-4 p-5 text-white'>Donate $ {price}</button>
                </div>
                <ToastContainer />

            </div>
            <div className='my-5'>
                <h3 className='text-xl lg:text-3xl font-semibold'>{title}</h3>
            </div>
            <div className='my-4'>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default View_element;