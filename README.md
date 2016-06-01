# LoL champion viewer
An application I built while learning some concepts and frameworks (mainly React and Redux). It will show all characters (champions) from the game League of Legends and will expand some more details of each when clicking on their portraits.

## Prerequisites
You'll need to have node and npm installed. Also, webpack should be installed globally. Also, you'll need to obtain an API token to run queries against the Riot Games LoL [here](https://developer.riotgames.com/sign-in).

## Install
Clone the repo and cd into the project root directory. Then install dependencies using npm:
```
npm install
```

You will need to create a small file to put the API key mentioned above. The file should be named _apikey.js_, and should leave in `<project root>/app/server/services/apikey.js`, and it should export a const string named _KEY_.
```
// apikey.js
const key = 'XXXX'; // replace XXXX with your API key
module.exports = {
    KEY: key
};
```

Then run webpack to bundle all the assets (both server and client)

```
webpack
```

After webpack has finished you can start the node server:

``` 
npm start
````

To see the app, open your browser and type this url: `http://localhost:3000/`
