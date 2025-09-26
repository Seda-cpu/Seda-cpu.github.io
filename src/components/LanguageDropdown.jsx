
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  // { code: "de", label: "Deutsch", flag: "🇩🇪" },
];


function LanguageDropdown({ className = ""  }) {

    const { i18n } = useTranslation();
    
    const current = useMemo(
        () => (i18n.language || "en").split("-")[0],
        [i18n.language]
    );

    const onChange = (e) => {
        const next = e.target.value;
        i18n.changeLanguage(next);
        
    };

    return(
        <label className={`inline-flex items-center gap-2 ${className}`}>
            {/* <span className="sr-only">Dili değiştir</span> */}
            {/* <span aria-hidden>
                {LANGS.find(l => l.code === current)?.flag ?? "🌐"}
            </span> */}
            <select
                value={current}
                onChange={onChange}
                className="rounded-xl border px-3 py-2 text-sm bg-white shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:bg-gray-700 dark:text-gray-200"
                aria-label="Dil seçimi"
            >
                {LANGS.map((l) => (
                <option key={l.code} value={l.code}>
                    {l.flag} 
                </option>
                ))}
            </select>
        </label>
    )
}
export default LanguageDropdown;