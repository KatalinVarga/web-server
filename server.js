const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));

app.get('/', (req, res)=>{
    res.sendFile('index.html');
})

app.post('/queryGit', async (req,res)=>{
    // console.log(req.body);
    try{
        const gitResponse = await axios.get(`https://api.github.com/users/${req.body.username}`);
        console.log(gitResponse.data);
        if (gitResponse.data.public_repos <= 5){
            res.send('what an amatuer');
        }else if(gitResponse.data.public_repos >5 && gitResponse.data.public_repos <=10){
            res.send ('getting there')
        }else if(gitResponse.data.public_repos >10 && gitResponse.data.public_repos <=20){
        res.send ('pro')  
        } else {
            res.send('god tier');
        }
     
    } catch(err){
        console.log(err);
    }
 
})

app.listen(3000,()=>{
    console.log('Server listening on port 3000');
}) 
