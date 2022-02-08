// bor random
function getpilbot1() {
    const bot = Math.random();
    if (bot < 0.34) return "batu";
    if (bot >= 0.34 && bot < 0.67) return "kertas";
    return "gunting";
  }
function getpilbot2() {
    const bot = Math.random();
    if (bot < 0.34) return "kertas";
    if (bot >= 0.34 && bot < 0.67) return "batu";
    return "gunting";
  }
  
  // fungsi dari hasil
  function gethasil(bot1, bot2) {
    let hasil = "";
    if (bot1 == bot2) return "seri";
    if (bot1 == "batu") return bot2== "gunting" ? "bot 1 menang" : "bot 2 menang";
    if (bot1 == "kertas") return bot2 == "batu" ? "bot 1 menang" : "bot 2 menang";
    if (bot1 == "gunting") return bot2 == "kertas" ? "bot 1 menang" : "bot 2 menang";
  }
  
  // pemberian score
  let bot1 = 0;
  let bot2 = 0;
  function getscore(hasil) {
    if (hasil == "seri") {
      (bot1 = bot1), (bot2= bot2);
    }
    if (hasil == "bot 1 menang") {
      bot1 = bot1 + 1;
    }
    if (hasil == "bot 2 menang") {
      bot2 =bot2 + 1;
    }
      const k = document.querySelector(".Bot1");
      k.innerHTML = "Bot1:" + bot1;
      const o = document.querySelector(".Bot2");
      o.innerHTML = "Bot2:" + bot2;
      
  }
  
  
  
  // animation loading/putar
  function loading1() {
    const imgbot = document.querySelector(".pilbot1");
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

  function loading2() {
    const imgbot = document.querySelector(".pilbot2");
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
  const select = document.querySelector(".mulai");
    select.addEventListener("click", function () {
      const pilbot1 = getpilbot1();
      const pilbot2 = getpilbot2();
      //   console.log(pilbot);
      //   console.log(pilp);
  
      const hasil = gethasil(pilbot1, pilbot2);
      
     
      
  
      // fungsi loading/putar
      loading1();
      loading2();
      
      // selesai fungsi putar
  
      setTimeout(() => {
        const imgbot1 = document.querySelector(".pilbot1");
        imgbot1.setAttribute("src", "img/" + pilbot1 + ".png");

        const imgbot2 = document.querySelector(".pilbot2");
        imgbot2.setAttribute("src", "img/" + pilbot2 + ".png");
  
        const hasilnya = document.querySelector(".info");
        hasilnya.innerHTML = hasil;
  
        // functiom dari get score
        getscore(hasil);
        // akhir fungsi get score
  
  
      // console.log(hasil)
    },1000);
  });
  

  