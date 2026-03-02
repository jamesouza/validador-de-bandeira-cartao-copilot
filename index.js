// index.js
// Projeto: Identificador de Bandeira de Cartão de Crédito
// Autor: Jame
// Desafio DIO - Utilizando GitHub Copilot

function identificarBandeira(numeroCartao) {
  const numero = numeroCartao.toString();

  // Visa: começa com 4
  if (/^4/.test(numero)) {
    return "Visa";
  }

  // MasterCard: começa com 51–55 ou 2221–2720
  if (/^5[1-5]/.test(numero)) {
    return "MasterCard";
  }
  if (/^2(2[2-9][1-9]|2[3-9][0-9]{2}|[3-6][0-9]{3}|7[01][0-9]{2}|720)/.test(numero)) {
    return "MasterCard";
  }

  // American Express: começa com 34 ou 37
  if (/^3[47]/.test(numero)) {
    return "American Express";
  }

  // Discover: começa com 6011, 622126–622925, 644–649 ou 65
  if (/^6011/.test(numero)) {
    return "Discover";
  }
  if (/^65/.test(numero)) {
    return "Discover";
  }
  if (/^64[4-9]/.test(numero)) {
    return "Discover";
  }
  if (/^622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5])/.test(numero)) {
    return "Discover";
  }

  return "Bandeira não identificada";
}

// Exemplos de uso
console.log(identificarBandeira("4111111111111111")); // Visa
console.log(identificarBandeira("5500000000000004")); // MasterCard
console.log(identificarBandeira("2221000000000009")); // MasterCard
console.log(identificarBandeira("340000000000009"));  // American Express
console.log(identificarBandeira("6011000000000004")); // Discover
console.log(identificarBandeira("6221260000000000")); // Discover
console.log(identificarBandeira("1234567890123456")); // Bandeira não identificada
