const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');
const md5 = require('md5');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true, 
    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    },
    profileImageUrl:{
        type: String
    },
});

userSchema.pre('save', async function(next) {
    try{
        if(!this.isModified('password')){
            return next();
        }

        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;

        this.profileImageUrl = await md5(this.email.toLowerCase());
        return next();

    } catch(err) {
        return next(err);
    }
});

userSchema.methods.comparePassword = async function(candidatePassword, next){
    try{
        return await bcrypt.compare(candidatePassword, this.password);

    } catch(err){
        return next(err);
    }
}

userSchema.set('timestamps', true);

module.exports = mongoose.model("User", userSchema);