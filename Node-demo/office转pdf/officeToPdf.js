const toPdf = require('office-to-pdf')
const libre = require('libreoffice-convert')
const path = require('path');
const fs = require('fs').promises

libre.convertAsync = require('util').promisify(libre.convert);

// 将word转为PDF
function wordToPDF(wordFile) {
  return fs.readFile(wordFile, (err, result) => {
    if(err) throw err
    toPdf(result).then((pdfBuffer) => {
      fs.writeFileSync('./doc/test.pdf', pdfBuffer);
      console.log('word to pdf successfully written');
    })
  })
}

function convertWordToPdf(inputpath, outputpath) {
  const outputfile = fs.createWriteStream(outputpath)

  libre.convert(inputpath, 'pdf', undefined, (err, result) => {
    if(err){
      console.log(`Error converting ${inputPath} to PDF: `, err);
    } else {
      result.pipe(outputfile)
    }
  })
}

async function convert() {
  const ext = '.pdf'
  const inputPath = path.join(__dirname, './doc/docker.docx')
  const outputPath = path.join(__dirname, `./doc/docker${ext}`)

  const docxBuffer = await fs.readFile(inputPath)
  let pdfBuffer = await libre.convertAsync(docxBuffer, ext, undefined)
  await fs.writeFile(outputPath, pdfBuffer)
}
const inputpath = './doc/docker.docx'
const outputpath = './doc/docker.pdf'

// convertWordToPdf(inputpath, outputpath)
convert().catch(err=>{
  console.log(err);
})