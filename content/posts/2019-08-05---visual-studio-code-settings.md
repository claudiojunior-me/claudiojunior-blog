---
title: Meu VS Code
date: '2019-08-07T18:40:32.169Z'
template: 'post'
draft: false
slug: '/posts/minha-configuracao-vscode/'
category: 'VS Code'
tags:
  - 'VS Code'
  - 'Editor'
description: 'Aprenda a configurar Visual Studio Code como editor padrão do git.'
---

O Visual Studio Code é meu principal editor de código, uso ele para escrever meus projetos Javascript,
para estudar Python, para editar arquivos de configurações, mockar arquivos JSON. Basicamente para tudo que envolve
qualquer tipo de edição, visualização ou criação de arquivos que contenham caracteres.

Como ele está a quase todo tempo aberto na minha máquina, o tempo gasto em aprender a usá-lo e customizar para
minhas necessidades, é um tempo bem investido.

Portanto, como já fiz esse investimento, vou compartilhar minhas configurações
que eu considero ideais pras minhas necessidades.

# Configurações Globais

Para começar, eu utilizo a fonte [Fira Code](https://github.com/tonsky/FiraCode), considero ela de boa legibilidade, além de ser possível o uso das
_fonts ligatures_, o que, em alguns caso, deixa o código mais agradável ao olhos:

```json
{
  "editor.fontFamily": "'Fira Code', 'Operator Mono', 'iA Writer Duospace', 'Source Code Pro', Menlo, Monaco, monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 16,
  "editor.lineHeight": 23,
  "editor.lineNumbers": "on"
}
```

Você ja deve ter utilizado bastante o minimap, principalmente como um auxílio na navegação dentro do arquivo, porém, por padrão, ele tenta renderizar todos os caracteres do arquivo, coisa que não é
necessário devido ao tamanho diminuto do, como o nome já diz, **minimap**, por isso eu deixo desativado
a renderização das letras, não faz muita diferença na economia de processamento, mas...

```json
{
  "editor.minimap.renderCharacters": false,
  "editor.minimap.maxColumn": 200,
  "editor.minimap.showSlider": "always"
}
```

Outro recurso de grande auxílio na navegação em um projeto é a arvore de pastas. Porém, depois
de ficar diversas vezes meio perdido em meio aos níves de pastas abertos, encontrei uma configuração
que acredito que diminui o caos criado pelo _folder level hell_:

```json
{
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.tree.indent": 15,
  "workbench.tree.renderIndentGuides": "always"
}
```

Uma configuração que considero um tanto quanto importante, outra vez visando
auxiliar quando se trabalhar com diversos arquivos, é alterar o titulo padrão
da janela para mostrar o caminho completo do arquivo em foco, pode parecer
bobeira, mas ajuda:

```json
{
  "window.title": "${dirty} ${activeEditorMedium}${separator}${rootName}"
}
```

Como hoje em dia praticamente todos os projetos com quais eu trabalho possuem
suas dependências gerenciadas pelo NPM, e como geralmente essas dependências
possuem suas próprias dependências, e por assim em diante, gosto de deixar
a pasta _node_modules_, não só invisível na árvore estrutural do projeto no
VS Code, como não permitir que se realize buscas dentro dessa pasta, o que
acaba deixando deixando as busca dentro de todo projeto mais rápidas:

```json
{
  "search.exclude": {
    "**/node_modules": true,
    "**/env": true,
    "**/venv": true
  },
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/**": true
  },
  "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "**/.vscode": true,
    "**/__pycache__": true,
    "**/.pytest_cache": true,
    "**/node_modules": true
  }
}
```

# Extensões que considero essenciais

- ## Prettier

O _Prettier_ é uma importante extensão para formatação e padronização
de códigos.

Ele permite definir configurações globais do VS Code, ou até mesmo uma configuração
específica por projeto, usando o arquivo `.prettiierrc` ou `prettier.json`
, geralmente localizados na raiz do projeto.

Como configuração global, voltada principalmente à códigos javascript,
acho ideal deixar algo próximo de:

```json
{
  "prettier.arrowParens": "always",
  "prettier.eslintIntegration": true,
  "prettier.jsxBracketSameLine": true,
  "prettier.jsxSingleQuote": true,
  "prettier.printWidth": 120,
  "prettier.singleQuote": true,
  "prettier.tabWidth": 2,
  "prettier.semi": false,
  "prettier.tslintIntegration": true,
  "prettier.trailingComma": "all"
}
```

Uma outra extensão, que considero de grande ajuda, principalmente para escrever
frases ou textos, é a _Code Spell Checker_, que nada mais é que um corretor
ortográfico direto no seu **VS Code**.

> Por padrão ele vem apenas a ortografia _English U.S._, mas pode extender
> instalando outras extensões de outras linguagens, como por exemplo
> a do Português do Brasil, com a _Brazilian Portuguese - Code Spell Checker_

```json
{
  "cSpell.language": "en,pt,pt_BR"
}
```
