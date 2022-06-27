import * as fsp from "fs/promises";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.static("client/build"));

const db = mongoose.model("Product", {
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: Object,
});

//get all products
app.get("/api/products", (req, res) => {
  db.find()
    .then((data) => res.send(data))
    .catch((e) => res.send("error", e));
});

//get product by id
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    db.findById(id)
      .then((product) => {
        res.send(product);
      })
      .catch((e) => res.send("error", e));
  }
});

//creat
app.post("/api/products", (req, res) => {
  const { title } = req.body;
  const { price } = req.body;
  const { description } = req.body;
  const { category } = req.body;
  const { image } = req.body;
  db.insertMany([
    {
      title,
      price,
      description,
      category,
      image,
      rating,
    },
  ]).then((data) => res.send(data));
});

//delete by id
app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    db.findByIdAndRemove(id)
      .then((data) => {
        res.send(data);
      })
      .catch((e) => res.send("error", e));
  }
});

//update
app.patch("/api/products/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    db.findByIdAndUpdate(id, req.body)
      .then((p) => res.send(p))
      .catch((e) => res.send("error", e));
  }
});

app.get("*", (req, res) => {
  res.sendFile("/client/build/index.html");
});
const PORT = process.env.PORT || 8000;
const { DB_USER, DB_PASS } = process.env;
// `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.hnlsrn0.mongodb.net/GoCodeShop`

mongoose
  .connect("mongodb://localhost:27017/GoCodeShop")
  .then(() => app.listen(PORT));

// app.get("/", (req, res) => res.send("welcome"));
// app.get("/products", (req, res) => {
//   fsp.readFile("./products.json", "utf8").then((data) => {
//     res.send(JSON.parse(data));
//   });
// });

// app.get("/products/:productId", (req, res) => {
//   const { productId } = req.params;
//   fsp.readFile("./products.json", "utf8").then((data) => {
//     const productsJson = JSON.parse(data);
//     const product = productsJson.find((item) => item.id === +productId);
//     console.log(product);
//     res.send(product);
//   });
// });

// function getMaxId(arr) {
//   const ids = arr.map((object) => {
//     return object.id;
//   });
//   const max = Math.max(...ids);
//   return max + 1;
// }

// app.post("/products", (req, res) => {
//   fsp.readFile("./products.json", "utf-8").then((data) => {
//     const productsJson = JSON.parse(data);
//     productsJson.push({
//       id: getMaxId(productsJson),
//       title: req.body.title,
//       price: req.body.price,
//       description: req.body.description,
//       category: req.body.category,
//       image: req.body.image,
//       rating: {
//         rate: 4.7,
//         count: 130,
//       },
//     });
//     fsp.writeFile("./products.json", JSON.stringify(productsJson));
//     res.send(productsJson);
//   });
// });

// app.patch("/products/:productId", (req, res) => {
//   const { productId } = req.params;

//   fsp.readFile("./products.json", "utf8").then((data) => {
//     if (req.body) {
//       const products = JSON.parse(data);
//       const productIndex = products.findIndex(
//         (product) => product.id === +productId
//       );
//       products[productIndex] = { ...products[productIndex], ...req.body };
//       fsp.writeFile("./products.json", JSON.stringify(products)).then(() => {
//         res.send(products);
//       });
//     }
//   });
// });

// app.delete("/products/:productId", (req, res) => {
//   const { productId } = req.params;

//   fsp.readFile("./products.json", "utf8").then((data) => {
//     if (productId) {
//       const products = JSON.parse(data);
//       const productIndex = products.findIndex(
//         (product) => product.id === +productId
//       );
//       if (productIndex >= 0) {
//         products.splice(productIndex, 1);
//         fsp.writeFile("./products.json", JSON.stringify(products)).then(() => {
//           res.send(products);
//         });
//       } else {
//         res.send(products);
//       }
//     }
//   });
// });
