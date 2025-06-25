import React from 'react';
import Title from '../layout/Title';
import Card from './Card';

function Features(props) {
    return (
        <section 
         id='features' 
         className='w-full  py-20 items-center border-b-[1px] border-b-black'>
            <Title title="Features" des= "What i do" />
            <div className='grid grid-cols-3 gap-20'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
                        
        </section>
    
    );
}

export default Features;