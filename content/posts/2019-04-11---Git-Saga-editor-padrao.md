---
title: A Saga Git - Editor Padrão
date: '2019-04-11T18:40:32.169Z'
template: 'post'
draft: true
slug: '/posts/a-saga-git-editor-padrao/'
category: 'GIT'
tags:
  - 'GIT'
  - 'Saga Git'
description: 'Aprenda a configurar Visual Studio Code como editor padrão do git.'
---

O `git` nos permite configurar um editor padrão para tratarmos conflitos de merge dentre outras coisas. Para definir-mos o VS Code como editor padrão do git, basta alterarmos sua configuração:

```bash
git config --global core.editor "code --wait"
```

![](/media/posts/saga_git/conflict_section.png)

Assim, quando precisarmos de um editor, quem vai aparecer é o VS Code, como nos casos de _rebase_, _merge_, _commit_, _add -p_, etc.

Além disso, podemos alterar também diretamente o arquivo de configuração do git para que seja usado o VS Code como editor padrão de merges, ao invés do Vim, por exemplo. Para isso basta abrirmos as configurações no modo de edição com `git config --global -e` e adicionarmos as linhas:

```
[merge]
	tool = vscode
[mergetool "vscode"]
	cmd = code --wait $MERGED
[diff]
	tool = vscode
[difftool "vscode"]
	cmd = code --wait --diff
```
