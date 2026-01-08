import fs from 'fs/promises';

export default async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

    const lines = data.split('\n');
    // On coupe la string a chaque \n pour faire les lignes
    const rows = lines.slice(1).filter((line) => line.trim() !== '');
    // On enleve le header et les lignes vides

    const students = {};
    // On creer un objet students pour regrouper les etudiants par domaine
    for (const student of rows) {
      const columns = student.split(',');
      const firstName = columns[0];
      const field = columns[3].trim();

      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstName);

      /* Dans l'objet students on ajoute des fields si ils ne sont pas deja là,
      et on ajoute le nom de l'eleve a la field correspondante */
    }
    return students;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
