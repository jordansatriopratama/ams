//Katalog
// filter array
let filterarray = [];

// gallery card array

let galleryarray = [
  {
    id: 1,
    name: 'boom padi max',
    src: './img/katalog/lain/KATALOG BARANG-31.png',
    desc: '',
  },
  {
    id: 2,
    name: 'hand sprayer jitu',
    src: './img/katalog/lain/KATALOG BARANG-70.png',
    desc: '',
  },
  {
    id: 3,
    name: 'kovinplus 80p',
    src: './img/katalog/lain/KATALOG BARANG-83.png',
    desc: 'Bahan Aktif : Seng Fosfida 80%',
  },
  {
    id: 4,
    name: 'kresnacid 250ec',
    src: './img/katalog/lain/KATALOG BARANG-86.png',
    desc: 'Bahan Aktif : Niklosamida 250g/l',
  },
  {
    id: 5,
    name: 'mulsa standard ss',
    src: './img/katalog/lain/KATALOG BARANG-106.png',
    desc: '',
  },
  {
    id: 6,
    name: 'mulsa super ss',
    src: './img/katalog/lain/KATALOG BARANG-107.png',
    desc: '',
  },
  {
    id: 7,
    name: 'musi 67wp',
    src: './img/katalog/lain/KATALOG BARANG-108.png',
    desc: 'Bahan Aktif : Fentin Asetat 67%',
  },
  {
    id: 8,
    name: 'petrokum 0,005bb',
    src: './img/katalog/lain/KATALOG BARANG-197.png',
    desc: 'Bahan Aktif : Brodifakum 0,005%',
  },
  {
    id: 9,
    name: 'petrogenol 800l',
    src: './img/katalog/lain/KATALOG BARANG-198.png',
    desc: 'Bahan Aktif : Metil Eugenol 800g/l',
  },
  {
    id: 10,
    name: 'samite 135ec',
    src: './img/katalog/lain/KATALOG BARANG-200.png',
    desc: 'Bahan Aktif : Piridaben 135g/l',
  },
  {
    id: 11,
    name: 'petro gladiator',
    src: './img/katalog/lain/KATALOG BARANG-222.png',
    desc: 'Biodekomposer',
  },
  {
    id: 12,
    name: 'paket keriting',
    src: './img/katalog/lain/KATALOG BARANG-239.png',
    desc: 'Berisi Raydent 200 EC + Samite 135 EC + Winder 100 EC',
  },
  {
    id: 13,
    name: 'sprayer jitu elektrik',
    src: './img/katalog/lain/KATALOG BARANG-238.png',
    desc: '',
  },
  {
    id: 14,
    name: 'sprayer booster manual',
    src: './img/katalog/lain/KATALOG BARANG-240.png',
    desc: '',
  },
  {
    id: 15,
    name: 'bestnoid 60wp',
    src: './img/katalog/lain/KATALOG BARANG-246.png',
    desc: 'Bahan Aktif : Fentin Asetat 60%',
  },
  {
    id: 16,
    name: 'baterai aki jitu',
    src: './img/katalog/lain/KATALOG BARANG-249.png',
    desc: '12V 8AH.',
  },
  {
    id: 17,
    name: 'spreader',
    src: './img/katalog/lain/KATALOG BARANG-250.png',
    desc: 'Perekat',
  },
  {
    id: 18,
    name: 'petro gladiator',
    src: './img/katalog/lain/KATALOG BARANG-254.png',
    desc: 'Biodekomposer',
  },
  {
    id: 19,
    name: 'sprayer jitu 2in1',
    src: './img/katalog/lain/KATALOG BARANG-266.png',
    desc: '',
  },
  {
    id: 20,
    name: 'sprayer cheetos 2in1',
    src: './img/katalog/lain/KATALOG BARANG-267.png',
    desc: '',
  },
  {
    id: 21,
    name: 'sprayer nagata biru',
    src: './img/katalog/lain/KATALOG BARANG-224.png',
    desc: '',
  },
  {
    id: 22,
    name: 'sprayer banzai elektrik',
    src: './img/katalog/lain/KATALOG BARANG-273.png',
    desc: '',
  },
  {
    id: 23,
    name: 'sprayer cba ultra elektrik',
    src: './img/katalog/lain/KATALOG BARANG-274.png',
    desc: '',
  },
  {
    id: 24,
    name: 'handsprayer booster',
    src: './img/katalog/lain/KATALOG BARANG-271.png',
    desc: '',
  },
  {
    id: 25,
    name: 'handsprayer booster',
    src: './img/katalog/lain/KATALOG BARANG-272.png',
    desc: '',
  },
  {
    id: 26,
    name: 'pemotong rumput nagata',
    src: './img/katalog/lain/KATALOG BARANG-269.png',
    desc: '',
  },
  {
    id: 27,
    name: 'boom jagung',
    src: './img/katalog/lain/KATALOG BARANG-285.png',
    desc: '',
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
