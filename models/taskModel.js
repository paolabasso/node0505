import mongoose from "mongoose";

//criando a estryty
const { Schema } = mongoose;

const taskModel = new Schema({
    _id: {type: String},
    title: {type: String},
    done: { type: Boolean},
});

export default mongoose.model("Task", taskModel);
