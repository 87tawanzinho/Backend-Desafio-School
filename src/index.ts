import express from "express";

const app = express();
app.use(express.json());
// app.use(router);
app.listen(4000, () => console.log("Running at 4000"));
