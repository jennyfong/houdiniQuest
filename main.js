// main.js
function generateGraph() {
      const general = document.getElementById('general').value;
      const simulation = document.getElementById('simulation').value;
      const hda = document.getElementById('hda').value;
      const pipeline = document.getElementById('pipeline').value;
      const rendering = document.getElementById('rendering').value;

      const ctx = document.getElementById('abilityChart').getContext('2d');
      if (window.myChart) {
        window.myChart.destroy();
      }
      window.myChart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['general', 'simulation', 'hda', 'pipeline', 'rendering'],
          datasets: [{
            label: 'Abilities',
            data: [general, simulation, hda, pipeline, rendering],
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
              suggestedMax: 3
            }
          }
        }
      });
    }

