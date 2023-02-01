// import * as random from 'random';
export function getRandomInt(min, max) {
  // Generating random integer in range [x, y)
  // The maximum is exclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function do_colors_match(color, colors_to_match) {
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
}
