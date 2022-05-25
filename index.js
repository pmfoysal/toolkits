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
      const products = dbClient.db('pmphas12').collection('products');
      const blogs = dbClient.db('pmphas12').collection('blogs');
      const users = dbClient.db('pmphas12').collection('users');
      const reviews = dbClient.db('pmphas12').collection('reviews');
      const orders = dbClient.db('pmphas12').collection('orders');

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

      app.post('/token', async (req, res) => {
         const user = req.body;
         const token = jwt.sign(user, process.env.ACCESS_TOKEN, {expiresIn: '1h'});
         res.send({token});
      });

      app.post('/users', async (req, res) => {
         const data = req.body;
         const result = await users.insertOne(data);
         res.send(result);
      });

      app.post('/products', async (req, res) => {
         const data = req.body;
         const result = await products.insertOne(data);
         res.send(result);
      });

      app.post('/reviews', async (req, res) => {
         const data = req.body;
         const result = await reviews.insertOne(data);
         res.send(result);
      });

      app.post('/orders', async (req, res) => {
         const data = req.body;
         const result = await orders.insertOne(data);
         res.send(result);
      });

      app.post('/blogs', async (req, res) => {
         const data = req.body;
         const result = await blogs.insertOne(data);
         res.send(result);
      });

      app.get('/users', async (req, res) => {
         const data = await users.find({}).toArray();
         res.send(data.reverse());
      });

      app.get('/products', async (req, res) => {
         const data = await products.find({}).toArray();
         res.send(data.reverse());
      });

      app.get('/reviews', async (req, res) => {
         const data = await reviews.find({}).toArray();
         res.send(data.reverse());
      });

      app.get('/products/:user', verifyUser, async (req, res) => {
         const email = req.params.user;
         const authEmail = req.decoded.email;
         if (authEmail === email) {
            const query = {email};
            const cursor = products.find(query);
            const data = await cursor.toArray();
            res.send(data);
         } else {
            res.status(403).send({status: 303, message: 'Your signed Email & Token Email mismatched!'});
         }
      });

      app.get('/product/:id', async (req, res) => {
         const id = req.params.id;
         const query = {_id: ObjectId(id)};
         const data = await products.findOne(query);
         res.send(data);
      });

      app.put('/product/:id', async (req, res) => {
         const id = req.params.id;
         const newData = req.body;
         const filter = {_id: ObjectId(id)};
         const options = {upsert: true};
         const update = {$set: newData};
         const result = await products.updateOne(filter, update, options);
         res.send(result);
      });

      app.delete('/product/:id', async (req, res) => {
         const id = req.params.id;
         const query = {_id: ObjectId(id)};
         const result = await products.deleteOne(query);
         res.send(result);
      });

      app.get('/blogs', async (req, res) => {
         const query = {};
         const cursor = blogs.find(query);
         const data = await cursor.toArray();
         res.send(data);
      });

      app.get('/blog/:id', async (req, res) => {
         const id = req.params.id;
         const query = {_id: ObjectId(id)};
         const data = await blogs.findOne(query);
         res.send(data);
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
