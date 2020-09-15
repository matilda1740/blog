// FILE SYSTEMS

// Reading files - 2
// Writing files - replacing text in old && creating new - 3
// Deleting files only if they exist .unlink
// Making mkdir && Removing directories rmdir
// All take in  callbacks - what happens after it's made

const fs = require("fs");

// fs.readFile("./docs/blog.txt", (reject, response) => {
//   if (reject) {
//     console.log(reject);
//   }
//   console.log(response.toString());
// });

// if (!fs.existsSync("./docs/blog1.txt")) {
//   fs.writeFile(
//     "./docs/blog1.txt",
//     "Let's Fall in Love for the night and forget in the morning",
//     (error) => {
//       if (error) {
//         console.log(error);
//       }
//       console.log("File Created");
//     }
//   );
// } else {
//   fs.unlink("./docs/blog1.txt", (reject) => {
//     if (reject) {
//       console.log(reject);
//     }
//     console.log("File deleted");
//   });
// }

if (!fs.existsSync("./folder")) {
  fs.mkdir("./folder", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Folder created!");
  });
} else {
  fs.rmdir("./folder", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Folder Deleted!");
  });
}
