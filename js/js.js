console.log("js");

yayinlarim = ['G.Atali & S.Kırcı,“A Study of Ensemble Deep Learning Method Using Transfer Learning for Horticultural Data Classification”,Journal of Intelligent Systems Theory and Applications,6(2):174-180,2023',
            'S. Kırcı, E. Can, G. Atali, S. S. Özkan, “Derin Öğrenme ile Deri Rahatsızlıklarının Erken Teşhisi için Bir Sistem Tasarımı”, Academic Perspective Procedia, 5(3):425-432,2022',
            'G.Atali & S.Kırcı,“Real-Time Bicycle Detection with Deep Learning Network Using TensorFlow”, International Conference on Interdisciplinary Applications of Artificial Intelligence(ICIDAAI21)'];

linkleri = ['https://www.researchgate.net/publication/373342043_A_Study_of_Ensemble_Deep_Learning_Method_Using_Transfer_Learning_for_Horticultural_Data_Classification_Bitki_Siniflandirmasi_icin_Transfer_Learning_Kullanilarak_Topluluk_Ogrenmesi_Metodu_Uzerine_Bir_C',
            'https://www.researchgate.net/publication/365272249_Derin_Ogrenme_ile_Deri_Rahatsizliklarinin_Erken_Teshisi_icin_Bir_Sistem_Tasarimi',
        'https://www.researchgate.net/publication/354691567_Real-Time_Bicycle_Detection_with_Deep_Learning_Network_Using_TensorFlow']


var currentIndex = 0;

function sonrakiYayiniGöster() {

    var element = document.getElementById("yayin_div_koyu"); // Replace with your selector
    if (element) {
        element.remove();
    }
    var yayin_div = document.getElementById("yayin");
    const yayin_div_koyu = document.createElement("div");
    yayin_div_koyu.className = "yayin_div_koyu";
    yayin_div_koyu.id = "yayin_div_koyu";
    yayin_div.appendChild(yayin_div_koyu);

    const a_href = document.createElement("a");
    a_href.href = linkleri[currentIndex];
    a_href.className = "a_href";
    yayin_div_koyu.appendChild(a_href);

    const p = document.createElement("p");
    p.style.marginLeft = "5px";
    p.style.marginTop = "5px";
    p.style.marginBottom = "0px";
    a_href.appendChild(p);
    p.innerHTML = yayinlarim[currentIndex]; 

    
    console.log(yayinlarim[currentIndex]);
    currentIndex = (currentIndex + 1) % yayinlarim.length;
}

setInterval(sonrakiYayiniGöster, 3000); 