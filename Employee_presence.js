const IS_Absent=0;

let empCheck=Math.floor(Math.random()*12)%2;
if(empCheck==IS_Absent){
    console.log("Employee is ABSENT");
}
else{
    console.log("Employee is PRESENT");
}