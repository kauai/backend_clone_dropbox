const multer = require("multer");
const path = require("path"); //padrao node
const crypto = require("crypto"); //padrao node

//path.resolve() padroniza o caminho das escritas dentro do node
module.exports = {
  dest: path.resolve(__dirname, "..", "..", "tmp"),
  storage: multer.diskStorage({
    destination: (req, file, cbk) => {
      cbk(null, path.resolve(__dirname, "..", "..", "tmp"));
    },
    filename: (req, file, cbk) => {
      crypto.randomBytes(16, (error, hash) => {
        if (error) cbk(error);
        file.key = `${hash.toString("hex")}-${file.originalname}`;
        console.log(file);
        cbk(null, file.key);
      });
    }
  })
};
