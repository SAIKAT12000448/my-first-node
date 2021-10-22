const express = require('express')
const cors=require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello nootty i  am saki saki saki olalalfdfdfdffdbdvsffvsvfs')
})

const users=[
  {id:0,name:'saikat datta',email:'saikatdatta36@gmail.com'},
  {id:1,name:'hridoy datta',email:'hridoy36@gmail.com'},
  {id:2,name:'dip datta',email:'dip6@gmail.com'},
]

// app.get('/users',(req,res)=>{
//       res.send(users)
// })


// app.get('/users/:id',(req,res)=>{
//   console.log(req.params.id)
// })

//dynamic
app.get('/users/:id',(req,res)=>{
  const id=req.params.id;
  const user=users[id];
  res.send(user);
})



app.get('/fruits/mangoes/fazli',(req,res)=>{
  res.send('Yummy Yummy mangoes');
})

app.get('/fruits',(req,res)=>{
  res.send(['mango','oranges','banana','apple'])
})

app.get('/users',(req,res)=>{
  const search =req.query.search;
  console.log(search);
  if(search){
    const searchresult = users.filter(user=>user.name.toLocaleLowerCase().includes(search))
    res.send(searchresult)
  }
  else{
    res.send(users);
  }
})
app.post('/users',(req,res)=>{
  console.log('hitting the post',req.body)
  const newUser = req.body;
  newUser.id = users.length
  users.push(newUser)
  res.json(newUser)
})


app.listen(port, () => {
  console.log(`Example app listening ,port`)
})