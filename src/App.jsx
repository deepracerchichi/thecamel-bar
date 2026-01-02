import React from 'react'
import NavBar from "./components/NavBar.jsx";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import gsap from "gsap"
import {Hero} from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
    return (
        <main>
         <NavBar />
         <Hero />
         <Cocktails />
        </main>
    )
}
export default App
