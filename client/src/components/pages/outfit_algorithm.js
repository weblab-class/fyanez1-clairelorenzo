// import "assert"

// import * as random from 'random';
export function getRandomInt(min, max) {
  // Generating random integer in range [x, y)
  // The maximum is exclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function do_colors_match(color, colors_to_match) {
  let color_map = {
    Black: [
      "Black",
      "Blue",
      "Brown",
      "Gray",
      "Green",
      "Orange",
      "Purple",
      "Red",
      "Tan",
      "Yellow",
      "White",
    ],
    Blue: ["Black", "White", "Green"],
    Brown: ["Black", "White", "Tan"],
    Gray: ["Black", "White"],
    Green: ["Black", "White"],
    Orange: ["Black", "White", "Yellow"],
    Purple: ["Black", "White"],
    Red: ["Black", "White"],
    Tan: ["Black", "White", "Brown"],
    Yellow: ["Black", "White", "Orange"],
    White: [
      "Black",
      "White",
      "Blue",
      "Brown",
      "Gray",
      "Green",
      "Orange",
      "Purple",
      "Red",
      "Tan",
      "Yellow",
    ],
  };

  for (let i = 0; i < colors_to_match.length; i++) {
    if (!color_map[colors_to_match[i]].includes(color)) {
      return false;
    }
  }
  return true;
}
export function make_outfit(items, constraints, items_filled) {
  let temp_category = 0;
  let options = { Top: [], Bottom: [], Dress: [], Shoes: [] };
  let outfit = {};
  let temperature = constraints[0];
  if (temperature < 40) {
    temp_category = 4;
  } else if (temperature < 55) {
    temp_category = 3;
  } else if (temperature < 70) {
    temp_category = 2;
  } else {
    temp_category = 1;
  }

  let style = constraints[1];
  let to_style = [];
  let item_categories = ["Top", "Bottom", "Shoes", "Dress"];

  for (let i = 0; i < item_categories.length; i++) {
    if (Object.keys(items_filled[item_categories[i]]).length != 0) {
      outfit[item_categories[i]] = items_filled[item_categories[i]];
      options[item_categories[i]].push(items_filled[item_categories[i]]);
    } else {
      to_style.push(item_categories[i]);
    }
  }

  if (
    Object.keys(items_filled["Top"]).length != 0 ||
    Object.keys(items_filled["Bottom"]).length != 0
  ) {
    let index = to_style.indexOf("Dress");
    to_style.splice(index, 1);
  }
  if (Object.keys(items_filled["Dress"]).length != 0) {
    let index1 = to_style.indexOf("Top");
    to_style.splice(index1, 1);
    let index2 = to_style.indexOf("Bottom");
    to_style.splice(index2, 1);
  }

  if (to_style == []) {
    let final = [];
    for (let i in outfit) {
      final.push(outfit[i]);
    }
    return final;
  }

  let colors_to_match = [];

  for (let item_filled in items_filled) {
    if (items_filled[item_filled].length != undefined) {
      let color = items_filled[item_filled]["item_color"];
      colors_to_match.push(color);
    }
  }
  for (let i = 0; i < to_style.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (
        items[j]["item_type"] == to_style[i] &&
        items[j]["item_warmth_score"] == temp_category &&
        items[j]["item_style"] == style &&
        do_colors_match(items[j]["item_color"], colors_to_match) == true
      ) {
        options[to_style[i]].push(items[j]);
      }
    }
  }

  if (
    options["Shoes"].length == 0 ||
    (options["Dress"].length == 0 && options["Top"].length == 0) ||
    (options["Dress"].length == 0 && options["Bottom"].length == 0)
  ) {
    return "No Outfits to Match Temperature and Preferences";
  }

  if (options["Dress"].length == 0) {
    let number_of_tops = options["Top"].length;
    let number_of_bottoms = options["Bottom"].length;
    let number_of_shoes = options["Shoes"].length;
    let top_ind = getRandomInt(0, number_of_tops);
    let bottom_ind = getRandomInt(0, number_of_bottoms);
    let shoes_ind = getRandomInt(0, number_of_shoes);
    outfit["Top"] = options["Top"][top_ind];
    outfit["Bottom"] = options["Bottom"][bottom_ind];
    outfit["Shoes"] = options["Shoes"][shoes_ind];
  } else if (options["Top"].length == 0 || options["Bottom"].length == 0) {
    let number_of_dresses = options["Dress"].length;
    let number_of_shoes = options["Shoes"].length;
    let dress_ind = getRandomInt(0, number_of_dresses.length);
    let shoes_ind = getRandomInt(0, number_of_shoes);
    outfit["Dress"] = options["Dress"][dress_ind];
    outfit["Shoes"] = options["Shoes"][shoes_ind];
  } else {
    let coin = getRandomInt(0, 2);
    if (coin == 0) {
      let number_of_tops = options["Top"].length;
      let number_of_bottoms = options["Bottom"].length;
      let number_of_shoes = options["Shoes"].length;
      let top_ind = getRandomInt(0, number_of_tops);
      let bottom_ind = getRandomInt(0, number_of_bottoms);
      let shoes_ind = getRandomInt(0, number_of_shoes);
      outfit["Top"] = options["Top"][top_ind];
      outfit["Bottom"] = options["Bottom"][bottom_ind];
      outfit["Shoes"] = options["Shoes"][shoes_ind];
    } else {
      let number_of_dresses = options["Dress"].length;
      let number_of_shoes = options["Shoes"].length;
      let dress_ind = getRandomInt(0, number_of_dresses.length);
      let shoes_ind = getRandomInt(0, number_of_shoes);
      outfit["Dress"] = options["Dress"][dress_ind];
      outfit["Shoes"] = options["Shoes"][shoes_ind];
    }
  }
  let final = [];
  for (let i in outfit) {
    if (Object.keys(items_filled[i]).length == 0) {
      final.push(outfit[i]);
    }
  }
  return final;
}
