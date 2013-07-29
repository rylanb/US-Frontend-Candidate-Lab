(function($, window) {

  var POLAROID = window.POLAROID || {}

  POLAROID.Home = {
    init: function() {
      this.setupClickHandlers();
    },
    setupClickHandlers: function() {
      $('#invitation').on('click', 'a', function(e) {
        POLAROID.Home.handleInviteClicks(e);
      });
    },
    handleInviteClicks: function(e) {
      e.preventDefault();
      var answer = $(e.target).data('answer');
      answer === 'yes' ? this.inviteYesClickHandler() : this.inviteNoClickHandler();

      $('#answer-buttons').fadeOut(function(){
        $('#thanks-notice').fadeIn('fast', function(){
          answer === 'yes' ? $(this).find('p').first().fadeIn() : $(this).find('p.no-msg').fadeIn();
        });
      });
    },
    inviteYesClickHandler: function() {
      //Potential handling here if needed. Defaults are for yes in html/styles
    },
    inviteNoClickHandler: function() {
      $('#thanks-notice').addClass('answered-no');
    }
  }

  window.POLAROID = POLAROID;
  $(document).ready(POLAROID.Home.init());

})(jQuery, this);
