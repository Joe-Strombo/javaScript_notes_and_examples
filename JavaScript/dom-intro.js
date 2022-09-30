(function() {

    function clickHandler(message) {
        console.log('yo ... ' + message)
    }


    // Get a reference to myButton
    let myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() { clickHandler('hi from IFFE') } );

})();