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
