document.getElementById('filterForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    // Filtering logic based on dates
    // You would need to add logic to filter table rows based on dates
    console.log('Filtering from:', startDate, 'to:', endDate);
});

// Dummy data (you can populate this from a database or API)
const data = [
    { date: '2024-10-01', type: 'Fastball', speed: '95 mph', result: 'Strike' },
    { date: '2024-10-02', type: 'Slider', speed: '88 mph', result: 'Ball' },
    { date: '2024-10-03', type: 'Curveball', speed: '78 mph', result: 'Foul' },
];

// Function to populate the table
const tableBody = document.querySelector('#statsTable tbody');

data.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${row.date}</td><td>${row.type}</td><td>${row.speed}</td><td>${row.result}</td>`;
    tableBody.appendChild(tr);
});