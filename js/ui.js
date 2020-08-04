//  Created by Swapnil Mankame
//  Copyright 2020. All rights reserved.

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $('#toTopBtn').fadeIn();
    } else {
      $('#toTopBtn').fadeOut();
    }
  });

  $('#toTopBtn').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});
console.log("All rights Reserved to Swapnil Mankame");
