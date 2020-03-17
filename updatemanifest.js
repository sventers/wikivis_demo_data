const fs = require("fs")


const title = process.argv[2]

const file = fs.readFileSync('./manifest.json', 'utf-8')
const jsonobj = JSON.parse(file)


if (jsonobj.all[jsonobj.all.length-1] != title) {
  jsonobj.all.push(title)
  jsonobj.last = title
  const output = JSON.stringify(jsonobj, null, 4)
  fs.writeFileSync('./manifest.json', output)
}
else {
  console.log("already exists\nmanifest.json not updated")
}