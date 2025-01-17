const axios = require('axios')
const LINK = process.env.LINK || 8080


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get(`${LINK}/api/users`)
        .then(function (response) {
            res.render('index', { users: response.data});
        })
        .catch(err => {
            res.send(err)
        })
}

exports.add_user = (req, res) => {
    res.render('add_user')
}

exports.update_user = (req, res) => {
    axios.get(`${LINK}/api/users`,{params:{id: req.query.id}})
      .then(function(userdata){
        res.render("update_user", {user: userdata.data})
      })
      .catch(err => {
        res.send(err)
      })
}