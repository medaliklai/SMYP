const jwt = require( 'jsonwebtoken' );
const User = require( '../models/User' );

const requireAuth = ( req, res, next ) => {
    const token = req.cookies.jwt;
    console.log( token )
    // check web token exists and verify
    if ( token ) {
        jwt.verify( token, 'kali', ( err, decodedToken ) => {
            if ( err ) {
                console.log( err );
                res.redirect( '/login' );
            } else {
               
                next();
            }
        } );

    } else {
        res.redirect( '/login' );
    }
}
//check current user

const checkUser = ( req, res, next ) => {
    const token = req.cookies.jwt;
    if ( token ) {

        jwt.verify( token, 'kali', async ( err, decodedToken ) => {
            if ( err ) {
                console.log( err );
                res.locals.user = null;
                next();
            } else {
                
                let user = await User.findById( decodedToken.id );
                res.locals.user = user;
                next();
            }
        } );

    } else {
        res.locals.user = null;
        next();
    }
}

module.exports = {
    requireAuth,
    checkUser
};