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
                <div class="filter-text">Filters</div>
                <button class="filter">Weather</button>
                <button class="filter">Material</button>
                <button class="filter">Style</button>
                <button class="filter">*filter</button>
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
