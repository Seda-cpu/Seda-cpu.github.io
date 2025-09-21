import React from "react"
import sedaImg from '../assets/character.png';

function PortfolioHero ({title = "PORTFOLIO"}) {

    const styleMap = [
        { r: -6, y: 0 }, // P
        { r: 3, y: 5 }, // O
        { r: -4, y: 0 }, // R
        { r: 8, y: -6 }, // T (taller vibe)
        { r: -5, y: -2 },// F
        { r: 4, y: 8 }, // O
        { r: -3, y: 0 }, // L
        { r: 6, y: -4 }, // I
        { r: -4, y: 6 }, // O
    ];

   

    
    const letters = title.split("");
 
    
    return (
        <section className="relative w-full bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse items-center justify-center gap-6 py-8 md:flex-row md:items-center md:gap-4 md:py-14">
                    {/* character */}
                    <div className="shrink-0">
                        <img 
                            src={sedaImg}
                            alt="Sedanur illustration"
                            className="h-64 w-auto md:h-80 xl:h-96 object-contain select-none"
                            draggable={false}
                            />
                    </div>
                    
                    {/* text */}
                    <div className="mt-[-10vw]">
                        <h1 className="flex flex-wrap items-end gap-1 font-extrabold tracking-tight text-neutral-900 select-none"
                            aria-label={title}> 
                            
                                {letters.map((ch, i) => {
                                    const cfg = styleMap[i] || { r: 0, y: 0 };
                                    const isTall = i === 3 ; // make the "T" visually taller like the mockup
                                    return (
                                        <span
                                            key={i}
                                            className={[
                                                // base size responsive
                                                "inline-block leading-none",
                                                isTall
                                                ? "text-[20vw] sm:text-[16vw] md:text-[12vw] lg:text-[10vw]"
                                                : "text-[18vw] sm:text-[14vw] md:text-[10vw] lg:text-[9vw]",
                                                ].join(" ")}
                                            style={{
                                            transform: `rotate(${cfg.r}deg) translateY(${cfg.y}px)`,
                                            transformOrigin: "50% 60%",
                                            }}
                                            >
                                                {ch}
                                        </span>
                                    );
                                })}
                        </h1>

                        <h2 className="mt-2 max-w-md text-center text-lg font-medium leading-snug text-gray-700 md:mt-4 md:text-left md:text-xl">
                            Robotics software engineer, designer, and lifelong learner
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )


}


export default PortfolioHero