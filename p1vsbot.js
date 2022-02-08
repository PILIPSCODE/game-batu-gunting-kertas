// bor random
function getpilbot() {
  const bot = Math.random();
  if (bot < 0.34) return "batu";
  if (bot >= 0.34 && bot < 0.67) return "kertas";
  return "gunting";
}

// fungsi dari hasil
function gethasil(pbot, orang) {
  let hasil = "";
  if (orang == pbot) return "seri";
  if (orang == "batu") return pbot == "gunting" ? "menang" : "Kalah";
  if (orang == "kertas") return pbot == "batu" ? "menang" : "Kalah";
  if (orang == "gunting") return pbot == "kertas" ? "menang" : "Kalah";
}

// pemberian score
let scp = 0;
let sck = 0;
function getscore(hasil) {
  if (hasil == "seri") {
    (scp = scp), (sck = sck);
  }
  if (hasil == "menang") {
    scp = scp + 1;
  }
  if (hasil == "Kalah") {
    sck = sck + 1;
  }
    const k = document.querySelector(".bot");
    k.innerHTML = "Bot:" + sck;
    const o = document.querySelector(".p1");
    o.innerHTML = "P1:" + scp;
    
}



// animation loading/putar
function loading() {
  const imgbot = document.querySelector(".com");
  const gambar = ["batu", "gunting", "kertas"];
  let i = 0;
  const mulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - mulai > 1000) {
      clearInterval;
      return;
    }
    imgbot.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}



// seleksi hasil menang/kalah
const select = document.querySelectorAll("li img");
select.forEach(function (e) {
  e.addEventListener("click", function () {
    const pilbot = getpilbot();
    const pilp = e.className;
    //   console.log(pilbot);
    //   console.log(pilp);

    const hasil = gethasil(pilbot, pilp);
    
   
    

    // fungsi loading/putar
    loading();
    // selesai fungsi putar

    setTimeout(() => {
      const imgbot = document.querySelector(".com");
      imgbot.setAttribute("src", "img/" + pilbot + ".png");

      const hasilnya = document.querySelector(".info");
      hasilnya.innerHTML = hasil;

      // functiom dari get score
      getscore(hasil);
      // akhir fungsi get score

    }, 1000);

    // console.log(hasil)
  });
});

// versi no efektif
// const pbatu = document.querySelector(".batu");
// pbatu.addEventListener("click", function () {
//   const pilbot = getpilbot();
//   const pilp = pbatu.className;
// //   console.log(pilbot);
// //   console.log(pilp);
// const hasil = gethasil(pilbot,pilp)
// // console.log(hasil)
// const imgbot = document.querySelector('.img-komputer');
// imgbot.setAttribute('src', 'img/' + pilbot + ".png")

// const hasilnya = document.querySelector('.info');
// hasilnya.innerHTML =hasil;
// });

// const pkertas = document.querySelector(".kertas");
// pkertas.addEventListener("click", function () {
//   const pilbot = getpilbot();
//   const pilp = pkertas.className;
// //   console.log(pilbot);
// //   console.log(pilp);
// const hasil = gethasil(pilbot,pilp)
// // console.log(hasil)
// const imgbot = document.querySelector('.img-komputer');
// imgbot.setAttribute('src', 'img/' + pilbot + ".png")

// const hasilnya = document.querySelector('.info');
// hasilnya.innerHTML =hasil;
// });

// const pgunting = document.querySelector(".gunting");
// pgunting.addEventListener("click", function () {
//   const pilbot = getpilbot();
//   const pilp = pgunting.className;
// //   console.log(pilbot);
// //   console.log(pilp);
// const hasil = gethasil(pilbot,pilp)
// // console.log(hasil)
// const imgbot = document.querySelector('.img-komputer');
// imgbot.setAttribute('src', 'img/' + pilbot + ".png")

// const hasilnya = document.querySelector('.info');
// hasilnya.innerHTML =hasil;
// });
