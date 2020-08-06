require('dotenv').config();
const server = require("./api/server.js");

server.get('/', (req,res) {
  const message = process.env.MESSAGE || "hello from code";
  res.status(200).json({ message, database: process.env.DB_NAME })
});

//STEP 1: add process.env.PORT || before the localhost port number
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} for Guided API-4***\n`);
});

//STEP 2: in our package.json we are going to add the start script to run the app on node when its running on node on the dynamic port in production development