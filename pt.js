function textChange(){
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
}

function textReset(){
    document.getElementById("demo").innerHTML = "Lorem Ipsum";
}
var ninja = {
    name: "",
    rank: "",
    hairColor: "",
    eyeColor: "",
    skills: [ "Supernova Shotgun", "Stun Drone",],
};
function customizeNinja(){
    ninja.name =  prompt("What shall your ninja be name?");
    ninja.rank = prompt("What rank is this ninja?");
    ninja.hairColor = prompt("What color is your ninja's hair?");
    ninja.eyeColor = prompt("What is your ninja's eyes?");
    

document.getElementById("ninjaDesc").innerHTML = ("Your ninja name is " + ninja.name +
                                                  ". " + "This ninja is within the ranks of " +
                                                   ninja.rank + ". " + "Your ninja's hair color is " +
                                                  ". " + ninja.hairColor + "Your ninja's eyes " + ninja.eyeColor + ". "+
                                                  "Your ninja ability 1 is " + ninja.skills[1] + ". " + 
                                                  "Your ninja ability 2 is "  + ninja.skills[2] + ". ");
}
