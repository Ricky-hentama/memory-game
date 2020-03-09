$(document).ready(function() {
  let TerKlik = undefined;

  $(".kartu").click(function(e) {
    $(this).toggleClass("color-hidden");
  });

  if (!TerKlik) {
    //jika tidak ada kartu yg di klik ,tetap tampilkan gambar
  } else if (TerKlik) {
    //jika ada kartu yg diklik, cek apakah kartu selanjutnya sama atau tidak
  }
});
