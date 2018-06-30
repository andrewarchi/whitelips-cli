const fs = require('fs');
const asm = require('./ws_asm');

const asmSrc = fs.readFileSync(process.argv[2], 'utf8');
const program = asm.compile(asmSrc);
console.log(program.getWsSrc());
