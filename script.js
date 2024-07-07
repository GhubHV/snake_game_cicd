document.addEventListener('DOMContentLoaded', () => {

    var positionJoueur1 = 1;
    var positionJoueur2 = 1;

    dessinerPlateau(positionJoueur1, positionJoueur2);

    const divBoutons = document.getElementById('divBoutons');

    var boutonJoueur1 = document.createElement('button');
    boutonJoueur1.textContent = 'Joueur_1 0';
    boutonJoueur1.style = 'margin:50px';
    boutonJoueur1.style = "width:60px; height:40px";

    var boutonJoueur2 = document.createElement('button');
    boutonJoueur2.textContent = 'Joueur_2 0';
    boutonJoueur2.style = 'margin:50px';
    boutonJoueur2.style = "width:60px; height:40px";

    boutonJoueur1.addEventListener('click', () => {
        var tirage = Math.floor(Math.random() * 6) + 1;
        boutonJoueur1.textContent = `Joueur_1 ${tirage}`;
        positionJoueur1 = positionJoueur1 + tirage;
        if (positionJoueur1 > 50) {
            positionJoueur1 = 25;
        }
        boutonJoueur1.disabled = true;
        boutonJoueur2.disabled = false;
        if (positionJoueur1 === 50) {
            dessinerPlateau(positionJoueur1, positionJoueur2);
            setTimeout(() => {

                alert('Joueur_1 gagne');
                positionJoueur1 = 1;
                positionJoueur2 = 1;
                boutonJoueur1.disabled = false;
                boutonJoueur2.disabled = true;
                dessinerPlateau(positionJoueur1, positionJoueur2);
            }
                , 500);
        }
        dessinerPlateau(positionJoueur1, positionJoueur2);
    });

    boutonJoueur2.addEventListener('click', () => {
        var tirage = Math.floor(Math.random() * 6) + 1;
        boutonJoueur2.textContent = `Joueur_2 ${tirage}`;
        positionJoueur2 = positionJoueur2 + tirage;
        if (positionJoueur2 > 50) {
            positionJoueur2 = 25;
        }
        boutonJoueur1.disabled = false;
        boutonJoueur2.disabled = true;
        if (positionJoueur2 === 50) {
            dessinerPlateau(positionJoueur1, positionJoueur2);
            setTimeout(() => {

                alert('Joueur_2 gagne');
                positionJoueur1 = 1;
                positionJoueur2 = 1;
                boutonJoueur1.disabled = false;
                boutonJoueur2.disabled = true;
                dessinerPlateau(positionJoueur1, positionJoueur2);
            }
                , 500);
        }

        dessinerPlateau(positionJoueur1, positionJoueur2);
    });

    boutonJoueur2.disabled = true;

    divBoutons.appendChild(boutonJoueur1);
    divBoutons.appendChild(boutonJoueur2);


});

function dessinerPlateau(positionJoueur1, positionJoueur2) {
    const table = document.querySelector('#numberTable');
    table.style.border = "1px solid #000"
    // the same as
    table.style.borderWidth = "1px";
    table.style.borderColor = "#000";
    table.style.borderStyle = "solid";
    const tableBody = document.querySelector('#numberTable tbody');
    tableBody.innerHTML = "";

    const rows = 5;
    const cols = 10;
    let number = 1;

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
}
