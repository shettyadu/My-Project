var express = require('express');
var router = express.Router();
var Review = require('../models/review');
var Contact = require('../models/contact');

//get contact
router.get('/contact', (req, res)=>{
	res.render('contact');
});

//get menu
router.get('/menu', (req, res)=>{
	res.render('menu');
});

//get review
router.get('/review', (req, res)=>{
	res.render('review');
});

//get show review
router.get('/showreview', (req, res)=>{
   Review.find({},(err,review)=>{
		 if(err) throw err;
		 res.render('showreview',{review});
	 });

});

//get showcontact
router.get('/showcontact',(req,res)=>{
	Contact.find({},(err,contact)=>{
		if(err) throw err;
		res.render('showcontact',{contact});
	});
});

/* router.get('/showcontact',(req,res)=>{
	Contact.findByIdAndUpdate(req.params.ObjectId,req.body,{new: true},(err,contact)=>{
		if(err) throw err;
		res.render('showcontact',{contact});
	});
}); */

router.post('/review', (req, res)=>{

	var review = req.body.review;
console.log("review is reseaved::"+review);

		var newReview = new Review({
			review: review
					});

		Review.create(newReview,(err, review)=>{
			if(err) throw err;
			res.render('review',{review});
		});
});

router.post('/contact',(req,res)=>{
	var name =req.body.name;
	var email = req.body.email;
	var message=req.body.message;
   console.log("contact is person::"+name);

	 var newContact = new Contact({
		 name: name,
		 email: email,
		 message: message
	 });
	 Contact.create(newContact,(err,contact)=>{
		 if(err) throw err;
		 res.render('contact',{contact});
	 });
});


router.get('/update/:id',(req,res)=>{
   console.log("id :"+req.params.id);
	 Contact.findById(req.params.id,(err,contact)=>{
		 if(err) throw err;
		 res.render("update",{contact});
		 console.log("contact : "+ contact);
	 })
});

router.post('/updatecontact/:id',(req,res)=>{
	console.log("id :"+req.params.id);
	Contact.findByIdAndUpdate(req.params.id,{name: req.body.name,email: req.body.email,message: req.body.message},{new : true},(err,contact)=>{
		if(err) throw err;
		res.redirect("/");
	});
});

router.get('/delete/:id',(req,res)=>{
	console.log("delete::id :"+req.params.id);
	Contact.findByIdAndRemove(req.params.id,(err,contact)=>{
		if(err) throw err;
		res.redirect("/");
	});
});

module.exports = router;
