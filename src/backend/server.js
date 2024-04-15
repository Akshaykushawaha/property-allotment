const express = require('express');
const cors = require('cors');
const {connectDBuser} = require('./config/db'); // Import database connection
const userRoutes = require('./routes/userRoutes'); // Import user routes
const propertyRoutes = require("./routes/propertyRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDBuser();

// Routes
app.use('/api/users', userRoutes);
app.use("/api/property", propertyRoutes)

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});