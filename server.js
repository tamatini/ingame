const express = require('express');
const app = express();

app.use(express.static('./dist/ingame'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/ingame/'});
});
app.listen(process.env.PORT || 8080);