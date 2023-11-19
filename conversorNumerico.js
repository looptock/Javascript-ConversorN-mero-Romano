class ConversorNumerico {
    static #valoresRomanos = [
      { valor: 1000, simbolo: 'M' },
      { valor: 900, simbolo: 'CM' },
      { valor: 500, simbolo: 'D' },
      { valor: 400, simbolo: 'CD' },
      { valor: 100, simbolo: 'C' },
      { valor: 90, simbolo: 'XC' },
      { valor: 50, simbolo: 'L' },
      { valor: 40, simbolo: 'XL' },
      { valor: 10, simbolo: 'X' },
      { valor: 9, simbolo: 'IX' },
      { valor: 5, simbolo: 'V' },
      { valor: 4, simbolo: 'IV' },
      { valor: 1, simbolo: 'I' },
    ];
  
    static #validarNumero(numero) {
      if (typeof numero !== 'number' || numero < 1 || numero > 4999) {
        throw new Error('O número deve ser um inteiro entre 1 e 4999.');
      }
    }
  
    static #validarRomano(romano) {
      if (!/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(romano)) {
        throw new Error('A string romana fornecida é inválida.');
      }
    }
  
    static converterParaRomano(numero) {
      this.#validarNumero(numero);
  
      let resultado = '';
      for (const { valor, simbolo } of this.#valoresRomanos) {
        while (numero >= valor) {
          resultado += simbolo;
          numero -= valor;
        }
      }
  
      return resultado;
    }
  
    static converterParaArabico(romano) {
      this.#validarRomano(romano);
  
      let resultado = 0;
      for (const { valor, simbolo } of this.#valoresRomanos) {
        while (romano.indexOf(simbolo) === 0) {
          resultado += valor;
          romano = romano.replace(simbolo, '');
        }
      }
  
      return resultado;
    }
  }

    // const p1 = 4999
    // console.log(ConversorNumerico.converterParaRomano(p1));
  // Exportando a classe para ser usada em outros módulos
  module.exports = { ConversorNumerico };
  