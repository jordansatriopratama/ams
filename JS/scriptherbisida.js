//Katalog
// filter array
let filterarray = [];

// gallery card array

let galleryarray = [
  {
    id: 1,
    name: 'abolisi 865sl',
    src: './img/katalog/herbisida/KATALOG BARANG-1.png',
    desc: 'Bahan Aktif : 2,4-D DMA 865g/l',
  },
  {
    id: 2,
    name: 'amegrass 500sc',
    src: './img/katalog/herbisida/KATALOG BARANG-3.png',
    desc: 'Bahan Aktif : Ametrin 500g/l',
  },
  {
    id: 3,
    name: 'alnox 300/20ec',
    src: './img/katalog/herbisida/KATALOG BARANG-4.png',
    desc: 'Bahan Aktif : Pretilaklor 300g/l + Piribenzoksim 20g/l',
  },
  {
    id: 4,
    name: 'admil 160sl',
    src: './img/katalog/herbisida/KATALOG BARANG-5.png',
    desc: 'Bahan Aktif : Amonium Glufosinat 160g/l',
  },
  {
    id: 5,
    name: 'aladin 865sl',
    src: './img/katalog/herbisida/KATALOG BARANG-10.png',
    desc: 'Bahan Aktif : 2,4-D DMA 865g/l',
  },
  {
    id: 6,
    name: 'antas 400/60sl',
    src: './img/katalog/herbisida/KATALOG BARANG-12.png',
    desc: 'Bahan Aktif : Bentazon 400g/l + MCPA 60g/l',
  },
  {
    id: 7,
    name: 'antiji 500ec',
    src: './img/katalog/herbisida/KATALOG BARANG-13.png',
    desc: 'Bahan Aktif : Pretilaklor 500g/l',
  },
  {
    id: 8,
    name: 'avatar 400sc',
    src: './img/katalog/herbisida/KATALOG BARANG-15.png',
    desc: 'Bahan Aktif : Sodium Bispiribak 400g/l',
  },
  {
    id: 9,
    name: 'basmilang 486sl',
    src: './img/katalog/herbisida/KATALOG BARANG-17.png',
    desc: 'Bahan Aktif : IPA Glifosat 486g/l',
  },
  {
    id: 10,
    name: 'blockup 480sl',
    src: './img/katalog/herbisida/KATALOG BARANG-29.png',
    desc: 'Bahan Aktif : IPA Glifosat 480g/l',
  },
  {
    id: 11,
    name: 'bom up 520sl',
    src: './img/katalog/herbisida/KATALOG BARANG-30.png',
    desc: 'Bahan Aktif : IPA Glifosat 520g/l',
  },
  {
    id: 12,
    name: 'bravo top 555sl',
    src: './img/katalog/herbisida/KATALOG BARANG-32.png',
    desc: 'Bahan Aktif : IPA Glifosat 555g/l',
  },
  {
    id: 13,
    name: 'bravoxone 276sl',
    src: './img/katalog/herbisida/KATALOG BARANG-33.png',
    desc: 'Bahan Aktif :Parakuat Diklorida 276g/l',
  },
  {
    id: 14,
    name: 'breeze 270/120sl',
    src: './img/katalog/herbisida/KATALOG BARANG-34.png',
    desc: 'Bahan Aktif : IPA Glifosat 270g/l + 2,4-D IPA 120g/l',
  },
  {
    id: 15,
    name: 'chalenger 276sl',
    src: './img/katalog/herbisida/KATALOG BARANG-36.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 276g/l',
  },
  {
    id: 16,
    name: 'daimex 80wp',
    src: './img/katalog/herbisida/KATALOG BARANG-41.png',
    desc: 'Bahan Aktif : Diuron 80%',
  },
  {
    id: 17,
    name: 'divaxone 138sl',
    src: './img/katalog/herbisida/KATALOG BARANG-47.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 138g/l',
  },
  {
    id: 18,
    name: 'duet 160sl',
    src: './img/katalog/herbisida/KATALOG BARANG-48.png',
    desc: 'Bahan Aktif : IPA Glifosat 160g/l',
  },
  {
    id: 19,
    name: 'elang 480sl',
    src: './img/katalog/herbisida/KATALOG BARANG-49.png',
    desc: 'Bahan Aktif : IPA Glifosat 480g/l',
  },
  {
    id: 20,
    name: 'elang gold 480sl',
    src: './img/katalog/herbisida/KATALOG BARANG-50.png',
    desc: 'Bahan Aktif : IPA Glifosat 480g/l',
  },
  {
    id: 21,
    name: 'gallant 108ec',
    src: './img/katalog/herbisida/KATALOG BARANG-61.png',
    desc: 'Bahan Aktif : Haloxyfop-R-methyl ester 108g/l',
  },
  {
    id: 22,
    name: 'gibas 240sl',
    src: './img/katalog/herbisida/KATALOG BARANG-64.png',
    desc: 'Bahan Aktif : IPA Glifosat 240g/l',
  },
  {
    id: 23,
    name: 'gisentro 560sc',
    src: './img/katalog/herbisida/KATALOG BARANG-65.png',
    desc: 'Bahan Aktif : Atrazin 500g/l + Mesotrion 60g/l',
  },
  {
    id: 24,
    name: 'glymetz 240/10sl',
    src: './img/katalog/herbisida/KATALOG BARANG-66.png',
    desc: 'Bahan Aktif : IPA Glifosat 240g/l + Metil Metsulfuron 10g/l',
  },
  {
    id: 25,
    name: 'goquat 140sl',
    src: './img/katalog/herbisida/KATALOG BARANG-67.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 140g/l',
  },
  {
    id: 26,
    name: 'indamin plus 77wp',
    src: './img/katalog/herbisida/KATALOG BARANG-72.png',
    desc: 'Bahan Aktif : Metil Metsulfuron 0,7% + Etil Klorimuron 0,7% + 2,4-D Natrium 75%',
  },
  {
    id: 27,
    name: 'jifos 160sl',
    src: './img/katalog/herbisida/KATALOG BARANG-77.png',
    desc: 'Bahan Aktif : IPA Glifosat 160g/l',
  },
  {
    id: 28,
    name: 'jotos 490ec',
    src: './img/katalog/herbisida/KATALOG BARANG-78.png',
    desc: 'Bahan Aktif : Triklopir 490g/l',
  },
  {
    id: 29,
    name: 'jump up 555sl',
    src: './img/katalog/herbisida/KATALOG BARANG-79.png',
    desc: 'Bahan Aktif : IPA GLifosat 555g/l',
  },
  {
    id: 30,
    name: 'kresna Up 520sl',
    src: './img/katalog/herbisida/KATALOG BARANG-85.png',
    desc: 'Bahan Aktif : IPA Glifosat 520g/l',
  },
  {
    id: 31,
    name: 'krestara 135sl',
    src: './img/katalog/herbisida/KATALOG BARANG-88.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 135g/l',
  },
  {
    id: 32,
    name: 'lindas 240sl',
    src: './img/katalog/herbisida/KATALOG BARANG-92.png',
    desc: 'Bahan Aktif : IPA Glifosat 240g/l',
  },
  {
    id: 33,
    name: 'lutop 250/125sl',
    src: './img/katalog/herbisida/KATALOG BARANG-93.png',
    desc: 'Bahan Aktif : IPA Glifosat 250g/l + 2,4-D DMA 125g/l',
  },
  {
    id: 34,
    name: 'marxone 300sl',
    src: './img/katalog/herbisida/KATALOG BARANG-97.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 300g/l',
  },
  {
    id: 35,
    name: 'metsulindo 20wp',
    src: './img/katalog/herbisida/KATALOG BARANG-101.png',
    desc: 'Bahan Aktif : Metil Metsulfuron 20%',
  },
  {
    id: 36,
    name: 'neocron 80ol',
    src: './img/katalog/herbisida/KATALOG BARANG-113.png',
    desc: 'Bahan Aktif : Nikosulfuron 80g/l',
  },
  {
    id: 37,
    name: 'new ronda plus 370/5,5SL',
    src: './img/katalog/herbisida/KATALOG BARANG-114.png',
    desc: 'Bahan Aktif : IPA Glifosat 370g/l + Metil Metsulfuron 5,5g/l',
  },
  {
    id: 38,
    name: 'nikitop 160sl',
    src: './img/katalog/herbisida/KATALOG BARANG-115.png',
    desc: 'Bahan Aktif : IPA Glifosat 160g/l',
  },
  {
    id: 39,
    name: 'nominee 103of',
    src: './img/katalog/herbisida/KATALOG BARANG-116.png',
    desc: 'Bahan Aktif : Natrium Bispiribak 103g/l',
  },
  {
    id: 40,
    name: 'noxone 297sl',
    src: './img/katalog/herbisida/KATALOG BARANG-117.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 297g/l',
  },
  {
    id: 41,
    name: 'ometrin 500sc',
    src: './img/katalog/herbisida/KATALOG BARANG-121.png',
    desc: 'Bahan Aktif : Ametrin 500g/l',
  },
  {
    id: 42,
    name: 'optimus 77sl',
    src: './img/katalog/herbisida/KATALOG BARANG-122.png',
    desc: 'Bahan Aktif : Amonium Glufosinat 77g/l',
  },
  {
    id: 43,
    name: 'paket anti gulma',
    src: './img/katalog/herbisida/KATALOG BARANG-123.png',
    desc: 'Berisi Atraz 600 SC + Aleron 60 SC + Besmor Ultra',
  },
  {
    id: 44,
    name: 'prima kuat 276sl',
    src: './img/katalog/herbisida/KATALOG BARANG-128.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 276g/l',
  },
  {
    id: 45,
    name: 'prima Laris 240od',
    src: './img/katalog/herbisida/KATALOG BARANG-129.png',
    desc: 'Bahan Aktif : Atrazin 180g/l + Mesotrion 40g/l + Nikosulfuron 20g/l',
  },
  {
    id: 46,
    name: 'quatxone 150sl',
    src: './img/katalog/herbisida/KATALOG BARANG-137.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 150g/l',
  },
  {
    id: 47,
    name: 'rally 20wg',
    src: './img/katalog/herbisida/KATALOG BARANG-138.png',
    desc: 'Bahan Aktif : Metil Metsulfuron 20%',
  },
  {
    id: 48,
    name: 'rambo peak 550sl',
    src: './img/katalog/herbisida/KATALOG BARANG-139.png',
    desc: 'Bahan Aktif : IPA Glifosat 550g/l',
  },
  {
    id: 49,
    name: 'rambo gold 480sl',
    src: './img/katalog/herbisida/KATALOG BARANG-140.png',
    desc: 'Bahan Aktif : IPA Glifosat 480g/l',
  },
  {
    id: 50,
    name: 'randy 240/140sl',
    src: './img/katalog/herbisida/KATALOG BARANG-141.png',
    desc: 'Bahan Aktif : IPA Glifosat 240g/l + 2,4-D IPA 140g/l',
  },
  {
    id: 51,
    name: 'ranger 240sl',
    src: './img/katalog/herbisida/KATALOG BARANG-142.png',
    desc: 'Bahan Aktif : IPA Glifosat 240g/l',
  },
  {
    id: 52,
    name: 'roger 480sl',
    src: './img/katalog/herbisida/KATALOG BARANG-145.png',
    desc: 'Bahan Aktif : IPA Glifosat 480g/l',
  },
  {
    id: 53,
    name: 'ronindo 80wp',
    src: './img/katalog/herbisida/KATALOG BARANG-146.png',
    desc: 'Bahan Aktif : Diuron 80%',
  },
  {
    id: 54,
    name: 'roundup bio 486sl',
    src: './img/katalog/herbisida/KATALOG BARANG-147.png',
    desc: 'Bahan Aktif : IPA Glifosat 486g/l',
  },
  {
    id: 55,
    name: 'roundup transorb 440sl',
    src: './img/katalog/herbisida/KATALOG BARANG-148.png',
    desc: 'Bahan Aktif : Kalium Glifosat 440g/l',
  },
  {
    id: 56,
    name: 'rudstar 250ec',
    src: './img/katalog/herbisida/KATALOG BARANG-149.png',
    desc: 'Bahan Aktif : Oksadiazon 250g/l',
  },
  {
    id: 57,
    name: 'servoxon 276sl',
    src: './img/katalog/herbisida/KATALOG BARANG-152.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 276g/l',
  },
  {
    id: 58,
    name: 'sidalaris 240sl',
    src: './img/katalog/herbisida/KATALOG BARANG-155.png',
    desc: 'Bahan Aktif : IPA Glifosat 240g/l',
  },
  {
    id: 59,
    name: 'sidamin 865sl',
    src: './img/katalog/herbisida/KATALOG BARANG-157.png',
    desc: 'Bahan Aktif : 2,4-D DMA 865g/l',
  },
  {
    id: 60,
    name: 'sidaron 80wp',
    src: './img/katalog/herbisida/KATALOG BARANG-160.png',
    desc: 'Bahan Aktif : Diuron 80%',
  },
  {
    id: 61,
    name: 'sidatop 166sl',
    src: './img/katalog/herbisida/KATALOG BARANG-163.png',
    desc: 'Bahan Aktif : IPA Glifosat 166g/l',
  },
  {
    id: 62,
    name: 'supremo 480sl',
    src: './img/katalog/herbisida/KATALOG BARANG-169.png',
    desc: 'Bahan Aktif : IPA GLifosat 480g/l',
  },
  {
    id: 63,
    name: 'supretox 276sl',
    src: './img/katalog/herbisida/KATALOG BARANG-170.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 276g/l',
  },
  {
    id: 64,
    name: 'sutrazin 560sc',
    src: './img/katalog/herbisida/KATALOG BARANG-171.png',
    desc: 'Bahan Aktif : Atrazin 500g/l + Mesotrion 60g/l',
  },
  {
    id: 65,
    name: 'tabas 400sc',
    src: './img/katalog/herbisida/KATALOG BARANG-172.png',
    desc: 'Bahan Aktif : Natrium Bispiribak 400g/l',
  },
  {
    id: 66,
    name: 'tamaris 240sl',
    src: './img/katalog/herbisida/KATALOG BARANG-174.png',
    desc: 'Bahan Aktif : IPA Glifosat 240g/l',
  },
  {
    id: 67,
    name: 'thiosida 6gr',
    src: './img/katalog/herbisida/KATALOG BARANG-176.png',
    desc: 'Bahan Aktif : Tiobenkarb 4% + 2,4-D IBE 2%',
  },
  {
    id: 68,
    name: 'topzone 150sl',
    src: './img/katalog/herbisida/KATALOG BARANG-178.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 150g/l',
  },
  {
    id: 69,
    name: 'topzone 276sl',
    src: './img/katalog/herbisida/KATALOG BARANG-179.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 276g/l',
  },
  {
    id: 70,
    name: 'trendy 20wp',
    src: './img/katalog/herbisida/KATALOG BARANG-180.png',
    desc: 'Bahan Aktif : Metil Metsulfuron 20%',
  },
  {
    id: 71,
    name: 'triester 670ec',
    src: './img/katalog/herbisida/KATALOG BARANG-181.png',
    desc: 'Bahan Aktif : Triklopir Butoksi Etil Ester 670g/l',
  },
  {
    id: 72,
    name: 'tuntas 300/100sl',
    src: './img/katalog/herbisida/KATALOG BARANG-183.png',
    desc: 'Bahan Aktif : IPA Glifosat 300g/l + 2,4-D DMA 100g/l',
  },
  {
    id: 73,
    name: 'unibro 500/50sc',
    src: './img/katalog/herbisida/KATALOG BARANG-184.png',
    desc: 'Bahan Aktif : Atrazin 500g/l + Mesotrion 50g/l',
  },
  {
    id: 74,
    name: 'valino 865sl',
    src: './img/katalog/herbisida/KATALOG BARANG-186.png',
    desc: 'Bahan Aktif : 2,4-D DMA 865g/l',
  },
  {
    id: 75,
    name: 'viaron 80wp',
    src: './img/katalog/herbisida/KATALOG BARANG-188.png',
    desc: 'Bahan Aktif : Diuron 80%',
  },
  {
    id: 76,
    name: 'win 20wg',
    src: './img/katalog/herbisida/KATALOG BARANG-191.png',
    desc: 'Bahan Aktif : Metil Metsulfuron 20%',
  },
  {
    id: 77,
    name: 'redzone 276sl',
    src: './img/katalog/herbisida/KATALOG BARANG-199.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 276g/l',
  },
  {
    id: 78,
    name: 'metsulindo plus 80wp',
    src: './img/katalog/herbisida/KATALOG BARANG-202.png',
    desc: 'Bahan Aktif : 2,4-D Natrium 76% + Metil Metsulfuron 2% + Etil Klorimuron 2%',
  },
  {
    id: 79,
    name: 'benfuron 12/18wp',
    src: './img/katalog/herbisida/KATALOG BARANG-211.png',
    desc: 'Bahan Aktif : Metil Bensulfuron 12% + Natrium Bispirak 18%',
  },
  {
    id: 80,
    name: 'ultramax 138sl',
    src: './img/katalog/herbisida/KATALOG BARANG-219.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 138g/l',
  },
  {
    id: 81,
    name: 'starjos 125ew',
    src: './img/katalog/herbisida/KATALOG BARANG-220.png',
    desc: 'Bahan Aktif : Fenoksaprop-p-etil 125g/l',
  },
  {
    id: 82,
    name: 'sida up 490sl',
    src: './img/katalog/herbisida/KATALOG BARANG-221.png',
    desc: 'Bahan Aktif : IPA Glifosat 490g/l',
  },
  {
    id: 83,
    name: 'geledek 480sl',
    src: './img/katalog/herbisida/KATALOG BARANG-223.png',
    desc: 'Bahan Aktif : IPA Glifosat 480g/l',
  },
  {
    id: 84,
    name: 'rumat 300/100sl',
    src: './img/katalog/herbisida/KATALOG BARANG-233.png',
    desc: 'Bahan Aktif : IPA Glifosat 300g/l + 2,4-D DMA 100g/l',
  },
  {
    id: 85,
    name: 'farmquat 276sl',
    src: './img/katalog/herbisida/KATALOG BARANG-234.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 276g/l',
  },
  {
    id: 86,
    name: 'glifomin 300/100sl',
    src: './img/katalog/herbisida/KATALOG BARANG-232.png',
    desc: 'Bahan Aktif : IPA Glifosat 300g/l + 2,4-D DMA 100g/l',
  },
  {
    id: 87,
    name: 'cyclon 290sl',
    src: './img/katalog/herbisida/KATALOG BARANG-235.png',
    desc: 'Bahan Aktif : 2,4-D DMA 290g/l',
  },
  {
    id: 88,
    name: 'kinglon 667ec',
    src: './img/katalog/herbisida/KATALOG BARANG-236.png',
    desc: 'Bahan Aktif : Triklopir Butoksi Etil Ester 667g/l',
  },
  {
    id: 89,
    name: 'noxone 276sl',
    src: './img/katalog/herbisida/KATALOG BARANG-252.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 276g/l',
  },
  {
    id: 90,
    name: 'arendi 20/10wp',
    src: './img/katalog/herbisida/KATALOG BARANG-261.png',
    desc: 'Bahan Aktif : Natrium bispiribak 20% + Etil pirazosulfuron 10%',
  },
  {
    id: 91,
    name: 'sprinter 150sl',
    src: './img/katalog/herbisida/KATALOG BARANG-268.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 150g/l',
  },
  {
    id: 92,
    name: 'bigquat 276sl',
    src: './img/katalog/herbisida/KATALOG BARANG-270.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 276g/l',
  },
  {
    id: 93,
    name: 'batara 135sl',
    src: './img/katalog/herbisida/KATALOG BARANG-275.png',
    desc: 'Bahan Aktif : Parakuat Diklorida 135g/l',
  },
  {
    id: 94,
    name: 'farmfosate 480sl',
    src: './img/katalog/herbisida/KATALOG BARANG-276.png',
    desc: 'Bahan Aktif : IPA Glifosat 480g/l',
  },
  {
    id: 95,
    name: 'binaposate 480sl',
    src: './img/katalog/herbisida/KATALOG BARANG-280.png',
    desc: 'Bahan Aktif : IPA Glifosat 480g/l',
  },
  {
    id: 96,
    name: 'baruna 245sl',
    src: './img/katalog/herbisida/KATALOG BARANG-283.png',
    desc: 'Bahan Aktif : IPA Glifosat 245g/l',
  },
  {
    id: 97,
    name: 'glifomax 480sl',
    src: './img/katalog/herbisida/KATALOG BARANG-284.png',
    desc: 'Bahan Aktif : IPA Glifosat 480g/l',
  },
];

