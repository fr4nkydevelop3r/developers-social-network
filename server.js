const express = require('express');
const connectDB = require('./utils/db');
const { json, urlencoded } = require('body-parser');

const app = express();

connectDB();

//Init middleware
//For access to the body of the request
app.use(json());
app.use(urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('Server running..'));

//Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
