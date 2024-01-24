require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { executeQuery } = require('./helper')

const app = express();

const port = process.env.PORT || 3000


//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
    res.json({message: 'server is running'})
});

app.get('/test-connection', async (req, res) => {
    const sql = "SELECT * FROM student";
    const [students, error] = await executeQuery(sql);
    console.log('students ===', students);
    res.json(students)

})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)


});