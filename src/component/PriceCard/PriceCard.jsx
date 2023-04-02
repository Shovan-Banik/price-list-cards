import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-slate-400 rounded-lg mt-4 p-4'>
           <div className='text-center'>
           <h2>
                <span  className='text-blue-900 text-5xl font-extrabold '>{price.price}</span>
                <span className='text-2xl font-bold text-white'>/month</span>
            </h2>
            <h4 className='text-2xl font-bold  my-2'>{price.name}</h4>
           </div>
            <p className='text-white font-bold underline'>Features:</p>
                {
                    price.features.map((feature,index)=><Feature
                    feature={feature}
                    key={index}
                    ></Feature>)
                }
                <button className='w-full bg-black text-white rounded-lg p-2 hover:bg-slate-900 hover:text-yellow-200'>Buy now</button>
        </div>
    );
};

export default PriceCard;