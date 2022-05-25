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

// [===>>>) Verify Admin Middleware Starts Here (<<<===] //

function verifyAdmin(req, res, next) {
   if (req?.user?.role !== 'admin') {
      return res.status(403).send({
         status: 403,
         message: 'Opps, Forbidden! You are not an Admin!',
      });
   }
   next();
}

function verifyGetter(req, res, next) {
   const email = req?.params?.email;
   if (email !== req?.user?.email) {
      return res.status(403).send({
         status: 403,
         message: 'Opps, Forbidden! You can not access Others Information!',
      });
   }
   next();
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

      // [===>>>) Verify User Middleware Starts Here (<<<===] //

      function verifyUser(req, res, next) {
         const auth = req?.headers?.authorization;
         const res1 = {status: 401, message: "You don't have Authorization to access this API!"};
         const res2 = {status: 403, message: 'You have invalid Token to access this API!'};

         if (!auth) return res.status(401).send(res1);
         const token = auth.split(' ')[1];

         jwt.verify(token, process.env.ACCESS_TOKEN, async (error, decoded) => {
            if (error) return res.status(403).send(res2);
            const user = await users.findOne({email: decoded?.email});
            req.user = {
               email: decoded?.email,
               role: user?.role,
            };
            next();
         });
      }

      // [===>>>) Tokens API Starts Here (<<<===] //

      app.post('/token', async (req, res) => {
         const user = req?.body;
         const token = jwt.sign(user, process.env.ACCESS_TOKEN, {expiresIn: '1h'});
         res.send({token});
      });

      // [===>>>) Users API Starts Here (<<<===] //

      app.get('/users', verifyUser, verifyAdmin, async (req, res) => {
         const data = await users.find({}).toArray();
         res.send(data.reverse());
      });

      app.get('/user/:email', async (req, res) => {
         const email = req?.params?.email;
         const data = await users.findOne({email});
         res.send(data);
      });

      app.put('/user/:email', async (req, res) => {
         const email = req?.params?.email;
         const options = {upsert: true};
         const data = {$set: req?.body};
         const result = await users.updateOne({email}, data, options);
         res.send(result);
      });

      // [===>>>) Blogs API Starts Here (<<<===] //

      app.post('/blogs', verifyUser, verifyAdmin, async (req, res) => {
         const result = await blogs.insertOne(req?.body);
         res.send(result);
      });

      app.get('/blogs', async (req, res) => {
         const data = await blogs.find({}).toArray();
         res.send(data.reverse());
      });

      app.get('/blog/:id', async (req, res) => {
         const filter = {_id: ObjectId(req?.params?.id)};
         const data = await blogs.findOne(filter);
         res.send(data);
      });

      app.put('/blog/:id', verifyUser, verifyAdmin, async (req, res) => {
         const id = req?.params?.id;
         const options = {upsert: true};
         const data = {$set: req?.body};
         const filter = {_id: ObjectId(id)};
         const result = await blogs.updateOne(filter, data, options);
         res.send(result);
      });

      app.delete('/blog/:id', verifyUser, verifyAdmin, async (req, res) => {
         const filter = {_id: ObjectId(req?.params?.id)};
         const result = await blogs.deleteOne(filter);
         res.send(result);
      });

      // [===>>>) Products API Starts Here (<<<===] //

      app.post('/products', verifyUser, verifyAdmin, async (req, res) => {
         const result = await products.insertOne(req?.body);
         res.send(result);
      });

      app.get('/products', async (req, res) => {
         const data = await products.find({}).toArray();
         res.send(data.reverse());
      });

      app.get('/product/:id', async (req, res) => {
         const filter = {_id: ObjectId(req?.params?.id)};
         const data = await products.findOne(filter);
         res.send(data);
      });

      app.put('/product/:id', verifyUser, verifyAdmin, async (req, res) => {
         const filter = {_id: ObjectId(req?.params?.id)};
         const options = {upsert: true};
         const data = {$set: req?.body};
         const result = await products.updateOne(filter, data, options);
         res.send(result);
      });

      app.delete('/product/:id', verifyUser, verifyAdmin, async (req, res) => {
         const filter = {_id: ObjectId(req?.params?.id)};
         const result = await products.deleteOne(filter);
         res.send(result);
      });

      // [===>>>) Reviews API Starts Here (<<<===] //

      app.post('/reviews', verifyUser, async (req, res) => {
         const result = await reviews.insertOne(req?.body);
         res.send(result);
      });

      app.get('/reviews', verifyUser, async (req, res) => {
         const data = await reviews.find({}).toArray();
         res.send(data.reverse());
      });

      app.get('/review/:id', async (req, res) => {
         const filter = {_id: ObjectId(req?.params?.id)};
         const data = await reviews.findOne(filter);
         res.send(data);
      });

      app.put('/review/:id', verifyUser, async (req, res) => {
         const filter = {_id: ObjectId(req?.params?.id)};
         const options = {upsert: true};
         const data = {$set: req?.body};
         const result = await reviews.updateOne(filter, data, options);
         res.send(result);
      });

      app.delete('/review/:id', verifyUser, async (req, res) => {
         const filter = {_id: ObjectId(req?.params?.id)};
         const result = await reviews.deleteOne(filter);
         res.send(result);
      });

      // [===>>>) Orders API Starts Here (<<<===] //

      app.post('/orders', verifyUser, async (req, res) => {
         const result = await orders.insertOne(req?.body);
         res.send(result);
      });

      app.get('/orders', verifyUser, async (req, res) => {
         const data = await orders.find({}).toArray();
         res.send(data.reverse());
      });

      app.put('/order/:id', verifyUser, async (req, res) => {
         const filter = {_id: ObjectId(req?.params?.id)};
         const options = {upsert: true};
         const data = {$set: req?.body};
         const result = await orders.updateOne(filter, data, options);
         res.send(result);
      });

      app.delete('/order/:id', verifyUser, async (req, res) => {
         const filter = {_id: ObjectId(req?.params?.id)};
         const result = await orders.deleteOne(filter);
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
