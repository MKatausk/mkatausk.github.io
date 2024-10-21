function filterData() {
  event.preventDefault();
  var startdate = document.getElementById("startdate").value;
  var enddate = document.getElementById("enddate").value;
  console.log("Starting date: " + startdate);
  console.log("Ending date: " + enddate);
  fetch("https://compute.samford.edu/zohauth/clients/data");
}

// Fetch data from the URL
fetch('https://compute.samford.edu/zohauth/clients/datajson')
.then(response => response.json())
.then(data => {
    data.forEach(item => {
        // Create a new row for each item
        const row = document.createElement('tr');
        
        // Create the ID cell with a link to details.html
        const idCell = document.createElement('td');
        const link = document.createElement('a');
        link.href = 'details.html';
        link.textContent = `Pitch ${item.id}`;
        idCell.appendChild(link);
        row.appendChild(idCell);
        
        // Speed cell
        const speedCell = document.createElement('td');
        speedCell.textContent = item.speed;
        row.appendChild(speedCell);
        
        // Result cell
        const resultCell = document.createElement('td');
        resultCell.textContent = item.result || '--';
        row.appendChild(resultCell);
        
        // Datetime cell
        const datetimeCell = document.createElement('td');
        datetimeCell.textContent = item.datetime || '--';
        row.appendChild(datetimeCell);
        
        // Append the row to the table
        table.appendChild(row);
    });
})
.catch(error => {
    console.error('Error fetching data:', error);
});