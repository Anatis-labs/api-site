# api-site
Front end and backend for a api website

Front end application that uses a public api thru the backend .net core
( https://github.com/Anatis-labs/backend-api-site )


The Frontend is build on react, so you will need to have installed in order to npm to run it.
(install can be found here: https://www.npmjs.com/get-npm)

easiest way to open it is with visual stuido code, in there you can open the terminal and write
 - npm start

 if this doesnt work you might need to run

 -npm install

 in the terminal before you can start it.

If its booted correctly then it will open in the webreader of your settings choise.

once this is setup you will need to run the corresponding backend ( https://github.com/Anatis-labs/backend-api-site ).

if your unlucky then the the local host adress might differ on another pc making it so that the fetch call doesnt work, and then you need to change it so they match the backend.

they are located on 3 pages in the react files, 
    # pages/Gameinfo/gameinfo.js
    # pages/Gameimport/gameimporttype.js
    # pages/Gameimport/gameimport.js

( looks like this: https://localhost:44392/api/gameinfo/)