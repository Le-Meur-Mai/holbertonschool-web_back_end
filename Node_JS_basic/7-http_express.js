const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

    const lines = data.split('\n');
    // On coupe la string a chaque \n pour faire les lignes
    const rows = lines.slice(1).filter((line) => line.trim() !== '');
    // On enleve le header et les lignes vides
    let result = '';
    result += `Number of students: ${rows.length}\n`;

    const students = {};
    // On creer un objet students pour regrouper les etudiants par domaine
    for (const student of rows) {
      const columns = student.split(',');
      const firstName = columns[0];
      const field = columns[3];

      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstName);

      /* Dans l'objet students on ajoute des fields si ils ne sont pas deja là,
      et on ajoute le nom de l'eleve a la field correspondante */
    }
    for (const domain of Object.keys(students).sort()) {
      const listStudent = students[domain].join(', ');
      // On fait une string avec tous les nom des eleves separe par une virgule
      result += (`Number of students in ${domain}: ${students[domain].length}. List: ${listStudent}\n`);
    }
    return (result.trimEnd());
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (request, response) => {
  response.set('Content-Type', 'text/plain');
  response.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  response.set('Content-Type', 'text/plain');
  try {
    const result = await countStudents(process.argv[2]);
    response.send(`This is the list of our students\n${result}`);
  } catch (error) {
    response.set('Content-Type', 'text/plain');
    response.send('Cannot load the database');
  }
});

app.listen(port, () => {
  console.log(`${port} started`);
});

module.exports = app;
