import { motion } from "framer-motion";
import { view } from "framer-motion/client";
import { useTranslation } from "react-i18next";






function Card({item}){
    
    const span = item.span || "md:col-span-1 xl:col-span-4";

    return (
        <motion.article 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-20%" }}
            className={`${span} col-span-1`}
            >
                <figure className="overflow-hidden rounded-3lg shadow-sm ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-neutral-900">
seda
                </figure>

        </motion.article>
    )
}


function HighlightsSection() {

    const { t, i18n } = useTranslation();



    const itemsData = [
        {

        }
    ]
    return(
        <section className="max-w-7xl mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-auto bg-white dark:bg-gray-800 rounded shadow p-6 my-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t("highlights")}</h2>
            
            HIGHLIGHT SECTION

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 sm:gap-6 lg:gap-8">
                {itemsData.map((item, idx) => (
                    <Card key={idx} item={item} />
                ))}
            </div>
            
        </section>
    )

}

export default HighlightsSection;