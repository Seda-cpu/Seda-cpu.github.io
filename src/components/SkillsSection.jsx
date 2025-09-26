
import { useTranslation } from "react-i18next";
import {motion} from "framer-motion";
import { Code2, Database, Cpu, Wrench } from "lucide-react";





function Pill({ children }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -2 }}
      className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium
                 border-neutral-200 bg-white text-neutral-700 shadow-sm
                 dark:border-neutral-700 dark:bg-gray-800 dark:text-neutral-200"
    >
      {children}
    </motion.span>
  );
}



function SkillsSection() {
    
    const { t, i18n } = useTranslation();

    const skillsData = {
        "Robotics/AI": {
            icon: <Cpu className="size-4" />,
            items: [
            "ROS/ROS2", "C++", "OpenCV", "PCL", "TF/Nav2",
            ],
        },
        Frontend: {
            icon: <Code2 className="size-4" />,
            items: [
            "React", "JavaScript", "Tailwind", "Three.js/R3F", "Framer Motion",
            ],
        },
        Backend: {
            icon: <Database className="size-4" />,
            items: [
            "Node.js", "Express", "REST API", "MySQL", "Auth/JWT",
            ],
        },
        
        Tools: {
            icon: <Wrench className="size-4" />,
            items: [
            "Git/GitHub", "Docker", "Linux",
            ],
        },
    };
    
    return (

        <section className="max-w-7xl mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-auto bg-white dark:bg-gray-800 rounded shadow p-6 my-8">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4}}
                className="text-2xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight"
                >
                    {t("skills")}
            </motion.h2>

            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {Object.entries(skillsData).map(([cat, data]) => (
                <motion.div
                    key={cat}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-gray-900"
                >
                    <div className="mb-3 flex items-center gap-2">
                    <span className="opacity-80">{data.icon}</span>
                    <h3 className="text-sm font-semibold tracking-tight">{cat}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                    {data.items.map((item) => (
                        <Pill key={item}>{item}</Pill>
                    ))}
                    </div>
                </motion.div>
                ))}
            </div>


        </section>
    )    
}


export default SkillsSection;