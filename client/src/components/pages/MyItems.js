import React, { useState, useEffect } from "react";
import  {Router} from "@reach/router";

const MyItems = () => {
    const button = document.createElement("button");
    button.innerHTML = "Add Item";
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        // code to add item goes here
    });
    return (
        <button></button>

    )
}

export default MyItems

