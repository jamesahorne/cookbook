if ($('body').hasClass('p-special-offers') || $('body').hasClass('p-all-special-offers')) {
  $('.custom-control-input[name="drawer-views"]').on('change',function(){
    if ($(this).is('#drawer-view-list:checked')) {
      $.cookie('compact-card', 'true', { expires: 356, sameSite: 'strict', path: '/' });
      $('body').addClass("is-compact");
    } else {
      $.cookie('compact-card', null, { expires: 356, sameSite: 'strict', path: '/' });
      $('body').removeClass("is-compact");
    }
  });

  if ($.cookie('compact-card') === 'true') {
    $('body').addClass("is-compact");
    $('.custom-control-input[name="drawer-views"]#drawer-view-list').prop("checked", true);
  } else {
    $('body').removeClass("is-compact");
    $('.custom-control-input[name="drawer-views"]#drawer-view-full').prop("checked", true);
  }
}