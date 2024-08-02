document.querySelector('.submit').addEventListener('click', function() {
    var year = document.querySelector('.year').value;
    var month = document.querySelector('.month').value;
    var day = document.querySelector('.day').value;

    if (year && month && day) {
        var birthDate = new Date(year, month - 1, day);
        var today = new Date();
        var ageYears = today.getFullYear() - birthDate.getFullYear();
        var ageMonths = today.getMonth() - birthDate.getMonth();
        var ageDays = today.getDate() - birthDate.getDate();
        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }
        document.getElementById('result').innerText = "Your age is: " + ageYears + " years, " + ageMonths + " months, and " + ageDays + " days.";
    } else {
        document.getElementById('result').innerText = "Please enter a valid date.";
    }
});
