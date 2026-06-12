const fs = require('fs')

async function main() {
  const pngToIcoModule = await import('png-to-ico')
  const pngToIco = pngToIcoModule.default

  console.log('开始转换')

  const buf = await pngToIco('tools/input/favicon.png')

  fs.writeFileSync('tools/output/favicon.ico', buf)

  console.log('转换成功')
}

main().catch(console.error)