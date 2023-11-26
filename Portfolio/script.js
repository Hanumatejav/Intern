const toggle = document.getElementsByClassName('toggle')[0];
const link = document.getElementsByClassName('links')[0];

toggle.addEventListener("click", () =>
{
    link.classList.toggle('active');
});