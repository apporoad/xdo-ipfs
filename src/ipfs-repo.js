//npm install ipfs-repo --save

const Repo = require('ipfs-repo')
const repo = new Repo(__dirname + '/temp')


repo.init({cool:'config'} ,(err) =>{
    if(err){
        throw err
    }
    repo.open((err)=>{
        if(err){
            throw err
        }
        console.log('hello ready')
    })
        
})