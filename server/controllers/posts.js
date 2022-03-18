import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postSchema.js';

const router  = express.Router();

export const getPosts = async(req , res) => {
    try{
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    }
    catch(error){
        res.status(404).json({ message: error.message });
    }
};

export const getPost = async (req, res) => {
    const { id } = req.params;
    try{
        const post = await PostMessage.find(id);

        res.status(200).json(post);
    }
    catch(error){
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    const { name , selectedFile } = req.body;

   const newPost = new PostMessage({ name , selectedFile }); 
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch(error){
        res.status(409).json({ message: error.message });
    }
};

// export const updatePost = async (req, res) => {
//     const { id } = req.params;
//     const { name , selectedFile } = req.body;

//     if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404);

//     const updatePost = { name , selectedFile , _id: id };

//     await PostMessage.findByIdAndUpdate(id , updatePost , {new: true});

//     res.json(updatePost);
// }

export default router;