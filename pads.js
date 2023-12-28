let body = document.getElementById("body");

let hitHatClose = document.getElementById("hit_hat_close");
let kick1 = document.getElementById("kick1");
let crash1 = document.getElementById("crash1");

let hitHatOpen = document.getElementById("hit_hat_open");
let snare1 = document.getElementById("snare1");
let ride1 = document.getElementById("ride1");





document.addEventListener("keydown", function (event) {


    if (event.code === "Numpad1") {
        console.log("NumPad 1 Hit Hat Close");
        hitHatClose.currentTime = 0;
        hitHatClose.play();
        hitHatClose.volume = 0.8;
        hitHatClose.parentNode.style.background = "white";

    }
    if (event.code === "Numpad2") {
        console.log("NumPad 2 Kick");
        kick1.currentTime = 0;
        kick1.play();
        kick1.volume = 1;
        kick1.parentNode.style.backgroundColor = "white";
    }

    if (event.code === "Numpad3") {
        console.log("NumPad 3 Crash");
        crash1.currentTime = 0;
        crash1.play();
        crash1.volume = 0.2;
        crash1.parentNode.style.background = "white";
    }
    if (event.code === "Numpad4") {
        console.log("NumPad 4 Hit Hat Open");
        hitHatOpen.currentTime = 0;
        hitHatOpen.play();
        hitHatOpen.volume = 0.7;
        hitHatOpen.parentNode.style.background = "white";
    }

    if (event.code === "Numpad5") {
        console.log("NumPad5 Snare Caja");
        snare1.currentTime = 0;
        snare1.play();
        snare1.volume = 1;
        snare1.parentNode.style.background = "white";
    }

    if (event.code === "Numpad6") {
        console.log("NumPad 6 Ride");
        ride1.currentTime = 0;
        ride1.play();
        ride1.volume = 0.6;
        ride1.parentNode.style.background = "white";
    }


    // if (event.code === "Numpad7") {
    //     console.log("haz apretado el 8 CRASH");
    //     boton5.currentTime = 0;
    //     boton5.play();
    // }


    // if (event.code === "Numpad8") {
    //     console.log("haz apretado el 4 CRASH");
    //     boton4.currentTime = 0;
    //     boton4.volume = 0.5;
    //     boton4.play();
    // }


    // if (event.code === "Numpad9") {
    //     console.log("haz apretado el 8 CRASH");
    //     boton5.currentTime = 0;
    //     boton5.play();
    // }

});

document.addEventListener("keyup", function (event) {
    hitHatClose.parentNode.style.background = "rgba(34, 34, 34, 0.2)";
});

document.addEventListener("keyup", function (event) {
    kick1.parentNode.style.background = "rgba(34, 34, 34, 0.2)";
});

document.addEventListener("keyup", function (event) {
    crash1.parentNode.style.background = "rgba(34, 34, 34, 0.2)";
});




document.addEventListener("keyup", function (event) {
    hitHatOpen.parentNode.style.background = "rgba(34, 34, 34, 0.2)";
});

document.addEventListener("keyup", function (event) {
    snare1.parentNode.style.background = "rgba(34, 34, 34, 0.2)";
});

document.addEventListener("keyup", function (event) {
    ride1.parentNode.style.background = "rgba(34, 34, 34, 0.2)";
});




