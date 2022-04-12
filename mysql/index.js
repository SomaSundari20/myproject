const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mysql = require('mysql2');




const app = express();
app.use(cors());
app.use(bodyparser.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projectbd',
    port: 3306
})

db.connect(err => {
    if (err) {
        console.log(err)
    }
    console.log('Database connected..')
})

// info details.....//

//get all data
app.get('/info', (req, res) => {
    let qr = `select * from info`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: 'all info data',
                data: result
            })
        }
        else {
            console.log('Data not found')
        }
    })
})

// get single data

app.get('/info/:id', (req, res) => {

    let gId = req.params.id;

    let qr = `select * from info where id = ${gId}`

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: 'Get single data',
                data: result
            })
        }
        else {
            res.send({
                message: 'data not found'
            })
        }
    })
})
// post data

app.post('/info', (req, res) => {

    console.log(req.body, 'createdata');

    let name = req.body.name;
    let cat = req.body.cat;
    let type = req.body.type;
    let rnum = req.body.rnum;
    let level = req.body.level;
    let hname = req.body.hname;
    let hphone = req.body.hphone;
    let academic = req.body.academic;
    let ophone = req.body.ophone;
    let phone = req.body.phone;
    let offemail = req.body.offemail;
    let add1 = req.body.add1;
    let add2 = req.body.add2;
    let tds = req.body.tds;
    let pin = req.body.pin;
    let refer = req.body.refer;
    let referphone = req.body.referphone;
    let zone = req.body.zone;
    let longtitude = req.body.longtitude;
    let latitude = req.body.latitude;
    let description = req.body.description;
    let active = req.body.active;




    let qr = ` insert into info (name,cat,type,rnum,level,hname,hphone,academic,ophone,phone,offemail,add1,add2,tds,pin,refer,referphone,zone,longtitude,latitude,description,active) 
                    values ( '${name}' ,'${cat}','${type}','${rnum}','${level}','${hname}','${hphone}','${academic}','${ophone}','${phone}' ,'${offemail}','${add1}','${add2}','${tds}','${pin}','${refer}','${referphone}','${zone}','${longtitude}','${latitude}','${description}','${active}')`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err) }
        console.log(result, 'result')
        res.send({
            message: 'Data Inserted'
        })
    })
})
//update data//

app.put('/info/:id', (req, res) => {
    console.log(req.body, 'updatedata');

    let gId = req.params.id;
    let name = req.body.name;
    let cat = req.body.cat;
    let type = req.body.type;
    let rnum = req.body.rnum;
    let level = req.body.level;
    let hname = req.body.hname;
    let hphone = req.body.hphone;
    let academic = req.body.academic;
    let ophone = req.body.ophone;
    let phone = req.body.phone;
    let offemail = req.body.offemail;
    let add1 = req.body.add1;
    let add2 = req.body.add2;
    let tds = req.body.tds;
    let pin = req.body.pin;
    let refer = req.body.refer;
    let referphone = req.body.referphone;
    let zone = req.body.zone;
    let longtitude = req.body.longtitude;
    let latitude = req.body.latitude;
    let description = req.body.description;
    let active = req.body.active;

    let qr = `update info set name = '${name}' ,cat = '${cat}' ,type  = '${type}',level  = '${level}',academic  = '${academic}',rnum  = '${rnum}',
                hname  = '${hname}',hphone  = '${hphone}',ophone  = '${ophone}',phone  = '${phone}',offemail  = '${offemail}',add1  = '${add1}',
                add2  = '${add2}',tds  = '${tds}',pin = '${pin}',refer  = '${refer}',referphone  = '${referphone}',zone  = '${zone}',
                longtitude  = '${longtitude}',latitude  = '${latitude}',description  = '${description}',active  = '${active}'
            where id = ${gId}`;

    db.query(qr, (err, result) => {
        if (err) { console.log('err') }
        res.send({
            message: 'Data updated'
        })
    })
})
//delete data
app.delete('/info/:id', (req, res) => {
    let gId = req.params.id;
    let qr = `delete from info where id = '${gId}'`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err) }
        res.send({
            message: 'Data Deleted'
        })
    })
})


// contact details.....//
app.get('/contact', (req, res) => {
    let qr = `select * from contact`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: 'all book data',
                data: result
            })
        }
    })
})
app.get('/contact/:id', (req, res) => {

    let gId = req.params.id;

    let qr = `select * from contact where id = ${gId}`

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: 'Get single data',
                data: result
            })
        }
        else {
            res.send({
                message: 'data not found'
            })
        }
    })
})
app.post('/contact', (req, res) => {

    console.log(req.body, 'createdata');

    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let designation = req.body.designation;
    let status = req.body.status;
    let date = req.body.date;

    let qr = ` insert into contact (name,phone,email,designation,status,date) 
                    values ( '${name}' ,'${phone}','${email}', '${designation}', '${status}', '${date}' )`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err) }
        console.log(result, 'result')
        res.send({
            message: 'Data Inserted'
        })
    })
})
app.put('/contact/:id', (req, res) => {
    console.log(req.body, 'updatedata');

    let gId = req.params.id;
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let designation = req.body.designation;
    let status = req.body.status;
    let date = req.body.date;

    let qr = `update contact set name = '${name}' ,email = '${email}' ,phone = '${phone}',designation='${designation}' ,status='${status}',date='${date}'
                    where id = ${gId}`;

    db.query(qr, (err, result) => {
        if (err) { console.log('err') }
        res.send({
            message: 'Data updated'
        })
    })
})
//delete data
app.delete('/contact/:id', (req, res) => {
    let gId = req.params.id;
    let qr = `delete from contact where id = '${gId}'`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err) }
        res.send({
            message: 'Data Deleted'
        })
    })
})

