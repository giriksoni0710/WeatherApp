
const path = require('path');
const express = require('express');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const pubDirPath = path.join(__dirname,'../public');

const app = express();
app.use(express.static(pubDirPath));

app.get('/_w', (req,res) =>{




if (!req.query.location) {
   
    res.send({
error: 'Please Provide a Valid Location'

    })
   
} else {
    geocode(req.query.location, (error, data) => {
        if (error) {
            return res.send({error});
        }

        forecast(data, (error, data) => {
            if (error) {
               return res.send({error});
            }

           res.send({data});
        })
    })
}
})

app.listen(3000, ()=>{

    console.log("Running");
})