import dots from "../util/dots";
import { useState } from "react";

function Dots({ dotsArr = dots }) {
    const [hovered, setHovered] = useState(null);

    return (
        <>
            <div className="absolute top-0 left-0 w-screen h-screen backdrop-blur-[2px] bg-white/0 z-10"></div>
            <div className="absolute inset-0">
                <div className="relative w-full h-full overflow-hidden">
                    {dotsArr.map((dot, count) => (
                        <div key={count}
                            className={`${dot.position} ${dot.left} 
                            ${dot.top} ${dot.size} ${dot.colour} 
                            ${dot.rounded} flex justify-center items-center`}
                            onMouseEnter={() => setHovered(count)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {hovered === count && <h1>BOOP</h1>}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Dots;