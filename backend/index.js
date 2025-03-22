import express from "express";
import dotenv from "dotenv";
import User from "./models/user.js";
import ConnectionString from "./database.js";

dotenv.config();

const app = express();
app.use(express.json());

const startServer = async () => {
  try {
    await ConnectionString(); 
    console.log("MongoDB Connection Successful");

    app.get("/", (req, res) => {
      res.send("Hello from backend");
    });

    app.post("/add-user", async (req, res) => {
      try {
        console.log("Received request body:", req.body);

        const { name, email, age } = req.body;

        if (!name || !email || !age) {
          return res.status(400).json({ error: "All fields (name, email, age) are required" });
        }

        const newUser = new User({ name, email, age });

        const savedUser = await newUser.save();
        console.log("User saved:", savedUser);

        res.status(201).json({ message: "User Created", user: savedUser });
      } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).json({ error: error.message });
      }
    });

    app.get("/users", async (req, res) => {
      try {
        const users = await User.find(); // Fetch all users
        console.log("Retrieved Users:", users);

        if (users.length === 0) {
          return res.status(404).json({ message: "No users found" });
        }

        res.status(200).json(users);
      } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: error.message });
      }
    });

    app.get("/users/:id", async (req, res) => {
      try {
        const user = await User.findById(req.params.id);
        
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
      } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: error.message });
      }
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(` Server started on port ${PORT}`);
    });

  } catch (error) {
    console.error(" MongoDB Connection Failed:", error);
    process.exit(1); // Exit process if DB connection fails
  }
};
startServer();
