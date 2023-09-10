import express from "express";
import cors from "cors";
import tshirtRoutes from "./routes/tshirts/tshirtRoutes.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/clothes", tshirtRoutes);

app.listen(port, () => {
  console.log("Server Started on http://localhost:" + port);
});
