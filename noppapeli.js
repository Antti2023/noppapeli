let pelaaja = 1;
let heittojenSumma = 0;
let pistemaara = 100;

function heitaNoppaa(pelaajaNumero) {
    if (pelaajaNumero !== pelaaja) return; 
      
    const nopanheitto = Math.floor(Math.random() * 6) + 1;
    const noppaKuva = 'assets/noppa' + nopanheitto + '.png'; 
    document.getElementById('noppa' + pelaaja).src = noppaKuva;
    
    if (nopanheitto === 1) {
        heittojenSumma = 0;
        pelaaja = pelaaja === 1 ? 2 : 1;
        vaihdaVuoro();
    } else {
        heittojenSumma += nopanheitto;
    }
    document.getElementById('pisteet' + pelaaja).innerText = heittojenSumma;
    tarkistaVoitto();
}
function vaihdaVuoro(pelaajaNumero) {
    if (pelaajaNumero === pelaaja) {
        pelaaja = pelaaja === 1 ? 2 : 1;
        document.getElementById('pelaaja1').classList.toggle('inactive');
        document.getElementById('pelaaja2').classList.toggle('inactive');
    }
}
function tarkistaVoitto() {
    if (heittojenSumma >= pistemaara) {
        alert('Pelaaja ' + pelaaja + ' voitti!');
        resetoiPeli();
    }
}

function resetoiPeli() {
    document.getElementById('pisteet1').innerText = 0;
    document.getElementById('pisteet2').innerText = 0;
    
 
    document.getElementById('noppa1').src = 'assets/noppa.png';
    document.getElementById('noppa2').src = 'assets/noppa.png';
    
 
    pelaaja = 1;
    document.getElementById('pelaaja1').classList.remove('inactive');
    document.getElementById('pelaaja2').classList.add('inactive');
    
   
    heittojenSumma = 0;

    
}