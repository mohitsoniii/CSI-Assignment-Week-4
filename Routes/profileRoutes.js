const express = require('express');
const router = express.Router();

let name;
let age;

router.get('/', (req,res)=>{
    res.send("This is the profile page.")
})

router.get('/edit', (req,res)=>{
    name = req.query.name;
    age = req.query.age;
    res.send("profile updated successfully :)")
})

router.get('/view', (req, res) => {
    res.json({ "Name": name, "Age": age });
});

module.exports = router;