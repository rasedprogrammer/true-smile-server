const express = require("express");
const cors = require("cors");
const { ServerApiVersion, ObjectId } = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
// const config = require("./config.js");

// const port = process.env.PORT || 5000;
const port = 5000;
const app = express();

// Milldleware Configuration
app.use(cors());
app.use(express.json());

// MongodB Server Configuration
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@programmingherocluster.fdfar9q.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	connectTimeoutMS: 30000,
	keepAlive: 1,
	serverApi: ServerApiVersion.v1,
});

async function run() {
	try {
		const serviceCollection = client.db("trueSmile").collection("services");
		const reviewCollection = client.db("trueSmile").collection("reviews");

		app.get("/services", async (req, res) => {
			const query = {};
			const cursor = serviceCollection.find(query);
			const services = await cursor.toArray();
			res.send(services);
		});

		app.post("/services", async (req, res) => {
			const service = req.body;
			const result = await serviceCollection.insertOne(service);
			res.send(result);
		});

		app.get("/services-home", async (req, res) => {
			const query = {};
			const cursor = serviceCollection.find(query);
			const services = await cursor.limit(3).toArray();
			res.send(services);
		});

		app.get("/service/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: ObjectId(id) };
			const service = await serviceCollection.findOne(query);
			res.send(service);
		});

		// Reviews Post API
		app.post("/reviews", async (req, res) => {
			const review = req.body;
			const result = await reviewCollection.insertOne(review);
			res.send(result);
		});
		app.get("/reviews", async (req, res) => {
			let query = {};
			if (req.query.reviewerEmail) {
				query = {
					reviewerEmail: req.query.reviewerEmail,
				};
			}
			const cursor = reviewCollection.find(query);
			const reviews = await cursor.toArray();
			res.send(reviews);
		});
		app.get("/service-reviews", async (req, res) => {
			let query = {};
			if (req.query.service) {
				query = {
					service: req.query.service,
				};
			}
			const cursor = reviewCollection.find(query);
			const reviews = await cursor.toArray();
			res.send(reviews);
		});

		app.delete("/reviews/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: ObjectId(id) };
			const result = await reviewCollection.deleteOne(query);
			res.send(result);
		});
	} finally {
	}
}
run().catch((err) => console.error(err));

app.get("/", (req, res) => {
	res.send("Hello From Node Js Server");
});

app.listen(port, () => {
	console.log(`Listing from port ${port}`);
});

// Repo Link
//https://github.com/Porgramming-Hero-web-course/b6a11-service-review-server-side-rasedprogrammer
