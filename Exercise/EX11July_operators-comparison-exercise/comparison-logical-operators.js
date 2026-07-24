let agearray = [18,17,65,66,25,"Achman"];
console.log("❌ Age must be between 18 and 65");

for (i=0;i<agearray.length;i++){
    age = agearray[i];
    if(age> 18 && age< 65)
        console.log( age + " Valid (in range)");
    else if(age === 18 || age === 65)
        console.log(age + " Valid (boundary)");
    else if (age < 18)
        console.log(age + " Invalid (too young)");
    else if (age > 65)
        console.log(age + " Invalid (too old)");
    else
        console.log(age + " Invalid input");
}

