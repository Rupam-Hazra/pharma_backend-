require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const pharmacyRoutes = require('./routes/pharmacyRoutes');
const medicineRoutes = require('./routes/medicineRoutes');
const prescriptionRequestRoutes = require('./routes/prescriptionRequestRoutes');
const orderRoutes = require('./routes/orderRoutes');
const connectDB = require('./config/db');
const morgan = require('morgan');
   
const app = express();

// Middleware
app.use(cors({
    origin: "*",
  }));

app.use(express.json());
app.use(morgan('dev'));




// Routes
app.use('/api/auth', authRoutes);
app.use('/api/pharmacies', pharmacyRoutes);
app.use('/api/medicinesRoutes', medicineRoutes);
app.use('/api/prescriptionRequestRoutes', prescriptionRequestRoutes);
app.use('/api/ordersRoutes', orderRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
  });


// MongoDB connection
connectDB();




const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });