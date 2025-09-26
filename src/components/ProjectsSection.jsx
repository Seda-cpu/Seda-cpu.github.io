import Slider from "react-slick";
import ProjectsSlider from "./ProjectsSlider";
import { useTranslation } from "react-i18next";


function ProjectsSection() {
    
    const { t } = useTranslation();
    
    return(
        <section className="max-w-7xl mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-auto bg-white dark:bg-gray-800 rounded shadow p-6 my-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t("projects")}</h2>
            
            <ProjectsSlider />
            
        </section>
    )
}

export default ProjectsSection;