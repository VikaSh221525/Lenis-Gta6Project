import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'

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

    useGSAP(() => {
        if (!showContent) return;

        gsap.to('.main', {
            rotate: 0,
            scale: 1,
            delay: '-1',
            duration: 2,
            ease: 'expo.inOut'
        })
        gsap.to('.sky', {
            rotate: 0,
            scale: 1.1,
            delay: '-0.8',
            duration: 2,
            ease: 'expo.inOut'
        })
        gsap.to('.bg', {
            rotate: 0,
            scale: 1.1,
            delay: '-0.8',
            duration: 2,
            ease: 'expo.inOut'
        })
        gsap.to('.text', {
            rotate: 0,
            scale: 1,
            delay: '-0.8',
            duration: 2,
            ease: 'expo.inOut'
        })
        gsap.to('.character', {
            bottom: '-22%',
            rotate: 0,
            delay: '-0.8',
            duration: 2,
            ease: 'expo.inOut'
        })

        const main = document.querySelector(".main");
        main?.addEventListener('mousemove', function (e) {
            const xmove = (e.clientX / window.innerWidth - 0.5) * 40;
            gsap.to(".imagesdiv .text", {
                x: `${xmove * 0.4}%`
            })
            gsap.to(".imagesdiv .sky", {
                x: xmove
            })
            gsap.to(".imagesdiv .bg", {
                x: xmove * 1.7
            })

        })
    }, [showContent])

    useEffect(() => {
        if (showContent) {
            const audio = new Audio('/gta.mp3');
            audio.loop = true;
            audio.play();
        }
    }, [showContent]);


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

            {showContent && <div className='main w-full text-white -rotate-10 scale-[1.7]'>
                <div className='Landing overflow-hidden relative w-full h-screen bg-zinc-900 text-white pricedown'>
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
                        <img className='sky w-full h-full object-cover absolute top-0 left-0 scale-[1.7] -rotate-20' src="./sky.png" alt="" />
                        <img className='bg w-full h-full object-cover absolute top-0 left-0 scale-[1.8] -rotate-3' src="./bg.png" alt="" />
                        <div className="text absolute top-10 left-1/2 -translate-x-1/2 scale-[1.4] -rotate-10">
                            <h1 className='text-8xl leading-none -ml-10'>grand</h1>
                            <h1 className='text-8xl ml-15 leading-none'>theft</h1>
                            <h1 className='text-8xl leading-none -ml-10'>auto</h1>
                        </div>
                        <img className='character absolute h-170 -bottom-[40%] left-1/2 -translate-x-40 -rotate-10' src="./girlbg.png" alt="" />
                    </div>
                    <div className='bottomnav absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent'>
                        <div className='flex gap-4'>
                            <ArrowDown size={30} />
                            <h3 className='font-sans text-xl'>Scroll Down</h3>
                        </div>
                        <img className='h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./ps5.png" alt="" />
                    </div>

                </div>

                <div className='w-full h-screen px-10 bg-zinc-900 flex items-center justify-between'>
                    <div className='box w-full h-[80%] flex'>
                        <div className='limg w-1/2 h-full relative'>
                            <img className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-170' src="./imag.png" alt="" />
                        </div>
                        <div className='rg pricedown w-1/2 flex flex-col gap-10'>
                            <div>
                                <h1 className='text-7xl '>Still Running</h1>
                                <h1 className='text-7xl '>Not Hunting</h1>
                            </div>
                            <p className='font-sans w-[80%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis dolorum ratione accusantium modi pariatur doloribus dignissimos deserunt ipsam ut autem eaque, enim dolores explicabo? Aliquam harum sit quisquam dolores dolorem, suscipit neque ipsam, eveniet ullam provident facere laudantium quaerat et. Necessitatibus incidunt maxime sapiente tempora exercitationem perferendis quisquam officia soluta.</p>
                            <p className='font-sans w-[80%] '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis dolorum ratione accusantium modi pariatur doloribus dignissimos deserunt ipsam ut autem eaque, enim dolores explicabo? </p>
                            <button className='bg-yellow-500 text-black py-4 px-3 text-xl w-fit'>Download Now</button>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Gta6