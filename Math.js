function BMI(){
    var weight = Number(prompt("Enter your weight in pounds"));
    var height = Number(prompt("Enter your height in inches"));
    var result =Number(weight/height*703/height);
    alert("Your BMI is " +result.toFixed(2))
    if(result<18.5){
    alert("You are Underweight")
}
else if(result<24.9){
    alert("You are Healthy")
}
else if(result<29.9){
    alert("You are Overweight")
}
else if(result<34.9){
    alert("You are Obese")
}
else if(result>35)(
    alert("You are Fat")
)
}