const { ConversorNumerico } = require('./conversorNumerico');

test('converterParaRomano converte corretamente', () => {
  expect(ConversorNumerico.converterParaRomano(1)).toBe('I');
  expect(ConversorNumerico.converterParaRomano(9)).toBe('IX');
  expect(ConversorNumerico.converterParaRomano(1066)).toBe('MLXVI');
  expect(ConversorNumerico.converterParaRomano(1989)).toBe('MCMLXXXIX');
});

test('lança um erro para números fora da faixa em converterParaRomano', () => {
  expect(() => {
    ConversorNumerico.converterParaRomano(0);
  }).toThrow('O número deve ser um inteiro entre 1 e 4999.');

  expect(() => {
    ConversorNumerico.converterParaRomano(5000);
  }).toThrow('O número deve ser um inteiro entre 1 e 4999.');

  expect(() => {
    ConversorNumerico.converterParaRomano('ABC');
  }).toThrow('O número deve ser um inteiro entre 1 e 4999.');
});

test('converterParaArabico converte corretamente', () => {
  expect(ConversorNumerico.converterParaArabico('I')).toBe(1);
  expect(ConversorNumerico.converterParaArabico('IX')).toBe(9);
  expect(ConversorNumerico.converterParaArabico('MLXVI')).toBe(1066);
  expect(ConversorNumerico.converterParaArabico('MCMLXXXIX')).toBe(1989);
});

test('lança um erro para strings romanas inválidas em converterParaArabico', () => {
  expect(() => {
    ConversorNumerico.converterParaArabico('ABC');
  }).toThrow('A string romana fornecida é inválida.');
});
