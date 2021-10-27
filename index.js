const { app } = require("./app");
const { PORT, MONGODB } = require("./config/config");
const mongoose = require("mongoose");

try {
  mongoose.connect(MONGODB);
  console.log("Connected to DB");
} catch (err) {
  console.log(err);
} 

app.listen(PORT || 4000, () => {
  console.log(`Server is running on ${PORT}`);
});
