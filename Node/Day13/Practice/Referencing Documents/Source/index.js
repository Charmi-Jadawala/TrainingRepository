const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground')
    .then(() => {
        console.log('Connected to MongoDB...');
    })
    .catch((err) => {
        console.log('Connection to MongoDB failed...', err);
    })

const AuthorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
});
const AuthorModel = mongoose.model('author', AuthorSchema);

const CourseSchema = new mongoose.Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'author'
    }
});
const CourseModel = mongoose.model('course', CourseSchema);

async function createAuthor(name, bio, website) {
    const newAuthor = new AuthorModel({name, bio, website});
    const updatedData = await newAuthor.save();
    console.log(updatedData);
}

async function createCourse(name, author) {
    const newCourse = new CourseModel({name, author});
    const updatedData = await newCourse.save();
    console.log(updatedData);
}

async function listCourses() {
    const data = await CourseModel.find().populate('author', 'name bio -_id').select('name author');
    console.log(data);
}

// createAuthor('Lindsay Marsh', 'Graphic Designer', 'lindsaymarsh.com');

// createCourse('Adobe PhotoShop Course', '62a30755486035cc8f2acb08');

listCourses();