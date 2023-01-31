const data = {
  BRO: {
    BSN: { W: 10, L: 12 },

    CHC: { W: 15, L: 7 },

    CIN: { W: 15, L: 7 },

    NYG: { W: 14, L: 8 },

    PHI: { W: 14, L: 8 },

    PIT: { W: 15, L: 7 },

    STL: { W: 11, L: 11 }
  },

  BSN: {
    BRO: { W: 12, L: 10 },

    CHC: { W: 13, L: 9 },

    CIN: { W: 13, L: 9 },

    NYG: { W: 13, L: 9 },

    PHI: { W: 14, L: 8 },

    PIT: { W: 12, L: 10 },

    STL: { W: 9, L: 13 }
  },

  CHC: {
    BRO: { W: 7, L: 15 },

    BSN: { W: 9, L: 13 },

    CIN: { W: 12, L: 10 },

    NYG: { W: 7, L: 15 },

    PHI: { W: 16, L: 6 },

    PIT: { W: 8, L: 14 },

    STL: { W: 10, L: 12 }
  },

  CIN: {
    BRO: { W: 7, L: 15 },

    BSN: { W: 9, L: 13 },

    CHC: { W: 10, L: 12 },

    NYG: { W: 13, L: 9 },

    PHI: { W: 13, L: 9 },

    PIT: { W: 13, L: 9 },

    STL: { W: 8, L: 14 }
  },

  NYG: {
    BRO: { W: 8, L: 14 },

    BSN: { W: 9, L: 13 },

    CHC: { W: 15, L: 7 },

    CIN: { W: 9, L: 13 },

    PHI: { W: 12, L: 10 },

    PIT: { W: 15, L: 7 },

    STL: { W: 13, L: 9 }
  },

  PHI: {
    BRO: { W: 8, L: 14 },

    BSN: { W: 8, L: 14 },

    CHC: { W: 6, L: 16 },

    CIN: { W: 9, L: 13 },

    NYG: { W: 10, L: 12 },

    PIT: { W: 13, L: 9 },

    STL: { W: 8, L: 14 }
  },

  PIT: {
    BRO: { W: 7, L: 15 },

    BSN: { W: 10, L: 12 },

    CHC: { W: 14, L: 8 },

    CIN: { W: 9, L: 13 },

    NYG: { W: 7, L: 15 },

    PHI: { W: 9, L: 13 },

    STL: { W: 6, L: 16 }
  },

  STL: {
    BRO: { W: 11, L: 11 },

    BSN: { W: 13, L: 9 },

    CHC: { W: 12, L: 10 },

    CIN: { W: 14, L: 8 },

    NYG: { W: 9, L: 13 },

    PHI: { W: 14, L: 8 },

    PIT: { W: 16, L: 6 }
  }
};
/** This code creates a table with a header row and multiple team rows in the HTML document.
 * The team names are extracted from a JSON data object and used to create the header rows and team column.
 * The table, row, and cell elements are constructed using `document.createElement()`.
 * The code also creates an additional footer row with the team names.
 * Finally, the constructed table is added to the body of the HTML document.
 */
// extract the team names from the json data
const teams = Object.keys(data);
console.log(data, teams);
// create the table
const table = document.createElement('table');

// create the header row
const headerRow = document.createElement('tr');
headerRow.setAttribute('class', 'header-row');
// create the first header cell
const firstHeader = document.createElement('th');
firstHeader.innerText = 'Tm'; // header label
headerRow.appendChild(firstHeader);

// create a header for each team
teams.forEach(team => {
  const th = document.createElement('th');
  th.innerText = team;
  headerRow.appendChild(th);
});
// add the header row to the table
table.appendChild(headerRow);

// create a row for each team
teams.forEach(team1 => {
  const row = document.createElement('tr');
  // create the first cell for the team name
  const teamColHeader = document.createElement('th');
  teamColHeader.setAttribute('class', 'header-col');
  teamColHeader.innerText = team1;
  row.appendChild(teamColHeader);

  // create a cell for each team's record against team1
  teams.forEach(team2 => {
    const td = document.createElement('td');
    if (team1 === team2) {
      td.innerText = '--';
    } else {
      const record = data[team1][team2];
      td.innerText = record['W'];
    }
    row.appendChild(td);
  });
  // add the row to the table
  table.appendChild(row);
});

// create a footer for each team
const footerRow = document.createElement('tr');
// create the first footer cell
const firstFooter = document.createElement('th');
firstFooter.innerText = 'Tm';
footerRow.appendChild(firstFooter); // header label
teams.forEach(team => {
  const th = document.createElement('th');
  th.innerText = team;
  footerRow.appendChild(th);
});
// add the footer row to the table
table.appendChild(footerRow);

// add the table to the page
document.getElementById('root').appendChild(table);
