const Author = require("../models/author.model") // author model

// return all authors
module.exports.findAllAuthors = (req, res) => {
Author.find({}).sort("name")
    .then(allAuthors => res.json({ authors: allAuthors }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// return one author
module.exports.findOneSingleAuthor = (req, res) => {
	Author.findOne({ _id: req.params.id })
		.then(oneSingleAuthor => res.json({ author: oneSingleAuthor }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

//create a new Author
module.exports.createNewAuthor = (req, res) => {
  Author.create(req.body)
    .then(newlyCreatedAuthor => res.json({ author: newlyCreatedAuthor }))
    .catch(err => res.status(400).json( err ));
};

//update exists Author
module.exports.updateExistingAuthor = (req, res) => {
  Author.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators:true  })
    .then(updatedAuthor => res.json({ author: updatedAuthor }))
    .catch(err => res.status(400).json( err ));
};

//delete a Author
module.exports.deleteAnExistingAuthors = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};