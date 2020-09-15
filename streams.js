// Streams and Buffers --
// createReadStream && createWriteStreams
// PIPE
const fs = require("fs");

const soma = fs.createReadStream("./docs/big.txt");
const andika = fs.createWriteStream("./docs/big2.txt");

// soma.on("data", (mali) => {
//   console.log("---- NEW BUFFER -----");
//   console.log(mali);
//   andika.write("---- NEW BUFFER -----");
//   andika.write(mali);
// });

soma.pipe(andika);
