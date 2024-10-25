// Taxas de câmbio fixas
const exchangeRates = {
    'USD': { 'USD': 1, 'EUR': 0.93, 'BRL': 5.70 },
    'EUR': { 'USD': 1.08, 'EUR': 1, 'BRL': 6.16 },
    'BRL': { 'USD': 0.18, 'EUR': 0.16, 'BRL': 1 }
};

document.getElementById('currency-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('daMoeda').value;
    const toCurrency = document.getElementById('paraMoeda').value;

    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById('result').innerText = `Resultado: ${convertedAmount.toFixed(2)} ${toCurrency}`;
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('amount').value = '';
    document.getElementById('from-currency').selectedIndex = 0;
    document.getElementById('to-currency').selectedIndex = 0;
    document.getElementById('result').innerText = '';
});

// Código Professor
// document.getElementById('currency-form').addEventListener('submit', function(event){
   // event.preventDefault();

    // Obter valores de entrada informados pelo usúario
   // const valor = parseFloat(document.getElementById('amount').value);
   // const daMoeda = document.getElementById('daMoeda').value;
   // const paraMoeda = document.getElementById('paraMoeda').value;

    // Definir taxas de câmbio fixas
   // const exchangeRates = {
       // USD: { BRL: 5.70, EUR: 0.93 },
       // BRL: { USD: 0.18, EUR: 0.16 },
       // EUR: { USD: 1.08, BRL: 6.16 }
    // };

   // Conversão simples de moedas
   // let valorConvertido;
   // if(daMoeda === paraMoeda){
      // valorConvertido = valor;
   // }else{
       // valorConvertido = valor * exchangeRates[daMoeda][paraMoeda];
   // }

   // const conversao = document.getAnimations('result');
   // conversao.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${paraMoeda} `;
// });