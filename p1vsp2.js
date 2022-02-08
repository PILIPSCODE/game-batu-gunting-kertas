const btn = document.querySelector('.mulai');
btn.addEventListener('click', function() {

let p1 = "";

Swal.fire({
  title: "Player 1 pilih salah satu",
  confirmButtonText: "batu",
  cancelButtonText: "gunting",
  denyButtonText: "kertas",
  showCancelButton: true,
  showDenyButton: true,
  cancelButtonColor:'blue',
  confirmButtonColor:'blue',
  denyButtonColor:'blue',
}).then((result) => {
  if (result.isConfirmed) {
    p1 = "batu";
  } else if (result.isDenied) {
    p1 = "kertas";
  } else {
    p1 = "gunting";
  }

  let p2 = Swal.fire({
    title: "Player 2 pilih salah satu",
    confirmButtonText: "batu",
    cancelButtonText: "gunting",
    denyButtonText: "kertas",
    showCancelButton: true,
    showDenyButton: true,
    cancelButtonColor:'blue',
  confirmButtonColor:'blue',
  denyButtonColor:'blue',
  })
  .then((result) => {
    if (result.isConfirmed) {
      p2 = "batu";
    } else if (result.isDenied) {
      p2 = "kertas";
    } else {
      p2 = "gunting";
    }

    let timerInterval;
    Swal.fire({
      title: "Sabar sedang di seleksi",
      html: "tunggu sebentar <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
      const pilp1 = p1;
      const pilp2 = p2;
      const hasil = gethasil(pilp1, pilp2);

      const p1dd = document.querySelector(".pl1");
      p1dd.setAttribute("src", "img/" + pilp1 + ".png");
      const p2dd = document.querySelector(".pl2");
      p2dd.setAttribute("src", "img/" + pilp2 + ".png");
      const hasilnya = document.querySelector(".info");
      hasilnya.innerHTML = hasil;
      
      getscore(hasil);
    });
  });
});
})

function gethasil(p1, p2) {
  let hasil = "";
  if (p1 == p2) return "seri";
  if (p1 == "batu") return p2 == "gunting" ? "P1 menang" : "P2 menang";
  if (p1 == "kertas") return p2 == "batu" ? "P1 menang" : "P2 menang";
  if (p1 == "gunting") return p2 == "kertas" ? "P1 menang" : "P2 menang";
}
let p1 = 0;
let p2 = 0;
function getscore(hasil) {
  if (hasil == "seri") {
    (p1 = p1), (p2 = p2);
  }
  if (hasil == "P1 menang") {
    p1 = p1 + 1;
  }
  if (hasil == "P2 menang") {
    p2 = p2 + 1;
  }
    const k = document.querySelector(".p1");
    k.innerHTML ="P1:" + p1;
    const o = document.querySelector(".p2");
    o.innerHTML ='P2:' + p2;
    
}