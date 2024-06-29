document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#numberTable tbody');
    const rows = 5;
    const cols = 10;
    let number = 1;

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('td');
            cell.textContent = number;
            row.appendChild(cell);
            number++;
        }
        tableBody.appendChild(row);
    }
});

