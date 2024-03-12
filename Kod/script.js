document.getElementById("load-monsters-button").addEventListener("click", function() {
    const monsterCode = document.getElementById("monster-code").value;
    const monsterData = {
        "jax4af": {
            "Nazwa Potwora": "Goblin",
            "Opis": "Opis potwora 1",
            "Resistance": "",
            "Immunity": "",
            "Vulnerabilities": "",
            "Langauges": "Common, Goblin",
            "Uwagi": "",
            "Bronie": "Buława,Shortbow",
            "Gemstone": "Green Gemstone",
            "Poziom Trudności": "Łatwy",
            "Image": "Kod/Images/goblin.jpg" // Dodany link do zdjęcia potwora
        },
        "y1g3v5": {
            "Nazwa Potwora": "Goblin Boss",
            "Opis": "Opis potwora 2",
            "Resistance": "",
            "Immunity": "",
            "Vulnerabilities": "",
            "Langauges": "Common, Goblin",
            "Uwagi": "",
            "Bronie": "Buława, Javelin",
            "Gemstone": "Green Gemstone",
            "Poziom Trudności": "Średni",
            "Image": "Kod/Images/" // Dodany link do zdjęcia potwora
        },
        "robot": {
            "Nazwa Potwora": "Robocik",
            "Opis": "Istniał przed stworzeniem świata więc moze istnieć",
            "Resistance": "No jak śpi to go nie atakują bo to blaszka pozdro",
            "Immunity": "Śpi? spoko to nie atakuje",
            "Vulnerabilities": "Elektryka prąd tyka",
            "Langauges": "Passive-Agressive, M-A-D",
            "Uwagi": "Istniał nawet przed było sobie życie",
            "Bronie": "Łapki fapki ",
            "Gemstone": "-",
            "Poziom Trudności": "Śpiący",
            "Image": "Kod/Images/robot.png" // Dodany link do zdjęcia potwora
        },
    };

    const monsterStatsDiv = document.getElementById("monster-data");
    const stats = monsterData[monsterCode];

    if (stats) {
        let output = "<h2 style='font-family: MedievalSharp'>" + stats["Nazwa Potwora"] + "</h2>";
        output += "<p style='font-family: MedievalSharp'><strong>Kod Potwora:</strong> " + monsterCode + "</p>";
        output += "<p style='font-family: MedievalSharp'><strong>Opis:</strong> " + stats["Opis"] + "</p>";
        output += "<p style='font-family: MedievalSharp'><strong>Resistance:</strong> " + stats["Resistance"] + "</p>";
        output += "<p style='font-family: MedievalSharp'><strong>Immunity:</strong> " + stats["Immunity"] + "</p>";
        output += "<p style='font-family: MedievalSharp'><strong>Vulnerabilities:</strong> " + stats["Vulnerabilities"] + "</p>";
        output += "<p style='font-family: MedievalSharp'><strong>Languages:</strong> " + stats["Langauges"] + "</p>";
        output += "<p style='font-family: MedievalSharp'><strong>Uwagi:</strong> " + stats["Uwagi"] + "</p>";
        output += "<p style='font-family: MedievalSharp'><strong>Bronie:</strong> " + stats["Bronie"] + "</p>";
        output += "<p style='font-family: MedievalSharp'><strong>Gemstone:</strong> " + stats["Gemstone"] + "</p>";
        output += "<p style='font-family: MedievalSharp'><strong>Poziom Trudności:</strong> " + stats["Poziom Trudności"] + "</p>";
        
        // Dodanie zdjęcia potwora
        output += "<div style='margin-top: 20px; text-align: center;'>";
        output += "<img src='" + stats["Image"] + "' style='width: 300px; height: auto; border: 2px solid black; box-shadow: 0px 0px 10px black;'>";
        output += "</div>";

        monsterStatsDiv.innerHTML = output;
        monsterStatsDiv.style.display = "block";
        monsterStatsDiv.style.backgroundColor = "#d2b48c"; /* Zmiana koloru tła */
    } else {
        monsterStatsDiv.innerHTML = "<p>Brak danych dla podanego kodu potwora.</p>";
        monsterStatsDiv.style.display = "block";
        monsterStatsDiv.style.backgroundColor = "#d2b48c"; /* Zmiana koloru tła */
    }
});
