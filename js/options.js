
let options = {};

$(function () {
  loadOptions();

  $("input").on("change", async function () {
    options[this.id] = getValue($(this));
    console.log("Options:", options);
    await setOptions(options);
  });
});

function setValue($element, value) {
  if ($element.is("input[type=checkbox]")) {
    $element.prop("checked", !!value);
  }
}

function getValue($element) {
  if ($element.is("input[type=checkbox]")) {
    return $element.is(":checked");
  }
}


async function loadOptions() {
  console.log("Getting options");

  try {
    options = await getOptions();
    console.log("Options Loaded:", options);

    for (let key in options) {
      setValue($("#" + key), options[key]);
    }

    $("#optionList").css("display", "block");

  } catch (error) {
    console.error(error);
  }
}

function getLocalStorage(key) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({ method: "getLocalStorage", key: key }, function (response) {
      resolve(response.data);
    });
  });
};

function setLocalStorage(key, value) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({ method: "setLocalStorage", key: key, value: value }, function (response) {
      resolve(response.data);
    });
  });
};

async function getOptions() {
  let currentOptions = await getLocalStorage("options");
  if (currentOptions == null)
    return {};

  return JSON.parse(currentOptions);
};

async function setOptions(value) {
  var jsonText = JSON.stringify(value);
  await setLocalStorage("options", jsonText);
  console.log("saved options: ", value);
};
