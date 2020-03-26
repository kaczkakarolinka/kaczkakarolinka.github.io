document.addEventListener("DOMContentLoaded", function() {
    var title = document.getElementById("title");
    title.addEventListener("click", function() {
        console.log("kliknąłeś na tytuł");
    })

    var content = document.querySelector(".container-content");
    var question = document.querySelector(".container-question");

    var Gosia = 0;
    var Mery = 0;
    var Ola = 0;
    var Kika = 0;    
//kika
    var Kikaimg = document.createElement("img");
    Kikaimg.setAttribute("src", "./czterech jeźdźców apokalipsy/6FAF334C-99D9-4169-81E3-3059779AA682.jpeg");
    var Kikatxt = document.createElement("h3");
    Kikatxt.innerText = "Kika! Nikt nie wie co studiujesz, z Tobą na czele. Kochasz swój samochód, ale masz tendencję do wypadków. Szalony okres bitw tanecznych i spania na peronie jest już za sobą - ale czy na pewno? ;)"
    Kikatxt.className = "finalText";
//mery
    var Meryimg = document.createElement("img");
    Meryimg.setAttribute("src", "./czterech jeźdźców apokalipsy/6D0F35D8-A66B-4E3D-938A-22084C554FE9.jpeg")
    var Merytxt = document.createElement("h3");
    Merytxt.className = "finalText";
    Merytxt.innerText = "Mery! Mimo, że wydajesz się być spokojna, nie dajesz sobie dmuchać w kaszę. Jesteś przyszłością polskiej policji. Lubisz mocną szminkę i Ojca Mateusza, a stadion jest na Twoich barkach."

//Gosia
    var Gosiaimg = document.createElement("img");
    Gosiaimg.setAttribute("src", "./czterech jeźdźców apokalipsy/70A0241E-BE8D-4CBC-B593-7DAA1BB0CEB4.jpeg")
    var Gosiatxt = document.createElement("h3");
    Gosiatxt.className = "finalText";
    Gosiatxt.innerText = "Gosia! Nie boisz się być kocicą, lubisz kusić i dobrze się bawić. Twoje snapy zawsze zaskakują. Jesteś wynalazcą nazwy Kwiatjusz Powtórz i hersztem bandy."

//Ola
    var Olaimg = document.createElement("img");
    Olaimg.setAttribute("src", "./czterech jeźdźców apokalipsy/ABF86ED9-A646-46F0-9F94-7C9CA9A0A2A8.png")
    var Olatxt = document.createElement("h3");
    Olatxt.className = "finalText";
    Olatxt.innerText = "Ola! Lubisz rysować, ale Twoim marzeniem jest tańczenie w You Can Dance. Zawsze można na Ciebie liczyź w sprawie obiektywnej porady. Co jakiś czas wydaje Ci się, że masz gorączkę, a Twoi przyjaciele wiedzą, że nigdy nie przyjdziesz punktualnie na umówione spotkanie"

//remis
    var remisText = document.createElement("h3");
    remisText.innerText = "Niestety, ale pasujesz do więcej niż jednego typu, kliknij w wybraną osobę, by zapoznać się z jej opisem"
    remisText.className = "finalText";
    var OlaBtn = document.createElement("button");
    var MeryBtn = document.createElement("button");
    var KikaBtn = document.createElement("button");
    var GosiaBtn = document.createElement("button");
    OlaBtn.className = "answers";
    MeryBtn.className = "answers";
    KikaBtn.className = "answers";
    GosiaBtn.className = "answers";

    OlaBtn.addEventListener("click", function() {
        content.removeChild(remisText);
        content.removeChild(OlaBtn);
        content.removeChild(MeryBtn);
        content.removeChild(KikaBtn);
        content.removeChild(GosiaBtn);
        content.appendChild(Olaimg);
        content.appendChild(Olatxt);
    });

    MeryBtn.addEventListener("click", function() {
        content.removeChild(remisText);
        content.removeChild(OlaBtn);
        content.removeChild(MeryBtn);
        content.removeChild(KikaBtn);
        content.removeChild(GosiaBtn);
        content.appendChild(Meryimg);
        content.appendChild(Merytxt);
    });

    KikaBtn.addEventListener("click", function() {
        content.removeChild(remisText);
        content.removeChild(OlaBtn);
        content.removeChild(MeryBtn);
        content.removeChild(KikaBtn);
        content.removeChild(GosiaBtn);
        content.appendChild(Kikaimg);
        content.appendChild(Kikatxt);
    });

    GosiaBtn.addEventListener("click", function() {
        content.removeChild(remisText);
        content.removeChild(OlaBtn);
        content.removeChild(MeryBtn);
        content.removeChild(KikaBtn);
        content.removeChild(GosiaBtn);
        content.appendChild(Gosiaimg);
        content.appendChild(Gosiatxt);
    })
    
    

    var start = document.createElement("button");
    start.innerText = 'ROZPOCZNIJ QUIZ';
    start.id = "start";
    content.appendChild(start);
    start.addEventListener("mouseover", function() {
        start.style.width = "310px";
        start.style.height = "110px";
        start.style.fontSize = "25px";
    });

    start.addEventListener("mouseout", function() {
        start.style.width = "300px";
        start.style.height = "100px";
        start.style.fontSize = "20px";
    })

            var q1 = document.createElement("h3"); 
            q1.style.color = "#e5f2c9"

            var q1a1 = document.createElement("button");
            var q1a2 = document.createElement("button");
            var q1a3 = document.createElement("button");
            var q1a4 = document.createElement("button");

            var q2a1 = document.createElement("button");
            var q2a2 = document.createElement("button");
            var q2a3 = document.createElement("button");
            var q2a4 = document.createElement("button");

            var q3a1 = document.createElement("button");
            var q3a2 = document.createElement("button");
            var q3a3 = document.createElement("button");
            var q3a4 = document.createElement("button");

            var q4a1 = document.createElement("button");
            var q4a2 = document.createElement("button");
            var q4a3 = document.createElement("button");
            var q4a4 = document.createElement("button");

            var q5a1 = document.createElement("button");
            var q5a2 = document.createElement("button");
            var q5a3 = document.createElement("button");
            var q5a4 = document.createElement("button");

            var q6a1 = document.createElement("button");
            var q6a2 = document.createElement("button");
            var q6a3 = document.createElement("button");
            var q6a4 = document.createElement("button");

            var q7a1 = document.createElement("button");
            var q7a2 = document.createElement("button");
            var q7a3 = document.createElement("button");
            var q7a4 = document.createElement("button");

            var q8a1 = document.createElement("button");
            var q8a2 = document.createElement("button");
            var q8a3 = document.createElement("button");
            var q8a4 = document.createElement("button");

            var q9a1 = document.createElement("button");
            var q9a2 = document.createElement("button");
            var q9a3 = document.createElement("button");
            var q9a4 = document.createElement("button");

            var q10a1 = document.createElement("button");
            var q10a2 = document.createElement("button");
            var q10a3 = document.createElement("button");
            var q10a4 = document.createElement("button");

    start.addEventListener("click", function() {
        content.removeChild(start);
        content.style.justifyContent = "space-around";
        q1a1.className = "answers";
        q1a2.className = "answers";
        q1a3.className = "answers";
        q1a4.className = "answers";
        q1.innerText = "Jesteś u Marka na melanżu, co robisz?";
        q1a1.innerText = "idziesz do piwnicy i siadasz na motorze";
        q1a2.innerText = "siedzisz między Kubą Słapińskim a Matim";
        q1a3.innerText = "jarasz gibony i chodzisz za chłopakiem";
        q1a4.innerText = "siedzisz grzecznie na kanapie obok Sary";
        question.appendChild(q1);
        content.appendChild(q1a1);
        content.appendChild(q1a2);
        content.appendChild(q1a3);
        content.appendChild(q1a4);
    });

//Gosia

    q1a1.addEventListener("click", function() {
        Gosia = Gosia + 1;
        console.log('Gocha:' + Gosia);
        q1.innerText = "Co wybierasz?";
        content.removeChild(q1a1);
        content.removeChild(q1a2);
        content.removeChild(q1a3);
        content.removeChild(q1a4);
        q2a1.className = "answers";
        q2a2.className = "answers";
        q2a3.className = "answers";
        q2a4.className = "answers";
        q2a1.innerText = "gibon";
        q2a2.innerText = "grube z klikiem";
        q2a3.innerText = "cieńkie z klikiem";
        q2a4.innerText = "chesterfieldy lighty";
        content.appendChild(q2a1);
        content.appendChild(q2a2);
        content.appendChild(q2a3);
        content.appendChild(q2a4);
    });

    q2a3.addEventListener("click", function() {
        Gosia = Gosia + 1;
        console.log('Gocha:' + Gosia);
        q1.innerText = "Znajomi umawiają się na 20 na imprezę, co robisz?";
        content.removeChild(q2a1);
        content.removeChild(q2a2);
        content.removeChild(q2a3);
        content.removeChild(q2a4);
        q3a1.className = "answers";
        q3a2.className = "answers";
        q3a3.className = "answers";
        q3a4.className = "answers";
        q3a1.innerText = "wychodzisz z chaty przed 20, jesteś autem";
        q3a2.innerText = "pojawiasz i znikasz, w zależności od jakości melanżu";
        q3a3.innerText = "o 21 zaczynasz myć włosy i jedziesz do Ikei";
        q3a4.innerText = "przychodzisz na czas, ale zmywasz się przed 24";
        content.appendChild(q3a1);
        content.appendChild(q3a2);
        content.appendChild(q3a3);
        content.appendChild(q3a4);
    });
        
    q3a2.addEventListener("click", function() {
        Gosia = Gosia + 1;
        console.log('Gocha:' + Gosia);
        q1.innerText = "Co myślą o Tobie znajomi?";
        content.removeChild(q3a1);
        content.removeChild(q3a2);
        content.removeChild(q3a3);
        content.removeChild(q3a4);
        q4a1.className = "answers";
        q4a2.className = "answers";
        q4a3.className = "answers";
        q4a4.className = "answers";
        q4a1.innerText = "wyglądasz jak dziewczynka, ale drzemie w Tobie kocica";
        q4a2.innerText = "lubisz mieć wszystko pod kontrolą, troszczysz się o innych";
        q4a3.innerText = "lubisz melanż, ale lubisz też zmulić na chacie";
        q4a4.innerText = "nawet jak mówisz, że nie wyjdziesz to wyjdziesz";
        content.appendChild(q4a1);
        content.appendChild(q4a2);
        content.appendChild(q4a3);
        content.appendChild(q4a4);
    });

    q4a1.addEventListener("click", function() {
        Gosia = Gosia + 1;
        console.log('Gocha:' + Gosia);
        q1.innerText = "Co Cię łączy z pubem Stadionova?";
        content.removeChild(q4a1);
        content.removeChild(q4a2);
        content.removeChild(q4a3);
        content.removeChild(q4a4);
        q5a1.className = "answers";
        q5a2.className = "answers";
        q5a3.className = "answers";
        q5a4.className = "answers";
        q5a1.innerText = "mieszkasz niedaleko, więc czasem wpadniesz na browara";
        q5a2.innerText = "pracujesz tam od 3 lat";
        q5a3.innerText = "pracujesz tam od 3 miesiecy i jesteś pracownikiem miesiąca";
        q5a4.innerText = "pracujesz tam, a po skończonej zmianie wyrywasz klientów/dj'a";
        content.appendChild(q5a1);
        content.appendChild(q5a2);
        content.appendChild(q5a3);
        content.appendChild(q5a4);
    });
    
    q5a4.addEventListener("click", function() {
        Gosia = Gosia + 1;
        console.log('Gocha:' + Gosia);
        q1.innerText = "Imię Twojego wybranka to?";
        content.removeChild(q5a1);
        content.removeChild(q5a2);
        content.removeChild(q5a3);
        content.removeChild(q5a4);
        q6a1.className = "answers";
        q6a2.className = "answers";
        q6a3.className = "answers";
        q6a4.className = "answers";
        q6a1.innerText = "Kamil";
        q6a2.innerText = "Kuba";
        q6a3.innerText = "Krzychu";
        q6a4.innerText = "Emil";
        content.appendChild(q6a1);
        content.appendChild(q6a2);
        content.appendChild(q6a3);
        content.appendChild(q6a4);
    });

    q6a2.addEventListener("click", function() {
        Gosia = Gosia + 1;
        console.log('Gocha:' + Gosia);
        q1.innerText = "Jesteś na koncercie dj d.enda, co robisz?";
        content.removeChild(q6a1);
        content.removeChild(q6a2);
        content.removeChild(q6a3);
        content.removeChild(q6a4);
        q7a1.className = "answers";
        q7a2.className = "answers";
        q7a3.className = "answers";
        q7a4.className = "answers";
        q7a1.innerText = "prawie go wyrywasz, a potem puszczasz bełta";
        q7a2.innerText = "załatwiasz darmowe shoty";
        q7a3.innerText = "pijesz darmowe shoty i robią ci zdjęcie na fanpage";
        q7a4.innerText = "tańczysz do Get Down With The Bass";
        content.appendChild(q7a1);
        content.appendChild(q7a2);
        content.appendChild(q7a3);
        content.appendChild(q7a4);
    });

    q7a1.addEventListener("click", function() {
        Gosia = Gosia + 1;
        console.log('Gocha:' + Gosia);
        q1.innerText = "Wybierz ulubioną część garderoby:";
        content.removeChild(q7a1);
        content.removeChild(q7a2);
        content.removeChild(q7a3);
        content.removeChild(q7a4);
        q8a1.className = "answers";
        q8a2.className = "answers";
        q8a3.className = "answers";
        q8a4.className = "answers";
        q8a1.innerText = "spódniczka/sukienka";
        q8a2.innerText = "czapka wpierdolka";
        q8a3.innerText = "gangsterska kurtka";
        q8a4.innerText = "luźna koszula";
        content.appendChild(q8a1);
        content.appendChild(q8a2);
        content.appendChild(q8a3);
        content.appendChild(q8a4);
    });

    q8a3.addEventListener("click", function() {
        Gosia = Gosia + 1;
        console.log('Gocha:' + Gosia);
        q1.innerText = "Twoja ulubiona przekąska po gibonie:";
        content.removeChild(q8a1);
        content.removeChild(q8a2);
        content.removeChild(q8a3);
        content.removeChild(q8a4);
        q9a1.className = "answers";
        q9a2.className = "answers";
        q9a3.className = "answers";
        q9a4.className = "answers";
        q9a1.innerText = "talerz rozmaitości";
        q9a2.innerText = "ćpuny do wora, a wór do jeziora";
        q9a3.innerText = "maczugi i żelki zozole";
        q9a4.innerText = "McDonald";
        content.appendChild(q9a1);
        content.appendChild(q9a2);
        content.appendChild(q9a3);
        content.appendChild(q9a4);
    });

    q9a1.addEventListener("click", function() {
        Gosia = Gosia + 1;
        console.log('Gocha:' + Gosia);
        q1.innerText = "Po mieście wozisz się:";
        content.removeChild(q9a1);
        content.removeChild(q9a2);
        content.removeChild(q9a3);
        content.removeChild(q9a4);
        q10a1.className = "answers";
        q10a2.className = "answers";
        q10a3.className = "answers";
        q10a4.className = "answers";
        q10a1.innerText = "Polo";
        q10a2.innerText = "Atosem";
        q10a3.innerText = "Corsą";
        q10a4.innerText = "Getzem";
        content.appendChild(q10a1);
        content.appendChild(q10a2);
        content.appendChild(q10a3);
        content.appendChild(q10a4);
    });

    q10a2.addEventListener("click", function() {
        Gosia = Gosia + 1;
        console.log('Gocha:' + Gosia);
        q1.innerText = "Twój wynik to:";
        content.removeChild(q10a1);
        content.removeChild(q10a2);
        content.removeChild(q10a3);
        content.removeChild(q10a4);
        if (Kika > Mery & Kika > Gosia & Kika > Ola) {
            content.appendChild(Kikaimg);
            content.appendChild(Kikatxt);
        } else if (Mery > Kika & Mery > Gosia & Mery > Ola) {
            content.appendChild(Meryimg);
            content.appendChild(Merytxt);
        } else if (Gosia > Kika & Gosia > Mery & Gosia > Ola) {
            content.appendChild(Gosiaimg);
            content.appendChild(Gosiatxt);
        } else if (Ola > Kika & Ola > Mery & Ola > Gosia) {
            content.appendChild(Olaimg);
            content.appendChild(Olatxt);
        } else {
            content.appendChild(remisText);
            content.appendChild(OlaBtn);
            content.appendChild(KikaBtn);
            content.appendChild(GosiaBtn);
            content.appendChild(MeryBtn);
            OlaBtn.innerText = "Ola: " + Ola;
            MeryBtn.innerText = "Mery: " + Mery;
            KikaBtn.innerText = "Kika: " + Kika;
            GosiaBtn.innerText = "Gosia: " + Gosia;
        }
    });

//Marysia

    q1a4.addEventListener("click", function() {
        Mery = Mery + 1;
        console.log('Mery:' + Mery);
        q1.innerText = "Co wybierasz?";
        content.removeChild(q1a1);
        content.removeChild(q1a2);
        content.removeChild(q1a3);
        content.removeChild(q1a4);
        q2a1.className = "answers";
        q2a2.className = "answers";
        q2a3.className = "answers";
        q2a4.className = "answers";
        q2a1.innerText = "gibon";
        q2a2.innerText = "grube z klikiem";
        q2a3.innerText = "cieńkie z klikiem";
        q2a4.innerText = "chesterfieldy lighty";
        content.appendChild(q2a1);
        content.appendChild(q2a2);
        content.appendChild(q2a3);
        content.appendChild(q2a4);
    });

    q2a2.addEventListener("click", function() {
        Mery = Mery + 1;
        console.log('Mery:' + Mery);
        q1.innerText = "Znajomi umawiają się na 20 na imprezę, co robisz?";
        content.removeChild(q2a1);
        content.removeChild(q2a2);
        content.removeChild(q2a3);
        content.removeChild(q2a4);
        q3a1.className = "answers";
        q3a2.className = "answers";
        q3a3.className = "answers";
        q3a4.className = "answers";
        q3a1.innerText = "wychodzisz z chaty przed 20, jesteś autem";
        q3a2.innerText = "pojawiasz i znikasz, w zależności od jakości melanżu";
        q3a3.innerText = "o 21 zaczynasz myć włosy i jedziesz do Ikei";
        q3a4.innerText = "przychodzisz na czas, ale zmywasz się przed 24";
        content.appendChild(q3a1);
        content.appendChild(q3a2);
        content.appendChild(q3a3);
        content.appendChild(q3a4);
    });

    q3a1.addEventListener("click", function() {
        Mery = Mery + 1;
        console.log('Mery:' + Mery);
        q1.innerText = "Co myślą o Tobie znajomi?";
        content.removeChild(q3a1);
        content.removeChild(q3a2);
        content.removeChild(q3a3);
        content.removeChild(q3a4);
        q4a1.className = "answers";
        q4a2.className = "answers";
        q4a3.className = "answers";
        q4a4.className = "answers";
        q4a1.innerText = "wyglądasz jak dziewczynka, ale drzemie w Tobie kocica";
        q4a2.innerText = "lubisz mieć wszystko pod kontrolą, troszczysz się o innych";
        q4a3.innerText = "lubisz melanż, ale lubisz też zmulić na chacie";
        q4a4.innerText = "nawet jak mówisz, że nie wyjdziesz to wyjdziesz";
        content.appendChild(q4a1);
        content.appendChild(q4a2);
        content.appendChild(q4a3);
        content.appendChild(q4a4);
    });

    q4a2.addEventListener("click", function() {
        Mery = Mery + 1;
        console.log('Mery:' + Mery);
        q1.innerText = "Co Cię łączy z pubem Stadionova?";
        content.removeChild(q4a1);
        content.removeChild(q4a2);
        content.removeChild(q4a3);
        content.removeChild(q4a4);
        q5a1.className = "answers";
        q5a2.className = "answers";
        q5a3.className = "answers";
        q5a4.className = "answers";
        q5a1.innerText = "mieszkasz niedaleko, więc czasem wpadniesz na browara";
        q5a2.innerText = "pracujesz tam od 3 lat";
        q5a3.innerText = "pracujesz tam od 3 miesiecy i jesteś pracownikiem miesiąca";
        q5a4.innerText = "pracujesz tam, a po skończonej zmianie wyrywasz klientów/dj'a";
        content.appendChild(q5a1);
        content.appendChild(q5a2);
        content.appendChild(q5a3);
        content.appendChild(q5a4);
    });

    q5a2.addEventListener("click", function() {
        Mery = Mery + 1;
        console.log('Mery:' + Mery);
        q1.innerText = "Imię Twojego wybranka to?";
        content.removeChild(q5a1);
        content.removeChild(q5a2);
        content.removeChild(q5a3);
        content.removeChild(q5a4);
        q6a1.className = "answers";
        q6a2.className = "answers";
        q6a3.className = "answers";
        q6a4.className = "answers";
        q6a1.innerText = "Kamil";
        q6a2.innerText = "Kuba";
        q6a3.innerText = "Krzychu";
        q6a4.innerText = "Emil";
        content.appendChild(q6a1);
        content.appendChild(q6a2);
        content.appendChild(q6a3);
        content.appendChild(q6a4);
    });

    q6a1.addEventListener("click", function() {
        Mery = Mery + 1;
        console.log('Mery:' + Mery);
        q1.innerText = "Jesteś na koncercie dj d.enda, co robisz?";
        content.removeChild(q6a1);
        content.removeChild(q6a2);
        content.removeChild(q6a3);
        content.removeChild(q6a4);
        q7a1.className = "answers";
        q7a2.className = "answers";
        q7a3.className = "answers";
        q7a4.className = "answers";
        q7a1.innerText = "prawie go wyrywasz, a potem puszczasz bełta";
        q7a2.innerText = "załatwiasz darmowe shoty";
        q7a3.innerText = "pijesz darmowe shoty i robią ci zdjęcie na fanpage";
        q7a4.innerText = "tańczysz do Get Down With The Bass";
        content.appendChild(q7a1);
        content.appendChild(q7a2);
        content.appendChild(q7a3);
        content.appendChild(q7a4);
    });

    q7a2.addEventListener("click", function() {
        Mery = Mery + 1;
        console.log('Mery:' + Mery);
        q1.innerText = "Wybierz ulubioną część garderoby:";
        content.removeChild(q7a1);
        content.removeChild(q7a2);
        content.removeChild(q7a3);
        content.removeChild(q7a4);
        q8a1.className = "answers";
        q8a2.className = "answers";
        q8a3.className = "answers";
        q8a4.className = "answers";
        q8a1.innerText = "spódniczka/sukienka";
        q8a2.innerText = "czapka wpierdolka";
        q8a3.innerText = "gangsterska kurtka";
        q8a4.innerText = "luźna koszula";
        content.appendChild(q8a1);
        content.appendChild(q8a2);
        content.appendChild(q8a3);
        content.appendChild(q8a4);
    });

    q8a2.addEventListener("click", function() {
        Mery = Mery + 1;
        console.log('Mery:' + Mery);
        q1.innerText = "Twoja ulubiona przekąska po gibonie:";
        content.removeChild(q8a1);
        content.removeChild(q8a2);
        content.removeChild(q8a3);
        content.removeChild(q8a4);
        q9a1.className = "answers";
        q9a2.className = "answers";
        q9a3.className = "answers";
        q9a4.className = "answers";
        q9a1.innerText = "talerz rozmaitości";
        q9a2.innerText = "ćpuny do wora, a wór do jeziora";
        q9a3.innerText = "maczugi i żelki zozole";
        q9a4.innerText = "McDonald";
        content.appendChild(q9a1);
        content.appendChild(q9a2);
        content.appendChild(q9a3);
        content.appendChild(q9a4);
    });

    q9a4.addEventListener("click", function() {
        Mery = Mery + 1;
        console.log('Mery:' + Mery);
        q1.innerText = "Po mieście wozisz się:";
        content.removeChild(q9a1);
        content.removeChild(q9a2);
        content.removeChild(q9a3);
        content.removeChild(q9a4);
        q10a1.className = "answers";
        q10a2.className = "answers";
        q10a3.className = "answers";
        q10a4.className = "answers";
        q10a1.innerText = "Polo";
        q10a2.innerText = "Atosem";
        q10a3.innerText = "Corsą";
        q10a4.innerText = "Getzem";
        content.appendChild(q10a1);
        content.appendChild(q10a2);
        content.appendChild(q10a3);
        content.appendChild(q10a4);
    });

    q10a3.addEventListener("click", function() {
        Mery = Mery + 1;
        console.log('Mery:' + Mery);
        q1.innerText = "Twój wynik to:";
        content.removeChild(q10a1);
        content.removeChild(q10a2);
        content.removeChild(q10a3);
        content.removeChild(q10a4);
        if (Kika > Mery & Kika > Gosia & Kika > Ola) {
            content.appendChild(Kikaimg);
            content.appendChild(Kikatxt);
        } else if (Mery > Kika & Mery > Gosia & Mery > Ola) {
            content.appendChild(Meryimg);
            content.appendChild(Merytxt);
        } else if (Gosia > Kika & Gosia > Mery & Gosia > Ola) {
            content.appendChild(Gosiaimg);
            content.appendChild(Gosiatxt);
        } else if (Ola > Kika & Ola > Mery & Ola > Gosia) {
            content.appendChild(Olaimg);
            content.appendChild(Olatxt);
        } else {
            content.appendChild(remisText);
            content.appendChild(OlaBtn);
            content.appendChild(KikaBtn);
            content.appendChild(GosiaBtn);
            content.appendChild(MeryBtn);
            OlaBtn.innerText = "Ola: " + Ola;
            MeryBtn.innerText = "Mery: " + Mery;
            KikaBtn.innerText = "Kika: " + Kika;
            GosiaBtn.innerText = "Gosia: " + Gosia;
        }
    });
        
//Ola

    q1a2.addEventListener("click", function() {
        Ola = Ola + 1;
        console.log('Ola:' + Ola);
        q1.innerText = "Co wybierasz?";
        content.removeChild(q1a1);
        content.removeChild(q1a2);
        content.removeChild(q1a3);
        content.removeChild(q1a4);
        q2a1.className = "answers";
        q2a2.className = "answers";
        q2a3.className = "answers";
        q2a4.className = "answers";
        q2a1.innerText = "gibon";
        q2a2.innerText = "grube z klikiem";
        q2a3.innerText = "cieńkie z klikiem";
        q2a4.innerText = "chesterfieldy lighty";
        content.appendChild(q2a1);
        content.appendChild(q2a2);
        content.appendChild(q2a3);
        content.appendChild(q2a4);
    });

    q2a4.addEventListener("click", function() {
        Ola = Ola + 1;
        console.log('Ola:' + Ola);
        q1.innerText = "Znajomi umawiają się na 20 na imprezę, co robisz?";
        content.removeChild(q2a1);
        content.removeChild(q2a2);
        content.removeChild(q2a3);
        content.removeChild(q2a4);
        q3a1.className = "answers";
        q3a2.className = "answers";
        q3a3.className = "answers";
        q3a4.className = "answers";
        q3a1.innerText = "wychodzisz z chaty przed 20, jesteś autem";
        q3a2.innerText = "pojawiasz i znikasz, w zależności od jakości melanżu";
        q3a3.innerText = "o 21 zaczynasz myć włosy i jedziesz do Ikei";
        q3a4.innerText = "przychodzisz na czas, ale zmywasz się przed 24";
        content.appendChild(q3a1);
        content.appendChild(q3a2);
        content.appendChild(q3a3);
        content.appendChild(q3a4);
    });
        
    q3a3.addEventListener("click", function() {
        Ola = Ola + 1;
        console.log('Ola:' + Ola);
        q1.innerText = "Co myślą o Tobie znajomi?";
        content.removeChild(q3a1);
        content.removeChild(q3a2);
        content.removeChild(q3a3);
        content.removeChild(q3a4);
        q4a1.className = "answers";
        q4a2.className = "answers";
        q4a3.className = "answers";
        q4a4.className = "answers";
        q4a1.innerText = "wyglądasz jak dziewczynka, ale drzemie w Tobie kocica";
        q4a2.innerText = "lubisz mieć wszystko pod kontrolą, troszczysz się o innych";
        q4a3.innerText = "lubisz melanż, ale lubisz też zmulić na chacie";
        q4a4.innerText = "nawet jak mówisz, że nie wyjdziesz to wyjdziesz";
        content.appendChild(q4a1);
        content.appendChild(q4a2);
        content.appendChild(q4a3);
        content.appendChild(q4a4);
    });

    q4a4.addEventListener("click", function() {
        Ola = Ola + 1;
        console.log('Ola:' + Ola);
        q1.innerText = "Co Cię łączy z pubem Stadionova?";
        content.removeChild(q4a1);
        content.removeChild(q4a2);
        content.removeChild(q4a3);
        content.removeChild(q4a4);
        q5a1.className = "answers";
        q5a2.className = "answers";
        q5a3.className = "answers";
        q5a4.className = "answers";
        q5a1.innerText = "mieszkasz niedaleko, więc czasem wpadniesz na browara";
        q5a2.innerText = "pracujesz tam od 3 lat";
        q5a3.innerText = "pracujesz tam od 3 miesiecy i jesteś pracownikiem miesiąca";
        q5a4.innerText = "pracujesz tam, a po skończonej zmianie wyrywasz klientów/dj'a";
        content.appendChild(q5a1);
        content.appendChild(q5a2);
        content.appendChild(q5a3);
        content.appendChild(q5a4);
    });
    
    q5a1.addEventListener("click", function() {
        Ola = Ola + 1;
        console.log('Ola:' + Ola);
        q1.innerText = "Imię Twojego wybranka to?";
        content.removeChild(q5a1);
        content.removeChild(q5a2);
        content.removeChild(q5a3);
        content.removeChild(q5a4);
        q6a1.className = "answers";
        q6a2.className = "answers";
        q6a3.className = "answers";
        q6a4.className = "answers";
        q6a1.innerText = "Kamil";
        q6a2.innerText = "Kuba";
        q6a3.innerText = "Krzychu";
        q6a4.innerText = "Emil";
        content.appendChild(q6a1);
        content.appendChild(q6a2);
        content.appendChild(q6a3);
        content.appendChild(q6a4);
    });

    q6a4.addEventListener("click", function() {
        Ola = Ola + 1;
        console.log('Ola:' + Ola);
        q1.innerText = "Jesteś na koncercie dj d.enda, co robisz?";
        content.removeChild(q6a1);
        content.removeChild(q6a2);
        content.removeChild(q6a3);
        content.removeChild(q6a4);
        q7a1.className = "answers";
        q7a2.className = "answers";
        q7a3.className = "answers";
        q7a4.className = "answers";
        q7a1.innerText = "prawie go wyrywasz, a potem puszczasz bełta";
        q7a2.innerText = "załatwiasz darmowe shoty";
        q7a3.innerText = "pijesz darmowe shoty i robią ci zdjęcie na fanpage";
        q7a4.innerText = "tańczysz do Get Down With The Bass";
        content.appendChild(q7a1);
        content.appendChild(q7a2);
        content.appendChild(q7a3);
        content.appendChild(q7a4);
    });

    q7a3.addEventListener("click", function() {
        Ola = Ola + 1;
        console.log('Ola:' + Ola);
        q1.innerText = "Wybierz ulubioną część garderoby:";
        content.removeChild(q7a1);
        content.removeChild(q7a2);
        content.removeChild(q7a3);
        content.removeChild(q7a4);
        q8a1.className = "answers";
        q8a2.className = "answers";
        q8a3.className = "answers";
        q8a4.className = "answers";
        q8a1.innerText = "spódniczka/sukienka";
        q8a2.innerText = "czapka wpierdolka";
        q8a3.innerText = "gangsterska kurtka";
        q8a4.innerText = "luźna koszula";
        content.appendChild(q8a1);
        content.appendChild(q8a2);
        content.appendChild(q8a3);
        content.appendChild(q8a4);
    });

    q8a1.addEventListener("click", function() {
        Ola = Ola + 1;
        console.log('Ola:' + Ola);
        q1.innerText = "Twoja ulubiona przekąska po gibonie:";
        content.removeChild(q8a1);
        content.removeChild(q8a2);
        content.removeChild(q8a3);
        content.removeChild(q8a4);
        q9a1.className = "answers";
        q9a2.className = "answers";
        q9a3.className = "answers";
        q9a4.className = "answers";
        q9a1.innerText = "talerz rozmaitości";
        q9a2.innerText = "ćpuny do wora, a wór do jeziora";
        q9a3.innerText = "maczugi i żelki zozole";
        q9a4.innerText = "McDonald";
        content.appendChild(q9a1);
        content.appendChild(q9a2);
        content.appendChild(q9a3);
        content.appendChild(q9a4);
    });

    q9a2.addEventListener("click", function() {
        Ola = Ola + 1;
        console.log('Ola:' + Ola);
        q1.innerText = "Po mieście wozisz się:";
        content.removeChild(q9a1);
        content.removeChild(q9a2);
        content.removeChild(q9a3);
        content.removeChild(q9a4);
        q10a1.className = "answers";
        q10a2.className = "answers";
        q10a3.className = "answers";
        q10a4.className = "answers";
        q10a1.innerText = "Polo";
        q10a2.innerText = "Atosem";
        q10a3.innerText = "Corsą";
        q10a4.innerText = "Getzem";
        content.appendChild(q10a1);
        content.appendChild(q10a2);
        content.appendChild(q10a3);
        content.appendChild(q10a4);
    });

    q10a4.addEventListener("click", function() {
        Ola = Ola + 1;
        console.log('Ola:' + Ola);
        q1.innerText = "Twój wynik to:";
        content.removeChild(q10a1);
        content.removeChild(q10a2);
        content.removeChild(q10a3);
        content.removeChild(q10a4);
        if (Kika > Mery & Kika > Gosia & Kika > Ola) {
            content.appendChild(Kikaimg);
            content.appendChild(Kikatxt);
        } else if (Mery > Kika & Mery > Gosia & Mery > Ola) {
            content.appendChild(Meryimg);
            content.appendChild(Merytxt);
        } else if (Gosia > Kika & Gosia > Mery & Gosia > Ola) {
            content.appendChild(Gosiaimg);
            content.appendChild(Gosiatxt);
        } else if (Ola > Kika & Ola > Mery & Ola > Gosia) {
            content.appendChild(Olaimg);
            content.appendChild(Olatxt);
        } else {
            content.appendChild(remisText);
            content.appendChild(OlaBtn);
            content.appendChild(KikaBtn);
            content.appendChild(GosiaBtn);
            content.appendChild(MeryBtn);
            OlaBtn.innerText = "Ola: " + Ola;
            MeryBtn.innerText = "Mery: " + Mery;
            KikaBtn.innerText = "Kika: " + Kika;
            GosiaBtn.innerText = "Gosia: " + Gosia;
        }
    });

//Kika

    q1a3.addEventListener("click", function() {
        Kika = Kika + 1;
        console.log('Kika:' + Kika);
        q1.innerText = "Co wybierasz?";
        content.removeChild(q1a1);
        content.removeChild(q1a2);
        content.removeChild(q1a3);
        content.removeChild(q1a4);
        q2a1.className = "answers";
        q2a2.className = "answers";
        q2a3.className = "answers";
        q2a4.className = "answers";
        q2a1.innerText = "gibon";
        q2a2.innerText = "grube z klikiem";
        q2a3.innerText = "cieńkie z klikiem";
        q2a4.innerText = "chesterfieldy lighty";
        content.appendChild(q2a1);
        content.appendChild(q2a2);
        content.appendChild(q2a3);
        content.appendChild(q2a4);
    });

    q2a1.addEventListener("click", function() {
        Kika = Kika + 1;
        console.log('Kika:' + Kika);
        q1.innerText = "Znajomi umawiają się na 20 na imprezę, co robisz?";
        content.removeChild(q2a1);
        content.removeChild(q2a2);
        content.removeChild(q2a3);
        content.removeChild(q2a4);
        q3a1.className = "answers";
        q3a2.className = "answers";
        q3a3.className = "answers";
        q3a4.className = "answers";
        q3a1.innerText = "wychodzisz z chaty przed 20, jesteś autem";
        q3a2.innerText = "pojawiasz i znikasz, w zależności od jakości melanżu";
        q3a3.innerText = "o 21 zaczynasz myć włosy i jedziesz do Ikei";
        q3a4.innerText = "przychodzisz na czas, ale zmywasz się przed 24";
        content.appendChild(q3a1);
        content.appendChild(q3a2);
        content.appendChild(q3a3);
        content.appendChild(q3a4);
    });
        
    q3a4.addEventListener("click", function() {
        Kika = Kika + 1;
        console.log('Kika:' + Kika);
        q1.innerText = "Co myślą o Tobie znajomi?";
        content.removeChild(q3a1);
        content.removeChild(q3a2);
        content.removeChild(q3a3);
        content.removeChild(q3a4);
        q4a1.className = "answers";
        q4a2.className = "answers";
        q4a3.className = "answers";
        q4a4.className = "answers";
        q4a1.innerText = "wyglądasz jak dziewczynka, ale drzemie w Tobie kocica";
        q4a2.innerText = "lubisz mieć wszystko pod kontrolą, troszczysz się o innych";
        q4a3.innerText = "lubisz melanż, ale lubisz też zmulić na chacie";
        q4a4.innerText = "nawet jak mówisz, że nie wyjdziesz to wyjdziesz";
        content.appendChild(q4a1);
        content.appendChild(q4a2);
        content.appendChild(q4a3);
        content.appendChild(q4a4);
    });

    q4a3.addEventListener("click", function() {
        Kika = Kika + 1;
        console.log('Kika:' + Kika);
        q1.innerText = "Co Cię łączy z pubem Stadionova?";
        content.removeChild(q4a1);
        content.removeChild(q4a2);
        content.removeChild(q4a3);
        content.removeChild(q4a4);
        q5a1.className = "answers";
        q5a2.className = "answers";
        q5a3.className = "answers";
        q5a4.className = "answers";
        q5a1.innerText = "mieszkasz niedaleko, więc czasem wpadniesz na browara";
        q5a2.innerText = "pracujesz tam od 3 lat";
        q5a3.innerText = "pracujesz tam od 3 miesiecy i jesteś pracownikiem miesiąca";
        q5a4.innerText = "pracujesz tam, a po skończonej zmianie wyrywasz klientów/dj'a";
        content.appendChild(q5a1);
        content.appendChild(q5a2);
        content.appendChild(q5a3);
        content.appendChild(q5a4);
    });
    
    q5a3.addEventListener("click", function() {
        Kika = Kika + 1;
        console.log('Kika:' + Kika);
        q1.innerText = "Imię Twojego wybranka to?";
        content.removeChild(q5a1);
        content.removeChild(q5a2);
        content.removeChild(q5a3);
        content.removeChild(q5a4);
        q6a1.className = "answers";
        q6a2.className = "answers";
        q6a3.className = "answers";
        q6a4.className = "answers";
        q6a1.innerText = "Kamil";
        q6a2.innerText = "Kuba";
        q6a3.innerText = "Krzychu";
        q6a4.innerText = "Emil";
        content.appendChild(q6a1);
        content.appendChild(q6a2);
        content.appendChild(q6a3);
        content.appendChild(q6a4);
    });

    q6a3.addEventListener("click", function() {
        Kika = Kika + 1;
        console.log('Kika:' + Kika);
        q1.innerText = "Jesteś na koncercie dj d.enda, co robisz?";
        content.removeChild(q6a1);
        content.removeChild(q6a2);
        content.removeChild(q6a3);
        content.removeChild(q6a4);
        q7a1.className = "answers";
        q7a2.className = "answers";
        q7a3.className = "answers";
        q7a4.className = "answers";
        q7a1.innerText = "prawie go wyrywasz, a potem puszczasz bełta";
        q7a2.innerText = "załatwiasz darmowe shoty";
        q7a3.innerText = "pijesz darmowe shoty i robią ci zdjęcie na fanpage";
        q7a4.innerText = "tańczysz do Get Down With The Bass";
        content.appendChild(q7a1);
        content.appendChild(q7a2);
        content.appendChild(q7a3);
        content.appendChild(q7a4);
    });

    q7a4.addEventListener("click", function() {
        Kika = Kika + 1;
        console.log('Kika:' + Kika);
        q1.innerText = "Wybierz ulubioną część garderoby:";
        content.removeChild(q7a1);
        content.removeChild(q7a2);
        content.removeChild(q7a3);
        content.removeChild(q7a4);
        q8a1.className = "answers";
        q8a2.className = "answers";
        q8a3.className = "answers";
        q8a4.className = "answers";
        q8a1.innerText = "spódniczka/sukienka";
        q8a2.innerText = "czapka wpierdolka";
        q8a3.innerText = "gangsterska kurtka";
        q8a4.innerText = "luźna koszula";
        content.appendChild(q8a1);
        content.appendChild(q8a2);
        content.appendChild(q8a3);
        content.appendChild(q8a4);
    });

    q8a4.addEventListener("click", function() {
        Kika = Kika + 1;
        console.log('Kika:' + Kika);
        q1.innerText = "Twoja ulubiona przekąska po gibonie:";
        content.removeChild(q8a1);
        content.removeChild(q8a2);
        content.removeChild(q8a3);
        content.removeChild(q8a4);
        q9a1.className = "answers";
        q9a2.className = "answers";
        q9a3.className = "answers";
        q9a4.className = "answers";
        q9a1.innerText = "talerz rozmaitości";
        q9a2.innerText = "ćpuny do wora, a wór do jeziora";
        q9a3.innerText = "maczugi i żelki zozole";
        q9a4.innerText = "McDonald";
        content.appendChild(q9a1);
        content.appendChild(q9a2);
        content.appendChild(q9a3);
        content.appendChild(q9a4);
    });

    q9a3.addEventListener("click", function() {
        Kika = Kika + 1;
        console.log('Kika:' + Kika);
        q1.innerText = "Po mieście wozisz się:";
        content.removeChild(q9a1);
        content.removeChild(q9a2);
        content.removeChild(q9a3);
        content.removeChild(q9a4);
        q10a1.className = "answers";
        q10a2.className = "answers";
        q10a3.className = "answers";
        q10a4.className = "answers";
        q10a1.innerText = "Polo";
        q10a2.innerText = "Atosem";
        q10a3.innerText = "Corsą";
        q10a4.innerText = "Getzem";
        content.appendChild(q10a1);
        content.appendChild(q10a2);
        content.appendChild(q10a3);
        content.appendChild(q10a4);
    });

    q10a1.addEventListener("click", function() {
        Kika = Kika + 1;
        console.log('Kika:' + Kika);
        q1.innerText = "Twój wynik to:";
        content.removeChild(q10a1);
        content.removeChild(q10a2);
        content.removeChild(q10a3);
        content.removeChild(q10a4);
        if (Kika > Mery & Kika > Gosia & Kika > Ola) {
            content.appendChild(Kikaimg);
            content.appendChild(Kikatxt);
        } else if (Mery > Kika & Mery > Gosia & Mery > Ola) {
            content.appendChild(Meryimg);
            content.appendChild(Merytxt);
        } else if (Gosia > Kika & Gosia > Mery & Gosia > Ola) {
            content.appendChild(Gosiaimg);
            content.appendChild(Gosiatxt);
        } else if (Ola > Kika & Ola > Mery & Ola > Gosia) {
            content.appendChild(Olaimg);
            content.appendChild(Olatxt);
        } else {
            content.appendChild(remisText);
            content.appendChild(OlaBtn);
            content.appendChild(KikaBtn);
            content.appendChild(GosiaBtn);
            content.appendChild(MeryBtn);
            OlaBtn.innerText = "Ola: " + Ola;
            MeryBtn.innerText = "Mery: " + Mery;
            KikaBtn.innerText = "Kika: " + Kika;
            GosiaBtn.innerText = "Gosia: " + Gosia;
        }
        
    });

});