const images = [
  "img/ricky.jpg",
  "img/janu.png",
  "img/umar.png",
  "img/reza.png",
  "img/purno.png",
  "img/fuad.png",
  "img/gani.png",
  "img/adit.png"
];

const randomImages = [];

let kartu;

$(document).ready(function() {
  let TerKlik = null;
  let klikSebelumnya = false;
  let kartuCocok = 0;
  
  for(let i = 0; i < images.length; i++)
	  getRandomImageUrl()
	    .then(e => randomImages[i] = e);

  kartu = [...$(".kartu")];
  kartu = shuffleArray(kartu);
  
  for(let i = 0; i < images.length; i++){
	  kartu[2 * i].setAttribute("data-image-id", i);
	  kartu[2 * (images.length - i) - 1].setAttribute("data-image-id", i);
  }
  
  setImages(images);
  $("#ImageSet").change(e => {
	  let value = e.originalEvent.target.value;
	  if(value == "Default")
		  setImages(images)
	  else if(value == "Random")
		  setImages(randomImages)
  });

  $(".kartu").click(function(e) {
    const target = e.currentTarget;
    if (
      klikSebelumnya ||
      target === TerKlik ||
      target.classList.contains("done")
    ) {
      return;
    }
    target.classList.remove("color-hidden");
    target.classList.add("done");
    console.log(target.getAttribute("data-image-id"));

    if (!TerKlik) {
      //jika tidak ada kartu yg di klik ,tetap tampilkan gambar
      TerKlik = target;
    }
	
	else if (TerKlik) {
      //jika ada kartu yg diklik, cek apakah kartu selanjutnya sama atau tidak
      klikSebelumnya = true;
      if (
        TerKlik.getAttribute("data-image-id") !== target.getAttribute("data-image-id")
      ) {
        klikSebelumnya = true;
        setTimeout(() => {
          TerKlik.classList.remove("done");
          TerKlik.classList.add("color-hidden");
          
		  target.classList.remove("done");
          target.classList.add("color-hidden");
          
          TerKlik = null;
          klikSebelumnya = false;
        }, 500);
      } else {
        kartuCocok++;
        TerKlik = null;
        klikSebelumnya = false;
        if (kartuCocok == 8) {
          alert("YEY kamu Berhasil");
          let mainLagi = confirm("coba lagi?");
          if (mainLagi) {
            window.location.reload();
          }
        }
      }
    }
  });
});

const RANDOM_IMAGE_URL = "https://source.unsplash.com/random/?Nature";
async function getRandomImageUrl(){
  return fetch(RANDOM_IMAGE_URL + "," + Math.random()).then(e => e.url);
}

function shuffleArray(array){
  for(let i = array.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
  return array;
}

function setImages(images){
  for(let e of kartu)
	  e.style.backgroundImage = `url("${images[+e.getAttribute("data-image-id")]}")`;
}