import express, {Request, Response} from "express";
import morgan from "morgan"
import dotenv from "dotenv";
import cors from "cors"
import db from "./services/database.service"
import taskRoutes from "./routes/task.routes"

//Connect with database 

db
//Dotenv config to use .env file with environment variables

dotenv.config();

const app = express();
//App config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

//Routes
app.use("/api", taskRoutes)
app.get("/api", (req: Request , res: Response) => {
  res.json("Hello");
});
app.use((req: Request , res: Response) => {
  res.status(404).send('404')})

export default app