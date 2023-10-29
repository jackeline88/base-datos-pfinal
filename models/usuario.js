import mongoose from "mongoose";

const user = new mongoose.Schema({
    name:{
        require: true,
        type: String
    },
    age: {
        require: true,
        type: Number
    },
    race: {
        require: true,
        type: String
    },
});

export default mongoose.model('User',user)