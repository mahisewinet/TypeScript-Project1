"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCricketCoach = new CricketCoach_1.CrikateCoach();
let myGolfCoach = new GolfCoach_1.GolfCoach();
//Declare arry for the coaches...initially empty...
//This makes our arry members to be objects of the coache class and its subclasses
let theCoaches = [];
//Addthe coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkOut());
}
