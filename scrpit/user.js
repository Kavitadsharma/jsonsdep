let submit=document.querySelector("#form form")
submit.addEventListener("submit",registerFunction)

async function registerFunction(event){
    event.preventDefault()
    let obj={}
    let all_input=document.querySelectorAll("#form input")
    for(let i=0;i<all_input.length-2;i++){
        obj[all_input[i].id]=all_input[i].value
    }
    let batch=document.querySelector("#form select")
    obj["batch"]=batch.value;
    let profession=document.querySelector("#form select")
    obj["profession"]=profession.value;
    try{
        let req=await fetch("http://localhost:8080/data",{
            method:"POST",
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        })
        if(req.ok){
            alert("successfully registered")
            window.location="./index.html"
        }
    }catch(error){
        console.log("error")
        alert("sorry,something went wrong")
    }

}