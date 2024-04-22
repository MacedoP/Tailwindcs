# Tailwindcs
 Curso tailwindcs

 # Comandos para instalacao do tailwindcs

 ## Passos a seguir

 * npx tailwindcss -o tailwind.css [este comando nos permitiu exportar alguns codigo css do tailwind para a nossa maquina]
 * npm init -y [comando para gerar o nosso packege.json]
 * npm install -D tailwindcss [comando para instalar o tailwindcss]
 * npx tailwindcss init [comando para inicializar o tailwindcs, gera o packge de configuracao]

 ## Importar componentes
@tailwind base;
@tailwind components;
@tailwind utilities;

### Para se usar os componentes acima primeiro temo de executar o seguinte comando
[npx tailwindcss -i 'directorio onde esta a teu css' -o ./dist/tailwind.css]


* {
  "name": "aulas",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  "curso": "npx tailwindcss -i ../style/style.css -o ../style/output.css --watch" isto aqui indica a pasta onde seram gerado os nosso css
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "tailwindcss": "^3.4.3"
  }
}



