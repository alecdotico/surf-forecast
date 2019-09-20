// Galicia spots
const spots = {
  PLAYADE_LOURO: { id: 'Playade-Louro' },
  PLAYADE_RIAZOR: { id: 'Playade-Riazor' },
  NEMINA: { id: 'Nemina' },
  PANTIN: { id: 'Pantin' },
  PEDRA_DO_SAL: { id: 'Pedra-do-Sal' },
  PLAYA_AGUIEIRA: { id: 'Playa-Aguieira' },
  PLAYA_A_MAROSA: { id: 'Playa-A-Marosa' },
  PLAYADE_AREA: { id: 'Playade-Area' },
  PLAYADE_BALDANIO: { id: 'Playade-Baldanio' },
  PLAYADE_BALEO: { id: 'Playade-Baleo' },
  PLAYADE_BARONA: { id: 'Playade-Barona' },
  PLAYADE_BARRA: { id: 'Playade-Barra' },
  PLAYADE_BARRANAN: { id: 'Playade-Barranan' },
  PLAYADE_BASTIAGUEIROS: { id: 'Playade-Bastiagueiros' },
  PLAYADE_CAION: { id: 'Playade-Caion' },
  PLAYADE_CAMPELO: { id: 'Playade-Campelo' },
  PLAYADE_CARINO: { id: 'Playade-Carino' },
  PLAYADE_CARNOTA: { id: 'Playade-Carnota' },
  PLAYADE_CASTRO: { id: 'Playade-Castro' },
  PLAYADE_DONINOS: { id: 'Playade-Doninos' },
  PLAYADE_ESPASANTE: { id: 'Playade-Espasante' },
  PLAYADE_ESTEIRO: { id: 'Playade-Esteiro' },
  PLAYADE_FONFORRON: { id: 'Playade-Fonforron' },
  PLAYADE_LADEIRA: { id: 'Playade-Ladeira' },
  PLAYADE_LANZADA: { id: 'Playade-Lanzada' },
  PLAYADE_LARINO: { id: 'Playade-Larino' },
  PLAYADE_MADORRA: { id: 'Playade-Madorra' },
  PLAYADE_MALPICA: { id: 'Playade-Malpica' },
  PLAYADE_MELIDE: { id: 'Playade-Melide' },
  PLAYADE_MONTALBO: { id: 'Playade-Montalbo' },
  PLAYADE_NEGRA: { id: 'Playade-Negra' },
  PLAYADE_PATOS: { id: 'Playade-Patos' },
  PLAYADE_RAZO: { id: 'Playade-Razo' },
  PLAYADE_RIO_SIEIRA: { id: 'Playade-Rio-Sieira' },
  PLAYADE_SABON: { id: 'Playade-Sabon' },
  PLAYADE_SAN_CIBRAO: { id: 'Playade-San-Cibrao' },
  PLAYADE_SAN_MIGUELDE_REINANTE: { id: 'Playade-San-Miguelde-Reinante' },
  PLAYADE_SAN_ROMAN: { id: 'Playade-San-Roman' },
  PLAYADE_SAN_XURXO: { id: 'Playade-San-Xurxo' },
  PLAYADE_SARRIGAL: { id: 'Playade-Sarrigal' },
  PLAYADE_SEAIA: { id: 'Playade-Seaia' },
  PLAYADE_AREA_SUERTO: { id: 'Playade-Area-Suerto' },
  PLAYA_DE_SOESTO: { id: 'Playa-de-Soesto' },
  PLAYADE_TRABA: { id: 'Playade-Traba' },
  PLAYADO_CARREIRO: { id: 'Playado-Carreiro' },
  PLAYADE_ORZAN: { id: 'Playade-Orzan' },
  PLAYADO_ROSTRO: { id: 'Playado-Rostro' },
  PLAYA_RAPADOIRA: { id: 'Playa-Rapadoira' },
  PONZOS: { id: 'Ponzos' },
  RIA_FOZ: { id: 'Ria-Foz' },
  STA_COMBA: { id: 'Sta-Comba' },
  SANTA_MARIADE_OIA: { id: 'Santa-Mariade-Oia' },
  SERANS: { id: 'Serans' },
  VALDOVINO: { id: 'Valdovino' },
  VILLARRUBE: { id: 'Villarrube' }
};

const alexSpots = [
  { id: spots.PLAYA_AGUIEIRA.id, distance: 30 },
  { id: spots.PLAYADE_FONFORRON.id, distance: 35 },
  { id: spots.PLAYADE_BARONA.id, distance: 39 },
  { id: spots.PLAYADE_RIO_SIEIRA.id, distance: 48 },
  { id: spots.PLAYADE_LADEIRA.id, distance: 52 },
  { id: spots.PLAYADE_LANZADA.id, distance: 52 },
  { id: spots.PLAYADE_MONTALBO.id, distance: 53 },
  { id: spots.PLAYADE_BASTIAGUEIROS.id, distance: 55 },
  { id: spots.PLAYADE_LOURO.id, distance: 56 },
  { id: spots.PLAYADE_RAZO.id, distance: 60 },
  { id: spots.PLAYA_DE_SOESTO.id, distance: 60 },
  { id: spots.PLAYADE_CAION.id, distance: 65 },
  { id: spots.NEMINA.id, distance: 69 },
];

const spotsByUser = {
  alex: alexSpots,
  isla: [{ id: spots.PLAYADE_RAZO.id }],
};

function getUserSpots() {
  const params = (new URL(document.location)).searchParams;
  const user = params.get('de') || 'alex';
  updateTitle(user);
  const spots = spotsByUser[user] || alexSpots;
  return spots;
}

const capitalize = text => text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

function updateTitle(user) {
  const text = `Surf spots favoritos de ${capitalize(user)}`;
  document.title = text;
  const h1 = document.getElementsByTagName('h1')[0];
  h1.innerHTML = text;
}

function loadWidgets() {
  const app = document.getElementById('app');

  getUserSpots().forEach((mySpot) => {
    const spot = document.createElement('div');
    spot.className = 'beach wf-width-cont';
    const distance = document.createElement('div');
    distance.className = 'distance';
    if (mySpot.distance) {
      distance.innerHTML = `<span>a</span>${mySpot.distance}<span>mins</span>`;
    }
    spot.appendChild(distance);

    const iframe = document.createElement('iframe');
    iframe.marginWidth = '0';
    iframe.marginHeight = '0';
    iframe.className = 'surf-fc-i';
    iframe.scrolling = 'no';
    iframe.frameBorder = '0';
    iframe.src = `https://www.surf-forecast.com/breaks/${mySpot.id}/forecasts/widget/m`

    spot.appendChild(iframe);
    app.appendChild(spot);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  loadWidgets();
});
