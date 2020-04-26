import path from 'path';
import xlsx from 'xlsx';

import File from '../models/File';

class FileController {
  async store (req, res) {
    const filename = await req.file.filename
    const arq = path.resolve(__dirname, '..', '..','..', 'tmp', 'uploads', filename)
    const wb = xlsx.readFile(arq, {
      cellDates:true
    });

    const names = wb.SheetNames;
    const ws = wb.Sheets[names];
    const data = xlsx.utils.sheet_to_json(ws);
    
    // data.map(d => {
    //   const ordem = d.Ordem;
    //   const primeiro_ct = d.primeiro_ct;

    //   File.create({
    //     ordem: ordem,
    //     primeiro_ct: primeiro_ct
    //   });

    // })
    console.log(data);
    return res.json(data);
  }
}

export default new FileController();