//Katalog
// filter array
let filterarray = [];

// gallery card array

let galleryarray = [
  {
    id: 1,
    name: 'afila 400/125se',
    src: './img/katalog/fungisida/KATALOG BARANG-6.png',
    desc: 'Bahan Aktif : Trisiklazol 400g/l + Propikonazol 125g/l',
  },
  {
    id: 2,
    name: 'besromil 35wp',
    src: './img/katalog/fungisida/KATALOG BARANG-18.png',
    desc: 'Bahan Aktif : Metalaksil 35%',
  },
  {
    id: 3,
    name: 'bendas 50wp',
    src: './img/katalog/fungisida/KATALOG BARANG-21.png',
    desc: 'Bahan Aktif : Karbendazim 50%',
  },
  {
    id: 4,
    name: 'cabrio 250ec',
    src: './img/katalog/fungisida/KATALOG BARANG-35.png',
    desc: 'Bahan Aktif : Piraklostrobin 250g/l',
  },

  {
    id: 5,
    name: 'corona 325sc',
    src: './img/katalog/fungisida/KATALOG BARANG-37.png',
    desc: 'Bahan Aktif : Azoksistrobin 200g/l + Difenokonazol 125g/l',
  },
  {
    id: 6,
    name: 'cozeb 80wp',
    src: './img/katalog/fungisida/KATALOG BARANG-38.png',
    desc: 'Bahan Aktif : Mankozeb 80%',
  },
  {
    id: 7,
    name: 'cuprocide 77wp',
    src: './img/katalog/fungisida/KATALOG BARANG-39.png',
    desc: 'Bahan Aktif : Tembaga hidroksida 77%',
  },
  {
    id: 8,
    name: 'explore 250ec',
    src: './img/katalog/fungisida/KATALOG BARANG-52.png',
    desc: 'Bahan Aktif : Difenokonazol 250g/l',
  },
  {
    id: 9,
    name: 'fujiwan 400ec',
    src: './img/katalog/fungisida/KATALOG BARANG-58.png',
    desc: 'Bahan Aktif : Isoprothiolane 400g/l',
  },
  {
    id: 10,
    name: 'topsin m 500sc',
    src: './img/katalog/fungisida/KATALOG BARANG-59.png',
    desc: 'Bahan Aktif : Metil tiofanat 500g/l',
  },
  {
    id: 11,
    name: 'inari 72,5wp',
    src: './img/katalog/fungisida/KATALOG BARANG-71.png',
    desc: 'Bahan Aktif : Metil tiofanat 35% + Trisiklazol 37,5%',
  },
  {
    id: 12,
    name: 'indokor 250ec',
    src: './img/katalog/fungisida/KATALOG BARANG-75.png',
    desc: 'Bahan Aktif : Difenokonazol 250g/l',
  },
  {
    id: 13,
    name: 'indomorf 50wp',
    src: './img/katalog/fungisida/KATALOG BARANG-76.png',
    desc: 'Bahan Aktif : Dimetomorf 50%',
  },
  {
    id: 14,
    name: 'paragon 325sc',
    src: './img/katalog/fungisida/KATALOG BARANG-124.png',
    desc: 'Bahan Aktif : Azoksistrobin 200g/l + Difenokonazol 125g/l',
  },
  {
    id: 15,
    name: 'starplus 70wp',
    src: './img/katalog/fungisida/KATALOG BARANG-166.png',
    desc: 'Bahan Aktif : Propineb 70%',
  },
  {
    id: 16,
    name: 'taft 75wp',
    src: './img/katalog/fungisida/KATALOG BARANG-173.png',
    desc: 'Bahan Aktif : Karbendazim 12% + Mankozeb 63%',
  },
  {
    id: 17,
    name: 'topsindo 70wp',
    src: './img/katalog/fungisida/KATALOG BARANG-177.png',
    desc: 'Bahan Aktif : Metil tiofanat 70%',
  },
  {
    id: 18,
    name: 'uniman 50/25wg',
    src: './img/katalog/fungisida/KATALOG BARANG-185.png',
    desc: 'Bahan Aktif : Tebukonazol 50% + Trifloksistrobin 25%',
  },
  {
    id: 19,
    name: 'victory 80wp',
    src: './img/katalog/fungisida/KATALOG BARANG-189.png',
    desc: 'Bahan Aktif : Mankozeb 80%',
  },
  {
    id: 20,
    name: 'prima-zeb 80wp',
    src: './img/katalog/fungisida/KATALOG BARANG-130.png',
    desc: 'Bahan Aktif : Mankozeb 80%',
  },
  {
    id: 21,
    name: 'mitrafos 400sl',
    src: './img/katalog/fungisida/KATALOG BARANG-103.png',
    desc: 'Bahan Aktif : Asam fosfit 400g/l',
  },
  {
    id: 22,
    name: 'indocozeb 80wp',
    src: './img/katalog/fungisida/KATALOG BARANG-244.png',
    desc: 'Bahan Aktif : Mankozeb 80%',
  },
  {
    id: 23,
    name: 'indonil 75wp',
    src: './img/katalog/fungisida/KATALOG BARANG-243.png',
    desc: 'Bahan Aktif : Klorotalonil 75%',
  },
  {
    id: 24,
    name: 'ventra 75wp',
    src: './img/katalog/fungisida/KATALOG BARANG-248.png',
    desc: 'Bahan Aktif : Klorotalonil 75%',
  },
  {
    id: 25,
    name: 'victory 75wp',
    src: './img/katalog/fungisida/KATALOG BARANG-251.png',
    desc: 'Bahan Aktif : Mankozeb 75%',
  },
  {
    id: 26,
    name: 'zebindo 80wp',
    src: './img/katalog/fungisida/KATALOG BARANG-256.png',
    desc: 'Bahan Aktif : Mankozeb 80%',
  },
  {
    id: 27,
    name: 'filia 525se',
    src: './img/katalog/fungisida/KATALOG BARANG-263.png',
    desc: 'Bahan Aktif : Trisiklazol 400g/l + Propikonazol 125g/l',
  },
  {
    id: 28,
    name: 'folirfos 400sl',
    src: './img/katalog/fungisida/KATALOG BARANG-265.png',
    desc: 'Bahan Aktif : Asam fosfit 400g/l',
  },
  {
    id: 29,
    name: 'booster 250ec',
    src: './img/katalog/fungisida/KATALOG BARANG-277.png',
    desc: 'Bahan Aktif : Difenokonazol 250g/l',
  },
  {
    id: 30,
    name: 'zenith 75wp',
    src: './img/katalog/fungisida/KATALOG BARANG-278.png',
    desc: 'Bahan Aktif : Propineb 75%',
  },
  {
    id: 31,
    name: 'microthiol 80wg',
    src: './img/katalog/fungisida/KATALOG BARANG-279.png',
    desc: 'Bahan Aktif : Belerang 80%',
  },
  {
    id: 32,
    name: 'procure 20wp',
    src: './img/katalog/fungisida/KATALOG BARANG-286.png',
    desc: 'Bahan Aktif : Simoksanil 20%',
  },
  {
    id: 33,
    name: 'clarazeb 60wp',
    src: './img/katalog/fungisida/KATALOG BARANG-288.png',
    desc: 'Bahan Aktif : Mankozeb 60%',
  },
  {
    id: 34,
    name: 'nebijin 0,3dp',
    src: './img/katalog/fungisida/KATALOG BARANG-289.png',
    desc: 'Bahan Aktif : Flusulfamid 0,3%',
  },
  {
    id: 35,
    name: 'dense 520sc',
    src: './img/katalog/fungisida/KATALOG BARANG-291.png',
    desc: 'Bahan Aktif : Metil tiofanat 520g/l',
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
