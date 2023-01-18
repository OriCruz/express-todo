const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description:{
       type:  String,
       required: true
    },
    complete:{
        type:Boolean,
        default:false
    }
    });

const TODOS = mongoose.model('Todo', todoSchema);

module.exports= TODOS;
