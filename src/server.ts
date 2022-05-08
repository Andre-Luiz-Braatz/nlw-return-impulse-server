import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

let PORT = 3333;

// app.use(
// 	cors({
// 		origin: "http://localhost:3000",
// 	}),
// );
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
	console.log(`HTTP server running in port: ${PORT}!`);
});
