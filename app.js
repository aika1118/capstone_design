const express = require('express')
const app = express()
const port = 8000

function getDate(){
        var moment = require('moment');
        require('moment-timezone');
        moment.tz.setDefault("Asia/Seoul");
        var date = moment().format('YYYY-MM-DD HH:mm:ss');
        return date;
}

app.get('/get', function(req, res) {
        req.query.email = 'qhfl1096@naver.com';
        req.query.stuno = '20151516';
        req.query.time = getDate();
        req.query.ip = req.ip.split(':')[3];
        res.json(req.query);
});

app.get('/:a/:b', function(req, res) { res.json({
        a:req.params.a, b:req.params.b, email:'qhfl1096@naver.com', stuno:'20151516',
        time:getDate(), ip:req.ip.split(':')[3]
});});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
