//import { restrictedGlobals } from 'eslint-restricted-globals'; // Ensure this module is installed and properly imported
import react from 'eslint-plugin-react';
//const globals = require('globals');

export default [
  {
  files: ["**/*.{js,mjs,cjs,jsx}"],
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    globals: {
      browser: "readonly",
      es2021: true,
      node: "readonly",
      worker: "readonly"
    }
  },
  plugins: {
    react,
  },
  rules: {
    'no-unused-vars':'off',
    'no-restricted-globals': ['error', 'isFinite', 'isNaN']
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
}
];