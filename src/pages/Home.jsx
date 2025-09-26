
import PortfolioHero from "../components/PortfolioHero"
import EducationSection from "../components/EducationSection"
import ExperienceSection from "../components/ExperienceSection";
import { useTranslation } from "react-i18next";
import PublicationsSection from "../components/PublicationsSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import HighlightsSection from "../components/HighlightsSection";

function Home() {

    const { t, i18n } = useTranslation();

    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <PortfolioHero title={t("portfolio")} />
            <ExperienceSection />
            <EducationSection />
            <PublicationsSection />
            <ProjectsSection />
            {/* <HighlightsSection /> */}
            <SkillsSection />
            <ContactSection /> 
        </div>
    )
}

export default Home;