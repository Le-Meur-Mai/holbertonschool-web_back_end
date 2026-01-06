const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();
    const lines = data.split('\n');
    // On coupe la string a chaque \n pour faire les lignes
    const rows = lines.slice(1).filter((line) => line.trim() !== '');
    // On enleve le header et les lignes vides
    console.log(`Number of students: ${rows.length}`);

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
        console.log(`Number of students in ${domain}: ${students[domain].length}. List: ${listStudent}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
