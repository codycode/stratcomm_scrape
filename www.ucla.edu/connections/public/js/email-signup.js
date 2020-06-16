const $ = jQuery.noConflict();

$(document).ready(function () {

  $('.email__signup').submit(function () {

    let $email = $('input#control_EMAIL'),
		    $firstName = $('input#control_FIRSTNAME'),
		    $lastName = $('input#control_LASTNAME'),
		    $zipcode = $('input#control_ZipCode'),
		    form = $('.email__signup'),
		    error = false,
		    errormsg = '';

    $('.email__form-success-msg').css({ 'display': 'none' });

    //reset
    $email.removeClass('error');
    $firstName.removeClass('error');
    $lastName.removeClass('error');
    $zipcode.removeClass('error');

    //validate email
    if (!isEmail($email.val())) {

      $email.addClass('error');
      errormsg += '<span class="email__form-error-icon"></span> Enter a valid email<br/>';
      error = true;
    }

    //validate first name
    if (!isName($firstName.val())) {

      $firstName.addClass('error');
      errormsg += '<span class="email__form-error-icon"></span> Enter a valid first name<br/>';
      error = true;
    }

    //validate last name
    if (!isName($lastName.val())) {

      $lastName.addClass('error');
      errormsg += '<span class="email__form-error-icon"></span> Enter a valid last name<br/>';
      error = true;
    }

    //validate zipcode
    if (!isZipcode($zipcode.val())) {

      $zipcode.addClass('error');
      errormsg += '<span class="email__form-error-icon"></span> Enter a valid zipcode<br/>';
      error = true;
    }

    //if there is an error
    if (error) {
      $('.email__form-error-msg').html(errormsg.substring(0, errormsg.length - 5));
      $('.email__form-error-msg').css({'display': 'block'});

      return false;

      //no error in the form
    } else {

      $('.email__form-error-msg').css({'display': 'none'});

    }
  });

  $('.email__signup input#control_EMAIL').bind('keyup', function () {

    $(this).removeClass('error');

    if (isEmail($(this).val())) {
      $(this).addClass('checked');
    } else {
      $(this).removeClass('checked');
    }
  });

  $('.email__signup input#control_FIRSTNAME, .email__signup input#control_LASTNAME').bind('keyup', function () {

    $(this).removeClass('error');

    if (isName($(this).val())) {
      $(this).addClass('checked');
    } else {
      $(this).removeClass('checked');
    }
  });

  $('.email__signup input#control_LASTNAME').bind('keyup', function () {

    $(this).removeClass('error');

    if (isName($(this).val())) {
      $(this).addClass('checked');
    } else {
      $(this).removeClass('checked');
    }
  });

  $('.email__signup input#control_ZipCode').bind('keyup', function () {

    $(this).removeClass('error');

    if (isZipcode($(this).val())) {
      $(this).addClass('checked');
    } else {
      $(this).removeClass('checked');
    }
  });
});





//validate email
function isEmail (email) {
  let regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

//validate name
function isName (name) {
  let regex = /^.+$/;
  return regex.test(name);
}

//validate zipcode
function isZipcode (zipcode) {
  let regex = /^.{5,}$/;
  return regex.test(zipcode);
}
