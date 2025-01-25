function togpass()
{
    const senha = document.getElementById("pass");
    const checkbox = document.getElementById("showp");
    const foto = document.getElementById("pess");
    senha.type = checkbox.checked ? "text" : "password";
    foto.src = checkbox.checked ? "imgslog/Captura de tela 2025-01-23 154233.png" : "imgslog/Captura de tela 2025-01-23 154429.png";
}
let isToggled = false; 
function togimg()
{
    const imgs = document.getElementById("img");

    if (isToggled) {
        imgs.src = "imgslog/Captura_de_tela_2025-01-25_170922-removebg-preview.png"; 
    } else {
        imgs.src = "imgslog/Captura_de_tela_2025-01-25_172745-removebg-preview.png"; 
    }

    isToggled = !isToggled; 
}

const swrt = document.querySelector(".btncolor");
swrt.addEventListener('click', function()
{
    document.body.classList.toggle('spotify')
    document.body.classList.toggle('snow')
    const className = document.body.className;
    if (className=='spotify')
    {
        this.textContent = "snow";
    }
    else
    {
        this.textContent = "spotify";
    }
});
const openWidgetButton = document.getElementById('btncad');
const closeWidgetButton = document.getElementById('closeWidget');
const widget = document.getElementById('widget');
const ok = document.getElementById('btok');

openWidgetButton.addEventListener('click', () => {
    widget.classList.remove('hidden');
    widget.classList.add('visible');
});

closeWidgetButton.addEventListener('click', () => {
    widget.classList.remove('visible');
    widget.classList.add('hidden');})

ok.addEventListener('click', () => {
    widget.classList.add('ok');
    setTimeout(() => {
        console.log("5 segundos se passaram!");
    }, 5000);
    widget.classList.remove('visible');
    widget.classList.add('hidden');})


const openesqbt = document.getElementById('btnesqu');
const closeesq = document.getElementById('close2');
const widget2 = document.getElementById('widget2');
const ok2 = document.getElementById('btok2');

openesqbt.addEventListener('click', () => {
    widget2.classList.remove('hid');
    widget2.classList.add('vis');
});

closeesq.addEventListener('click', () => {
    widget2.classList.remove('vis');
    widget2.classList.add('hid');})

ok2.addEventListener('click', () => {
    widget2.classList.add('ok');
    setTimeout(() => {
        console.log("5 segundos se passaram!");
    }, 5000);
    widget2.classList.remove('vis');
    widget2.classList.add('hid');})