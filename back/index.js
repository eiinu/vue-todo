const express = require('express')
const uuid = require('uuid')
const app = express()
// CORS模块，处理web端跨域问题
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//使用mysql中间件连接MySQL数据库
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',           //数据库地址
    user: 'root',               //用户名
    password: 'pxy000909',           //密码
    port: '3306',              //端口
    database: 'vuetodo',           //库名
    multipleStatements: true     //允许执行多条语句
})

connection.connect();
// 查询
app.get('/api/getproject', (req, res, next) => {
    const sql = `select * from ptable where uid = '${req.query.uid}' order by ctime desc`
    connection.query(sql, (err, results) => {
        if (err) {
            return res.json({
                code: 1,
                message: 'error',
                affextedRows: 0
            })
        }
        res.json({
            code: 200,
            data: results,
            affextedRows: results.affextedRows
        })
    })
})
app.get('/api/getitem', (req, res, next) => {
    let sql;
    if (req.query.pid == 'all') {
        sql = `select * from ${req.query.uid} order by ctime desc`
    }
    else if (req.query.pid == 'today') {
        const t = new Date(Date.now);
        let m1 = new Date(new Date().setHours(0, 0, 0, 0)).getTime();
        let m2 = m1 + 86400000;
        sql = `select * from ${req.query.uid} where ctime >= ${m1} and ctime <= ${m2} order by ctime desc`;
    }
    else if (req.query.pid == 'favorite') {
        sql = `select * from ${req.query.uid} where favorite = 1 order by ctime desc`
    }
    else {
        sql = `select * from ${req.query.uid} where pid = '${req.query.pid}' order by ctime desc`
    }
    connection.query(sql, (err, results) => {
        if (err) {
            return res.json({
                code: 1,
                message: 'error',
                affextedRows: 0
            })
        }
        res.json({
            code: 200,
            data: results,
            affextedRows: results.affextedRows
        })
    })
})
app.post('/api/changeitem', (req, res, next) => {
    const uid = req.body.uid;
    const pid = req.body.pid;
    const cid = req.body.cid;
    const status = req.body.status;
    const favorite = req.body.favorite;
    const title = req.body.title;
    const ctime = req.body.ctime;
    const sql = `update ${uid} set status = ${status},favorite = ${favorite},title = '${title}',ctime = ${ctime} where pid = '${pid}' and cid = '${cid}'`;
    connection.query(sql, (err) => {
        if (err) {
            return res.json({
                code: 1,
                message: 'error',
                affextedRows: 0
            })
        }
        res.json({
            code: 200,
            data: 'success',
        })
    })
})
app.post('/api/additem', (req, res, next) => {
    const uid = req.body.uid;
    const pid = req.body.pid;
    const cid = uuid.v1().replace(/-/g, '');
    const title = req.body.title;
    const ctime = Date.now();
    const sql = `insert into ${uid} values('${pid}','${cid}','${title}',${ctime},0,0)`;
    connection.query(sql, (err) => {
        if (err) {
            return res.json({
                code: 1,
                message: 'error',
                affextedRows: 0
            })
        }
        res.json({
            code: 200,
            data: {
                pid: pid,
                cid: cid,
                title: title,
                ctime: ctime,
                status: 0,
                favorite: 0
            },
        })
    })
})
app.post('/api/addproject', (req, res, next) => {
    const uid = req.body.uid;
    const title = req.body.title;
    const pid = uuid.v1().replace(/-/g, '');
    const ctime = Date.now();
    const sql = `insert into ptable values('${uid}','${pid}','${title}',${ctime})`;
    connection.query(sql, (err) => {
        if (err) {
            return res.json({
                code: 1,
                message: 'error',
                affextedRows: 0
            })
        }
        res.json({
            code: 200,
            data: {
                uid: uid,
                pid: pid,
                title: title,
                ctime: ctime,
            },
        })
    })
})
app.post('/api/deleteproject', (req, res, next) => {
    const uid = req.body.uid;
    const pid = req.body.pid;
    const sql = `delete from ptable where uid = '${uid}' and pid = '${pid}'; delete from ${uid} where pid = '${pid}'`;
    connection.query(sql, (err) => {
        if (err) {
            return res.json({
                code: 1,
                message: 'error',
                affextedRows: 0
            })
        }
        res.json({
            code: 200,
            data: 'delete project success'
        })
    })
})
app.post('/api/deleteitem', (req, res, next) => {
    const uid = req.body.uid;
    const pid = req.body.pid;
    const cid = req.body.cid;
    const sql = `delete from ${uid} where pid = '${pid}' and cid = '${cid}'`;
    connection.query(sql, (err) => {
        if (err) {
            return res.json({
                code: 1,
                message: 'error',
                affextedRows: 0
            })
        }
        res.json({
            code: 200,
            data: 'delete item success'
        })
    })
})

// habit
app.post('/api/habit/deletecard', (req, res, next) => {
    const hid = req.body.hid;
    const sql = `delete from habit where hid = '${hid}';delete from htable where hid = '${hid}';`;
    connection.query(sql, (err, results) => {
        if (err) {
            return res.json({
                code: 1,
                message: 'error'
            })
        }
        res.json({
            code: 200,
            data: 'success'
        })
    })
})
app.post('/api/habit/changestatus', (req, res, next) => {
    const hid = req.body.hid;
    const time = new Date(Date.now());
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const today = req.body.today;
    let sql;
    if (today === false) {
        sql = `delete from habit where hid = '${hid}' and year = ${year} and month = ${month} and day = ${day};`;
    }
    else {
        sql = `insert into habit values('${hid}',${year},${month},${day},${Date.now()});`;
    }
    connection.query(sql, (err, results) => {
        if (err) {
            return res.json({
                code: 1,
                message: 'error',
            })
        }
        res.json({
            code: 200,
            data: 'success'
        })
    })
})
app.get('/api/habit/getall', (req, res, next) => {
    const sql1 = `select * from htable order by ctime desc;`;
    let r1 = [];
    const time = new Date(Date.now());
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const sql2 = `select hid from habit where year = ${year} and month = ${month} and day = ${day};`;
    let r2 = [];
    connection.query(sql1 + sql2, (err, results) => {
        if (err) {
            return res.json({
                code: 1,
                message: 'error',
            })
        }
        r1 = results[0];
        r2 = results[1];
        res.json({
            code: 200,
            data: [r1, r2]
        })
    })
})
app.post('/api/habit/createhabit', (req, res, next) => {
    const title = req.body.title;
    const icon = req.body.icon;
    const ctime = Date.now();
    const hid = uuid.v1().replace(/-/g, '');
    const sql = `insert into htable values('${hid}','${title}',1,${ctime},'${icon}')`;
    connection.query(sql, (err) => {
        if (err) {
            return res.json({
                code: 1,
                message: 'error',
                affextedRows: 0
            })
        }
        res.json({
            code: 200,
            data: {
                hid: hid,
                title: title,
                status: 1,
                ctime: ctime,
                icon: icon,
            }
        })
    })
})


//启动服务，端口3001
app.listen(3001, () => {
    console.log('服务启动成功:' + `http://localhost:3001/`)
})