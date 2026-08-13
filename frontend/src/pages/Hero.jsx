import dots from "../util/dots";

function Dots(dotsArr=dots) {
    return (
        <div>
            {dots.map((dot, count) => (
                <div key={count} className={`${dot.position} ${dot.left} 
                ${dot.top} ${dot.size}`}>
                    
                </div>
            ))}
        </div>
    );
}

export default function Hero() {
    return (
        <div className="relative w-2/3 h-auto">
            
        </div>
    );
}