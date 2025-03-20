const express = require("express");
const router = express.Router();

const transactions = [
  { name: "Mei mei", type: "Keuangan", amount: "Rp. 91.450.000,00", date: "2025-2-15", note: "Keterangan 1", image: "mei.jpg" },
  { name: "Agus Samsat", type: "Kas Anggota", amount: "Rp. 750.250,00", date: "2025-2-15", note: "Keterangan 2", image: "agus.jpg" },
  { name: "Ujang Galon", type: "Kas Anggota", amount: "Rp. 750.250,00", date: "2025-2-15", note: "Keterangan 3", image: "ujang.jpg" },
];

router.get("/", (req, res) => {
  res.render("transaksi", { transactions });
});

module.exports = router;
