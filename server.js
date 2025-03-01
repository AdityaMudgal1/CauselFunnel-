const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const surveyRoutes = require('./routes/surveyRoutes');
app.use('/api/survey', surveyRoutes);

app.listen(5000, () => console.log('Backend running on port 5000'));
