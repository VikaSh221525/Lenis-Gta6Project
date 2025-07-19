import React, { useEffect } from 'react'
import RotatingText from './components/RotatingText'
import Lenis from 'lenis'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { Navigate, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import Gta6 from './Gta6';

gsap.registerPlugin(useGSAP);

const App = () => {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });

  })

  useGSAP(() => {
    document.querySelectorAll('.elem').forEach((elem) => {
      let image = elem.querySelector('img');
      let tl = gsap.timeline();
      let xtransform = gsap.utils.random(-100, 100);

      tl
        .set(image, {
          transformOrigin: `${xtransform < 0 ? 0 : '100%'}`,
        })
        .to(image, {
          scale: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: image,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        })
        .to(elem, {
          xPercent: xtransform,
          ease: 'power4',
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        })

    })
  })

  const navigate = useNavigate();



  return (
    <Routes>
      <Route path='/' element={
      <div className="w-full bg-zinc-900 text-white">
        <div className="grid grid-cols-8 grid-rows-10 gap-2 overflow-hidden">
          <div className="elem col-span-1 row-span-1" style={{ "--r": 1, "--c": 3 }}>
            <img src="https://images.unsplash.com/photo-1706821177425-cecc34309a94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uJTIwaW1hZ2VzfGVufDB8MnwwfHx8MA%3D%3D" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 1, "--c": 7 }}>
            <img src="https://images.unsplash.com/photo-1650056200016-70c0cb987ce7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbiUyMGltYWdlc3xlbnwwfDJ8MHx8fDA%3D" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 2, "--c": 2 }}>
            <img src="https://images.unsplash.com/photo-1620274549078-11bf5291cb9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsc3xlbnwwfDJ8MHx8fDA%3D" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 2, "--c": 4 }}>
            <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fHww" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 3, "--c": 4 }}>
            <img src="https://images.unsplash.com/photo-1515463892140-58a22e37ff72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsJTIwZ2lybHN8ZW58MHwyfDB8fHww" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 3, "--c": 8 }}>
            <img src="https://images.unsplash.com/photo-1586567425693-0a5977cb6f98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsJTIwZ2lybHN8ZW58MHwyfDB8fHww" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 4, "--c": 3 }}>
            <img src="https://images.unsplash.com/photo-1658281097220-eb7672eed00b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsJTIwZ2lybHN8ZW58MHwyfDB8fHww" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 4, "--c": 4 }}>
            <img src="https://images.unsplash.com/photo-1593458778871-3c08120770e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsJTIwZ2lybHN8ZW58MHwyfDB8fHww" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 5, "--c": 2 }}>
            <img src="https://images.unsplash.com/photo-1542157585-ef20bfcce579?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1vZGVsJTIwZ2lybHN8ZW58MHwyfDB8fHww" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 5, "--c": 6 }}>
            <img src="https://images.unsplash.com/photo-1664763079262-056e908630e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1vZGVsJTIwZ2lybHN8ZW58MHwyfDB8fHww" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 6, "--c": 3 }}>
            <img src="https://images.unsplash.com/photo-1562988688-89b817b6d108?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG1vZGVsJTIwZ2lybHN8ZW58MHwyfDB8fHww" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 6, "--c": 7 }}>
            <img src="https://plus.unsplash.com/premium_photo-1661506289502-5a29a60c3f00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGtvcmVhbiUyMG1vZGVsc3xlbnwwfDJ8MHx8fDA%3D" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 7, "--c": 2 }}>
            <img src="https://images.unsplash.com/photo-1718171099833-85db3a0bacaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtvcmVhbiUyMG1vZGVsc3xlbnwwfDJ8MHx8fDA%3D" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 7, "--c": 8 }}>
            <img src="https://images.unsplash.com/photo-1690960912572-ebd856e3c7c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGtvcmVhbiUyMG1vZGVsc3xlbnwwfDJ8MHx8fDA%3D" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 8, "--c": 1 }}>
            <img src="https://images.unsplash.com/photo-1560150404-660809757afb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGtvcmVhbiUyMG1vZGVsc3xlbnwwfDJ8MHx8fDA%3D" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 8, "--c": 4 }}>
            <img src="https://images.unsplash.com/photo-1632935897206-2fe6634d6763?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxrb3JlYW4lMjBtb2RlbHN8ZW58MHwyfDB8fHww" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 9, "--c": 4 }}>
            <img src="https://images.unsplash.com/photo-1669501084883-85849ad2d40f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxrb3JlYW4lMjBtb2RlbHN8ZW58MHwyfDB8fHww" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 9, "--c": 2 }}>
            <img src="https://images.unsplash.com/photo-1606349347642-1c0440613008?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxrb3JlYW4lMjBtb2RlbHN8ZW58MHwyfDB8fHww" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 10, "--c": 3 }}>
            <img src="https://images.unsplash.com/photo-1681377629414-cc21664505f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxrb3JlYW4lMjBtb2RlbHN8ZW58MHwyfDB8fHww" alt="" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 10, "--c": 6 }}>
            <img src="https://images.unsplash.com/photo-1719398480264-c2fc42d491ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxrb3JlYW4lMjBtb2RlbHN8ZW58MHwyfDB8fHww" alt="" />
          </div>
        </div>
        <div className="w-full h-full fixed top-0 left-0 flex flex-col items-center justify-center" style={{ pointerEvents: 'none', zIndex: 10 }}>
          <h1 className="text-8xl font-bold text-white text--white">THOMAS VANCE <sup>&copy;</sup> </h1>
          <h2 className="text-white mt-2 text-lg">Make the best</h2>
        </div>
        <div className="px-20 h-screen text-center flex flex-col items-center justify-center pt-85">
          <p className="text-xl font-medium text-white">
            Thomas Vance is a visionary clothing brand redefining modern style with timeless elegance and bold individuality. Each piece is crafted to empower self-expression, blending premium materials with innovative design. Embrace confidence, creativity, and sophistication—make the best impression with Thomas Vance.
          </p>
          <button
            className="px-6 py-3 bg-purple-700 text-white w-fit rounded-lg font-semibold hover:bg-purple-800 transition cursor-pointer"
            style={{ textDecoration: 'none' }}
            onClick={()=>{
              navigate('/gta6')
              console.log("hello");
            }}
          >
            Open GTA6
          </button>
        </div>
      </div>
      } />
      <Route path='/gta6'  element= {<Gta6/>}/>
    </Routes>
  )
}

export default App