const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true   
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }  
});

postSchema.set('timestamps', true);
postSchema.pre('remove', async function(next){
    try{
        return next();
    }
    catch (e){
        return next(e);
    }
});


module.exports = mongoose.model('Post', postSchema);