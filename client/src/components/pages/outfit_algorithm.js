// import * as random from 'random';
export function getRandomInt(min, max) {
  // Generating random integer in range [x, y)
  // The maximum is exclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function do_colors_match(color, colors_to_match) {
  color_map = {
    black: [
      "black",
      "blue",
      "brown",
      "gray",
      "green",
      "orange",
      "purple",
      "red",
      "tan",
      "yellow",
      "white",
    ],
    blue: ["black", "white", "green"],
    brown: ["black", "white", "tan"],
    gray: ["black", "white"],
    green: ["black", "white"],
    orange: ["black", "white", "yellow"],
    purple: ["black", "white"],
    red: ["black", "white"],
    tan: ["black", "white", "brown"],
    yellow: ["black", "white", "orange"],
    white: [
      "black",
      "white",
      "blue",
      "brown",
      "gray",
      "green",
      "orange",
      "purple",
      "red",
      "tan",
      "yellow",
    ],
  };

  for (let i = 0; i < colors_to_match.length; i++) {
    if (!color_map[colors_to_match[i]].includes(color)) {
      return true;
    } else {
      return false;
    }
  }
}

export function make_outfit(items, constraints, items_filled) {
  let options = { top: [], bottom: [], dress: [], shoes: [] };
  let outfit = {};
  let temperature = constraints[0];
  if (temperature < 40) {
    let temp_category = 4;
  } else if (temperature < 55) {
    let temp_category = 3;
  } else if (temperature < 70) {
    let temp_category = 2;
  } else {
    let temp_category = 1;
  }

  let style = constraints[1];

  let to_style = [];

  let item_categories = ["top", "bottom", "shoes", "dress"];

  for (let i = 0; i < item_categories.length; i++) {
    if (items_filled.includes(item_categories[i])) {
      outfit[element] = items_filled[element];
    } else {
      to_style.push(items[i]);
    }
  }
  if (items_filled.includes("top") || items_filled.includes("bottom")) {
    let index = items_filled.indexOf("dress");
    to_style.splice(index, 1);
  }
  if (items_filled.includes("dress")) {
    let index1 = items_filled.indexOf("top");
    to_style.splice(index1, 1);
    let index2 = items_filled.indexOf("bottom");
    to_style.splice(index2, 1);
  }

  if (to_style == []) {
    let final = [];
    for (let i in outfit) {
      final.push(outfit[i]);
    }
  }

  let colors_to_match = [];

  for (let i = 0; i < items_filled.length; i++) {
    let color = items_filled[color]["item_color"];
    colors_to_match.push(color);
  }

  for (let i = 0; i < to_style.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (
        item["item_type"] == to_style[i] &&
        item["item_warmth_score"] == temp_category &&
        item["item_style"] == style &&
        do_colors_match(item["item_color"], colors_to_match)
      ) {
        options[category].push(item);
      }
    }
  }
  if (
    options["shoes"] == [] ||
    (options["dress"] == [] && options["top"] == []) ||
    (options["dress"] == [] && options["bottom"] == [])
  ) {
    return "No Outfits to Match Temperature and Preferences";
  }

  if (options["dress"] == []) {
    let number_of_tops = options["top"].length;
    let number_of_bottoms = options["bottom"].length;
    let number_of_shoes = options["shoes"].length;
    let top_ind = getRandomInt(0, number_of_tops);
    let bottom_ind = getRandomInt(0, number_of_bottoms);
    let shoes_ind = getRandomInt(0, number_of_shoes);
    outfit["top"] = options["top"][top_ind];
    outfit["bottom"] = options["bottom"][bottom_ind];
    outfit["shoes"] = options["shoes"][shoes_ind];
  } else if (options["top"] == [] || options["bottom"] == []) {
    let number_of_dresses = options["dress"].length;
    let number_of_shoes = options["shoes"].length;
    let dress_ind = getRandomInt(0, number_of_dresses.length);
    let shoes_ind = getRandomInt(0, number_of_shoes);
    outfit["dress"] = options["dress"][dress_ind];
    outfit["shoes"] = options["shoes"][shoes_ind];
  } else {
    let coin = getRandomInt(0, 2);
    if (coin == 0) {
      let number_of_tops = options["top"].length;
      let number_of_bottoms = options["bottom"].length;
      let number_of_shoes = options["shoes"].length;
      let top_ind = getRandomInt(0, number_of_tops);
      let bottom_ind = getRandomInt(0, number_of_bottoms);
      let shoes_ind = getRandomInt(0, number_of_shoes);
      outfit["top"] = options["top"][top_ind];
      outfit["bottom"] = options["bottom"][bottom_ind];
      outfit["shoes"] = options["shoes"][shoes_ind];
    } else {
      let number_of_dresses = options["dress"].length;
      let number_of_shoes = options["shoes"].length;
      let dress_ind = getRandomInt(0, number_of_dresses.length);
      let shoes_ind = getRandomInt(0, number_of_shoes);
      outfit["dress"] = options["dress"][dress_ind];
      outfit["shoes"] = options["shoes"][shoes_ind];
    }
  }
  let final = [];
  for (let i in outfit) {
    final.push(outfit[i]);
  }

  return final;
}
