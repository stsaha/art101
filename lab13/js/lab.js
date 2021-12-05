/*
Author: Sohinee Saha
Email: stsaha@ucsc.edu
Assignment: Art 101, Lab 13
Created: November 2021
*/

//Create function
function fbb()
{
  for (var i=1; i <= 200; i++)
  {
    if ((i % 3 == 0) && (i % 5 == 0) && (i % 7 == 0))
    {
      console.log("FizzBuzzBoom");
      document.writeln("FizzBuzzBoom");
    }
    else if ((i % 3 == 0) && (i % 5 == 0))
    {
      console.log("FizzBuzz");
      document.writeln("FizzBuzz");
    }
    else if ((i % 3 == 0) && (i % 7 == 0))
    {
      console.log("FizzBoom");
      document.writeln("FizzBoom");
    }
    else if ((i % 5 == 0) && (i % 7 == 0))
    {
      console.log("BuzzBoom");
      document.writeln("BuzzBoom");
    }
    else if (i % 3 == 0)
    {
      console.log("Fizz");
      document.writeln("Fizz");
    }
    else if (i % 5 == 0)
    {
      console.log("Buzz");
      document.writeln("Fizz");
    }
    else if (i % 5 == 0)
    {
      console.log("Buzz");
      document.writeln("Buzz");
    }
    else
    {
      console.log(i);
      document.writeln(i);
    }
    document.writeln("<br>");
    }
}

//Deliver output
fbb();
