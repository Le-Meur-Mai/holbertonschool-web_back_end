const http = require('http');
const fs = require('fs').promises;

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
    for (const domain in students) {
      if (Object.prototype.hasOwnProperty.call(students, domain)) {
        const listStudent = students[domain].join(', ');
        // On fait une string avec tous les nom des eleves separe par une virgule
        result += (`Number of students in ${domain}: ${students[domain].length}. List: ${listStudent}\n`);
      }
    }
    return (result.trimEnd());
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

// Creation of the http server
const app = http.createServer(async (req, response) => {
  if (req.url === '/' && req.method === 'GET') {
    response.writeHead(200, { 'content-type': 'text/plain' });
    response.end('Hello Holberton School!');
  } else if (req.url === '/students' && req.method === 'GET') {
    try {
      const result = await countStudents(process.argv[2]);
      response.writeHead(200, { 'content-type': 'text/plain' });
      response.end(`This is the list of our students\n${result}`);
    } catch (err) {
      response.writeHead(200, { 'content-type': 'text/plain' });
      response.end('Cannot load the database');
    }
  }
});

const hostname = '127.0.0.1';
const port = 1245;

app.listen(port, hostname);

module.exports = app;
