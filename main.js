// script.js
async function loadAbilities() {
  const response = await fetch('abilities.json');
  const abilities = await response.json();
  const form = document.getElementById('abilityForm');
  form.innerHTML = '';

  abilities.forEach(ability => {
    form.innerHTML += `
      <label for="${ability}">${ability} (0-10):</label>
      <input type="number" id="${ability}" min="0" max="10" value="5"><br><br>
    `;
  });
  form.innerHTML += '<button type="button" onclick="generateGraph()">Generate Graph</button>';
}

function generateGraph() {
  const inputs = Array.from(document.querySelectorAll('#abilityForm input'));
  const labels = inputs.map(input => input.id);
  const values = inputs.map(input => input.value);

  const ctx = document.getElementById('abilityChart').getContext('2d');
  if (window.myChart) window.myChart.destroy();
  window.myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels,
      datasets: [{
        label: 'Abilities',
        data: values,
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)'
      }]
    },
    options: { scales: { r: { suggestedMin: 0, suggestedMax: 10 } } }
  });
}
window.onload = loadAbilities;

// abilities.json
[
  "Strength",
  "Agility",
  "Intelligence",
  "Charisma"
]
