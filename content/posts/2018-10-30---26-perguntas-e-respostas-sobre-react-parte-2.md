---
title: 26 Perguntas e respostas sobre React - Parte 2
date: "2018-10-30T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/26-perguntas-e-respostas-sobre-react-parte-2/"
category: "React"
tags:
  - "React"
description: "Ou: 26 maneiras de finalmente esclarecer React e Redux"
---

![Meetup](/media/cover.jpg)

Dando continuidade a série de perguntas e repostas sobre o ecossistema React / Redux!!

> Se perdeu, veja [aqui](./posts/26-perguntas-e-respostas-sobre-react-parte-1/) a Parte 1.

### 16. Porque o ReactJS usa _className_ ao invés do atributo _class_?

Não se pode usar o atributo _class_ porque é uma _keyword (palavra chave)_ do javascript e o JSX é uma extensão do javascript.

### 17. É possível acessar o store do Redux fora de um componente React?

Sim. Basta exportar o store a partir do modulo onde é criado com o _createStore_.

```javascript
store = createStore(myReducer);
export default store;
```

### 18. O que é o JSX?

Quando o Facebook distribuiu o primeiro release do React para o mundo, ele também introduziu um novo dialeto do JavaScript chamado JSX que incorpora template HTML em código JavaScript.
O código JSX em si não pode ser interpretado pelo browser, ele precisa ser transpilado em JavaScript tradicional usando ferramentas como Babel ou Webpack.

### 19. Por que não devemos atualizar o _state_ diretamente?

Se tentarmos atualizar o _state_ diretamente ele não irá chamar o método _render_ do componente, assim não teremos uma _view_ atualizada.

```javascript
// Errado
this.state.message = 'Hello World';
```

Ao invés, devemos usar o método _setState()_. Ele agenda uma atualização do objeto _state_ do componente. Quando o _state_ alterar, o componente irá renderizar novamente.

```javascript
// Correto
this.setState({ message: 'Hello World' });
```

> **Nota:** O único lugar onde podemos atribuir diretamente o _state_ é no construtor.

```javascript
class Banner extend Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello World',
    };
  }
}
```

### 20. Qual o diferença entre as fases de ciclo de vida de um componente React?

Existe 4 diferentes fases de ciclo de vida de um componente:

1. **Inicialização:** Nessa fase o React prepara o componente para receber seu _state_ inicial, além das _props_ padrão.

2. **Montagem:** O componente está pronto pra ser montado no DOM. Essa fase é coberta pelos métodos _componentWillMount_ e _componentDidMount_.

3. **Atualização:** Nessa fase, o componente é atualizado de duas maneiras, enviando os novos _props_ e atualizando seu _state_. Essa fase é coberta pelos métodos _shouldComponentUpdate_, _componentWillUpdate_ e _componentDidUpdate_.

4. **Desmontagem:** Nessa fase o componente é retirado do DOM. Essa fase é coberta pelo método _componentWillUnmount_.

![fases do react](/media/phases.png)

### 21. Descreva Flux vs MVC?

O padrão tradicional MVC funciona separando os dados (_Model_), UI (_View_) e lógica (_Controller_), porém a arquitetura MVC frequentemente encontra 2 principais problemas:

- **Fluxo de dados complicado:** Uma cascata de atualizações que ocorre através das _views_ muitas vezes ocasionam em diversos eventos, o que torna complicado a depuração.

- **Falta de integridade de dados:** Os dados do modelo podem ser transformados de qualquer lugar, gerando resultados imprevisíveis na interface do usuário.

Com o padrão _Flux_, UI complexas não sofrem de atualizações em cascata, cada componente é capaz de reconstruir seu _state_ baseado nos dados fornecidos pelo _store_. O Flux também fornece integridade de dados restringindo o acesso direto do componente aos dados compartilhados.

### 22. Por que você deveria usar o _forceUpdate_ em um componente React?

Em razão de forçar uma nova renderização se existir alguma condição que o React não é possível de detectar e que requer uma atualização da UI. Normalmente não é necessário trabalhar com essa chamada.

### 23. O que há de errado com esse código?

```javascript
this.setState((prevState, props) => {
  return {
    streak: prevState.streak + props.count,
  };
});
```

**Resposta:**

Nada! Essa é uma maneira usada raramente e pouco conhecida. Você pode enviar uma função como parâmetro ao _setState_ que recebe o _state_ anterior (_prevState_) e os _props_ recebidos pelo componente e retorna um novo _state_. Essa é uma maneira recomendada de alterar o _state_ quando possui alguma condição baseada no _state_ anterior.

### 24. Qual a diferença entre um _component_ controlado e um incontrolado?

- Um _component_ controlado é um componente onde o React está no controle e existe apenas uma fonte verdadeira de dados, o _props_ ou _state_ do componente.

- Um _component_ incontrolado é um componente onde seu comportamento é dependentes de dados do DOM, ao invés de _props_ ou _state_.

### 25. Explique a diferença de abordagens entre o Flux e AngularJS (1.x)

No AngularJS, componentes de UI geralmente possuem um _$scope_ interno que armazena os dados. Esses dados podem ser alterados diretamente a partir da UI ou qualquer função que tenha acesso ao _$scope_.

Em contraste ao padrão do Flux que encoraja o uso de dados imutáveis. Como o _store_ é a autoridade central de todos dados, todas mutações precisam ocorrer no _store_. O risco de poluição de dados é bastante reduzido.

### 26. O que significa 'efeitos colaterais' no React?

Um efeito colateral é qualquer evento que afete também algo fora do atual escopo onde a função está sendo executada. Isso pode ser, um requisição na rede, onde o código comunica com um terceiro e acaba gerando logs para gravação, salvamento de cache e todo tipo de efeito fora da função.

Existem outros tipos mais simples de efeitos colaterais, como por exemplo, adicionar um novo item em um array que é usado como parâmetro de uma função, isso é um efeito colateral. Funções que executam sem efeitos colaterais são chamadas de "puras": elas recebem os argumentos e retornam um valor. Isso torna a função fácil e simples de testar.

Funções puras sempre retornam o mesmo valor dado um parâmetro. Mas isso não significa que todas funções impuras possuem colaterais.

---

Espero que tenha esclarecido algumas dúvidas e que esse pequeno compilado de perguntas e repostas possa ter lhe auxiliado de alguma maneira.

Vlw!
