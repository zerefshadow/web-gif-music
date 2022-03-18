import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    selectedFile: String,
});

var PostMessage = mongoose.model('PostMessage' , postSchema);
export default PostMessage;