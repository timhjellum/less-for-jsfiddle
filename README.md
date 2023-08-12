# LESS for JSFiddle
Compile LESS to CSS in JSFiddle

On JSFiddle, add a **Resources**.
Link to the LESS CDN: `https://cdnjs.cloudflare.com/ajax/libs/less.js/1.6.3/less.min.js`.
In the **Styles** pain, change the style sheet language to **SCSS**.

In the **Scripts** pain, change the script to JavaScript - No Libraries

`var arr = document.getElementsByTagName("style")
for (var i = 0; i < arr.length; i++) {
  if (arr[i].type == 'text/css') arr[i].setAttribute('type', 'text/less')
}
less.env = 'development'
less.refreshStyles()`
