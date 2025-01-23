/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const outputFilePath = path.join(process.cwd(), "productsImagesPaths.json");
let images = [];

const prefix = "products-pics";
const rootDirectory = path.join(process.cwd(), `public/${prefix}/`);
const categories = fs.readdirSync(rootDirectory);

categories.forEach((cat) => {
  const imagesDirectory = path.join(process.cwd(), `public/${prefix}/` + cat);
  console.log(imagesDirectory);
  images = [
    ...images,
    ...fs
      .readdirSync(imagesDirectory)
      .map((file) => `/${prefix}/${cat}/${file}`),
  ];
});

fs.writeFileSync(outputFilePath, JSON.stringify(images, null, 2));
console.log("Image paths generated:", images);
