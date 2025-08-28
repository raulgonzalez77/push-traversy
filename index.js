const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey = 'BKYU9T90H5yWG8LLb1QAXwqXacFU3mATMBLix-dCXLaNxE5EA5YsK7Ey7Lz9AoQ0LSTS46FLJYdoPGg2Eh3KPwc';
const privateVapidKey = 'EboC1veXVcwiAfGzqi0qU2-YRS8lO0ig6iTlyC1e1W0';

webpush.setVapidDetails('mailto:speedygonzales77@gmail.com', publicVapidKey, privateVapidKey);

//Subscribe Route

app.post('/subscribe', (req, res) => {
    // Gets pushSubscription Object
    const subscription = req.body;

    // Send 201 - resource created
    res.status(201).json({});

    // Create payload
    const payload = JSON.stringify({ title: 'Push Test'})


    // Pass object into sendNotification 
    webpush.sendNotification(subscription, payload).catch(err => console.error(err));

});

//const port =  5002;
const port = 443;

app.listen(port, ()  => console.log(`Server started on port ${port}`));