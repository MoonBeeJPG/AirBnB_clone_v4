window.addEventListener('DOMContentLoaded', (event) => {
  let array = [];
  $('input:checkbox').change(function() {
    if ($(this).is(":checked")) {
      const n = ($(this).attr('data-name'));
      array.push(n);
    } else {
      const n = ($(this).attr('data-name'));
      const indx = array.indexOf(n);
      array.splice(indx, 1);
    }
    $('.amenities > h4').text(array.join(', '));
  });
 });

 $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status == 200) {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
 });

 $.ajax({
   type: 'POST',
   url: 'http://0.0.0.0:5001/api/v1/places_search/',
   contentType: 'application/json',
   data: '{}',
   success: function (data) {
     for (let place of data) {
       $('.places').append('<article> <div class="title"> <h2>' +
                            currentPlace.name +
                            '</h2><div class="price_by_night">' + '$' +
                            currentPlace.price_by_night +
                            '</div></div> <div class="information"> <div class="max_guest"> <i class="fa fa-users fa-3x" aria-hidden="true"></i><br />' +
                            currentPlace.max_guest + ' Guests</div><div class="number_rooms"><i class="fa fa-bed fa-3x" aria-hidden="true"></i><br />' +
                            currentPlace.number_rooms + ' Bedrooms </div> <div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />' +
                            currentPlace.number_bathrooms + ' Bathroom  </div></div> <div class="user"></div><div class="description">' + currentPlace.description +
                            '</div></article>');
   }
 }
});

 $(':button').click(function () {
   $.ajax({
     type: 'POST',
     url: 'http://0.0.0.0:5001/api/v1/places_search/',
     data: JSON.stringify({ "amenities": Object.key(amenity_id) }),
     dataType: "json",
     contentType: "application/json",
     success: function (data) {
       for (let place of data) {
         $('section.places').append('<article> <div class="title"> <h2>' +
                            currentPlace.name +
                            '</h2><div class="price_by_night">' + '$' +
                            currentPlace.price_by_night +
                            '</div></div> <div class="information"> <div class="max_guest"> <i class="fa fa-users fa-3x" aria-hidden="true"></i><br />' +
                            currentPlace.max_guest + ' Guests</div><div class="number_rooms"><i class="fa fa-bed fa-3x" aria-hidden="true"></i><br />' +
                            currentPlace.number_rooms + ' Bedrooms </div> <div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />' +
                            currentPlace.number_bathrooms + ' Bathroom  </div></div> <div class="user"></div><div class="description">' + currentPlace.description +
                            '</div></article>');
       }
     }
   });
});
