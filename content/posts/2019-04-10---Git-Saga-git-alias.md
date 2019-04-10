---
title: A Saga Git - git alias
date: "2019-04-10T18:40:32.169Z"
template: "post"
draft: false
slug: "/posts/a-saga-git-git-alias/"
category: "GIT"
tags:
  - "GIT"
  - "Saga Git"
description: "Aprenda a usar esse recurso util porém pouco conhecido do git."
---

O `alias` do `git` surgiu, assim como grande maioria dos atalhos, como uma forma de facilitar a vida ao digitar aquele comando que se usa muito durante o dia-a-dia.

Ele nos permite atribuir determinado comando ou sequência de comandos a um comando personalizado e geralmente com uma escrita mais fácil e simples de se lembrar.

![Photo by Stefan Steinbauer on Unsplash](/media/posts/saga_git/stefan-steinbauer-452213-unsplash.jpg)

Para definirmos um novo `alias` usamos o comando:
```bash
git config --global alias.comando_personalizado "comando que irá rodar quando chamarmos pelo alias"
```

E para executarmos, bastar chama-lo como se fosse um simples comando do próprio `git`:
```bash
git comando_personalizado
```

Com isso ele se torna uma ferramenta de grande ajuda no nosso cotidiano, por exemplo:

- Para enviarmos uma branch para a origin:
```bash
git config --global alias.pushs "push origin"
git pushs nome_da_branch
```

- Para deletarmos localmente uma branch:
```bash
git config --global alias.rmbranch "branch -d"
git rmbranch nome_da_branch
```

- Criar uma nova branch localmente:
```bash
git config --global alias.nbranch "checkout -b"
git nbranch nome_da_branch
```

- Unstage geral de todas as alterações:
```bash
git config --global alias.unstage 'reset HEAD .'
git unstage
```

- Mostrar última alteração na branch:
```bash
git config --global alias.last 'log -1 HEAD'
git last
```

- Mostrar um log formatado:
```bash
git config --global alias.lg 'log --pretty=format:"%h - %an, %ar : %s"'
git lg
```

- Mostrar uma árvore de logs de todas as branchs:
```bash
git config --global alias.graphiclog 'log --graph --abbrev-commit --decorate --all --format=format:"%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(dim white) - %an%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n %C(white)%s%C(reset)"'
git graphiclog
```

Esses são só alguns exemplos do que pode ser feito usando o `alias`, ele se torna interessante pois pode ser adequado a sua necessidade.

Breve mais dicas de Git.

---

Vlw e até a próxima!!