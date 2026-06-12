const sharp = require('sharp')

sharp('tools/input/bg.png')
    .webp({quality: 85})
    .toFile('tools/output/bg.webp')
    .then(() => console.log('转换成功'))
    .catch(err => console.error(err))