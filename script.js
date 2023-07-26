var graph = document.querySelector(".graph")
window.onload = function () {
    setTimeout(() => {
        var col = document.querySelectorAll(".graph .col span:nth-child(2)")
        col.forEach(col => {
            col.addEventListener("mouseenter", _ => {
                col.previousElementSibling.style.opacity = 1
                // console.log(col.previousElementSibling)
            })
            col.addEventListener("mouseleave", _ => {
                col.previousElementSibling.style.opacity = 0
            })
        })
    }, 50);
}

fetch("./data.json")
    .then(response => response.json())
    .then(data => graph.innerHTML = data.map(ele => `<div class="col">
    <span class="active">$${ele.amount}</span>
    <span class="${ele.day}"></span>
    <span>${ele.day}</span>
  </div>`).join(' '))

