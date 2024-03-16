const router=require('express').Router()
const user=require('../Model/user')
// const Crypto_pass=require('crypto-js')

router.post('/insert',async(req,res)=>{
console.log("req.body",req.body);
try{
// const newdata=new user(req.body)
const newdata=new user({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
   

})

//.........................post data
const saveData=await newdata.save()
console.log('saveData',saveData);
res.status(200).json('success')
}catch(err){
    res.status(500).json('failed')

}


})

//...........................................viewdata
router.get('/viewdata',async(req,res)=>{
    console.log("req.body",req.body);
    
try{
const alldata=await user.find()
res.status(200).json(alldata)
}catch(err){
res.status(500).json('error')

}
})
///..............................get a sinle data
router.get('/singledata',async(req,res)=>{
    console.log("req.body",req.body.email);
    
try{
const singledata=await user.findOne({email:req.body.email})
res.status(200).json(singledata)
}catch(err){
res.status(500).json('error')
}
})
//.........................get data by id
router.get('/single/:byid',async(req,res)=>{
    console.log("req.body",req.params.byid);
    
try{
const singledata=await user.findById(req.params.byid)
res.status(200).json(singledata)
}catch(err){
res.status(500).json('error')
}
})


//......................................delete
router.delete('/delete/:byid',async(req,res)=>{
    
try{
await user.findByIdAndDelete(req.params.byid)
res.status(200).json("data deleted")
}catch(err){
res.status(500).json('error')
}
})
//..........................................................delete by one
router.delete('/deleteone', async (req, res) => {
    try {
        await user.findOneAndDelete({ email: req.query.email });
        res.status(200).json("data deleted");
    } catch (err) {
        res.status(500).json('error');
    }
})

//..................................................upload data
router.put('/updatedata/:id', async (req, res) => {
    try {
        const updatedata = await user.findByIdAndUpdate(
            { _id: req.params.id }, 
            { $set: { firstname: req.body.firstname } },
            { new: true }
        );
        res.status(200).json(updatedata);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports=router
