const mongoose = require('mongoose');
const { boolean } = require('zod');

mongoose.connect("mongodb+srv://avipandey20:HncTq8GDnoQMiPXI@cluster0.rxowycg.mongodb.net/todos");

const schema = new mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    }
})


const todos = mongoose.model('todos', schema);

module.exports = todos;
