import { Coach } from "./Coach";
import { CrikateCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach= new CrikateCoach();
let myGolfCoach= new GolfCoach();

//Declare arry for the coaches...initially empty...
//This makes our arry members to be objects of the coache class and its subclasses

let theCoaches: Coach[]= [];

//Addthe coaches to the array

theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for(let tempCoach of theCoaches){
    console.log(tempCoach.getDailyWorkOut());
}