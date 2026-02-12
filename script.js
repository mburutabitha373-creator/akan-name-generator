document.getElementById("akanForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = document.getElementById("year").value;
    const genderInput = document.querySelector('input[name="gender"]:checked');

    // Validation
    if (!day || day < 1 || day > 31) {
        alert("Please enter a valid day (1–31)");
        return;
    }

    if (!month || month < 1 || month > 12) {
        alert("Please enter a valid month (1–12)");
        return;
    }

    if (!year || year.length !== 4 || isNaN(year)) {
        alert("Please enter a valid 4-digit year");
        return;
    }

    if (!genderInput) {
        alert("Please select a gender");
        return;
    }

    const gender = genderInput.value;

    // Date calculation
    const CC = parseInt(year.substring(0, 2));
    const YY = parseInt(year.substring(2));

    let d = (
        (48 * CC - 2 * CC - 1) +
        (45 * YY) +
        (1026 * (month + 1)) +
        day
    ) % 7;

    // Names
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    const akanName = gender === "male" ? maleNames[d] : femaleNames[d];

    // Output
    document.getElementById("result").textContent =
        "You were born on a " + days[d] + ". Your Akan name is " + akanName + ".";
});
