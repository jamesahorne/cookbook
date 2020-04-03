var el = document.getElementById("test");

// If it doesn't exist you can get console errors (if it isn't "undefined" and it isn't "null", then it exists)
if (typeof(el) != 'undefined' && el != null) {
  alert('Element exists')
} else {
  alert('Element does not exist')
}
