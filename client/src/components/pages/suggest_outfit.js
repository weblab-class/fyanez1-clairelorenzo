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
            <br />
            <br />
            <br />
            <br />
            <div class="middle-area">
              <div class="filters">
                <div class="filters-title">Preferences</div>
                <div class="filter_labels" id="weather-title">
                  Temperature
                </div>
                <input id="Weather" class="filter" type="number" placeholder="Enter Here"></input>
                <div class="filter_labels">Material</div>
                <select name="Material" class="filter">
                  <option class="option">None</option>
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
              <div>
                <div class="silhouettes">
                  <div class="animate2">
                    <button class="animate">
                      <img src="../pics/t-shirt-silhouette.png" class="shirt" />
                    </button>
                  </div>
                  <div class="animate2">
                    <button class="animate">
                      <img src="../pics/pants-silhouette.png" class="pants" />
                    </button>
                  </div>
                  <div class="animate2">
                    <button class="animate">
                      <img src="../pics/running-shoe-silhouette.png" class="shoes" />
                    </button>
                  </div>
                  <div class="animate2">
                    <button class="animate">
                      <img src="../pics/dress-silhouette.png" class="dress" />
                    </button>
                  </div>
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
