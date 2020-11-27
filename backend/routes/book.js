const router = require('express').Router();
let Book = require("../schemas/Book");

router.route('/').get((req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post((req, res) => {
    const category = req.body.category;
    const title = req.body.title; //in the frontend, title+callno should be displayed as the naem of the nook
    const callnumber = req.body.callnumber;
    const author = req.body.author;
    const pubyear = req.body.pubyear;
    const volume = req.body.volume;
    const size = req.body.size;
    const quantity = req.body.quantity;
    const hasitbeenlended = false;
    /*const lenddate = req.body.lenddate;
    const returndate = req.body.lenddate;
    const hasitbeendreturned = req.body.hasitbeendreturned;
    const expectedreturndate = req.body.expectedreturndate;
    const borrowertype = req.body.borrowertype;
    const comments = req.body.comments*/

    //const bast = req.body;

    const newBook = new Book({ 
        category,
        title,
        callnumber,
        author,
        pubyear,
        volume,
        size,
        quantity,
        hasitbeenlended
       /* lenddate,
        returndate,
        hasitbeendreturned,
        expectedreturndate,
        borrowertype,
        comments*/
        //...bast
     });

    newBook.save()
        .then(() => res.status(200).json('Book added!'))
        .catch(err => res.status(400).json('Error: ' + err));

    
});

module.exports = router;