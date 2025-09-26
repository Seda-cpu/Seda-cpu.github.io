import React from "react"
import sedaImg from '../assets/character.png';
import { useTranslation } from "react-i18next";

function PortfolioHero ({title = t("portfolio")}) {

    const {t, i18n} = useTranslation();

    const styleMap = [
        { r: -6, y: 0 }, // P
        { r: 3, y: 5 }, // O
        { r: -4, y: 0 }, // R
        { r: 8, y: -6 }, // T 
        { r: -5, y: -2 },// F
        { r: 4, y: 8 }, // O
        { r: -3, y: 0 }, // L
        { r: 6, y: -4 }, // I
        { r: -4, y: 6 }, // O
    ];

   
    const letters = title.split("");
 
    
    return (

        <section className="w-full bg-white pt-10 dark:bg-gray-800">
            <div className="mx-auto ">
                <div className="flex flex-row items-center justify-center gap-6 pt-8 md:gap-4 md:pt-14">
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
                        <h1 className="flex flex-wrap items-end gap-1 font-extrabold tracking-tight text-neutral-900 select-none dark:text-white"
                            aria-label={title}> 
                            
                                {letters.map((ch, i) => {
                                    const cfg = styleMap[i] || { r: 0, y: 0 };
                                    const isTall = i === 3 ; 
                                    return (
                                        <span
                                            key={i}
                                            className={[
                                                "inline-block leading-none",
                                                isTall
                                                ? "text-[8vw] sm:text-[10vw] md:text-[11vw] lg:text-[9vw]" 
                                                : "text-[6.5vw] sm:text-[8vw] md:text-[9vw] lg:text-[8vw]", 
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

                        <h2 className="mt-6 max-w-md text-left text-lg font-medium leading-snug text-gray-700 md:mt-4 md:text-left md:text-xl dark:text-gray-300"> 
                            {t("title")}
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default PortfolioHero