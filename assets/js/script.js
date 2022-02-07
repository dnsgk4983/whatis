const visual = document.querySelector('.wadiz__visual');
const visualLabel = document.querySelector('.wadiz__visual__label');
const visualTitle = document.querySelector('.wadiz__visual__title');
let zoom = 1;
let base = 1;
const speed = 0.01;

console.log(visual.clientHeight);
document.addEventListener(`wheel`, (e) => {
    let value = window.scrollY;

    console.log(e.deltaY);
    if (value > (visual.clientHeight) / 3) {
        visualLabel.style.opacity = `${base -= (speed * 3)}`;
    } else if (value > ((visual.clientHeight) / 3) * 2) {
        visualLabel.style.opacity = `0.5`;
    } else {
        visualLabel.style.opacity = `${base += (speed * 3)}`;
    }
})