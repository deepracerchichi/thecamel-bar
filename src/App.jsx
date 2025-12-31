import React from 'react'
import {ScrollTrigger, SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
import {gsap} from "gsap";

const App = () => {
    return (
        <div className="flex-center h-[100vh] bg-black">
            <h1 className="flex-center text-indigo-300 h-[100vh]"> Hello GSAP!</h1>
        </div>
    )
}
export default App
