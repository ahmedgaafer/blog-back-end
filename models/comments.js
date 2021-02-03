const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    text:{
        type: String,
        required: true,
        maxLength: 160
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    post:{
        type: mongoose.Schema.ObjectId,
        ref: 'Post',
        required: true
    }
});

commentSchema.set('timestamps', true);
commentSchema.pre('remove', async function(next){
    try{
        return next();
    }
    catch (e){
        return next(e);
    }
})


module.exports = mongoose.model('Comment', commentSchema);