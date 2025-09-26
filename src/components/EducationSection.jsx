import { useTranslation } from "react-i18next";

function EducationSection() {

    const { t, i18n } = useTranslation();


    const educationData = [
        {
            school: t("lisansSchool"),
            department: t("lisansDepartment"),
            gano: t("lisansGano"),
            year: t("lisansYear"),
        },
        {
            school: t("yuksekLisansSchool"),
            department: t("yuksekLisansDepartment"),
            year: t("yuksekLisansYear"),
        },
    ];

    return (
        <section className="max-w-7xl mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-auto bg-white dark:bg-gray-800 rounded shadow p-6 my-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t("education")}</h2>
            <ul>
                {educationData.map((item, idx) => (
                    <li key={idx} className="mb-4">
                        <div className="text-lg font-semibold">{item.school}</div>
                        <div className="text-gray-700 dark:text-gray-300">{item.department} <span className="text-gray-950 dark:text-gray-300"> , {item.gano}</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{item.year}</div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default EducationSection;