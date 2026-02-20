document.getElementById("akanForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get inputs
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validation
    if (!day || day < 1 || day > 31) {
        alert("Please enter a valid day between 1-31");
        return;
    }

    if (!month || month < 1 || month > 12) {
        alert("Please enter a valid month between 1-12");
        return;
    }

    if (!year || year < 1000 || year > 9999) {
        alert("Please enter a valid 4-digit year.");
        return;
    }

    if (!gender) {
        alert("Please select a gender.");
        return;
    }

    // Extract century and year
    const CC = Math.floor(year / 100);
    const YY = year % 100;

    // Day of the week formula
    const dayIndex = (
        ( (CC / 4) - (2 * CC - 1) ) +
        ( (5 * YY) / 4 ) +
        ( (26 * (month + 1)) / 10 ) +
        day
    ) % 7;

    const index = Math.floor((dayIndex + 7) % 7);

    // Arrays
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // Determine Akan name
    let akanName;

    if (gender.value === "male") {
        akanName = male[index];
    } else {
        akanName = female[index];
    }

    // Show result
    document.getElementById("result").textContent =
        `You were born on a ${days[index]}. Your Akan name is ${akanName}.`;
});