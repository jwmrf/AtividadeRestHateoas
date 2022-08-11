const express = require('express')
const app = express()
const routes = require('./routes')
var hateoasLinker = require('express-hateoas-links');

// replace standard express res.json with the new version
app.use(hateoasLinker);
app.use('/', routes);
app.listen(3000)