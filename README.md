FRAM
Fram is a webshop for a sustainable food delivery service in Norway. It connects customers with products from local farms. The webshop uses Google Maps API to display an interactiv map highlighting the location of the main farm. The map gives you the name and address and rating of the farm, as well as the name and address of the neighboring farms around. The webshop also includes an AI-powered chatbot that answers questions about the service.

REQUIREMENTS:
To be able to use the features provided by this webshop you need to install the following:

- Node.js (which includes Node package manager - npm)
  Go to the Node.js website and download the Node.js(LTS)

SET UP THE PROJECT:
When you have opened the project files you need to install the necessary librabries.

Make sure you are in the "AI Integrated Web programming" folder where the package.json file is located, then write the following in the terminal:

- npm install

To start the website simply just write either of the following:

- node server.js
- npm run start
  This will start a local server that you open in you web browser.

API KEYS:

Google:
The project requrires a Google API key and mapId. Follow the instructions on this Website to get your key: https://developers.google.com/maps/documentation/javascript/get-api-key

- Then place the api key in the html file "produce.html" in the script as shown below:
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=places,marker" defer async></script>

- and in the script.js file replace the mapId in this line of code:
  const theMap = {
  center: position,
  zoom: 14,
  mapId: "YOUR MAP ID",
  };

Open AI:
The project also requires a Open AI key.

- Open the chat.js file in the project, and Replace "YOUR API KEY" with the Open AI key in the following line of code:
  Authorization: `Bearer YOUR API KEY`

REFERENCES:
Google.(n.d). Use API Keys. Retrieved: January, 2025. From: https://developers.google.com/maps/documentation/javascript/get-api-key
