class Landing{
    //propertiies
    constructor(){

      this.dataBase = {
        "Milan":{username:"Milan",password:"12"},
        "Manu":{username:"Manu",password:"123"},
        "Maya":{username:"Maya",password:"1234"},
        "Priya":{username:"Priya",password:"12345"},

    }
}
    //method
    //save data to local storage
    saveData(){
        if(this.dataBase){
            localStorage.setItem("database",JSON.stringify(this.dataBase))//JSON.stringify is using to convert data to string
        }
    }
    //get item from local storage
    getData(){
        this.dataBase=JSON.parse(localStorage.getItem("database"))//JSON.parse is using to convert string to data or object
    
    }
    //register
    register(){
        let user = regusr.value
        let pswd = regpswd.value
       this.dataBase = this.getData()
        if(user=="" || pswd ==""){
            alert("please enter a valid input")
        }
        else{
            console.log(this.dataBase)
            if(user in this.dataBase){
                alert('already exist')
            }
            else{
                this.dataBase[user]={username:user,password:pswd}
                console.log(this.dataBase);
                alert('success')
                this.saveData()
                //navigate login
                window.location="login.html" //to navigateother page or locations
        
            }
        }
    }
    //login
    login(){
        let user1 = login.value
        console.log(user1);
        let pswd1 = logpswd.value
        console.log(pswd1);
        this.getData()
        if( user1 in this.dataBase){
            if(this.dataBase[user1].password==pswd1){
                alert('login successfull')
                localStorage.setItem("user",user1)
                
                //navigate
                window.location="home.html"
            }
            else{
                alert('username or password incorrect')
            }

        }
        else{
            alert('user not found')
        }

    }
}
const obj = new Landing()
obj.getData()
// replacing user name in home page 
