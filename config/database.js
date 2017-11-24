if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://vamshi:1111@ds033956.mlab.com:33956/tasky-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/tasky-dev'}
}