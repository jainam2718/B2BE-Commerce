var citiesByState = {
  Odisha: ["Bhubaneswar", "Puri", "Cuttack"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Gujarat: ["Ahmedabad", "Surat", "Vapi", "Valsad", "Vadodara"],
  Kerala: ["Kochi", "Kanpur"],
};
function makeCityMenu(value) {
  if (value.length == 0) {
    document.getElementById("city").innerHTML = "<option></option>";
  } else {
    var citiesOptions = "";
    for (cityId in citiesByState[value]) {
      citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
    }
    document.getElementById("city").innerHTML = citiesOptions;
  }
}

function resetSelection() {
  document.getElementById("state").selectedIndex = 0;
  document.getElementById("city").selectedIndex = 0;
}
