/*
Author: Sohinee Saha
Email: stsaha@ucsc.edu
Assignment: Art 101, Lab 16
Created: December 2021
*/

// Using the core $.ajax() method
function display()
{
  $.ajax
  ({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/614/info.0.json",
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data)
    {
        console.log(data);
    },
    error: function (jqXHR, textStatus, errorThrown)
    {
        console.log("Error:", textStatus, errorThrown);
    }
  });
}

display()
