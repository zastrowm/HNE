
console.log("first-load");

chrome.runtime.sendMessage({ method: "getLocalStorage", key: "options" }, function (response) {
  var options = JSON.parse(response.data);
  console.log("loaded options", options);

  if (options.useDarkTheme) {
    console.log("Applying dark theme");
    document.querySelector("html").classList.add("dark");
  }
});