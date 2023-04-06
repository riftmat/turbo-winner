const add = document.getElementById("add");
const playerName = document.getElementById("playerName");
const playersList = document.getElementById("playersList");
const start = document.getElementById("start");
const all = document.getElementById("alll");
const po = document.getElementById("po");
const alertOne = document.getElementById("alertOne");
const alertTwo = document.getElementById("alertTwo");

function addPlayer() {

    const li = document.getElementsByTagName("li");

    if(playerName.value != "") {
        if(li.length < 10) {
            playersList.innerHTML += "<li id='li'>" + playerName.value + "</li>";
            const timeout = setTimeout(()=> {
                playerName.value = "";
            }, 100);
        };

        if(li.length > 9) {
            alertOne.innerHTML = "Osiągnięto maksymalną liczbę graczy";
            const timeout = setTimeout(()=> {
                alertOne.innerHTML = "";
                playerName.value = "";
            }, 1000);
        };
    };

    if(playerName.value === "") {
        alertOne.innerHTML = "Musisz wpisać nazwę!";
        const timeout = setTimeout(()=> {
            alertOne.innerHTML = "";
        }, 2000);
    };
};

add.addEventListener("click", addPlayer);

start.addEventListener("click", () => {

    const sl = document.getElementById("sl");
    const li = document.getElementsByTagName("li");    

    if(li.length < 1) {
        alertOne.innerHTML = "Wpisz przynajmniej jednego gracza!";
        const timeout = setTimeout(()=> {
            alertOne.innerHTML = "";
        }, 2000);
    };

    const arr = Array.from(li);

    if(arr.length > 0) {
        for(let i = 0; i < arr.length; i++) {
            po.innerHTML += 
            "<div class='pp' id='pp"+ i +"'>" + 
                "<p class='userName'>" + arr[i].innerHTML + "</p>" + 
                "<div class='winDiv'>Liczba zwycięstw:<p class='win' id='win"+ i +"'>0</p></div>" +
                "<div class='slN'>" +
                "<div class='slVal' id='" + arr[i].innerHTML + ""+ i +"'>" + sl.value + "</div>" +
                "<input type='number' min='0' max='180' id='a" + arr[i].innerHTML + ""+ i +"' class='score' placeholder='Wprowadź wynik'>" +
                "</div>" +
            "</div>";
        };

        all.innerHTML = "";
        alertOne.innerHTML = "";
        
        for(let i = 0; i < arr.length; i++) {
            let poin = document.getElementById(arr[i].innerHTML + i); // points left to gain for each player
            let inpu = document.getElementById("a" + arr[i].innerHTML + i); // input fo each player

            function count() {

                if(inpu.value > Number(poin.innerHTML)) {
                    poin.innerHTML = poin.innerHTML;
                }

                if(inpu.value < Number(poin.innerHTML) && inpu.value < 181) {
                    poin.innerHTML = Number(poin.innerHTML) - inpu.value;
                }

                if(inpu.value > 180) {
                    alertTwo.innerHTML = "Wpisałeś zbyt dużą liczbę!"
                    setTimeout(() => {
                        alertTwo.innerHTML = ""
                    }, 2500);
                }

                if(inpu.value == Number(poin.innerHTML)) {
                    alertTwo.innerHTML = "Wygrywa " + arr[i].innerHTML + " !";
                    const win = document.getElementById("win"+i);
                    win.innerHTML = Number(win.innerHTML) + 1;
                    setTimeout(()=> {
                        alertTwo.innerHTML = "";
                        const slVal = document.getElementsByClassName("slVal");
                        pointArr = Array.from(slVal);
                        for(let i = 0; i < pointArr.length; i++){
                            pointArr[i].innerHTML = sl.value;
                        }
                    }, 2500);
                };

                setTimeout(() => {
                    inpu.value = "";
                }, 250);
            };

            inpu.addEventListener("change", count);
        };

    };
});
