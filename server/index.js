const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8081;

// Redirection of http to https for release environment.
app.use((req, res, next) => {
  if(process.env.Environment === 'release' && (!req.secure) && (req.protocol !== 'https')) {
    res.redirect('https://' + req.get('Host') + req.url);
  } else {
    next();
  }
});

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../ui/build')));

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response, next) {
  response.sendFile(path.resolve(__dirname, '../ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
