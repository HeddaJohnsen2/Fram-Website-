document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const openMenu = document.getElementById("openHamburgerMenu");
  const closeMenu = document.getElementById("closedMenuButton");

  openMenu.addEventListener("click", () => {
    menu.classList.add("show");
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

// når jeg skal hente annen data fra api API Integration : Begin planning how to integrate relevant APIs into your project.
// Asynchronous Operations : Implement asynchronous JavaScript to handle API calls and other time-consuming operations.
// Data Fetching : Use the Fetch API to retrieve data from external sources or your own backend.
// JSON Handling : Incorporate JSON parsing and stringifying in your data handling processes.

// brukte disse kildene til å finne ut hvordan jeg skulle gjøre det https://developers.google.com/maps/documentation/javascript/add-google-map-wc-tut
// https://developers.google.com/maps/documentation/javascript/load-maps-js-api?_gl=1*1ak3ibb*_up*MQ..*_ga*Njc2NzYyMzIzLjE3MzQxMDQzNjY.*_ga_NRWSTWS78N*MTczNDEwNDM2Ni4xLjEuMTczNDEwNDM4OC4wLjAuMA..
//https://developers.google.com/maps/documentation/javascript/places#placeid
// This function must be in the global scope for Google Maps to access it
// This function must be defined in the global scope for the Google Maps API to find it
// Global function initMap to be called by Google Maps API

// Tar utgangspunkt i javascript map til google

// Initialize and add the map

async function initMap() {
  const position = { lat: 60.303791093376546, lng: 10.63587366028422 };
  const theMap = {
    center: position,
    zoom: 12,
    //hadde masse problemer om at kartet ikke ville laste seg inn på riktig måte
    mapId: "bd032923a2ee812f",
  };

  // finne en måte til å gi alle farms en pin
  const map = new google.maps.Map(document.getElementById("map"), theMap);
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "FRAM",
  });

  const customInfoWindowJava = document.getElementById("customInfoWindow");

  const placeId = "ChIJWXzmOwyjQUYRunvUmnit25Q";
  const service = new google.maps.places.PlacesService(map);

  service.getDetails(
    {
      placeId: placeId,
      fields: ["name", "formatted_address", "rating"],
    },
    function (place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        document.getElementById("placeName").innerHTML = place.name;
        document.getElementById("placeAddress").innerHTML =
          place.formatted_address;
        document.getElementById("placeRating").innerHTML =
          place.rating || "No rating available";

        marker.addListener("click", () => {
          customInfoWindowJava.style.display = "block";
        });
      } else {
        console.error("Error fetching place details:", status);
      }
    }
  );

  // burde jeg ha en .then .catch

  //finne ut hvordan man henter flere gårder i nærheten og endre info såpass kanskje det står på nettet
  //finne ut om man skal ha rating i stjerner 



  //   const infoWindowOptions = {
  //     content: "hei",
  //     position: position,
  //   }
  //   const infoWindow = new google.maps.InfoWindow(infoWindowOptions)

  //   const infoWindowOpenOptions ={
  //     map: map,
  //     anchor: marker,
  //     shouldFocus:false
  //   }
  //   infoWindow.open(infoWindowOpenOptions);
  // }

  //fikk opp dette som warnig i google at det er anbefalt å heller bruke advancedMarkerElement så derfor brukes ikke dette
  // const marker = new google.maps.Marker({
  //   map: map,
  //   position: position,
  //   title: "FRAM",
}
