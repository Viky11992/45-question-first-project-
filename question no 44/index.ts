// question no 44:
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The 
// function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three 
// times, using a different number of arguments each time.
// answer:

function Makesandwhich(...demand :string[]) {
    if(demand.length==0){
        console.log("your order list is empty plz fill them and enjoy a tasty sendwich");
        
            
    }
        else{
            demand.forEach((index,demand)=>[
                console.log(index+1, demand)
                
            ])
    
        }
    }
    Makesandwhich("TOMOTO","CHILLIE","GARLIC")
    Makesandwhich()
    Makesandwhich("MYNOIES","CHILLE SOURCE", "CRUNCHY")
