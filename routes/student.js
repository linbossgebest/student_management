var express = require('express');
var Student = require('../mongodb/student')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index.html', {
    hobbies: ['篮球', '足球', '羽毛球', '乒乓球']
  });
});

//查询所有
router.get('/students', function (req, res) {
  Student.find(function (err, students) {
    if (err) {
      return res.status(500).send('server error' + err)
    }
    res.render('index.html', {
      hobbies: ['篮球', '足球', '羽毛球', '乒乓球'],
      students: students
    })
  })
})

//跳转新增页面
router.get('/students/add', function (req, res) {
  res.render('add.html')
})

//新增学生信息
router.post('/students/add', function (req, res) {
  // console.log(req.body)
  new Student(req.body).save(function (err) {
    if (err) {
      return res.status(500).send('server error' + err)
    }
    res.redirect('/students')
  })
})

//跳转编辑页面
router.get('/students/edit', function (req, res) {
  var id = req.query.id
  Student.findById(id, function (err, student) {
    if (err) {
      return res.status(500).send('server error' + err)
    }
    // console.log(student)
    res.render('edit.html', {
      student: student
    })
  })
})

//修改学生信息
router.post('/students/edit', function (req, res) {
  //console.log(req.body)
  Student.findByIdAndUpdate(req.body.id, req.body, function (err) {
    if (err) {
      return res.status(500).send('server error' + err)
    }
    res.redirect('/students')
    
  })
})

//删除学生信息
router.get('/students/delete', function (req, res) {
  var id = req.query.id
  // console.log(id)
  Student.remove({ "_id": id }, function (err) {
    if (err) {
      return res.status(500).send('server error' + err)
    }
    res.redirect('/students')
  })
})






module.exports = router