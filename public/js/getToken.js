'use strict';
$(
  // When the submit button is clicked, send a POST of the data to /token, then stores the token in the header for all future requests
  $('form.login').submit(function (event) {
    event.preventDefault();
    let email = $('#email').val();
    let password = $('#password').val();
    $.post('/token', {
        email,
        password
      })
      .then(
        (response) => {
          // sessionStorage.setItem('token', response.token);
          if (response.token) {
            $.ajaxSetup({
              'x-access-token': response.token
            });
          }
          else {
            console.log('response:',response);
          }
          $('#email').val('');
          $('#password').val('');
        },
        (error) => {
          console.error("ERROR",error);
        });
  })
);