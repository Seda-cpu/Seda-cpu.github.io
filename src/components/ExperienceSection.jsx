import { useTranslation } from "react-i18next";
import {motion} from "framer-motion";

function ExperienceSection() {

    const { t, i18n } = useTranslation();

    const experienceData = [
        {
            company: t("karmetalCompany"),
            position: t("karmetalPosition"),
            year: t("karmetalYear"),
            description: t("karmetalDescription"),
        },
        {
            company: t("deneyapCompany"),
            position: t("deneyapPosition"),
            year: "" + t("deneyapYear") ,
            description: t("deneyapDescription"),
        },
    ];

    return(
        <section className="max-w-7xl mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-auto bg-white dark:bg-gray-800 rounded shadow p-6 my-8"> 
            {/* <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t("experience")}</h2> */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4}}
                className="text-2xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight"
                >
                    {t("experience")}
            </motion.h2>
            <ul>
                {experienceData.map((item, idx) => (
                    <motion.li 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.35, delay: idx * 0.1 }}
                        className="mb-6">
                        <div className="text-lg font-semibold">{item.company}</div>
                        <div className="text-gray-700 dark:text-gray-300">{item.position}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{item.year}</div>
                        <div className="text-gray-600 dark:text-gray-300 mt-1">{item.description}</div>
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ExperienceSection;