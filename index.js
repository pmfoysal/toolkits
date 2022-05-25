require('dotenv').config();
const cors = require('cors');
const express = require('express');
const jwt = require('jsonwebtoken');
const {MongoClient, ServerApiVersion, ObjectId} = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;
const dbUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.d3xoe.mongodb.net/?retryWrites=true&w=majority`;
const dbClient = new MongoClient(dbUri, {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});

const corsOptions = {
   origin: '*',
};

app.use(express.json());
app.use(cors(corsOptions));

// [===>>>) Verify User Middleware Starts Here (<<<===] //

function verifyUser(req, res, next) {
   const auth = req.headers.authorization;
   const res1 = {status: 401, message: "You don't have Authorization to access this API!"};
   const res2 = {status: 403, message: 'You have invalid Token to access this API!'};

   if (!auth) return res.status(401).send(res1);
   const token = auth.split(' ')[1];

   jwt.verify(token, process.env.ACCESS_TOKEN, (error, decoded) => {
      if (error) return res.status(403).send(res2);
      req.decoded = decoded;
      next();
   });
}

async function runDatabase() {
   try {
      await dbClient.connect();

      // [===>>>) Database Collection Starts Here (<<<===] //

      const products = dbClient.db('pmphas12').collection('products');
      const blogs = dbClient.db('pmphas12').collection('blogs');
      const users = dbClient.db('pmphas12').collection('users');
      const reviews = dbClient.db('pmphas12').collection('reviews');
      const orders = dbClient.db('pmphas12').collection('orders');

      // [===>>>) Verify Admin Middleware Starts Here (<<<===] //

      async function verifyAdmin(req, res, next) {
         const email = req?.decoded?.email;
         const user = await users.findOne({email});
         if (user?.role === 'admin') next();
         else
            res.status(403).send({
               status: 403,
               message: 'Forbidden! You are not an Admin!',
            });
      }

      // [===>>>) Tokens API Starts Here (<<<===] //

      app.post('/token', async (req, res) => {
         const user = req.body;
         const token = jwt.sign(user, process.env.ACCESS_TOKEN, {expiresIn: '1h'});
         res.send({token});
      });

      // [===>>>) Users API Starts Here (<<<===] //

      app.post('/users', async (req, res) => {
         const data = req.body;
         const result = await users.insertOne(data);
         res.send(result);
      });
   } finally {
      // await client.close();
   }
}

runDatabase().catch(console.dir);

app.get('/', (req, res) => {
   res.send({status: 200, port, message: 'PmPhAs12 Server is Running...'});
});

app.listen(port, () => {
   console.log(`PmPhAs12 Server Running... Port: ${port}`);
});