// update details.....//

app.get('/tableupdate', (req, res) => {
    let qr = `select * from tableupdate`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: 'all book data',
                data: result
            })
        }
    })
})
app.get('/tableupdate/:id', (req, res) => {

    let gId = req.params.id;

    let qr = `select * from tableupdate where id = ${gId}`

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: 'Get single data',
                data: result
            })
        }
        else {
            res.send({
                message: 'data not found'
            })
        }
    })
})
app.post('/tableupdate', (req, res) => {

    console.log(req.body, 'createdata');

    let year = req.body.year;
    let response = req.body.response;
    let status = req.body.status;
    let visit = req.body.visit;
    let ppt = req.body.ppt;
    let cash = req.body.cash;
    let hname = req.body.hname;
    let date = req.body.date;

    let qr = ` insert into tableupdate (year,response,status,visit,ppt,cash,hname,date) 
                    values ( '${year}' ,'${response}','${status}','${visit}' ,'${ppt}','${cash}','${hname}','${date}'     )`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err) }
        console.log(result, 'result')
        res.send({
            message: 'Data Inserted'
        })
    })
})
app.put('/tableupdate/:id', (req, res) => {
    console.log(req.body, 'updatedata');

    let gId = req.params.id;
    let year = req.body.year;
    let response = req.body.response;
    let status = req.body.status;
    let visit = req.body.visit;
    let ppt = req.body.ppt;
    let cash = req.body.cash;
    let hname = req.body.hname;
    let date = req.body.date;

    let qr = `update tableupdate set year = '${year}' ,response = '${response}' ,status = '${status}',visit = '${visit}',ppt = '${ppt}',cash = '${cash}',hname = '${hname}',date = '${date}'
                    where id = ${gId}`;

    db.query(qr, (err, result) => {
        if (err) { console.log('err') }
        res.send({
            message: 'Data updated'
        })
    })
})
//delete data
app.delete('/tableupdate/:id', (req, res) => {
    let gId = req.params.id;
    let qr = `delete from tableupdate where id = '${gId}'`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err) }
        res.send({
            message: 'Data Deleted'
        })
    })
})
// document details.....//

app.get('/document', (req, res) => {
    let qr = `select * from document`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: 'all book data',
                data: result
            })
        }
    })
})
app.get('/document/:id', (req, res) => {

    let gId = req.params.id;

    let qr = `select * from document where id = ${gId}`

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: 'Get single data',
                data: result
            })
        }
        else {
            res.send({
                message: 'data not found'
            })
        }
    })
})

app.post('/document', (req, res) => {

    console.log(req.body, 'createdata');

    let name = req.body.name;
    let url = req.body.url;
    let date = req.body.date;

    let qr = ` insert into document (name,url,date) 
                values ( '${name}' ,'${url}','${date}' )`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err) }
        console.log(result, 'result')
        res.send({
            message: 'Data Inserted'
        })
    })
})
app.put('/document/:id', (req, res) => {
    console.log(req.body, 'updatedata');

    let gId = req.params.id;
    let name = req.body.name;
    let url = req.body.url;
    let date = req.body.date;

    let qr = `update document set name = '${name}' ,url = '${url}' ,date = '${date}'
                    where id = ${gId}`;

    db.query(qr, (err, result) => {
        if (err) { console.log('err') }
        res.send({
            message: 'Data updated'
        })
    })
})

//delete data
app.delete('/document/:id', (req, res) => {
    let gId = req.params.id;
    let qr = `delete from document where id = '${gId}'`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err) }
        res.send({
            message: 'Data Deleted'
        })
    })
})

// notes details.....//

app.get('/notes', (req, res) => {
    let qr = `select * from notes`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: 'all book data',
                data: result
            })
        }
    })
})
app.get('/notes/:id', (req, res) => {

    let gId = req.params.id;

    let qr = `select * from notes where id = ${gId}`

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: 'Get single data',
                data: result
            })
        }
        else {
            res.send({
                message: 'data not found'
            })
        }
    })
})

app.post('/notes', (req, res) => {

    console.log(req.body, 'createdata');

    let notes = req.body.notes;
    let date = req.body.date;

    let qr = ` insert into notes (notes,date) 
            values ( '${notes}','${date}' )`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err) }
        console.log(result, 'result')
        res.send({
            message: 'Data Inserted'
        })
    })
})

app.put('/notes/:id', (req, res) => {
    console.log(req.body, 'updatedata');

    let gId = req.params.id;
    let notes = req.body.notes;
    let date = req.body.date;


    let qr = `update notes set notes = '${notes}' ,date = '${date}' 
        where id = ${gId}`;

    db.query(qr, (err, result) => {
        if (err) { console.log('err') }
        res.send({
            message: 'Data updated'
        })
    })
})

//delete data
app.delete('/notes/:id', (req, res) => {
    let gId = req.params.id;
    let qr = `delete from notes where id = '${gId}'`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err) }
        res.send({
            message: 'Data Deleted'
        })
    })
})





app.listen(3000, () => {
    console.log(`Server is running `)
})






