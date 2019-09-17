const mySpots = [
  { id: 'Playa-Aguieira', distance: 30 },
  { id: 'Playade-Fonforron', distance: 35 },
  { id: 'Playade-Barona', distance: 39 },
  { id: 'Playade-Rio-Sieira', distance: 48 },
  { id: 'Playade-Ladeira', distance: 52 },
  { id: 'Playade-Lanzada', distance: 52 },
  { id: 'Playade-Louro', distance: 56 },
  { id: 'Playade-Razo', distance: 60 },
  { id: 'Playa-de-Soesto', distance: 60 },
  { id: 'Nemina', distance: 69 },
];

function loadWidgets() {
  const spots = document.getElementById('spots');
  mySpots.forEach((mySpot) => {
    const spot = document.createElement('div');
    spot.className = 'beach wf-width-cont';
    const distance = document.createElement('div');
    distance.className = 'distance';
    distance.innerHTML = `<span>a</span>${mySpot.distance}<span>mins</span>`;
    spot.appendChild(distance);

    const iframe = document.createElement('iframe');
    iframe.marginWidth = '0';
    iframe.marginHeight = '0';
    iframe.className = 'surf-fc-i';
    iframe.scrolling = 'no';
    iframe.frameBorder = '0';
    iframe.src = `https://www.surf-forecast.com/breaks/${mySpot.id}/forecasts/widget/m`

    spot.appendChild(iframe);
    spots.appendChild(spot);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  loadWidgets();
});
