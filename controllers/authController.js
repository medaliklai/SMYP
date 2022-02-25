const User = require( '../models/User' );
const jwt = require( 'jsonwebtoken' );
const handleErrors = ( err ) => {
    let error = {
        email: '',
        password: ''
    }
    // incorrect email
    if ( err.message === 'incorrect email' ) {
        error.email = 'that email in not registred';
    }

    // incorrect password
    if ( err.message === 'incorrect password' ) {
        error.password = 'wrong password';
    }
    // dublicated erro
    if ( err.code === 11000 ) {
        error.email = 'email is exits';
        return error;
    }
    if ( err.message.includes( 'user validation failed' ) ) {
        Object.values( err.errors ).forEach( ( {
            properties
        } ) => {
            error[ properties.path ] = properties.message;
        } )
    }
    return error;
}
const maxAge = 3 * 24 * 60 * 60;
const createToken = ( id ) => {
    return jwt.sign( {
        id
    }, 'kali', {
        expiresIn: maxAge
    } )
}
module.exports.signup_get = ( req, res ) => {
    res.render( 'signup',{
        title:'Signup'
    } )
}

module.exports.signup_post = async ( req, res ) => {
    const newUser = req.body;
    try {
        const user = await User.create( newUser );
        const token = createToken( user._id );
        res.cookie( 'jwt', token, {
            httpOnly: true,
            maxAge: maxAge * 1000
        } );
        res.status( 201 ).json( {
            user: user._id
        } );
        res.json( user );
        console.log( token )
    } catch ( err ) {
        const errors = handleErrors( err );
        res.json( {
            errors
        } );
    }

}

module.exports.login_get = ( req, res ) => {
    res.render( 'login',{
        title:"login"
    } )
}

module.exports.login_post = async ( req, res ) => {
    const {email, password} = req.body;
    try{
        const user = await User.login(email, password);
        const token = createToken( user._id );
        res.cookie( 'jwt', token, {
            httpOnly: true,
            maxAge: maxAge * 1000
        } );
        res.status( 201 ).json( {
            user
        } );
        res.status(200).json({user:user._id});
    }
    catch(err){

        const errors = handleErrors( err );
        res.json( {
            errors
        } );
    }
}

module.exports.logout_get = ( req, res ) => {
    res.cookie( 'jwt', '', {
        maxAge: 1
    } );
    res.redirect( '/' );
}