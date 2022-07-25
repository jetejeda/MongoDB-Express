const express = require('express');
const router = express.Router();
const Task = require('../model/Task')();

router.get('/', (req, res)=>{

    Task.find({}, (err, tasks)=>{
        if(err) console.log(err);
        res.render('index',{
            task: tasks
        })
    });

});

module.exports = router;