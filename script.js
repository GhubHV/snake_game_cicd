document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('#numberTable');
    table.style.border = "1px solid #000"
    // the same as
    table.style.borderWidth = "1px";
    table.style.borderColor = "#000";
    table.style.borderStyle = "solid";
    const tableBody = document.querySelector('#numberTable tbody');

    const rows = 5;
    const cols = 10;
    let number = 1;

    const positionJoueur1 = 1;
    const positionJoueur2 = 1;

    tableBody.style.textAlign = "center";

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('td');
            cell.style.border = "1px solid #000"
            // the same as
            cell.style.borderWidth = "1px";
            cell.style.borderColor = "#000";
            cell.style.borderStyle = "solid";
            cell.style.width = "100px";
            cell.style.height = "100px";
            cell.textContent = number;

            if (number === positionJoueur1) {
                const pion1 = document.createElement('div');
                pion1.style.width = '30px';
                pion1.style.height = '30px';
                pion1.style.borderRadius = '50%';
                pion1.style.backgroundColor = 'red';
                cell.appendChild(pion1);
            }
            if (number === positionJoueur2) {
                const pion2 = document.createElement('div');
                pion2.style.width = '30px';
                pion2.style.height = '30px';
                pion2.style.borderRadius = '50%';
                pion2.style.backgroundColor = 'green';
                cell.appendChild(pion2);
            }

            row.appendChild(cell);
            number++;
        }
        tableBody.appendChild(row);
    }
});


