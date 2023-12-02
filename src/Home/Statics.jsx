import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const Statics = () => {

    const [data, setData] = useState([])
    const [totalAllData, setTotalAll] = useState(0);
    const [loadDataTotal, setLoadDataAll] = useState(0);


    const localTotal = JSON.parse(localStorage.getItem('item'));
    useEffect(() => {
        const t1 = localTotal?.reduce((pre, current) => pre + current.price, 0)
        setTotalAll(t1)
    }, [localTotal])
    console.log(totalAllData);

    useEffect(() => {
        fetch('./Data.json')
            .then(req => req.json())
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        const t2 = data?.reduce((pre2, current2) => pre2 + current2.price, 0)
        setLoadDataAll(t2)
    }, [data])
    console.log(data)
    console.log(loadDataTotal)

    const data01 = [
        { name: 'Donated', value: totalAllData},
        { name: 'Avilable For Donate', value: loadDataTotal},
    ];
    return (
        <div className='w-full h-[700px]'>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statics;