const jsonServer=require("json-server")
const fs=require("fs")
const server=jsonServer.create()
const router=jsonServer.router("db.json")
const middleware=jsonServer.defaults()
const bodyParser=require("body-parser")
server.use(bodyParser.json())
server.use(middleware)
const port=8080
server.post("/data",(req,res)=>{
    const{name,age,place,batch,profession}=req.body
    fs.readFile("./db.json",(err,data)=>{
        if(err){
            res.send({msg:"something went wrong"})
            return
        }
var data=JSON.parse(data.toString())
var last_id=data.users[data.users.length-1].id;
console.log(last_id)
data.users.push({"id":last_id+1,name,age,place,batch,profession})
var writendata=fs.writeFile("./db.json",JSON.stringify(data),(err,result)=>{
    if(err){
        res.send(err)
    }
})
res.send("registered")
        
    })
})












server.use(router)
server.listen(port,()=>{
    console.log("running to the port 8080")
})