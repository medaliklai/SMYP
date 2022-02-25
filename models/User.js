const mongoose = require( 'mongoose' );
const {
    isEmail
} = require( 'validator' );
const bcrypt = require( 'bcrypt' );
const userSchema = new mongoose.Schema( {
    nom:{
        type:String,
        required:true
    },
    prenom:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: [ true, 'please enter an email' ],
        unique: true,
        lowercase: true,
        validate: [ isEmail, 'please enter a valid email' ]
    },
    password: {
        type: String,
        required: [ true, 'please enter a password' ],
        minlength: [ 6, 'the minimum length of password is 6 charachter' ]

    },
    role:{
        required:true,
        type:Number
    }
} );
// fire function after doc saved to db
// userSchema.post( 'save', function ( doc, next ) {
//     console.log( 'new user was saved to db', doc );
//     next();
// } );

// fire function before doc saved to db
userSchema.pre( 'save', async function ( next ) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash( this.password, salt );


    next();
} );
//static method to login a user
userSchema.statics.login = async function(email, password){
    const user = await this.findOne({email});
    if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
}
const User = mongoose.model( 'user', userSchema );

module.exports = User;