import { useTranslation } from "react-i18next"; 
import { AiOutlineExport } from "react-icons/ai";
import { Link } from "react-router-dom";

function PublicationsSection() {

    const { t, i18n } = useTranslation();   

    const publicationsData = [
        {
            writer:"G. Atali & S. Kırcı",
            title: "Real-Time Bicycle Detection with Deep Learning Network Using TensorFlow",
            conference: "International Conference on Interdisciplinary Applications of Artificial Intelligence 2021 (ICIDAAI'21)",
            link: "https://www.researchgate.net/publication/354691567_Real-Time_Bicycle_Detection_with_Deep_Learning_Network_Using_TensorFlow"
        },
        {
            writer:"S. Kırcı, E. Can, G. Atali, S. S. Özkan",
            title: t("MelanomaTitle"),
            journal: "Academic Perspective Procedia",
            volume: "5(3)",
            pages: "425-432",
            year: "2022",
            link: "https://www.researchgate.net/publication/365272249_Derin_Ogrenme_ile_Deri_Rahatsizliklarinin_Erken_Teshisi_icin_Bir_Sistem_Tasarimi"
        },
        {
            writer:"G. Atali & S. Kırcı",
            title: "A Study of Ensemble Deep Learning Method Using Transfer Learning for Horticultural Data Classification",
            journal: "Journal of Intelligent Systems Theory and Applications",
            volume: "6(2)",
            pages: "174-180",
            year: "2023",
            link: "https://www.researchgate.net/publication/373342043_A_Study_of_Ensemble_Deep_Learning_Method_Using_Transfer_Learning_for_Horticultural_Data_Classification_Bitki_Siniflandirmasi_icin_Transfer_Learning_Kullanilarak_Topluluk_Ogrenmesi_Metodu_Uzerine_Bir_C"    
        },
        {
            writer:"Kirci, S., & Atali, G.",
            title: "EuroPallet Detection with RGB-D Camera Based on Deep Learning",
            journal: "The European Journal of Research and Development",
            volume: "3(4)",
            pages: "55–65",
            year: "2023",
            link: "https://journals.orclever.com/ejrnd/article/view/341"    
        },  
        {
            writer:"Kirci, S., Birgul, U., & Atali",
            title: t("TDATitle"),
            conference: "ÜSİMP R&D and Design Centers Symposium, 2024",
            link: "https://www.usimp.org.tr/uploads/UPF24/usimp_2024_bildiri_kitabi.pdf"
        },
        {
            writer:"Kirci, S., Birgul, U., & Atali, G.",
            title:" A Multi-Functional Web Control Interface for Industrial Autonomous Mobile Robot Fleets",
            journal: "The European Journal of Research and Development",
            volume: "4(4)",
            pages: "101–109",
            year: "2024",
            link: "https://journals.orclever.com/ejrnd/article/view/517"      
        }
    ];

    return (
        <section className="max-w-7xl mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-auto bg-white dark:bg-gray-800 rounded shadow p-6 my-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t("publications")}</h2>


            <ul>
                {publicationsData.map((item, idx) => (
                    <li key={idx} className="mb-4">
                        <div className="text-lg font-semibold">{item.title}</div>
                        <div className="text-gray-700 dark:text-gray-300"> {/* text-sm text-gray-500 dark:text-gray-400 */}
                            {item.conference ? (
                                <span>{item.conference}</span>
                            ) : (
                                <span>
                                    {item.journal}, {item.volume}, {item.pages}, {item.year}
                                </span>
                            )}
                        </div>
                        <Link
                            to={item.link}
                            target="_blank"
                            rel="noopener noreferrer">
                                <button className="flex items-center px-3 py-2 rounded-xl border bg-white shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"> <AiOutlineExport className="mr-2"/> {t("ShowPublication")} </button>

                        </Link>
                    
                    </li>   
                ))}
            </ul>

            
        </section>
    )
}


export default PublicationsSection;