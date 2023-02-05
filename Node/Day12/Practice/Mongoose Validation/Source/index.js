const express = require('express');
const app = express();
app.disable("x-powered-by");
const mongoose = require('mongoose');

const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Radix...');
    res.end();
});

mongoose.connect('mongodb://localhost:27017/Course')
    .then(() => {
        console.log('Connected to MongoDB...');
    })
    .catch((err) => {
        console.log('Connection to MongoDB failed...');
    });

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network']
    },
    author: {
        type: String,
        uppercase: true
    },
    tags: {
        type: Array,
        validate: {
            validator: function(v) {
                return v && v.length > 0;
            },
            message: 'A course should have atleast one tag...'
        }
        // validate: {
        //     isAsync: true,
        //     validator: function (v, myCallback) {
        //         setTimeout(() => {
        //             const result = v && v.length > 0;
        //             myCallback(result);
        //         }, 2000);
        //     },
        //     message: 'A course should have atleast one tag...'
        // }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () { return this.isPublished; },
        min: 100,
        max: 1000,
        get: v => Math.round(v),
        set: v => Math.round(v)
    }
});

const CourseModel = mongoose.model('course', CourseSchema);

async function createCourse() {
    const newCourse = new CourseModel({
        name: 'Android Course',
        category: 'mobile',
        author: 'Susan',
        tags: ['frontend', 'angular'],
        isPublished: true,
        price: 299.30
    });
    try {
        const result = await newCourse.save();
        console.log(result);
    }
    catch (ex) {
        // console.log(ex.message);
        for(let field in ex.errors) {
            console.log(ex.errors[field].message);
        }
    }
}

createCourse();

const server = app.listen(port, () => {
    console.log(`Server is listening at Port: ${port}`);
});