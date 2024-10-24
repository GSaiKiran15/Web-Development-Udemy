import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <div>
    <App
      name="Beyonce"
      url="https://www.bing.com/images/search?view=detailV2&ccid=2P9H9Y1F&id=C233EF9264E4CCBB4F766E27BD68CB736A9961B6&thid=OIP.2P9H9Y1FTvzaZkPKW3hY3QHaEK&mediaurl=https%3a%2f%2fwww.thedigitalfix.com%2fwp-content%2fuploads%2f2022%2f05%2ftobey-maguire-spider-verse.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d8ff47f58d454efcda6643ca5b7858dd%3frik%3dtmGZanPLaL0nbg%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=tobey+maguire&simid=608011123410810691&FORM=IRPRST&ck=566E4521FBA2D35A86836C49E5FA63D9&selectedIndex=6&itb=0"
      phone="+12345678910"
      email="b@beyonce.com"
    />
    <App
      name="Jack Bauyer"
      url="https://www.bing.com/images/search?view=detailV2&ccid=2P9H9Y1F&id=C233EF9264E4CCBB4F766E27BD68CB736A9961B6&thid=OIP.2P9H9Y1FTvzaZkPKW3hY3QHaEK&mediaurl=https%3a%2f%2fwww.thedigitalfix.com%2fwp-content%2fuploads%2f2022%2f05%2ftobey-maguire-spider-verse.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d8ff47f58d454efcda6643ca5b7858dd%3frik%3dtmGZanPLaL0nbg%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=tobey+maguire&simid=608011123410810691&FORM=IRPRST&ck=566E4521FBA2D35A86836C49E5FA63D9&selectedIndex=6&itb=0"
      phone="+12345678910"
      email="b@beyonce.com"
    />
    <App
      name="Chris Williams"
      url="https://www.bing.com/images/search?view=detailV2&ccid=2P9H9Y1F&id=C233EF9264E4CCBB4F766E27BD68CB736A9961B6&thid=OIP.2P9H9Y1FTvzaZkPKW3hY3QHaEK&mediaurl=https%3a%2f%2fwww.thedigitalfix.com%2fwp-content%2fuploads%2f2022%2f05%2ftobey-maguire-spider-verse.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d8ff47f58d454efcda6643ca5b7858dd%3frik%3dtmGZanPLaL0nbg%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=tobey+maguire&simid=608011123410810691&FORM=IRPRST&ck=566E4521FBA2D35A86836C49E5FA63D9&selectedIndex=6&itb=0"
      phone="+12345678910"
      email="b@beyonce.com"
    />
  </div>,
  document.getElementById("root")
);

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
