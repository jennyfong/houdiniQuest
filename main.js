// main.js
function generateGraph() {
      const solver = document.getElementById('solver').value;
      const hda = document.getElementById('hda').value;
      const pipeline = document.getElementById('pipeline').value;
      const technical = document.getElementById('technical').value;

      const ctx = document.getElementById('abilityChart').getContext('2d');
      if (window.myChart) {
        window.myChart.destroy();
      }
      window.myChart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['Solver', 'HDAs', 'Pipeline', 'Technical'],
          datasets: [{
            label: 'Abilities',
            data: [solver, hda, pipeline, technical],
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
              suggestedMax: 5
            }
          }
        }
      });
    }

function check(name){

}