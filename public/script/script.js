//for this line of codes i used the source:
// Cyberohn. (n.d.). JavaScript property: a practical example. Medium. retrived September, 2024. From:
// https://medium.com/@cyberohn/javascript-classlist-property-a-practical-example-b129e35c8527

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

const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("firstname");
  const email = document.getElementById("email");

  if (name && email) {
    alert(
      "Thank you for signing up for our news letter " +
        name.value +
        "\n Any exciting news will be sent to this email: " +
        email.value
    );
    form.reset();
  } else {
    alert("You need to fill out both fields");
  }
});

// I used these sources to figure out how to add the map in my website:

// Google. (n.d.). Add a map with a marker. Google Maps Platform documentation.
// retrived September, 2024. from https://developers.google.com/maps/documentation/javascript/add-google-map-wc-tut

// Google.(n.d.). Load the Maps Javascript API. Google Maps Platform documentation.
//retrived September, 2024. from:
//https://developers.google.com/maps/documentation/javascript/load-maps-js-api?_gl=1*1ak3ibb*_up*MQ..*_ga*Njc2NzYyMzIzLjE3MzQxMDQzNjY.*_ga_NRWSTWS78N*MTczNDEwNDM2Ni4xLjEuMTczNDEwNDM4OC4wLjAuMA..

// Google. (n.d.). Places Library. Google Maps Platform documentation.
//retrived September, 2024. from:
//https://developers.google.com/maps/documentation/javascript/places#placeid

// this function gets the location of the map and with the use of the placeid it gets the specific details requested about the farm.
// this function also places a marker om the main farm.
async function initMap() {
  const position = { lat: 60.303791093376546, lng: 10.63587366028422 };
  const theMap = {
    center: position,
    zoom: 14,
    mapId: "YOUR_MAP_ID",
  };

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
    (place, status) => {
      getDetailsDisplayed(place, status, marker, customInfoWindowJava);
    }
  );
  service.nearbySearch(
    {
      location: position,
      radius: 5000,
      keyword: "farm",
    },
    (results, status) => {
      addMarkerPartneringFarms(results, status, map, AdvancedMarkerElement);
    }
  );
}

//this function adds a custominfowindow at the corner of the map
function getDetailsDisplayed(place, status, marker, customInfoWindowJava) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    document.getElementById("placeName").innerHTML = place.name;
    document.getElementById("placeAddress").innerHTML =
      "Adress: " + place.formatted_address;
    document.getElementById("placeRating").innerHTML =
      "Rating: " + place.rating || "No rating available";

    document.getElementById("customInfoWindow").style.display = "block";
    const infoWindow = new google.maps.InfoWindow({
      content: `<div><h3>${place.name}</h3><p>${place.formatted_address}</p><p>${place.rating}</p></div>`,
    });
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  } else {
    console.error("Error fetching the place details:", status);
  }
}
//this function adds a marker for maps in the area, when you click at the different markers you will get the title and address of the farms.
function addMarkerPartneringFarms(results, status, map, AdvancedMarkerElement) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    results.forEach((place) => {
      const theLocationOfOtherFarms = place.geometry.location;
      const title = place.name;
      const marker = new AdvancedMarkerElement({
        map: map,
        position: theLocationOfOtherFarms,
        title: title,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `<div><h3>${title}</h3><p>${place.vicinity}</p></div>`,
      });
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  } else {
    console.log("error fetching the nearby farms ", status);
  }
}
