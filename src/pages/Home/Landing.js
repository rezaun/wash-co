import React from 'react';
import BucketGirl from '../../assets/images/bucketgirl.png'

const Landing = () => {
    return (
        <>
            <div className="hero h-screen lg:h-[60vh] bg-accent relative mt-16">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <p className='text-xl'>Best Quality</p>
                        <h1 className="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p className="py-6 max-w-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <img src={BucketGirl} className="h-full" />
                    </div>
                </div>
            </div>
            <div className='shadow-lg p-10 rounded-2xl bg-base-200 mx-auto mt-[-50px] relative z-20  w-5/6'>
                <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
                <div className='grid grid-cols-1 md-grid-cols-2 lg:grid-cols-4 gap-4'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-5'>REQUEST A QOUTE</button>
            </div>
        </>
    );
};

export default Landing;