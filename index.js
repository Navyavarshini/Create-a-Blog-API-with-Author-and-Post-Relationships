const express = require("express");
const app = express();
app.use(express.json());

const authorRoutes = require("./routes/authorRoutes");
const postRoutes = require("./routes/postRoutes");

app.use("/authors", authorRoutes);
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running ${PORT}`));
