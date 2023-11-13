# Curso-Typescript

## Typescript :

- Instalar o TS + node
  ```
  npm i -D typescript
  npm i ts-node
  ```

- Inicializar o <code>tsconfig.ts</code>
  ```
  npx tsc --init
  ```

## Path Mapping(@) :

- Instalar tsconfig-paths

  ```
  npm i -D tsconfig-paths
  ```
  <details>   
    <summary> Configurações Path Mapping(@)</summary><br>
  
    - Configurar <code>nodemon.js</code>

    ```ts
    {
      "execMap": {
        "ts": "node --require ts-node/register --require tsconfig-paths/register"
      }
    }
    ```
  
    - Configurar <code>tsconfig.ts</code>
      
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
  
- Instalar o tsc-alias:
  ```
  npm i -D tsc-alias
  ```
- Alterar script de build:
  ```ts
  "build" : "tsc && tsc-alias"
  ```
  <details>
    <summary>Configurações de build:</summary>
  
    - Configuração do <code>tsconfig.build.json</code>
  
      ```ts
      {
      "extends": "./tsconfig.json",
      "exclude": ["tests"]
      }
      ```
    </details>
