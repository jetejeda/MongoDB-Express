const express = require('express');
const router = express.Router();
const Task = require('../model/Task')();

router.get('/', (req, res)=>{

    Task.find({}, (err, tasks)=>{
        if(err) throw err;
        res.render('index',{
            tasks: tasks
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

//Update status of a single task
router.get('/changeStatus/:id', (req, res)=>{
    let id = req.params.id;
    Task.findById(id, (err, task)=>{
        if(err) throw err
        task.Status = !task.Status;
        task.save().then(()=> res.redirect('/'));
    });
});

//Delete a task by Id
router.get('/delete/:id', (req, res)=>{
    let id = req.params.id;
    Task.deleteOne({_id: id}, (err, task)=>{
        if(err) console.log(err);
        res.redirect('/');
    });
});
module.exports = router;