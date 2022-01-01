const express= require('express');
const router = express.Router();
const StudentDetails = require('../models/student_details.js')
router.get('/',async(req,res)=>
{
    try{
        
        const student = await StudentDetails.find().sort({timestamp :-1}).limit(10)
        res.send(student);
        

    }
    catch(err)
    {
        res.send("Error"+ err);
    }
    
});
router.get('/:username',async(req,res)=>
{
    try{
        const student = await StudentDetails.find({username : req.params.username })
        res.send(student);

    }
    catch(err)
    {
        res.send("Error Cant find user with that userID");
    }
    
});
router.post('/',async(req,res)=>
{
    const det = new StudentDetails
        ({
            index : StudentDetails.length +1,
            username : req.body.username,
            name : req.body.name,
            
        })

    try{
        const s1 = await det.save()
        res.send(s1)

    }
    catch(err){
        res.send(err)
    }
})
router.patch('/:id',async(req,res)=>
{
    try{
        const student = await StudentDetails.findById(req.params.id)
        student.username = req.body.username;
        const new_Student = await student.save()
        res.json(new_Student);

    }
    catch(err)
    {
        res.send("Error ");
    }
    
});







module.exports = router;