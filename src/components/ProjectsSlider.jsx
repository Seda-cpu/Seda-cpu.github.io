import Slider from "react-slick";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import palletposeImg from '../assets/palletpose.png';
import servantWImg from '../assets/servantw.png';
import qrImg from '../assets/qr.png';
import kfmImg from '../assets/kfm.png';
import fersahImg from '../assets/fersah.png';
import omnibotImg from '../assets/omnibot.png';
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
  

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
        <FaAngleRight color="gray" size={28}/>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block", zIndex: 2 }} onClick={onClick}> 
        <FaAngleLeft color="gray" size={28}/>
    </div>
  );
}


function ProjectsSlider() {

  const [slidesToShow, setSlidesToShow] = useState(3);
  const { t } = useTranslation();

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setSlidesToShow(w < 768 ? 1 : w < 1024 ? 2 : 3);
    };
    calc(); // ilk mount'ta doğru değeri ver
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const projectsData = [
    {
      title: t("servantTTitle"),
      description: t("servantTDescription"),
      details: t("karmetaldeGerceklestirilmistir"),
      link: "https://www.karmetal.com.tr/products/16/mobil-otonom-robotlar.html",
      image: palletposeImg
    },
    {
      title: t("servantWTitle"),
      description: t("servantWDescription"),
      link: "https://www.karmetal.com.tr/products/16/mobil-otonom-robotlar.html",
      details: t("karmetaldeGerceklestirilmistir"),
      image: servantWImg
    },
    {
      title: t("qrTitle"),
      description: t("qrDescription"),
      details: t("karmetaldeGerceklestirilmistir"),
      link: "https://www.karmetal.com.tr/products/16/mobil-otonom-robotlar.html",
      image: qrImg
    },
    {
      title: t("KFMTitle"),
      description: t("KFMDescription"),
      details: t("karmetaldeGerceklestirilmistir"),
      link: "#",
      image: kfmImg
    },
    {
      title: t("fersahTitle"),
      description: t("fersahDescription"),
      details: t("teknofestIcinGerceklestirilmistir"),
      link: "https://rotasam.subu.edu.tr/tr/fersah",
      image: fersahImg
    },
    {
      title: t("omnibotTitle"),
      description: t("omnibotDescription"),
      link: "https://github.com/Seda-cpu/3WD_OMNI_ROBOT",
      image: omnibotImg
    }
];

  

  return (
    <div className="slider-container max-w-l mx-auto">
      <Slider key={slidesToShow} {...settings}>
        {projectsData.map((project, idx) => (
          <div className="px-2" key={idx}>
            <div className="p-5 bg-gray-200 dark:bg-gray-700 rounded-xl flex flex-col items-start justify-between h-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded mb-4"
                draggable={false}
              />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-blue-600 dark:text-blue-400 underline"
              >
                {t("formore")}
              </a>
              <p className="text-xs italic text-gray-600 dark:text-gray-400">{project.details}</p>

            </div>
          </div>
          
        ))}
      </Slider>
    </div>
  );
}

export default ProjectsSlider;