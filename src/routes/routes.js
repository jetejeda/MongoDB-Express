const express = require('express');
const router = express.Router();
const Task = require('../model/Task')();

router.get('/', (req, res)=>{

    Task.find({}, (err, tasks)=>{
        if(err) throw err;
        res.render('index',{
            tasks: tasks,
            title: 'TITLE'
        })
    });

});

//Post for tasks creation:
router.post('/add', (req, res)=>{
    let body = req.body;
    body.Status = false;

    Task.create(body, (err, task)=>{
        if(err) throw err
        res.redirect('/')
    })
});
module.exports = router;