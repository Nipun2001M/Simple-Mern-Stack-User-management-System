const { response } = require('./app');
const User=require('./model')

const getUsers=(req,res,next)=>{
    User.find()
    .then( response=>{
        res.json({response})
    }).catch(error=>{
        res.json({messsage:error})
    })
}
const addUser=(req,res,next)=>{
    console.log('-----------------------Request Body:', req.body);

    const newuser=new User({
        id:req.body.id,
        name:req.body.name
    })
    newuser.save()
    .then(response=>{
        res.json({response})
    }).catch(error=>{
        res.json({error})
    })
}
const updateUser=(req,res,next)=>{
    const id=req.body.id;
    const name=req.body.name;
    User.updateOne({id:id},{$set:{name:name}})
    .then(response=>{
        res.json({response})
    }).catch(error=>{
        res.json({error})
    })

}
const deleteUser=(req,res,next)=>{
    const id=req.body.id;
    User.deleteOne({id})
    .then(response=>{
        res.json({response})
    }).catch(error=>{
        res.json({error})
    })


}
exports.getUsers=getUsers;
exports.addUser=addUser;
exports.updateUser=updateUser;
exports.deleteUser=deleteUser;
