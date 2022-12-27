const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

// Milldleware Configuration
app.use(cors());
app.use(express.json());

// MongodB Server Configuration
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@programmingherocluster.fdfar9q.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1,
});

async function run() {
	try {
		const roomCollection = client.db("hotelRoomBooking").collection("rooms");

		app.get("/rooms", async (req, res) => {
			const query = {};
			const cursor = roomCollection.find(query);
			const rooms = await cursor.toArray();
			const count = await roomCollection.estimatedDocumentCount();
			res.send({ count, rooms });
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
