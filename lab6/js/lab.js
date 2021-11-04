/*
Author: Sohinee Saha
Email: stsaha@ucsc.edu
Assignment: Art 101, Lab 6
Created: October 2021
*/

//Define arrays and objects
myTransport = ["my Toyota Highlander", " my brother's Honda Civic", " biking", " walking"];

myMainRide = {make: "Toyota",
              model: "Highlander",
              color: "Bluestone Metallic",
              year: 2004,
              age: function() {
                  return 2021 - year;
                }
              }

//Deliver output
document.writeln("Types of Transportations I Use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
