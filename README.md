# Cinthiê Confeitaria — Cardápio digital (V1)

Cardápio digital responsivo criado pela **NEXORA** para a Cinthiê Confeitaria.

O projeto é **apenas um cardápio**: a pessoa entra e já encontra os produtos, sem páginas institucionais, banner de apresentação ou etapas extras.

## O que está incluído

- Visual minimalista nas cores preto e dourado.
- 14 produtos **fictícios**, divididos em 4 categorias.
- Fotos ilustrativas, com imagem alternativa quando uma foto falha.
- Busca, filtros, ordenação e detalhes do produto.
- Layout adaptado ao celular, sem emojis ou enfeites desnecessários.
- Link para o Instagram da confeitaria.

**Importante:** nomes, fotos, descrições e preços são exemplos. Não representam o cardápio real da Cinthiê. Não existe sistema de pedidos, checkout nem integração de pagamento nesta versão.

## Como abrir

Abra `index.html` diretamente no navegador. É um site estático, sem dependências de build.

## Como publicar na Vercel

Importe o repositório `vmonteiro333/cinthie-cardapio`, usando **Framework Preset: Other**. Não há comando de build. Ao enviar commits para a branch `main`, um projeto Vercel conectado a ela pode ser atualizado automaticamente.

## Como substituir pelos produtos reais

Edite o array `products` em `script.js`. Cada produto tem:

- `id`: identificador único;
- `category`: `confeitados`, `caseiros`, `sobremesas` ou `docinhos`;
- `name`: nome;
- `description`: resumo;
- `details`: informações exibidas nos detalhes;
- `price`: valor numérico, em reais;
- `image`: endereço da imagem;
- `badge`: destaque opcional.

As fotos atuais são externas, do Pexels, e demandam internet. Quando tivermos os pratos reais, o ideal é usar fotografias próprias autorizadas, otimizadas em WebP e armazenadas em `assets/`.

## Estrutura

- `index.html`: estrutura do cardápio;
- `styles.css`: visual preto e dourado e responsividade;
- `script.js`: dados temporários e interações;
- `assets/`: ícone e imagem alternativa.

Instagram: https://www.instagram.com/cinthieconfeitaria/
