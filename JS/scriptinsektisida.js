//Katalog
// filter array
let filterarray = [];

// gallery card array

let galleryarray = [
  {
    id: 1,
    name: 'alcove 50ec',
    src: './img/katalog/insektisida/KATALOG BARANG-2.png',
    desc: 'Bahan Aktif : Alfa-Sipermetrin 50g/l',
  },
  {
    id: 2,
    name: 'amabas 500ec',
    src: './img/katalog/insektisida/KATALOG BARANG-11.png',
    desc: 'Bahan Aktif : BMPC/Fenobucarb 500g/l',
  },
  {
    id: 3,
    name: 'applaud 10wp',
    src: './img/katalog/insektisida/KATALOG BARANG-14.png',
    desc: 'Bahan Aktif : Buprofezin 10%',
  },
  {
    id: 4,
    name: 'balistic 50sc',
    src: './img/katalog/insektisida/KATALOG BARANG-16.png',
    desc: 'Bahan Aktif : Fipronil 50g/l',
  },
  {
    id: 5,
    name: 'besvidor 25wp',
    src: './img/katalog/insektisida/KATALOG BARANG-19.png',
    desc: 'Bahan Aktif : Imidakloprid 25%',
  },
  {
    id: 6,
    name: 'dafat 75sp',
    src: './img/katalog/insektisida/KATALOG BARANG-40.png',
    desc: 'Bahan Aktif : Asefat 75%',
  },
  {
    id: 7,
    name: 'de-star 50sc',
    src: './img/katalog/insektisida/KATALOG BARANG-42.png',
    desc: 'Bahan Aktif : Fipronil 50g/l',
  },
  {
    id: 8,
    name: 'delouse 200sl',
    src: './img/katalog/insektisida/KATALOG BARANG-43.png',
    desc: 'Bahan Aktif : Imidakloprid 200g/l',
  },
  {
    id: 9,
    name: 'demolish 18ec',
    src: './img/katalog/insektisida/KATALOG BARANG-44.png',
    desc: 'Bahan Aktif : Abamektin 18g/l',
  },
  {
    id: 10,
    name: 'destan 400ec',
    src: './img/katalog/insektisida/KATALOG BARANG-45.png',
    desc: 'Bahan Aktif : Dimetoat 400g/l',
  },
  {
    id: 11,
    name: 'diazinon 600ec',
    src: './img/katalog/insektisida/KATALOG BARANG-46.png',
    desc: 'Bahan Aktif : Diazinon 600g/l',
  },
  {
    id: 12,
    name: 'emcindo 500ec',
    src: './img/katalog/insektisida/KATALOG BARANG-51.png',
    desc: 'Bahan Aktif : Fenobucarb 500g/l',
  },
  {
    id: 13,
    name: 'fastac 15ec',
    src: './img/katalog/insektisida/KATALOG BARANG-53.png',
    desc: 'Bahan Aktif : Alfametrin 15g/l',
  },
  {
    id: 14,
    name: 'fipros 55sc',
    src: './img/katalog/insektisida/KATALOG BARANG-55.png',
    desc: 'Bahan Aktif : Fipronil 55g/l',
  },
  {
    id: 15,
    name: 'flytop 250od',
    src: './img/katalog/insektisida/KATALOG BARANG-56.png',
    desc: 'Bahan Aktif : Dinotefuran 250g/l',
  },
  {
    id: 16,
    name: 'furindo 3gr',
    src: './img/katalog/insektisida/KATALOG BARANG-60.png',
    desc: 'Bahan Aktif : Karbofuran 3%',
  },
  {
    id: 17,
    name: 'gordon 320ec',
    src: './img/katalog/insektisida/KATALOG BARANG-68.png',
    desc: 'Bahan Aktif : Klorfenapir 320g/l',
  },
  {
    id: 18,
    name: 'indocron 500ec',
    src: './img/katalog/insektisida/KATALOG BARANG-73.png',
    desc: 'Bahan Aktif : Profenofos 500g/l',
  },
  {
    id: 19,
    name: 'indohipo 500sl',
    src: './img/katalog/insektisida/KATALOG BARANG-74.png',
    desc: 'Bahan Aktif : Dimehipo 500g/l',
  },
  {
    id: 20,
    name: 'kanon 400ec',
    src: './img/katalog/insektisida/KATALOG BARANG-82.png',
    desc: 'Bahan Aktif : Dimetoat 400g/l',
  },
  {
    id: 21,
    name: 'klensect 200ec',
    src: './img/katalog/insektisida/KATALOG BARANG-84.png',
    desc: 'Bahan Aktif : Permethrin 200g/l',
  },
  {
    id: 22,
    name: 'manthene 75sp',
    src: './img/katalog/insektisida/KATALOG BARANG-95.png',
    desc: 'Bahan Aktif : Asefat 75%',
  },
  {
    id: 23,
    name: 'marathon 500sl',
    src: './img/katalog/insektisida/KATALOG BARANG-96.png',
    desc: 'Bahan Aktif : Dimehipo 500g/l',
  },
  {
    id: 24,
    name: 'matarin 50ec',
    src: './img/katalog/insektisida/KATALOG BARANG-98.png',
    desc: 'Bahan Aktif : Lamda Sihalotrin 50g/l',
  },
  {
    id: 25,
    name: 'metindo 25wp',
    src: './img/katalog/insektisida/KATALOG BARANG-99.png',
    desc: 'Bahan Aktif : Metomil 25%',
  },
  {
    id: 26,
    name: 'metindo 40sp',
    src: './img/katalog/insektisida/KATALOG BARANG-100.png',
    desc: 'Bahan Aktif : Metomil 40%',
  },
  {
    id: 27,
    name: 'mipcindo 50wp',
    src: './img/katalog/insektisida/KATALOG BARANG-102.png',
    desc: 'Bahan Aktif : MIPC 50%',
  },
  {
    id: 28,
    name: 'monkey 40sp',
    src: './img/katalog/insektisida/KATALOG BARANG-104.png',
    desc: 'Bahan Aktif : Metomil 40%',
  },
  {
    id: 29,
    name: 'morgent 50sc',
    src: './img/katalog/insektisida/KATALOG BARANG-105.png',
    desc: 'Bahan Aktif : Fipronil 50g/l',
  },
  {
    id: 30,
    name: 'naga 500ec',
    src: './img/katalog/insektisida/KATALOG BARANG-109.png',
    desc: 'Bahan Aktif : BPMC 500g/l',
  },
  {
    id: 31,
    name: 'nemaguard 10gr',
    src: './img/katalog/insektisida/KATALOG BARANG-110.png',
    desc: 'Bahan Aktif : Oksamil 10%',
  },
  {
    id: 32,
    name: 'permifos 555ec',
    src: './img/katalog/insektisida/KATALOG BARANG-125.png',
    desc: 'Bahan Aktif : Klorpirifos 500g/l + Sipermetrin 55g/l',
  },
  {
    id: 33,
    name: 'petrofur 3gr',
    src: './img/katalog/insektisida/KATALOG BARANG-126.png',
    desc: 'Bahan Aktif : Karbofuran 3%',
  },
  {
    id: 34,
    name: 'plush 60wp',
    src: './img/katalog/insektisida/KATALOG BARANG-127.png',
    desc: 'Bahan Aktif : Imidakloprid 2% + Monosultap 58%',
  },
  {
    id: 35,
    name: 'rennate 40wp',
    src: './img/katalog/insektisida/KATALOG BARANG-144.png',
    desc: 'Bahan Aktif : Metomil 40%',
  },
  {
    id: 36,
    name: 'sidafur 3gr',
    src: './img/katalog/insektisida/KATALOG BARANG-153.png',
    desc: 'Bahan Aktif : Karbofuran 3%',
  },
  {
    id: 37,
    name: 'sidacron 510ec',
    src: './img/katalog/insektisida/KATALOG BARANG-154.png',
    desc: 'Bahan Aktif : Profenofos 510g/l',
  },
  {
    id: 38,
    name: 'sidamec 20ec',
    src: './img/katalog/insektisida/KATALOG BARANG-156.png',
    desc: 'Bahan Aktif : Abamektin 20g/l',
  },
  {
    id: 39,
    name: 'sidamethrin 50ec',
    src: './img/katalog/insektisida/KATALOG BARANG-158.png',
    desc: 'Bahan Aktif : Sipermetrin 50g/l',
  },
  {
    id: 40,
    name: 'sidapyr 50ec',
    src: './img/katalog/insektisida/KATALOG BARANG-159.png',
    desc: 'Bahan Aktif : Klorfenapir 325g/l',
  },
  {
    id: 41,
    name: 'sidasat 75sp',
    src: './img/katalog/insektisida/KATALOG BARANG-161.png',
    desc: 'Bahan Aktif : Asefat 75%',
  },
  {
    id: 42,
    name: 'sidatan xr 525sl',
    src: './img/katalog/insektisida/KATALOG BARANG-162.png',
    desc: 'Bahan Aktif : Dimehipo 525g/l',
  },
  {
    id: 43,
    name: 'spontan 400sl',
    src: './img/katalog/insektisida/KATALOG BARANG-164.png',
    desc: 'Bahan Aktif : Dimehipo 400g/l',
  },
  {
    id: 44,
    name: 'starelle 660ec',
    src: './img/katalog/insektisida/KATALOG BARANG-165.png',
    desc: 'Bahan Aktif : Klorpirifos 600g/l + Sipermetrin 60g/l',
  },
  {
    id: 45,
    name: 'termikon 15ec',
    src: './img/katalog/insektisida/KATALOG BARANG-175.png',
    desc: 'Bahan Aktif : Alfametrin 15g/l',
  },
  {
    id: 46,
    name: 'trisula 450sl',
    src: './img/katalog/insektisida/KATALOG BARANG-182.png',
    desc: 'Bahan Aktif : Monosultap 450g/l',
  },
  {
    id: 47,
    name: 'venus 400sl',
    src: './img/katalog/insektisida/KATALOG BARANG-187.png',
    desc: 'Bahan Aktif : Dimehipo 400g/l',
  },
  {
    id: 48,
    name: 'vigor 100ec',
    src: './img/katalog/insektisida/KATALOG BARANG-190.png',
    desc: 'Bahan Aktif : Sipermetrin 100g/l',
  },
  {
    id: 49,
    name: 'winder 100ec',
    src: './img/katalog/insektisida/KATALOG BARANG-192.png',
    desc: 'Bahan Aktif : Imidakloprid 100g/l',
  },
  {
    id: 50,
    name: 'yasithrin 30ec',
    src: './img/katalog/insektisida/KATALOG BARANG-193.png',
    desc: 'Bahan Aktif : Sipermetrin 30g/l',
  },
  {
    id: 51,
    name: 'ziban 630ec',
    src: './img/katalog/insektisida/KATALOG BARANG-194.png',
    desc: 'Bahan Aktif : Klorpirifos 600g/l + Teta Sipermetrin 30g/l',
  },
  {
    id: 52,
    name: 'prothene 75sp',
    src: './img/katalog/insektisida/KATALOG BARANG-195.png',
    desc: 'Bahan Aktif : Asefat 75%',
  },
  // {
  //   id: 53,
  //   name: 'regent red 50sc',
  //   src: './img/katalog/insektisida/KATALOG BARANG-203.png',
  //   desc: 'Bahan Aktif : Fipronil 50g/l',
  // },
  {
    id: 54,
    name: 'promectin 60ec',
    src: './img/katalog/insektisida/KATALOG BARANG-210.png',
    desc: 'Bahan Aktif : Abamektin 60g/l',
  },
  {
    id: 55,
    name: 'dangke 40wp',
    src: './img/katalog/insektisida/KATALOG BARANG-228.png',
    desc: 'Bahan Aktif : Metomil 40%',
  },
  {
    id: 56,
    name: 'klopindo 10wp',
    src: './img/katalog/insektisida/KATALOG BARANG-229.png',
    desc: 'Bahan Aktif : Imidaklkoprid 10%',
  },
  {
    id: 57,
    name: 'kresnadan 3gr',
    src: './img/katalog/insektisida/KATALOG BARANG-87.png',
    desc: 'Bahan Aktif : Karbofuran 3%',
  },
  {
    id: 58,
    name: 'sidabas 500ec',
    src: './img/katalog/insektisida/KATALOG BARANG-230.png',
    desc: 'Bahan Aktif : BPMC 500g/l',
  },
  {
    id: 59,
    name: 'besclaim 30ec',
    src: './img/katalog/insektisida/KATALOG BARANG-27.png',
    desc: 'Bahan Aktif : Emamektin Benzoat 30g/l',
  },
  {
    id: 60,
    name: 'lamdador 50ec',
    src: './img/katalog/insektisida/KATALOG BARANG-237.png',
    desc: 'Bahan Aktif : Lamda Sihalotrin 50g/l',
  },
  {
    id: 61,
    name: 'veto 650ec',
    src: './img/katalog/insektisida/KATALOG BARANG-241.png',
    desc: 'Bahan Aktif : Fentoat 650g/l',
  },
  {
    id: 62,
    name: 'klorelle 585ec',
    src: './img/katalog/insektisida/KATALOG BARANG-242.png',
    desc: 'Bahan Aktif : Klorpirifos 530g/l + Sipermetrin 55g/l',
  },
  {
    id: 63,
    name: 'indomec 20ec',
    src: './img/katalog/insektisida/KATALOG BARANG-245.png',
    desc: 'Bahan Aktif : Abamektin 20g/l',
  },
  {
    id: 64,
    name: 'mipcinta 50wp',
    src: './img/katalog/insektisida/KATALOG BARANG-247.png',
    desc: 'Bahan Aktif : MIPC 50%',
  },
  // {
  //   id: 65,
  //   name: 'regent 50sc',
  //   src: './img/katalog/insektisida/KATALOG BARANG-255.png',
  //   desc: 'Bahan Aktif : Fipronil 50g/l',
  // },
  {
    id: 66,
    name: 'rotraz 200ec',
    src: './img/katalog/insektisida/KATALOG BARANG-259.png',
    desc: 'Bahan Aktif : Amitraz 200g/l',
  },
  {
    id: 67,
    name: 'artos 100sl',
    src: './img/katalog/insektisida/KATALOG BARANG-262.png',
    desc: 'Bahan Aktif : Nitenpiram 100g/l',
  },
  {
    id: 68,
    name: 'brasso 250ec',
    src: './img/katalog/insektisida/KATALOG BARANG-264.png',
    desc: 'Bahan Aktif : Sipermetrin 250g/l',
  },
  {
    id: 69,
    name: 'teballo 250sl',
    src: './img/katalog/insektisida/KATALOG BARANG-281.png',
    desc: 'Bahan Aktif : Nitenpiram 250g/l',
  },
  {
    id: 70,
    name: 'fostin 610ec',
    src: './img/katalog/insektisida/KATALOG BARANG-287.png',
    desc: 'Bahan Aktif : Klorpirifos 550g/l + Sipermetrin 60g/l',
  },
  {
    id: 71,
    name: 'moslipan 30ec',
    src: './img/katalog/insektisida/KATALOG BARANG-290.png',
    desc: 'Bahan Aktif : Asetamiprid 30g/l',
  },
  {
    id: 72,
    name: 'lamdarin 55ec',
    src: './img/katalog/insektisida/KATALOG BARANG-292.png',
    desc: 'Bahan Aktif : Lamda Sihalotrin 55g/l',
  },
  {
    id: 73,
    name: 'lannate 40sp',
    src: './img/katalog/insektisida/KATALOG BARANG-293.png',
    desc: 'Bahan Aktif : Metomil 40%',
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
