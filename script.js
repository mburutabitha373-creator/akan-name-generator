const form = document.getElementById("akanForm");
const resultEl = document.getElementById("result");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Input values
    const dayInput = parseInt(document.getElementById("day").value);
    const monthInput = parseInt(document.getElementById("month").value);
    const yearInput = document.getElementById("year").value;
    const genderInput = document.querySelector('input[name="gender"]:checked');

    // Validation
    if (!dayInput || dayInput < 1 || dayInput > 31) {
        alert("Please enter a valid day between 1 and 31.");
        return;
    }
    if (!monthInput || monthInput < 1 || monthInput > 12) {
        alert("Please enter a valid month between 1 and 12.");
        return;
    }
    if (!yearInput || yearInput.length !== 4 || isNaN(parseInt(yearInput))) {
        alert("Please enter a valid 4-digit year.");
        return;
    }
    if (!genderInput) {
        alert("Please select a gender.");
        return;
    }

    const gender = genderInput.value;

    // Calculate day of the week
    const CC = parseInt(yearInput.substring(0, 2));
    const YY = parseInt(yearInput.substring(2));
    const MM = monthInput;
    const DD = dayInput;

    const d = (((48 * CC - 2 * CC - 1) + 45 * YY + 1026 * (MM + 1) + DD) % 7);

    // Functions to get day name and Akan name
    function getDayName(d) {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[d];
    }

    function getAkanName(d, gender) {
        const male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        const female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        return gender === "male" ? male[d] : female[d];
    }

    const dayName = getDayName(d);
    const akanName = getAkanName(d, gender);

    // Show result
    resultEl.textContent = `You were born on a ${dayName}. Your Akan name is ${akanName}.`;
    resultEl.style.backgroundColor = "#f0f8ff";
    resultEl.style.padding = "10px";
    resultEl.style.borderRadius = "5px";
});

// Optional: clear result on reset
form.addEventListener("reset", function () {
    resultEl.textContent = "";
});
