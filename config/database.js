if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://Your URL'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/tasky-dev'}
}