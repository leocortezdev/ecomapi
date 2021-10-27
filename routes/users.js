const router = require("express").Router();

router.get("/test", (req, res) => {
    res.send("user test successful");
})

router.post("/posttest", (req, res) => {
    const username = req.body.username;
    
})

module.exports = router