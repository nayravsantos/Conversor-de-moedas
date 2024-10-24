// Taxas de câmbio fixas
const exchangeRates = {
    'USD': { 'USD': 1, 'EUR': 0.85, 'BRL': 5.30 },
    'EUR': { 'USD': 1.18, 'EUR': 1, 'BRL': 6.24 },
    'BRL': { 'USD': 0.19, 'EUR': 0.16, 'BRL': 1 }
};

document.getElementById('currency-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

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
document.getElementById('currency-form').addEventListener('submit', function(event){
    
});