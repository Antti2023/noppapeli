let pelaaja = 1;
let heittojenSumma1 = 0;
let heittojenSumma2 = 0;
let pistemaara = 100;

function heitaNoppaa(pelaajaNumero) {
    if (pelaajaNumero !== pelaaja) return;

    const nopanheitto = Math.floor(Math.random() * 6) + 1;
    const noppaKuva = 'assets/noppa' + nopanheitto + '.png';
    document.getElementById('noppa' + pelaaja).src = noppaKuva;

    if (nopanheitto === 1) {
        if (pelaaja === 1) {
            heittojenSumma1 = 0;
        } else {
            heittojenSumma2 = 0;
        }
        vaihdaVuoro();
    } else {
        if (pelaaja === 1) {
            heittojenSumma1 += nopanheitto;
            document.getElementById('pisteet1').innerText = heittojenSumma1;
        } else {
            heittojenSumma2 += nopanheitto;
            document.getElementById('pisteet2').innerText = heittojenSumma2;
        }
    }
    tarkistaVoitto();
}

function vaihdaVuoro() {
    pelaaja = pelaaja === 1 ? 2 : 1;
    document.getElementById('pelaaja1').classList.toggle('inactive');
    document.getElementById('pelaaja2').classList.toggle('inactive');
}

function tarkistaVoitto() {
    if (pelaaja === 1 && heittojenSumma1 >= pistemaara) {
        alert('Pelaaja 1 voitti!');
        resetoiPeli();
    } else if (pelaaja === 2 && heittojenSumma2 >= pistemaara) {
        alert('Pelaaja 2 voitti!');
        resetoiPeli();
    }
}

function resetoiPeli() {
    document.getElementById('pisteet1').innerText = 0;
    document.getElementById('pisteet2').innerText = 0;

    document.getElementById('noppa1').src = 'assets/noppa1.png';
    document.getElementById('noppa2').src = 'assets/noppa1.png';

    pelaaja = 1;
    document.getElementById('pelaaja1').classList.remove('inactive');
    document.getElementById('pelaaja2').classList.add('inactive');

    heittojenSumma1 = 0;
    heittojenSumma2 = 0;
}

document.getElementById('vaihdaVuoro').addEventListener('click', () => {
    vaihdaVuoro();
});
