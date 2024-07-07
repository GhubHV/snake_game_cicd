const { JSDOM } = require('jsdom');

// Simuler le document HTML
const dom = new JSDOM(`
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Snake Game</h1>
        <table id="numberTable">
            <tbody></tbody>
        </table>
        <div id="divBoutons"></div>
    </div>
    <footer>Réalisé par Mael OLIVEIRA, Théo HOFFMANN et Hélias VECELLIO - 2023</footer>
</body>
</html>
`);

global.document = dom.window.document;
global.window = dom.window;

const script = require('../script');

describe('Tests for script.js', () => {

    test('calculerPiegesBonus génère des pièges et bonus', () => {
        const { piege1, piege2, piege3, bonus1, bonus2 } = script.calculerPiegesBonus();
        expect(piege1).toBeGreaterThan(1);
        expect(piege1).toBeLessThanOrEqual(49);
        expect(piege2).toBeGreaterThan(1);
        expect(piege2).toBeLessThanOrEqual(49);
        expect(piege3).toBeGreaterThan(1);
        expect(piege3).toBeLessThanOrEqual(49);
        expect(bonus1).toBeGreaterThan(1);
        expect(bonus1).toBeLessThanOrEqual(29);
        expect(bonus2).toBeGreaterThan(1);
        expect(bonus2).toBeLessThanOrEqual(29);

        expect(piege1).not.toBe(piege2);
        expect(piege1).not.toBe(piege3);
        expect(piege2).not.toBe(piege3);

        expect(bonus1).not.toBe(bonus2);
    });

    test('dessinerPlateau doit retourner un plateau avec la position des joueurs', () => {
        const positionJoueur1 = 1;
        const positionJoueur2 = 1;
        script.dessinerPlateau(positionJoueur1, positionJoueur2);
        const table = document.querySelector('#numberTable tbody');
        expect(table.children.length).toBe(5);
        expect(table.children[0].children.length).toBe(10);
        const firstCell = table.querySelector('td');
        expect(firstCell.textContent).toBe('1');
        const secondCell = table.children[0].children[1];
        expect(secondCell.textContent).toBe('2');
    });

    test('Le déplacement du joueur se fait bien', () => {
        let positionJoueur1 = 1;
        const tirage = 4;
        positionJoueur1 += tirage;
        expect(positionJoueur1).toBe(5);
        expect(positionJoueur1).not.toBe(7);

        let positionJoueur2 = 1;
        const tirage2 = 5;
        positionJoueur2 += tirage2;
        expect(positionJoueur2).toBe(6);
        expect(positionJoueur2).not.toBe(7);
    });
});
