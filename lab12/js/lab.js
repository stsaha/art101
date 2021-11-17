/*
Author: Sohinee Saha
Email: stsaha@ucsc.edu
Assignment: Art 101, Lab 12
Created: November 2021
*/

function sortingHat(str)
{
    len = str.length;
    mod = len % 4;
    if (mod == 0)
    {
      return "Gryffindor!"
      return "hi"
    }
    if (mod == 1)
    {
      return "Ravenclaw!"
    }
    if (mod == 2)
    {
      return "Slytherin!"
    }
    if (mod == 3)
    {
      return "Hufflepuff!"
    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function()
{
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
