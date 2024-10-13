import React, {Suspense} from 'react'
import {PerspectiveCamera} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader.jsx";
import HackerRoom from "../components/HackerRoom.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.ts";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Ring from "../components/Ring.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {

    const isSmall =useMediaQuery( {maxWidth: 440});
    const isMobile =useMediaQuery( {maxWidth: 768});
    const isTablet =useMediaQuery( {minWidth: 768, maxWidth:1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Md Robiul Islam Shuvo <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building Your Web Presence, Scaling Your Business Success.</p>
            </div>

            <div className="w-full h-full absolute inset-0 mt-20 sm:mt-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        {/* To hide controller */}
                        <PerspectiveCamera makeDefault position={[0, 0, 25]}/>

                            <HeroCamera isMobile={isMobile}>
                                <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition}
                                            rotation={[0.1, -Math.PI, 0]}/>
                            </HeroCamera>

                        <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition}/>
                            <Ring position={sizes.ringPosition}/>
                        </group>

                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>

                <div className='absolute bottom-6 left-0 right-0 w-full z-10 c-space '>
                    <a href="#contact" className='w-fit'>
                        <Button name="Let's work Together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"></Button>
                    </a>
                </div>
            </div>


        </section>
    )
}
export default Hero
