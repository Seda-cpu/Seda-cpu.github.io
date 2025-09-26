
import sedaImg from '../assets/contact.png';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { FaRegFileArchive } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import {motion} from "framer-motion";

function ContactSection() {

    const { t } = useTranslation();

    const ContactData = [
        {
            contactId: "kircisedanur2@gmail.com",
            contactLink: "mailto:kircisedanur2@gmail.com",
            contactIcon: <MdOutlineMarkEmailUnread className='m-auto mr-2'/>
        },
        {
            contactId: "linkedin.com/in/sedanurkirci",
            contactLink: "https://www.linkedin.com/in/sedanurkirci/",
            contactIcon: <FaLinkedin className='m-auto mr-2'/>
        },
        {
            contactId: "medium.com/@kircisedanur2",
            contactLink: "https://medium.com/@kircisedanur2",
            contactIcon: <FaMediumM className='m-auto mr-2'/>
        },
        {
            contactId: "github.com/Seda-cpu",
            contactLink: "https://github.com/Seda-cpu",
            contactIcon: <FaGithub className='m-auto mr-2'/>
        },
        {
            contactId: t("kitaplarim"),
            contactLink: "https://raindrop.io/sedanur/kitaplarim-55092018",
            contactIcon: <ImBooks className='m-auto mr-2'/>
        },
        {
            contactId: t("daysAtKarmetal"),
            contactLink: "https://raindrop.io/sedanur/days-at-karmetal-56571322",
            contactIcon: <FaRegFileArchive className='m-auto mr-2'/>
        },

    ]



    return (
        <section className="max-w-7xl mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-auto bg-white dark:bg-gray-800 rounded shadow p-6 my-8">
            {/* <h2 className="text-2xl font-bold mb-0 text-gray-900 dark:text-white">{t("contactme")}</h2> */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4}}
                className="text-2xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight"
                >
                    {t("contactme")}
            </motion.h2>
            <div className="mx-auto">
                <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 pt-6 md:gap-4 md:pt-6 ">
                    <div className="shrink-0">
                        <motion.img 
                            src={sedaImg}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.4 }}
                            alt="Sedanur illustration"
                            className="h-48 w-auto md:h-80 xl:h-96 object-contain select-none"
                            draggable={false}
                            />
                    </div>

                    <div className="text-xs md:text-lg text-gray-700 dark:text-white text-center md:text-left">
                        <ul>
                            {ContactData.map((item, idx) => (
                                <motion.li 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 0.35, delay: idx * 0.1 }}
                                    className="mb-4" >
                                    <div className="font-semibold flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
                                        <span className='flex'>{item.contactIcon} <a href={item.contactLink} target="_blank">{item.contactId}</a></span>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                        
                       {/* className="font-semibold flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"> */}

                    </div>
                    
                </div>
            </div>
            
        </section>
    )
}

export default ContactSection;