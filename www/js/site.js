/* global $:false, window:false, document:false, alert:false, 
SyntaxHighlighter:false */
"use strict";

var extLang = {
  "ext": {
    "xml": { "lang": "xml" },
    "html": { "lang": "xml" },
    "json": { "lang": "jscript" },
    "js": {"lang": "jscript" },
    "ol": { "lang": "jolie" },
    "iol": { "lang": "jolie" },
    "java": { "lang": "java" },
    "txt": { "lang": "plain" }
  }
};

function activeMenuItem() {
    var path = window.location.pathname;
    $( "#header a.active" ).attr( "class", "");
    $( "#header a[href=\"" + path + "\"]" ).attr( "class", "active" );
};

function landingPage() {
	var path = window.location.pathname;
	if ( path == "/index.html" || path == "/" || path == "" ) {
		$( ".page-content" ).attr( "class", "landing-page" );
		$( "#page-col" ).attr( "class", "" );
	}
};

var bodyPadding = 0;

function scroll_to_section( section )
{
	$( "html,body" ).animate( {
	scrollTop:
		$("#" + section).offset().top
		// + $( "body" ).css( "padding-top" )
	}, 500 );
}

function bodyPadding()
{
	// $( "body" ).css( "padding-top", $( "#header" ).height() );
}

// Loaded on start
$( document ).ready( function () {
	activeMenuItem();
	landingPage();
	bodyPadding();
});