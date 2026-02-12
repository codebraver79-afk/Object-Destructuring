let user = {
    name: "Alex",
    age:25,
    city: "New York"

}

const { name, age, city} = user;
document.getElementById('name').innerHTML = "Name: "+ name;
document.getElementById('age').innerHTML = "Age: "+age;
document.getElementById('city').innerHTML = "City:" +city