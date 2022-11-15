const inputbase = document.querySelector('#Baseimponible');
let inputIVA = document.querySelector('#IVA');
let inputTotal =document.querySelector('#Total');
const tipoIva = 0.21;
function Calcular() {
    const base = Number(inputbase.value);
    const IVA = base * tipoIva;
    inputIVA.value = IVA;
    const total = base + IVA;
    inputTotal.value = total;
}