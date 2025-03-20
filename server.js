const express = require("express");
const app = express();
const transaksiRoutes = require("./routes/transaksi");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", transaksiRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
