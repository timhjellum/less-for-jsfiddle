/*
jsFiddle does not directly support Less so we need these bits of code to bring it here. 
Modified by meri
Updated by max
Updated by timhjellum
*/

// Step 1: Select the style element and change it to text/less
var arr = document.getElementsByTagName("style");
for (var i = 0; i < arr.length; i++) {
  if (arr[i].type == 'text/css') arr[i].setAttribute('type', 'text/less');
}
// Step 2: Set development mode to see errors
less.env = 'development';

// Step 3: Tell Less to refresh the styles
less.refreshStyles();
