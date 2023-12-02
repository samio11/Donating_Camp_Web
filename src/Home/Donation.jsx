import React, { useEffect, useState } from 'react';
import Donated_product from './Donated_product';

const Donation = () => {
    const [noFound, setnoFound] = useState(false)
    const [donated, setDonated] = useState([])
    useEffect(() => {
        const saveData = JSON.parse(localStorage.getItem('item'))
        if (saveData) {
            setDonated(saveData)
        }
        else {
            setnoFound("No Data Found")
        }
    }, [])
    return (
        <div>
            {
                noFound ? <p>{noFound}</p> : <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                   {
                    donated.map(p2 => <Donated_product key={p2.id} product={p2}></Donated_product>)
                   }
                </div>
            }
        </div>
    );
};

export default Donation;