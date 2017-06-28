$(function() {
  console.log("Good to Go");
  //
  // var hey = ("hey");
  // console.log(hey);
  //
  // let $xhr = $.getJSON('http://api.openweathermap.org/data/2.5/forecast?id=ad27e14ddaf4d0232deb926dad49905a={APIKEY}');
  //
  // console.log($xhr);
  //
  //
  //
  // $xhr.done(function(data) {
  //   if ($xhr.status != 200) {
  //     return;
  //
  //   }
  //
  //
  //
  //
  // });


  // document.getElementById('btn2').onclick = function() {
  //   form.target = '_blank';
  //   form.submit();
  // }


  $(function() {
    $('form[name="myform"]').submit(function(e) {
      var username = $('form[name="myform"] input[name="username"]').val();
      if (username == '') {
        e.preventDefault();
        $('#errors').text('*Please enter a username*');
      }
    });
  });







});
