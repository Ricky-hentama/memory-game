$(document).ready(function() {
  let TerKlik = null;
  let klikSebelumnya = false;
  let kartuCocok = 0;

  const semuaNama = [
    "ricky",
    "janu",
    "umar",
    "reza",
    "purno",
    "fuad",
    "gani",
    "adit"
  ];

  const kartu = [...$(".kartu")];
  for (let nama of semuaNama) {
    const kartuA_index = parseInt(Math.random() * kartu.length);
    const kartuA = kartu[kartuA_index];
    kartu.splice(kartuA_index, 1);
    kartuA.className += ` ${nama}`;
    kartuA.setAttribute("data-nama", nama);

    const kartuB_index = parseInt(Math.random() * kartu.length);
    const kartuB = kartu[kartuB_index];
    kartu.splice(kartuB_index, 1);
    kartuB.className += ` ${nama}`;
    kartuB.setAttribute("data-nama", nama);
  }

  $(".kartu").click(function(e) {
    const target = e.currentTarget;
    if (
      klikSebelumnya ||
      target === TerKlik ||
      target.className.includes("done")
    ) {
      return;
    }
    target.className = target.className.replace("color-hidden", "").trim();
    target.className += " done";
    console.log(target.getAttribute("data-nama"));

    if (!TerKlik) {
      TerKlik = target;
      //jika tidak ada kartu yg di klik ,tetap tampilkan gambar
    } else if (TerKlik) {
      //jika ada kartu yg diklik, cek apakah kartu selanjutnya sama atau tidak
      klikSebelumnya = true;
      if (
        TerKlik.getAttribute("data-nama") !== target.getAttribute("data-nama")
      ) {
        klikSebelumnya = true;
        setTimeout(() => {
          TerKlik.className =
            TerKlik.className.replace("done", "").trim() + " color-hidden";
          target.className =
            target.className.replace("done", "").trim() + " color-hidden";
          TerKlik = null;
          klikSebelumnya = false;
        }, 500);
      } else {
        kartuCocok++;
        TerKlik = null;
        klikSebelumnya = false;
        if (kartuCocok == 8) {
          alert("YEY kamu CROTTTT");
        }
      }
    }
  });
});
