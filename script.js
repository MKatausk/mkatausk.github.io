function filterData(event) {
  event.preventDefault(); // Prevent form submission behavior
  
  // Get start and end dates from input fields
  var startdate = new Date(document.getElementById("startdate").value);
  var enddate = new Date(document.getElementById("enddate").value);
  
  console.log("Starting date: " + startdate);
  console.log("Ending date: " + enddate);

  // Ensure the enddate includes the full day by setting the time to the end of the day
  enddate.setHours(23, 59, 59, 999);

  // Get all rows in the table except the header row
  var rows = document.querySelectorAll("#pitch-table tbody tr");

  // Loop through each row
  rows.forEach(function(row) {
      // Get the datetime value from the row (assuming it's in the 4th cell)
      var datetimeText = row.cells[3].textContent.trim();

      // If the datetime is missing or invalid, hide the row
      if (!datetimeText || datetimeText === '--') {
          row.style.display = 'none';
          return;
      }

      // Parse the datetime from the table row
      var rowDate = new Date(datetimeText);

      // Compare the rowDate with the start and end dates
      if (rowDate >= startdate && rowDate <= enddate) {
          // Show the row if within the range
          row.style.display = '';
      } else {
          // Hide the row if outside the range
          row.style.display = 'none';
      }
  });
}

    // Fetch data from the URL
    fetch('https://compute.samford.edu/zohauth/clients/datajson')
        .then(response => response.json())
        .then(data => {
            // Clear existing rows in tbody (if necessary)
            tbody.innerHTML = '';

            // Loop through each item in the data
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
                
                // Append the row to the tbody
                tbody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
