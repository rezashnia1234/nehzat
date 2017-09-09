/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */

		var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
			showRight = document.getElementById( 'showRight' ),
			showRightPush = document.getElementById( 'showRightPush' ),
			body = document.body;
			
			if(showRightPush!==null)
			{
				showRightPush.onclick = function() {
					classie.toggle( this, 'active' );
					classie.toggle( this, 'cbp-spmenu-push-toleft' );
					classie.toggle( menuRight, 'cbp-spmenu-open' );
				};
			}
			if(menuRight!==null)
			{
				menuRight.onclick = function() {
					alert();
					classie.toggle( showRightPush, 'active' );
					classie.toggle( showRightPush, 'cbp-spmenu-push-toleft' );
					classie.toggle( menuRight, 'cbp-spmenu-open' );
				};
			}
			function activate_menu() {
				alert();
			}
			
( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

window.classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

})( window );