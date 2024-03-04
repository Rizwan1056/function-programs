import inquirer from "inquirer";
const raining =await inquirer.prompt({
    
    type : "input",
    name : "mosam",
    message : "How IS Mosam Today !"
});

if(raining.mosam ==="rain"){
    console.log("WOW Its Raining We Enjoying a lot");
    
}
else if(raining.mosam ==="cloudy"){
    console.log("Today Mosam is Cloudy ");
    
}
else {
    console.log("Today mosam is Sunny");
    
}