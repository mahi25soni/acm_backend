const handleVerification = (err, req, res,next ) => {
    if (err || err.errors) {
         let validationErrors;
         
         if (err.code === 11000) {
          if (err.keyPattern.rollnumber === 1) {
            validationErrors = err.keyValue.rollnumber + " is already registered";
          }
        }
        
         console.log("new field k ", err)
        for (let field in err.errors) {
            const newField = err.errors[field]
            if(newField.name === "ValidatorError"){
                validationErrors = newField.message
            }
            else if (newField.name === "CastError"){
                validationErrors = "The write datatype for " + newField.path + " is " + newField.kind 
            }
            else {
              validationErrors = err
            }
        }
    
        res.status(200).json( {success : false , "Message" : validationErrors} );
      } else {
        next(err);
      }
    next()
}

module.exports = {handleVerification}