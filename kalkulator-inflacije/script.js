function inflationCalculator() {
    let inflationRate = document.querySelector('#inflationRate').value;
    let money = document.querySelector('#money').value;
    let years = document.querySelector('#years').value;

    inflationRate = parseFloat(inflationRate);
    money = parseFloat(money);
    years = parseInt(years, 10); 

    
    let worth = money;

    for(let i = 0; i < years; i++){
        worth += worth * (inflationRate / 100);
    }

    worth = worth.toFixed(2);

    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Danasnjih ${money} vrijedi isto kao ${worth} za ${years} godina.`;

    document.querySelector('.container').appendChild(newElement);
}
