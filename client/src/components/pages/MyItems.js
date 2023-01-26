import React, { useState, useEffect } from "react";
import  {Router} from "@reach/router";

const MyItems = () => {
    const button = document.createElement("button");
    button.innerHTML = "Add Item";
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        // code to add item goes here
        var fileInput = document.createElement("input");
    fileInput.type = "file";

    // listen for the "change" event on the file input element
    fileInput.addEventListener("change", function() {
      // get the selected file
      var file = fileInput.files[0];

      // send the file to the backend for storage
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "/upload", true);
      xhr.setRequestHeader("Content-Type", "application/octet-stream");
      xhr.send(file);

      // display the image on the screen
      var img = document.getElementById("uploaded-image");
      img.src = URL.createObjectURL(file);
      img.style.display = "block";
    });
    fileInput.click();
  });
    return (
        <button></button>

    )
}

export default MyItems

