//Katalog
// filter array
let filterarray = [];

// gallery card array

let galleryarray = [
  {
    id: 1,
    name: 'bigest 40ec',
    src: './img/katalog/zpt/KATALOG BARANG-20.png',
    desc: 'Bahan Aktif : Asam Giberelat 40g/l',
  },
  {
    id: 2,
    name: 'better 10pa',
    src: './img/katalog/zpt/KATALOG BARANG-28.png',
    desc: 'Bahan Aktif : Etefon 10%',
  },
  {
    id: 3,
    name: '+getah putih 10pa',
    src: './img/katalog/zpt/KATALOG BARANG-62.png',
    desc: 'Bahan Aktif : Etefon 10%',
  },
  {
    id: 4,
    name: '+getah merah 10pa',
    src: './img/katalog/zpt/KATALOG BARANG-63.png',
    desc: 'Bahan Aktif : Etefon 10%',
  },
  {
    id: 5,
    name: 'guela 480sl',
    src: './img/katalog/zpt/KATALOG BARANG-69.png',
    desc: 'Bahan Aktif : Etefon 480g/l',
  },
  {
    id: 6,
    name: 'katrol putih 10pa',
    src: './img/katalog/zpt/KATALOG BARANG-81.png',
    desc: 'Bahan Aktif : Etefon 10%',
  },
  {
    id: 7,
    name: 'labana 255sc',
    src: './img/katalog/zpt/KATALOG BARANG-91.png',
    desc: 'Bahan Aktif : Paklobutrazol 255g/l',
  },
  {
    id: 8,
    name: 'raptor 100pa',
    src: './img/katalog/zpt/KATALOG BARANG-143.png',
    desc: 'Bahan Aktif : Etefon 100g/l',
  },
  {
    id: 9,
    name: 'superel putih 10pa',
    src: './img/katalog/zpt/KATALOG BARANG-167.png',
    desc: 'Bahan Aktif : Etefon 10%',
  },
  {
    id: 10,
    name: 'superel hijau 10pa',
    src: './img/katalog/zpt/KATALOG BARANG-168.png',
    desc: 'Bahan Aktif : Etefon 10%',
  },
  {
    id: 11,
    name: 'prothephon 480sl',
    src: './img/katalog/zpt/KATALOG BARANG-196.png',
    desc: 'Bahan Aktif : Etefon 480g/l',
  },
  {
    id: 12,
    name: 'cepha 480sl',
    src: './img/katalog/zpt/KATALOG BARANG-205.png',
    desc: 'Bahan Aktif : Etefon 480g/l',
  },
  {
    id: 13,
    name: 'cepha 100pa',
    src: './img/katalog/zpt/KATALOG BARANG-206.png',
    desc: 'Bahan Aktif : Etefon 100g/l',
  },
  {
    id: 14,
    name: 'guela 12,5pa',
    src: './img/katalog/zpt/KATALOG BARANG-257.png',
    desc: 'Bahan Aktif : Etefon 12.5%',
  },
  {
    id: 15,
    name: 'katrol merah 10pa',
    src: './img/katalog/zpt/KATALOG BARANG-258.png',
    desc: 'Bahan Aktif : Etefon 10%',
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
