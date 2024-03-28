let count = 0
let countEl = document.getElementById("count-el")
let prevEl = document.getElementById("prev-el")
let numentries = 0

function increment() {
    count++;
    countEl.textContent = count
}

function save() {

    if (count) {
        if (numentries != 0) {
            let counter = " - " + count
            prevEl.textContent += counter
        } else {
            let counter = "" + count
            prevEl.textContent += counter
        }

        numentries++;
    }

    count = 0;
    countEl.textContent = count


}