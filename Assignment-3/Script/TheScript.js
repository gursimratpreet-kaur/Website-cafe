/*  Name : Gursimratpreet Kaur
Student ID: 991845418 
Assignment-3
Date Completed: March 22, 2026*/

const firstform = document.forms[0];
const second = document.getElementById("secondfield");
const third = document.getElementById("thirdfield");
const drink = firstform.drinkChoice;
const tea = firstform.teaChoice;
const size = firstform.drinkSize;
const dessert = firstform.chkDessert;
const fDisplay = document.getElementById("txtDisplay");
const addBtn = document.getElementById("addOrder");
const theTable = document.getElementById("firstTable");

/* Order's array */
let orders = [];

for (const d of drink){
    d.addEventListener("change" , display);
    d.addEventListener("change" , change);
}
for (const t of tea){
    t.addEventListener("change" , display);
}
size.addEventListener("click" , display);
second.addEventListener("change" , display);
for(const d of dessert){
    d.addEventListener("change" , display);
}
let dessertChoice = "";
function display(){
    let dessertChosen = "";
    for(const d of dessert){
        if(d.checked){
            dessertChosen+= " " + d.value;
        }
    }
    dessertChoice = dessertChosen;
    fDisplay.innerHTML = size.value + " " + tea.value + " " + drink.value + "<br>" + dessertChosen;
}

/*To change second radio buttons */
function change(){
    if(drink.value == "Coffee"){
        fDisplay.innerHTML = "Small Arabica Coffee";
        second.innerHTML = 
            "<legend>Choose a coffee type</legend>" +    
             "<input type= radio name= teaChoice value= Java>Java<br>" +
            "<input type=radio name=teaChoice value=Arabica checked/>Arabica<br>" +
            "<input type=radio name=teaChoice value=Columbian>Columbian";
    }
    else if(drink.value == "Tea"){
        fDisplay.innerHTML = "Small Jasmine Tea";
        second.innerHTML = 
            "<legend>Choose a Tea type</legend>" +     
            "<input type= radio name= teaChoice value= Breakfast>Breakfast<br>" +
            "<input type=radio name=teaChoice value=Jasmine checked/>Jasmine<br>" +
            "<input type=radio name=teaChoice value=Green>Green";
    }
    else if(drink.value == "Juice"){
        fDisplay.innerHTML = "Small Orange Juice";
        second.innerHTML = 
            "<legend>Choose a Juice type</legend>" +
            "<input type= radio name= teaChoice value= Apple>Apple<br>" +
            "<input type=radio name=teaChoice value=Orange checked/>Orange<br>" +
            "<input type=radio name=teaChoice value=Grape>Grape";
    }
}


addBtn.addEventListener("click" , displayOrders);

let count = 101;
/*To add order numbers.*/

function displayOrders(){
    display();
    let record = count + "," + size.value + "," + tea.value + "," + drink.value + "," + dessertChoice;
    orders.push(record); 
    count+=1;
    let tableData = "<tr><th>Order</th><th>Size</th><th>Type</th><th>Beverage</th><th>Dessert</th></tr>";
    for(let order of orders){
        let fields = order.split(",");
        tableData = tableData + "<tr>" + "<td>" + fields[0] + "</td>" 
                    + "<td>" + fields[1] + "</td>"  
                    + "<td>" + fields[2] + "</td>"  
                    + "<td>" + fields[3] + "</td>"  
                    + "<td>" + fields[4] + "</td>" + "</tr>";
        
    }
    theTable.innerHTML = tableData;
}
    