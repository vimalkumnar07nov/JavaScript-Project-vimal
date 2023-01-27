
const tempLoad = () => {
    const thermo = document.getElementById('thermo');
    const inner = document.querySelector('.inner');

    thermo.innerHTML = '<i class="fa-solid fa-temperature-empty"></i>';
    thermo.style.color = 'green';
    inner.style.backgroundColor = 'white';

    setTimeout(() => {
        thermo.innerHTML = '<i class="fa-solid fa-temperature-quarter"></i>';
        thermo.style.color = 'orange';
        inner.style.backgroundColor = 'lightseagreen';
    },1000)
    setTimeout(() => {
        thermo.innerHTML = '<i class="fa-solid fa-temperature-half"></i>';
        thermo.style.color = 'yellow';
        inner.style.backgroundColor = 'red';
    }, 2000)
    setTimeout(() => {
        thermo.innerHTML = '<i class="fa-solid fa-temperature-three-quarters"></i>';
        thermo.style.color = 'red';
        inner.style.backgroundColor = 'pink';
    },3000)
    setTimeout(() => {
        thermo.innerHTML = '<i class="fa-solid fa-temperature-full"></i>';
        thermo.style.color = 'cyan';
        inner.style.backgroundColor = 'violet';
    },4000)
    
}
setInterval(tempLoad,5000)
tempLoad();
