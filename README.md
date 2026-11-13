# Cinthiê Confeitaria — cardápio digital (protótipo)

Protótipo inicial da NEXORA para a **Cinthiê Confeitaria**. Paleta preto e dourado, layout responsivo, busca, filtros por categoria, ordenação e janela de detalhes.

> **Atenção:** todos os produtos, descrições, preços e fotografias são **ilustrativos**; não refletem as ofertas reais da confeitaria. O Instagram é o único canal real indicado nesta versão. Nenhum pedido ou pagamento é realizado pelo site.

## Abrir e testar

Abra o arquivo `index.html` em um navegador. Não é necessário instalar Node.js nem bibliotecas. A fonte Google Fonts e as fotos de exemplo necessitam de conexão com a internet; existe uma ilustração alternativa caso uma foto não carregue.

## Publicar no Vercel

1. Crie um novo repositório GitHub chamado `cinthie-cardapio` (ou outro nome desejado).
2. Envie `index.html`, `styles.css`, `script.js` e a pasta `assets/` para a raiz do repositório.
3. No Vercel, clique em **Add New > Project**, importe esse repositório.
4. Selecione Framework Preset **Other**, Build Command em branco, e Output Directory `.` (raiz) ou configuração padrão para site estático.
5. Publique. Não há secrets, variáveis de ambiente ou scripts de build.

## Trocar os exemplos pelos produtos reais

Abra `script.js`, localize a constante `products`. Cada objeto contém:

- `id`: identificador único sem espaços;
- `category`: `confeitados`, `caseiros`, `sobremesas` ou `docinhos`;
- `name`: nome do produto;
- `description` / `details`: textos de apresentação;
- `price`: preço em reais, número sem `R$` (ex.: `39.9`);
- `image`: URL da foto (ou caminho como `./assets/bolo-cenoura.webp`);
- `badge`: selo opcional, ou `null`.

Quando os dados reais entrarem, procure e ajuste os avisos `demonstrativo`, `ilustrativo` e o booleano `DEMO_MODE`. O texto da home e as chamadas também precisam de aprovação da cliente antes de se tornarem afirmações oficiais.

### Fotografia

Esta prévia utiliza **links externos para fotos de amostra do Pexels**, sob a licença disponibilizada pela plataforma. Não são fotos dos produtos da Cinthiê. Ao receber os arquivos originais da confeitaria, recomenda-se otimizar em WebP e colocar na pasta `assets/` para maior confiabilidade.

## Arquivos

```
index.html              página principal
styles.css              visual preto/dourado e responsividade
script.js               dados fictícios, categorias e interações
assets/favicon.svg      ícone da aba
assets/bolo-ilustrativo.svg  imagem alternativa
```

**Cliente:** Cinthiê Confeitaria — https://www.instagram.com/cinthieconfeitaria/

**Desenvolvimento:** NEXORA.