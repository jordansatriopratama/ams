//Katalog
// filter array
let filterarray = [];

// gallery card array

let galleryarray = [
  {
    id: 1,
    name: 'agrimore-n',
    src: './img/katalog/pupuk/KATALOG BARANG-7.png',
    desc: '29+10+10+TE',
  },
  {
    id: 2,
    name: 'agrimore-e',
    src: './img/katalog/pupuk/KATALOG BARANG-8.png',
    desc: '18+18+18',
  },
  {
    id: 3,
    name: 'agrimore-k',
    src: './img/katalog/pupuk/KATALOG BARANG-9.png',
    desc: '15:10:30+3MgO+TE',
  },
  {
    id: 4,
    name: 'fertiphos',
    src: './img/katalog/pupuk/KATALOG BARANG-54.png',
    desc: 'P2O5 20% + MgO 0.5% + S 1% + SiO2 10% + B2O3 0,5% + CaO 15%',
  },
  {
    id: 5,
    name: 'forsil',
    src: './img/katalog/pupuk/KATALOG BARANG-57.png',
    desc: 'Silika 20% + Seng 0,25% + Molibdenum 0,001%',
  },
  {
    id: 6,
    name: 'mamigro',
    src: './img/katalog/pupuk/KATALOG BARANG-94.png',
    desc: '12+27+23',
  },
  {
    id: 7,
    name: 'neo kristalon hijau',
    src: './img/katalog/pupuk/KATALOG BARANG-111.png',
    desc: '18-18-18+3MgO+2S+TE',
  },
  {
    id: 8,
    name: 'neo kristalon merah',
    src: './img/katalog/pupuk/KATALOG BARANG-112.png',
    desc: '12-12-36+2MgO+TE',
  },
  {
    id: 9,
    name: 'npk 16.16.16',
    src: './img/katalog/pupuk/KATALOG BARANG-118.png',
    desc: '16.16.16',
  },
  {
    id: 10,
    name: 'nutri-comp b',
    src: './img/katalog/pupuk/KATALOG BARANG-119.png',
    desc: 'N2 6% + P2O5 22% + K2O 32% + MgO 3%',
  },
  {
    id: 11,
    name: 'nutri-comp d',
    src: './img/katalog/pupuk/KATALOG BARANG-120.png',
    desc: 'N2 22% + P2O5 17% + K2O 15% + MgO 1%',
  },
  {
    id: 12,
    name: 'magnesium sulfate',
    src: './img/katalog/pupuk/KATALOG BARANG-131.png',
    desc: 'MgO 16% + S 13%',
  },
  {
    id: 13,
    name: 'multi padi',
    src: './img/katalog/pupuk/KATALOG BARANG-132.png',
    desc: 'N 13% + K2O 44%',
  },
  {
    id: 14,
    name: 'phonska alam',
    src: './img/katalog/pupuk/KATALOG BARANG-133.png',
    desc: 'P2O5 10% + K2O 10%',
  },
  {
    id: 15,
    name: 'mkp',
    src: './img/katalog/pupuk/KATALOG BARANG-134.png',
    desc: 'P2O5 52% + K2O 34%',
  },
  {
    id: 16,
    name: 'kno3 pn prill',
    src: './img/katalog/pupuk/KATALOG BARANG-135.png',
    desc: 'N 13% + K2O 45%',
  },
  {
    id: 17,
    name: 'kno3 cpn',
    src: './img/katalog/pupuk/KATALOG BARANG-136.png',
    desc: 'N 15% + K2O 15%',
  },
  {
    id: 18,
    name: 'sapta bio',
    src: './img/katalog/pupuk/KATALOG BARANG-150.png',
    desc: '',
  },
  {
    id: 19,
    name: 'leili 2000',
    src: './img/katalog/pupuk/KATALOG BARANG-204.png',
    desc: '',
  },
  {
    id: 20,
    name: 'phosgro',
    src: './img/katalog/pupuk/KATALOG BARANG-212.png',
    desc: 'P2O5 20% + MgO 3% + CaO 20% + S 1% + B2O3 0.2% + SiO2 1.5%',
  },
  {
    id: 21,
    name: 'bactenic granul',
    src: './img/katalog/pupuk/KATALOG BARANG-213.png',
    desc: '',
  },
  {
    id: 22,
    name: 'npk kebomas 13-6-27-4',
    src: './img/katalog/pupuk/KATALOG BARANG-214.png',
    desc: '13-6-27-4',
  },
  {
    id: 23,
    name: 'npk kebomas 15-15-15',
    src: './img/katalog/pupuk/KATALOG BARANG-215.png',
    desc: '15-15-15',
  },
  {
    id: 24,
    name: 'zk petro',
    src: './img/katalog/pupuk/KATALOG BARANG-216.png',
    desc: 'K2O 50% + S 17%',
  },
  {
    id: 25,
    name: 'among tani 16-16-16',
    src: './img/katalog/pupuk/KATALOG BARANG-217.png',
    desc: '16-16-16',
  },
  {
    id: 26,
    name: 'nitrea',
    src: './img/katalog/pupuk/KATALOG BARANG-218.png',
    desc: 'Urea Prill 46% N',
  },
  {
    id: 27,
    name: 'urea petro',
    src: './img/katalog/pupuk/KATALOG BARANG-225.png',
    desc: 'N 46%',
  },
  {
    id: 28,
    name: 'ultradap',
    src: './img/katalog/pupuk/KATALOG BARANG-231.png',
    desc: 'N 12% + P2O5 60%',
  },
  {
    id: 29,
    name: 'grand k kristal',
    src: './img/katalog/pupuk/KATALOG BARANG-253.png',
    desc: 'N 13% + K2O 46%',
  },
  {
    id: 30,
    name: 'cng',
    src: './img/katalog/pupuk/KATALOG BARANG-260.png',
    desc: '15-0-0-26',
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
