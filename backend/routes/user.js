const router = require('express').Router();
let User = require("../schemas/User");
let LendBook = require("../schemas/LendBook");

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/register').post((req, res) => {
    
    const regno = req.body.regno;
    const name = req.body.name;
    const address = req.body.address;
    const department = req.body.department;
    const phoneno = req.body.phoneno;  
    const borrowertype = req.body.borrowertype;  
    const bookdescription = [];
    const count = req.body.count;

    let newUser = new User({
        regno,
        address,
        name,
        department,
        phoneno,
        bookdescription,
        borrowertype,
        count
        
    });

    newUser.save()
        .then(() => res.status(200).json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/lendbook/:id').post((req, res) => {
    const category = req.body.category;
    const title = req.body.title;
    const callnumber = req.body.callnumber;
    const author = req.body.author;
    const pubyear = req.body.pubyear;
    const volume = req.body.volume;
    const size = req.body.size;
    
    
    const lenddate = Date.parse(req.body.lenddate);
    /* const returndate = Date.parse(req.body.returndate);   */  
    const expectedreturndate = Date.parse(req.body.expectedreturndate);
    const borrowertype = req.body.borrowertype;
    const comments = req.body.comments;
    const logtype = req.body.logtype;
    const penalty = req.body.penalty;
    const defaulteddays = req.body.defaulteddays;
    //const hasitbeenreturned = req.body.hasitbeenreturned;
    const regno = req.body.regno;


    //const bast = req.body;

    const newLendBook = new LendBook({
        category,
        title,
        callnumber,
        author,
        pubyear,
        volume,
        size,
        lenddate,
        /* returndate, */
        logtype,
        expectedreturndate,
        borrowertype,
        comments,
        penalty,
        defaulteddays,
        /* hasitbeenreturned, */
        regno

    });

    newLendBook.save()
        .then((res) => User.findOneAndUpdate({ _id: req.params.id }, { $push: { bookdescription: res._id } }, { new: true }))
        .then(() => res.status(200).json('Book Lended!'))
        .catch(err => res.status(400).json('Error: ' + err));

});


router.route('/oneuser/:id').get(async(req, res) => {
    let lendbook = await User.findById({ _id: req.params.id }).populate("bookdescription");   
    res.json(lendbook);
});

router.route('/:id').post(async (req, res) => {
    
    const book = req.body.id
    await User.findOneAndUpdate({ _id: req.params.id }, { $pull: { bookdescription: book } })
        .then(() => res.status(200).json('Book Deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));

})

router.route('/count/:id').post(async (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.count = req.body.counter

            user.save()
                .then(() => res.json('Count has been increased'))
                .catch(err => res.status(400).json('Error:' + err))

        })
        .catch(err => res.status(400).json('Error:' + err))
    

})

//write code to edit and delete book description

module.exports = router;