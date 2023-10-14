console.log("js");

yayinlarim = ['G. Atali & S. Kırcı, “A Study of Ensemble Deep Learning Method Using Transfer Learning for Horticultural Data Classification”, Journal of Intelligent Systems Theory and Applications, 6(2):174-180,2023',
'S. Kırcı, E. Can, G. Atali, S. S. Özkan, “Derin Öğrenme ile Deri Rahatsızlıklarının Erken Teşhisi için Bir Sistem Tasarımı”, Academic Perspective Procedia, 5(3):425-432, 2022',
'G. Atali & S. Kırcı, “Real-Time Bicycle Detection with Deep Learning Network Using TensorFlow”, International Conference on Interdisciplinary Applications of Artificial Intelligence 2021 (ICIDAAI21)'];


function displayHello() {
    console.log("display");
    const icerik = document.getElementById("yayin");
    var yeniIcerik = "Yeni İçerik " + yayinlarim[0];
    icerik.innerHTML = yeniIcerik;
}

setInterval(displayHello, 5000);