const express = require( 'express' );
const mongoose = require( 'mongoose' );
const dotenv = require('dotenv').config();
const authRoutes = require( './routes/authRoutes' );
const pagesRoutes = require('./routes/pagesRoues');
const cultureRoutes = require('./routes/cultureRoutes');
const tempRoutes = require('./routes/tempRoutes');
const stationRoutes = require('./routes/stationRoutes');
const evapoRoutes = require('./routes/evapoRoutes');
const dbConnection = require('./config/dbConnection');
const cookieParser = require( 'cookie-parser' );
const {
    requireAuth,
    checkUser
} = require( './middleware/authMiddleware' );
const app = express();

app.set( 'view engine', 'ejs' );

// /middleware
app.use( express.json() );
app.use( express.static( 'public' ) );
app.use( cookieParser() );
app.use( express.urlencoded( {
    extended: true
} ) );
const port = process.env.PORT || 5000;
app.listen( port, () => {
    console.log( `server run on port ${port}` );
} )

// db connection
dbConnection();


app.get( '*', checkUser );
// home router
app.get( '/',( req, res ) => {
    res.render( 'index',{
        title:'Index'
    } );
} );

app.get( '/home', requireAuth, ( req, res ) => {
    res.render( 'home',{
        title:'Home'
    } );
} )
// Routes
app.use( authRoutes );
app.use(requireAuth, pagesRoutes);
app.use(requireAuth, cultureRoutes);
app.use( requireAuth, tempRoutes);
app.use(requireAuth, stationRoutes);
app.use(requireAuth, evapoRoutes);

// not found router
app.use( ( req, res ) => {
    res.render( '404',{
        title:"404"
    } );

} )