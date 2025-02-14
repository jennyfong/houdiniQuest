// main.js
function generateGraph() {
      const strength = document.getElementById('strength').value;
      const agility = document.getElementById('agility').value;
      const intelligence = document.getElementById('intelligence').value;
      const charisma = document.getElementById('charisma').value;

      const ctx = document.getElementById('abilityChart').getContext('2d');
      if (window.myChart) {
        window.myChart.destroy();
      }
      window.myChart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['Strength', 'Agility', 'Intelligence', 'Charisma'],
          datasets: [{
            label: 'Abilities',
            data: [strength, agility, intelligence, charisma],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: 'rgba(54, 162, 235, 1)'
          }]
        },
        options: {
          scales: {
            r: {
              suggestedMin: 0,
              suggestedMax: 10
            }
          }
        }
      });
    }
