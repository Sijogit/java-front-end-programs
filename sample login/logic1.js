class Landing{
    //propertiies
    dataBase={
        "Milan":{username:"Milan",password:"12"},
        "Manu":{username:"Manu",password:"123"},
        "Maya":{username:"Maya",password:"1234"},
        "Priya":{username:"Priya",password:"12345"}


    }
    //method
    //saveData
    saveData(){
        if(this.dataBase){
            localStorage.setItem("data",JSON.stringify(this.dataBase))
        }
    }
    getData(){
        this.dataBase=JSON.parse(localStorage.getItem("data"))
    }
    
    //register
    
    register(){
        let user =regusr.value
        let pswd =regpswd.value
        if(user=="" || pswd==""){
            alert('please enter a valid data ')
        }
        else{
            if(user in this.dataBase){
               alert('alredy exist')
            }
            else{
               this.dataBase[user]={username:user,pasword:pswd}
               alert('success')
               this.saveData()
               window.location='./login1.html'
            }
        }
    }
    //login 
    login(){
        let user1=login.value
        let pswd1=logpswd.value
        this.getData()
        if(user1 in this.dataBase){
           if(this.dataBase[user1].password==pswd1){
            alert('login successfull')
            localStorage.setItem("user",user1)
            window.location='./home1.html'
           }
           else{
            alert('user not found')
           }
        }
        
    else{
        alert('incorrect user name or password')
    }
    
    }

}
const obj=new Landing
obj.getData()
