import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useState } from 'react'
import {ArrowDown} from 'lucide-react'

const Gta6 = () => {
    const [showContent, setshowContent] = useState(false);
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.to(".vi-mask-group", {
            rotate: 10,
            duration: 2,
            ease: 'power4.inOut',
            transformOrigin: '50% 50%'
        })
            .to(".vi-mask-group", {
                scale: 10,
                duration: 2,
                delay: -1.8,
                ease: 'expo.inOut',
                transformOrigin: '50% 50%',
                opacity: 0,
                onUpdate: function () {
                    if (this.progress() >= .9) {
                        document.querySelector(".svg").remove();
                        setshowContent(true);
                        this.kill();
                    }
                }

            })
    })


    return (
        <>
            <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
                <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
                    <defs>
                        <mask id='viMask'>
                            <rect width='100%' height='100%' fill='black' />
                            <g className='vi-mask-group'>
                                <text
                                    x='50%'
                                    y='50%'
                                    fontSize='250'
                                    textAnchor='middle'
                                    fill='white'
                                    dominantBaseline='middle'
                                    fontFamily='Arial Black'
                                >
                                    VI
                                </text>
                            </g>
                        </mask>
                    </defs>

                    <image
                        href='./bg.png'
                        width='100%'
                        height='100%'
                        preserveAspectRatio='xMidYMid slice'
                        mask='url(#viMask)' />

                </svg>
            </div>

            {showContent && <div className='main w-full '>
                <div className='w-full h-screen bg-zinc-900 text-white pricedown'>
                    <div className="navbar w-full py-10 px-10 absolute top-0 left-0 z-10">
                        <div className='logo flex items-center-safe gap-5'>
                            <div className='lines flex flex-col gap-1'>
                                <div className='w-12 h-1 bg-white'></div>
                                <div className='w-8 h-1 bg-white'></div>
                                <div className='w-5 h-1 bg-white'></div>
                            </div>
                            <h3 className='text-4xl -mt-1'>ROCKSTAR</h3>
                        </div>
                    </div>
                    <div className='imagesdiv w-full overflow-hidden h-screen relative'>
                        <img className='w-full h-full object-cover absolute top-0 left-0' src="./sky.png" alt="" />
                        <img className='w-full h-full object-cover absolute top-0 left-0' src="./bg.png" alt="" />
                        <div className="text absolute top-10 left-1/2 -translate-x-1/2 ">
                        <h1 className='text-8xl leading-none -ml-10'>grand</h1>
                        <h1 className='text-8xl ml-15 leading-none'>theft</h1>
                        <h1 className='text-8xl leading-none -ml-10'>auto</h1>
                    </div>
                        <img className='absolute h-170 -bottom-[22%] left-1/2 -translate-x-40' src="./girlbg.png" alt="" />
                    </div>
                    <div className='bottomnav absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent'>
                        <div className='flex gap-4'>
                            <ArrowDown size={30}/>
                            <h3 className='font-sans text-xl'>Scroll Down</h3>
                        </div>
                        <img className='h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./ps5.png" alt="" />
                    </div>
                    
                </div>
            </div>
            }
        </>
    )
}

export default Gta6