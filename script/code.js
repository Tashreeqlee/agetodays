document.getElementById("calculateButton").addEventListener("click", function() {
    var ageInput = document.getElementById("ageInput").value;
    var result = document.getElementById("result");
    
    if (ageInput !== "") {
        var ageInDays = ageInput * 365;
        result.innerHTML = "Your age in days is: " + ageInDays;
    }else {
        result.innerHTML = "Please enter your age.";
    }
});