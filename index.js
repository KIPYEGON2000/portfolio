console.log("hey")
document.getElementById("myH1").textContent=`Hello`;
let name="Amos";
document.getElementById("sub").onclick=function()
    {
        name=document.getElementById("name").value;
        document.getElementById("dis").textContent=`${name}`
    }

let count=0;

const decrease=document.getElementById("decrease")
const increase=document.getElementById("increase")
const reset=document.getElementById("reset")
const counta=document.getElementById("count")


decrease.onclick= function(){
    count--;
    counta.textContent=count;
}
increase.onclick= function(){
    count++;
    counta.textContent=count;
}
reset.onclick= function(){
    count=0
  
    counta.textContent=count;
}



let age =18;
if(age >=age){
    console.log("old")
}

const mpesa=document.getElementById("mpesa");
const check=document.getElementById("check");
const radio=document.getElementById("radio");
const paypal=document.getElementById("paypal");
const bank=document.getElementById("bank");
const paymentSubmit=document.getElementById("payment-submit");
const agree=document.getElementById("sub-re");
const paye=document.getElementById("paye");


paymentSubmit.onclick=function(){
    check.checked ? agree.textContent=`thankyou for agree` : 
    agree.textContent=` please agree to our terms`

    if(mpesa.checked){
        paye.textContent=`you are paying with mpesa`
    }
    else if(paypal.checked){
        paye.textContent=`you are paying with paypal`
    }
    else if(bank.checked){
        paye.textContent=`you are paying with Bank`
    }
    else{
          paye.textContent=`you must select a payment method`
    }
}


list1=['name','age','year']
function comp(...name){
   return name
}


console.log(comp(list1))

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    move(speed){
        console.log(`the ${this.name} move at a speed of ${speed}`)

    }
    set age(age1){
        if(age1>0){
            this._age=age1;
        }
        else{
            console.error("age error")
        }
    }
    get age(){
        return this._age
    }

    
}

class human extends Animal{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed=runSpeed;
    }
    run(){
        console.log(`this  ${this.name} can run like kipchoge`)
        super.move(this.runSpeed)
    }

}
const huma=new human("Amos",21,50)

huma.run()



