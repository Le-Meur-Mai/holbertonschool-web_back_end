import url from 'url';
import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    try {
      console.log(process.argv[2]);
      const students = await readDatabase(process.argv[2]);
      let result = 'This is the list of our students\n';
      for (const field of Object.keys(students).sort()) {
        result += `Number of students in ${field}: ${students[field].length}. List: ${students[field]}\n`;
      }
      response.status(200).send(result.trimEnd());
    } catch (err) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const parseUrl = url.parse(request.url);
      const pathnameUrl = parseUrl.pathname;
      const tabpathname = pathnameUrl.split('/');
      if (tabpathname[tabpathname.length - 1] !== 'CS' && tabpathname[tabpathname.length - 1] !== 'SWE') {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        const students = await readDatabase(process.argv[2]);
        const result = `List: ${students[tabpathname[tabpathname.length - 1]]}`;
        response.status(200).send(result);
      }
    } catch (err) {
      response.status(500).send('Cannot load the database');
    }
  }
}
