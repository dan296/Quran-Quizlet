$( function() {
  $( document ).tooltip({
      position: {
      my: "center bottom-5",
      at: "center top",
      using: function( position, feedback ) {
        $( this ).css( position );
        $( "<div>" )
          .addClass( "arrow" )
          .addClass( feedback.vertical )
          .addClass( feedback.horizontal )
          .appendTo( this );
      }
      },
      tooltipClass: "your_class-Name",
      show: { duration: 100 }
  });
} );
var thisuser = null;
var cookieSet = false;