import React, { useEffect, useRef } from 'react';
import Hero from '../Components/Hero';
import Gadgets from '../Components/Gadgets';
import GadgetContainer from '../Components/GadgetContainer';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = ({handleCarts}) => {
    console.log(handleCarts);
    const location = useLocation();
    console.log(location);
    const gadgetsRef=useRef(null);
    useEffect(()=>{
        if(location.state?.section==="gadgets"){
            gadgetsRef.current?.scrollIntoView({ behavior: "smooth" }); // Scroll to Gadgets
            // console.log('entered')
            // console.log(location.state)
        }
    },[location])
    useEffect(()=>{
        document.title='Home'
    },[])
    return (
        <div className='mb-2'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
            <Hero address='home' message='Upgrade Your Tech Accessorize with Gadget Heaven Accessories' des='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Hero>
            <div className='-translate-y-32 border-2 p-3 w-fit mx-auto rounded-3xl border-white bg-white/30'>
            <img className="w-72 lg:w-5xl lg:h-[500px] mx-auto rounded-3xl object-cover" src="/vm2.png" alt="" />
            </div>
            <GadgetContainer ref={gadgetsRef}></GadgetContainer>
        </div>
    );
};

export default Home;