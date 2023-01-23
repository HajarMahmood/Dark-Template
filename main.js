// Start Achievements
let nums = document.querySelectorAll(".achiev .item .number");
let section = document.querySelector(".achiev");
let started = false; // Function started ? No

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            nums.forEach((el) => startCount(el))
        }
        started = true;
    }
}
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 1000 / goal)
}
// End Achievements

