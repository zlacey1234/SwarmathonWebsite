    google.load( 'search', '1' );
    
    // Run this once the Google search JavaScript has loaded
    google.setOnLoadCallback( function() {
        // This makes your input field support autocomplete
        // The first parameter is your account identifier with Google Search
        // The second parameter is the DOM element of your search input field, which you could also grab with jQuery
        // The third parameter is the ID of your search form, not the actual DOM element. This is required so that when a user clicks on a search suggestion, the form gets submitted automatically
        google.search.CustomSearchControl.attachAutoCompletion(
            '018001272601596558376:3ngqsiowaci',
            document.getElementById( 'search' ),
            'searchForm' );
    });