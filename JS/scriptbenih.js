//Katalog
// filter array
let filterarray = [];

// gallery card array

let galleryarray = [
  {
    id: 1,
    name: 'buncis pertiwi',
    src: './img/katalog/benih/KATALOG BARANG-22.png',
    desc: '',
  },
  {
    id: 2,
    name: 'cabai iggo tavi',
    src: './img/katalog/benih/KATALOG BARANG-23.png',
    desc: '',
  },
  {
    id: 3,
    name: 'k.panjang persada 35',
    src: './img/katalog/benih/KATALOG BARANG-24.png',
    desc: '',
  },
  {
    id: 4,
    name: 'kangkung bisi',
    src: './img/katalog/benih/KATALOG BARANG-25.png',
    desc: '',
  },
  {
    id: 5,
    name: 'kangkung bika',
    src: './img/katalog/benih/KATALOG BARANG-26.png',
    desc: '',
  },
  {
    id: 6,
    name: 'k.panjang pertiwi',
    src: './img/katalog/benih/KATALOG BARANG-80.png',
    desc: '',
  },
  {
    id: 7,
    name: 'kubis grand 11',
    src: './img/katalog/benih/KATALOG BARANG-89.png',
    desc: '',
  },
  {
    id: 8,
    name: 'sawi kumala',
    src: './img/katalog/benih/KATALOG BARANG-151.png',
    desc: '',
  },
  {
    id: 9,
    name: 'timun mira',
    src: './img/katalog/benih/KATALOG BARANG-201.png',
    desc: '',
  },
  {
    id: 10,
    name: 'semangka classic',
    src: './img/katalog/benih/KATALOG BARANG-207.png',
    desc: '',
  },
  {
    id: 11,
    name: 'semangka redin',
    src: './img/katalog/benih/KATALOG BARANG-208.png',
    desc: '',
  },
  {
    id: 12,
    name: 'semangka setabindo black',
    src: './img/katalog/benih/KATALOG BARANG-209.png',
    desc: '',
  },
  {
    id: 13,
    name: 'timun hercules',
    src: './img/katalog/benih/KATALOG BARANG-226.png',
    desc: '',
  },
  {
    id: 14,
    name: 'jagung bisi 18',
    src: './img/katalog/benih/KATALOG BARANG-227.png',
    desc: '',
  },
  {
    id: 15,
    name: 'kubis grand 22',
    src: './img/katalog/benih/KATALOG BARANG-90.png',
    desc: '',
  },
  {
    id: 16,
    name: 'cabai sios tavi',
    src: './img/katalog/benih/KATALOG BARANG-282.png',
    desc: '',
  },
  {
    id: 17,
    name: 'inpari 32 hdb',
    src: './img/katalog/benih/KATALOG BARANG-294.png',
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
