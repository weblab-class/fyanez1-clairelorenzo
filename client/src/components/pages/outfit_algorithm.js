import * as random from 'random';

var _pj;

function _pj_snippets(container) {
  function in_es6(left, right) {
    if (right instanceof Array || typeof right === "string") {
      return right.indexOf(left) > -1;
    } else {
      if (right instanceof Map || right instanceof Set || right instanceof WeakMap || right instanceof WeakSet) {
        return right.has(left);
      } else {
        return left in right;
      }
    }
  }

  container["in_es6"] = in_es6;
  return container;
}

_pj = {};

_pj_snippets(_pj);

function do_colors_match(color, colors_to_match) {
  var color_map;
  color_map = {
    "black": ["black", "blue", "brown", "gray", "green", "orange", "purple", "red", "tan", "yellow", "white"],
    "blue": ["black", "white", "green"],
    "brown": ["black", "white", "tan"],
    "gray": ["black", "white"],
    "green": ["black", "white"],
    "orange": ["black", "white", "yellow"],
    "purple": ["black", "white"],
    "red": ["black", "white"],
    "tan": ["black", "white", "brown"],
    "yellow": ["black", "white", "orange"],
    "white": ["black", "white", "blue", "brown", "gray", "green", "orange", "purple", "red", "tan", "yellow"]
  };

  for (var color1, _pj_c = 0, _pj_a = colors_to_match, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    color1 = _pj_a[_pj_c];

    if (!_pj.in_es6(color, color_map[color1])) {
      return false;
    }
  }

  return true;
}

function make_outfit(items, constraints, items_filled) {
  /*
  items: all clothing items in user's database (array of dictionaries)-
  example: [{item_name:'black shoes', item_link:'...', item_style:'sports',
  item_type:'shoes', item_color:'white', warmth_score:2 }]
   constraints: array with constraints for outfit [temp,style]
  items_filled: dictionary mapping element to the item already chosen by user (item chosen is dict with data). Could be empty if user hasn't
  chosen anything or could already have all items needed for the outfit
  example: {shoes:{...}, top:{...}}
  exmample2: {}
   */
  var bottom_ind, coin, color, color_map, colors_to_match, dress_ind, number_of_bottoms, number_of_dresses, number_of_shoes, number_of_tops, options, outfit, shoes_ind, style, temp_category, temperature, to_style, top_ind;
  color_map = {
    "black": ["black", "blue", "brown", "gray", "green", "orange", "purple", "red", "tan", "yellow", "white"],
    "blue": ["black", "white", "green"],
    "brown": ["black", "white", "tan"],
    "gray": ["black", "white"],
    "green": ["black", "white"],
    "orange": ["black", "white", "yellow"],
    "purple": ["black", "white"],
    "red": ["black", "white"],
    "tan": ["black", "white", "brown"],
    "yellow": ["black", "white", "orange"],
    "white": ["black", "white", "blue", "brown", "gray", "green", "orange", "purple", "red", "tan", "yellow"]
  };
  options = {
    "top": [],
    "bottom": [],
    "dress": [],
    "shoes": []
  };
  outfit = {};
  temperature = constraints[0];

  if (temperature < 40) {
    temp_category = 4;
  } else {
    if (temperature < 55) {
      temp_category = 3;
    } else {
      if (temperature < 70) {
        temp_category = 2;
      } else {
        temp_category = 1;
      }
    }
  }

  style = constraints[1];
  to_style = [];

  for (var element, _pj_c = 0, _pj_a = ["top", "bottom", "shoes", "dress"], _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    element = _pj_a[_pj_c];

    if (_pj.in_es6(element, items_filled)) {
      outfit[element] = items_filled[element];
    } else {
      to_style.append(element);
    }
  }

  if (_pj.in_es6("top", items_filled) || _pj.in_es6("bottom", items_filled)) {
    to_style.remove("dress");
  }

  if (_pj.in_es6("dress", items_filled)) {
    to_style.remove("top");
    to_style.remove("bottom");
  }

  if (to_style === []) {
    return outfit;
  }

  colors_to_match = [];

  for (var item, _pj_c = 0, _pj_a = items_filled, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    item = _pj_a[_pj_c];
    color = items_filled[color]["item_color"];
    colors_to_match.append(color);
  }

  for (var category, _pj_c = 0, _pj_a = to_style, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    category = _pj_a[_pj_c];

    for (var item, _pj_f = 0, _pj_d = items, _pj_e = _pj_d.length; _pj_f < _pj_e; _pj_f += 1) {
      item = _pj_d[_pj_f];

      if (item["item_type"] === category && item["item_warmth_score"] === temp_category && item["item_style"] === style && do_colors_match(item["item_color"], colors_to_match)) {
        options[category].append(item);
      }
    }
  }

  if (options["shoes"] === [] || options["dress"] === [] && options["top"] === [] || options["dress"] === [] && options["bottom"] === []) {
    return "No Outfits to Match Temperature and Preferences";
  }

  if (options["dress"] === []) {
    number_of_tops = options["top"].length;
    number_of_bottoms = options["bottom"].length;
    number_of_shoes = options["shoes"].length;
    top_ind = random.randint(0, number_of_tops - 1);
    bottom_ind = random.randint(0, number_of_bottoms - 1);
    shoes_ind = random.randint(0, number_of_shoes - 1);
    outfit["top"] = options["top"][top_ind];
    outfit["bottom"] = options["bottom"][bottom_ind];
    outfit["shoes"] = options["shoes"][shoes_ind];
  } else {
    if (options["top"] || options["bottom"] === []) {
      number_of_dresses = options["dress"].length;
      number_of_shoes = options["shoes"].length;
      dress_ind = random.randint(0, number_of_dresses - 1);
      shoes_ind = random.randint(0, number_of_shoes - 1);
      outfit["dress"] = options["dress"][dress_ind];
      outfit["shoes"] = options["shoes"][shoes_ind];
    } else {
      coin = random.randint(0, 1);

      if (coin === 0) {
        number_of_tops = options["top"].length;
        number_of_bottoms = options["bottom"].length;
        top_ind = random.randint(0, number_of_tops - 1);
        bottom_ind = random.randint(0, number_of_bottoms - 1);
        outfit["top"] = options["top"][top_ind];
        outfit["bottom"] = options["bottom"][bottom_ind];
      } else {
        number_of_dresses = options["dress"].length;
        dress_ind = random.randint(0, number_of_dresses - 1);
        outfit["dress"] = options["dress"][dress_ind];
      }

      number_of_shoes = options["shoes"].length;
      shoes_ind = random.randint(0, number_of_shoes - 1);
      outfit["shoes"] = options["shoes"][shoes_ind];
    }
  }

  return outfit;
}
