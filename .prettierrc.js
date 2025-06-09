module.exports = {
  endOfLine: 'lf', // Usa salto de línea LF (Line Feed) para compatibilidad con sistemas Unix
  arrowParens: 'always', // Mantiene los paréntesis en funciones de flecha (más claridad en TS)
  bracketSpacing: true, // Agrega espacios dentro de los corchetes `{ foo: bar }`
  singleQuote: true, // Usa comillas simples
  trailingComma: 'all', // Agrega comas finales (útil para diffs más limpios)
  semi: true, // Mantiene los punto y coma (ayuda en TS para evitar errores inesperados)
  printWidth: 100, // Establece el límite de ancho de línea (evita líneas excesivamente largas)
  tabWidth: 2, // Define la cantidad de espacios por tabulación
  useTabs: false, // Usa espacios en lugar de tabulaciones
  overrides: [
    {
      files: '*.tsx',
      options: {
        bracketSameLine: true, // Mantiene los corchetes en la misma línea en JSX/TSX
      },
    },
  ],
};
