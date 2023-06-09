import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const[prices,setPrices]=useState([]);
    useEffect(()=>{
        fetch('prices.json')
        .then(res=>res.json())
        .then(data=>setPrices(data));
    },[])
    return (
        <div>
            <h2 className='text-5xl text-center text-blue-900 bg-blue-400 font-bold p-2 my-4'>Awesome affordable prices</h2>
            <div className='md:grid md:grid-cols-3 gap-3'>
            {
                prices.map(price=><PriceCard
                key={price.id}
                price={price}
                ></PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;