showgallery(galleryarray);

// create function to show card

function showgallery(curarra) {
  document.getElementById('card').innerText = '';
  for (var i = 0; i < curarra.length; i++) {
    document.getElementById('card').innerHTML += `
            <div class="col-md-4 mt-3" >
               <div class="card p-3 ps-5 pe-5">
                   <h5 class="text-capitalize text-center">${curarra[i].name}</h5>
    
              <img src="${curarra[i].src}" width="100%" height="250px"/>
              <p class="text-center mt-2">${curarra[i].desc}</p>
               
               
              </div>
              </div>
           `;
  }
}

// For Live Searching Product

document.getElementById('myinput').addEventListener('keyup', function () {
  let text = document.getElementById('myinput').value;

  filterarray = galleryarray.filter(function (a) {
    if (a.name.includes(text)) {
      return a.name;
    }
  });
  if (this.value == '') {
    showgallery(galleryarray);
  } else {
    if (filterarray == '') {
      document.getElementById('para').style.display = 'block';
      document.getElementById('card').innerHTML = '';
    } else {
      showgallery(filterarray);
      document.getElementById('para').style.display = 'none';
    }
  }
});

/* Galeri */
$(function () {
  $('#slider').slider({
    current: 0,
    autoplay: true,
    interval: 3000,
  });
});
