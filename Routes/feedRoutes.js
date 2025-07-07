const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("This is the Feed Page, redirect to any Feedpage with: /public for Public Feed, /private for Private Feed, /group for Group Feed.")
})

router.get('/public', (req, res)=>{
    res.send("This is the Public Feed Page.")
})
router.get('/private', (req, res)=>{
    res.send("This is the Private Feed Page.")
})
router.get('/group', (req, res)=>{
    res.send("This is the Group Feed Page.")
})

module.exports = router;