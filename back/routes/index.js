import express from 'express';
import mysql from 'mysql';

const router = express.Router();

const connection = mysql.createConnection({
  multipleStatements: true,
  host: 'localhost',
  user: 'vindec',
  password: 'Mysql22',
  database: 'wildcorner',
});

connection.connect((err) => {
  if (!err) {
    console.log('Database is connected');
  } else {
    console.log('No connection with database');
  }
});


router.get('/api/items', (req, res) => {
  connection.query('SELECT * from items', (error, results) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.json(results);
    }
  });
});

router.post('/api/additem', function (req, res, next) {
  var post = { title: req.body.title, location: req.body.location, price: req.body.price, type:req.body.type };
  connection.query('INSERT INTO `wildcorner`.`items` SET ?', post, function (error, results, fields) {
    if (error)
      res.status(500).json({ flash: error.message });
    else
      res.status(200).json({ flash: "Item ajouté !" });
    res.end();
  });
});

router.post('/api/items/delitem:id', function (req, res, next) {
  connection.query('DELETE FROM `wildcorner`.`items` where id = ?', [req.params.id], (error, results) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.json(results[0]);
    }
  });
});

router.post('/api/items:id', function (req, res, next) {
  var colm = { title: req.body.title, location: req.body.location, price: req.body.price, type:req.body.type };
  connection.query('UPDATE FROM `wildcorner`.`items` SET ?', colm, [req.params.id], (error, results) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.json(results[0]);
    }
  });
});

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

export default router;
