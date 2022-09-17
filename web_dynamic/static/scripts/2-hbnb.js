#!/usr/bin/node
window.addEventListener('DOMContentLoaded', (event) => {
  let array = [];
  $('input:checkbox').change(function() {
  if ($(this).is(":checked")) {
    const x = ($(this).attr('data-name'));
    array.push(x);
  } else {
    const n = ($(this).attr('data-name'));
    const indx = array.indexOf(n);
    array.splice(indx, 1);
  }
  $('.amenities > h4').text(array.join(', '));
  });
});
$getJSON('http://0.0.0.0:5001/api/v1/status/', function (data) {
  if (data.status === 'OK') {
     $('#api_status').addClass('available')
    } else {
     $('#api_status').removeClass('available')
    }
  };
});
