const fs = require('fs');

function test() {
  const dirname = '../data/campings';
  const files = []
  fs.readdirSync(dirname).map(name=> {
    const filename = dirname + '/' + name;
    files.push('data/campings/' + name)
  })
  fs.writeFileSync('query.json', JSON.stringify(files))
}
test()