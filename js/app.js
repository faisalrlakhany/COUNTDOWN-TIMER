const endDate = "28 Feburary 2026 6:30 PM";

document.getElementById("end-date").innerText = endDate;


const inputs = document.querySelectorAll("input")

function clock() {

    const end = new Date(endDate);
    const now = new Date();
    // console.log("End DATE ==== >   ", end);
    // console.log("Current DATE ===== >  ", now);

    const diff = (end - now) / 1000;


    if (diff < 0) return;


    // console.log("Difference BTW CURRENT AND END TIME ====== >   " , diff);

    // console.log(Math.floor( diff / 3600 / 24 )); // accurate day

    inputs[0].value = Math.floor(diff / 3600 / 24)

    // console.log(Math.floor( diff/ 3600) % 24 ); // accurate hour

    inputs[1].value = Math.floor(diff / 3600) % 24;

    //console.log(Math.floor(diff / 60) % 60); // accurate minutes

    inputs[2].value = Math.floor(diff / 60) % 60;

    inputs[3].value = Math.floor(diff) % 60  // accurate seconds


}

clock();


setInterval(
    () => {
        clock()
    }, 1000
)
