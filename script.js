document.getElementById("akanForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = document.getElementById("year").value;
    const genderInput = document.querySelector('input[name="gender"]:checked');

    if (!day || day < 1 || day > 31) {
        alert("Please enter a valid day between 1 and 31.");
        return;
    }

    if (!month || month < 1 || month > 12) {
        alert("Please enter a valid month between 1 and 12.");
        return;
    }

    if (!year || year.length !== 4 || isNaN(parseInt(year))) {
        alert("Please enter a valid 4-digit year.");
        return;
    }

    if (!genderInput) {
        alert("Please select a gender.");
        return;
    }

    const gender = genderInput.value;

    const CC = parseInt(year.substring(0, 2));
    const YY = parseInt(year.substring(2));
    const MM = month;
    const DD = day;

    let d = (
        ( (48 * CC) - (2 * CC) - 1 ) +
        (45 * YY) +
        (1026 * (MM + 1)) +
        DD
    ) % 7;

   function getDayName(d) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[d];
}

function getAkanName(d, gender) {
    const male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    return gender === "male" ? male[d] : female[d];
}

/
const dayName = getDayName(d);
const akanName = getAkanName(d, gender);
    document.getElementById("akanForm").addEventListener"reset", function()
   document.getElementById("result").textContent = "";
        `You were born on a ${dayName}. Your Akan name is ${akanName}.`;
});