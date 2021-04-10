# IP Address Tracker APP

## Overview

### The challenge

Users should be able to:

- Login using SAWO sdk (the passwordless way)
- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Links

- Live Site URL: 

## My process

- I began by sketching out the different components of the application and created a HTML file out of it.
- Added basic styling to the components.
- I first approached the UI for different devices - mobile(375px), laptop(1024px) and laptop(1440px) and worked in a bottom up manner in terms of increasing device width.
- I used maps.googleapis.com JS libraries and IPify geolocation API to generate the current location of the user on the map and to retrieve key location information of the given IP Address.
- I integrated SAWO's web sdk for login using the user's phone number.
- On initial page load, the user's current location will be displayed.
- Once the user searches for a particular IP Address, the key information is displayed and the location gets updated.
- This API call gets recorded in the database as well.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox, CSS Grids
- React
- Node.js, Express, MongoDB
- Mobile-first workflow
- maps.googleapis.com JS libraries
-IPify Geolocation API
