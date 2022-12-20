const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;

// Milldleware Configuration
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello From Node Js Server");
});

app.listen(port, () => {
	console.log(`Listing from port ${port}`);
});

// Repo Link
//https://github.com/Porgramming-Hero-web-course/b6a11-service-review-server-side-rasedprogrammer

/**
 * Heading: Enjoy A Luxury Experience
 * 1. The Flats Luxury Suites
 * https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80
 * Description: The Flats Luxury Suites is the best Cache Valley lodging, thanks to a vibe that’s chic and sophisticated. Comfortable yet stylish, granting easy access to the best Logan has to offer.
 * 2. Gray Bedsprea
 * https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80
 * Description:
 * 3. The Juniper Room
 * https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
 * Description: The Juniper Room, Whisper Rock Ranch, Joshua Tree, California
 * 4. Hill take Room
 * https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
 * Description:
 * 5. Sunshine in bright bedroom
 * https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
 * Description: Sunshine in bright bedroom in bungalow
 * 6. Homei Room
 * https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
 * Description:
 */
