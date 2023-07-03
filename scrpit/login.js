let submit= document.querySelector("#form form")
submit.addEventListener("submit",login)

async function login(event){
    event.preventDefault()
    let obj={}
    let all_input=document.querySelector("#form input")
    for(let i=0;i<all_input.length-1;i++){
        obj[all_input[i].id]=all_input[i].value
    }
    try{
        let req=await fetch("https://reqres.in/login",{
            method:"POST",
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        })
        if(req.ok){
            alert("login successful")
            window.location="./admin.html"
        }
    }catch(error){
        console.log("error")
        alert("sorry,something went wrong")
    
    }
}