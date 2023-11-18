
const toggle = document.getElementsByClassName('toggle')[0];
const link = document.getElementsByClassName('list')[0];

toggle.addEventListener("click", () =>
{
    link.classList.toggle('active');
});