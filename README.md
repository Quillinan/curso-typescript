# Curso-Typescript

## Typescript

- Instalar o TS + node :
  ```
  npm i -D typescript
  npm i ts-node
  ```

- Inicializar o <code>tsconfig.ts</code> :
  ```
  npx tsc --init
  ```

## Path Mapping(@)

- Instalar tsconfig-paths :

  ```
  npm i -D tsconfig-paths
  ```
  <details>   
    <summary> Configurações Path Mapping(@)</summary><br>
  
    - Configurar <code>nodemon.js</code> :

    ```ts
    {
      "execMap": {
        "ts": "node --require ts-node/register --require tsconfig-paths/register"
      }
    }
    ```
  
    - Configurar <code>tsconfig.ts</code> :
      
    ```ts
    {
      "compilerOptions": {
        "outDir": "dist",
        "esModuleInterop": true,
        "module": "CommonJS",
        "moduleResolution": "Node",
        "baseUrl": "src",
        "paths": {
          "@/*": [
            "*"
          ]
        }
      },
      "ts-node": {
        "esm": true
      },
    }
    ```
    
  </details>
  
- Instalar o tsc-alias :
  ```
  npm i -D tsc-alias
  ```
- Alterar script de build :
  ```ts
  "build" : "tsc && tsc-alias"
  ```
  <details>
    <summary>Configurações de build</summary>
  
    - Configuração do <code>tsconfig.build.json</code> :
  
      ```ts
      {
      "extends": "./tsconfig.json",
      "exclude": ["tests"]
      }
      ```
    </details>

## ESLint

- Instalar os pacotes do eslint :
  ```
  npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
  ```

  <details>
    <summary>Configurar os arquivos</summary>
  
    - Configuração do <code>.eslintrc.js</code> :
  
      ```js
      module.exports = {
        parser: '@typescript-eslint/parser',
        extends: [
          'plugin:@typescript-eslint/recommended'
        ],
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module',
        },
        rules: {
        },
      };
      ```
  - Criar o script lint no <code>package.json</code> :
  
      ```js
      "lint": "eslint ."
      ```
    </details>

    <details>
      <summary>Configurar para rodar nos commits</summary>
    
      - Instalar a dependência :
    
        ```
        npm i lint-staged
        ```
    - Criar o arquivo <code>.lintstagedrc.js</code> :
    
        ```
        {
          "*": "npx eslint . --fix"
        }
        ```
        
    - Executar o <code>husky-init</code> : <code>npx husky-init && npm install</code>
    
    - Alterar o arquivo do pre-commit dentro da pasta <code>/.husky</code> :
    
        ```js
        #!/usr/bin/env sh
        . "$(dirname -- "$0")/_/husky.sh"
        
        npm run precommit
        ```
    
      </details>

    
