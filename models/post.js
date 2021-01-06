const mongoose = require('mongoose');
const User = require('./user');

const postSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        maxLength: 300
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }]
    
});

postSchema.set('timestamps', true);
postSchema.pre('remove', async function(next){
    try{
        const user = await User.findById(this.user);
        await user.posts.remove(this.id);
        await user.save();
        return next();
    }
    catch (e){
        return next(e);
    }
});


module.exports = mongoose.model('Post', postSchema);