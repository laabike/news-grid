//Initialize and add the map
function initMap(){
  // Your Location
  const loc = { lat: 6.622685, lng: 3.489033};
  // lat: 42.361145, lng: -71.057083 is his add
  // lat: 6.622685, lng: 3.489033 is my house add
  // This is known as the JS object
  // Centered map on location
  const map = new google.maps.Map(document.querySelector(".map"),
  {
    // this creates the variable called map that has been set to google.maps.Map
  // while the .queryselector is targeting the class of map from line 138 of our index.html and this is where we want to insert the map
    zoom:14,
    center:loc
    // this means that the center position is on our location. the location is a placeholder
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({position: loc, map:map})
  // this creates a new marker for our specified location
  // position: loc means that the location should be our specied location on line 4 of this JS file 
  // map:map means the map should show the map on line 6 of this JS file
}

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity=0.9;
  } else{
    document.querySelector('#navbar').style.opacity=1;
  }
});


// Smooth Scrolling
$('#navbar a').on('click', function(event){
  if (this.hash !==''){
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});