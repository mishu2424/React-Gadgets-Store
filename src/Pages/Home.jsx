import React from 'react';
import Hero from '../Components/Hero';
import Gadgets from '../Components/Gadgets';
import GadgetContainer from '../Components/GadgetContainer';

const Home = ({handleCarts}) => {
    console.log(handleCarts);
    return (
        <div className='mb-2'>
            <Hero address='home' message='Upgrade Your Tech Accessorize with Gadget Heaven Accessories' des='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Hero>
            <div className='-translate-y-32 border-2 p-3 w-fit mx-auto rounded-3xl border-white bg-white/30'>
            <img className="w-72 lg:w-5xl lg:h-[500px] mx-auto rounded-3xl object-cover" src="/vm2.png" alt="" />
            </div>
            <GadgetContainer></GadgetContainer>
        </div>
    );
};

export default Home;