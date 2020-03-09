$(document).ready(function() {
  let TerKlik = null;

  $(".kartu").click(function(e) {
    const target = e.currentTarget;
    if (target === TerKlik || target.className.includes("done")) {
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
      if (
        TerKlik.getAttribute("data-nama") === target.getAttribute("data-nama")
      ) {
        console.log("sama");
        TerKlik = null;
      } else {
        setTimeout(() => {
          TerKlik.className =
            TerKlik.className.replace("done", "").trim() + " color-hidden";
          target.className =
            target.className.replace("done", "").trim() + " color-hidden";
          TerKlik = null;
        }, 800);
      }
    }
  });
});
