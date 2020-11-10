const router = require('express').Router();
let LendBook = require("../schemas/LendBook");
let User = require("../schemas/User")

router.route('/register/:id').post((req, res) => {
    const category = req.body.category;
    const title = req.body.title;
    const callnumber = req.body.callnumber;
    const author = req.body.author;
    const pubyear = req.body.pubyear;
    const volume = req.body.volume;
    const size = req.body.size;
    const quantity = req.body.quantity;
    //const lenddate = Date.parse(req.body.lenddate);
    //const returndate = Date.parse(req.body.lenddate);
    const hasitbeendreturned = req.body.hasitbeendreturned;
    //const expectedreturndate = Date.parse(req.body.expectedreturndate);
    const borrowertype = req.body.borrowertype;
    const comments = req.body.comments;
    const logtype = req.body.logtype;
    const penalty = req.body.penalty;
    const defaultdedays = req.body.defaultdedays;


    //const bast = req.body;

    const newLendBook = new LendBook({
        category,
        title,
        callnumber,
        author,
        pubyear,
        volume,
        size,
        quantity,
       // lenddate,
        //returndate,
        logtype,
        hasitbeendreturned,
        //expectedreturndate,
        borrowertype,
        comments,
        penalty,
        defaultdedays
        
    });

    newLendBook.save()
        .then((res) => User.findOneAndUpdate({ _id: req.params.id }, { $push: { bookdescription: res._id } }, { new: true }))
        .then(() => res.status(200).json('Book Lended!'))
        .catch(err => res.status(400).json('Error: ' + err));


});




module.exports = router;