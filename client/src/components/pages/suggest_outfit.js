import "./suggest_outfit.css";

const Suggest_Outfits_Page = () => {
  return (
    <>
      <html>
        <head>
          <meta charset="UTF-8" />
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <title>Outfit Generator</title>
          <link rel="stylesheet" href="suggest_outfit.css" />
        </head>

        <body>
          <div class="background">
            <div class="instructions">
              <br />
              <div>Click to add clothing item</div>
              <br />
            </div>

            <div class="middle-area">
              <div class="filters">
                <div class="filters-title">Filters</div>
                <div class="filter_labels" id="weather-title">
                  Weather
                </div>
                <input id="Weather" class="filter" type="number" placeholder="None"></input>
                <div class="filter_labels">Material</div>
                <select name="Material" class="filter">
                  <option>None</option>
                  <option>test</option>
                  <option>test</option>
                  <option>test</option>
                </select>
                <div class="filter_labels">Style</div>
                <select name="Style" class="filter">
                  <option>None</option>
                  <option>test</option>
                  <option>test</option>
                  <option>test</option>
                </select>
                <div class="filter_labels">Filter</div>
                <select name="* filter *" class="filter">
                  <option>None</option>
                  <option>test</option>
                  <option>test</option>
                  <option>test</option>
                </select>
              </div>

              <div class="clothes-and-button">
                <div class="clothes">
                  <button class="clothes_button">
                    <img src="../pics/t-shirt-silhouette.png" class="shirt" />
                  </button>
                  <button class="clothes_button">
                    <img src="../pics/pants-silhouette.png" class="pants" />
                  </button>
                  <button class="clothes_button">
                    <img src="../pics/running-shoe-silhouette.png" class="shoes" />
                  </button>
                  <button class="clothes_button">
                    <img src="../pics/dress-silhouette.png" class="dress" />
                  </button>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <button class="suggest">Suggest Outfits!</button>
                <button class="reset">Reset</button>
              </div>
            </div>
          </div>
          <div id="root"></div>
          <script src="/bundle.js"></script>
        </body>
      </html>
    </>
  );
};

export default Suggest_Outfits_Page;
