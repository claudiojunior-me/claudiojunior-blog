---
title: 26 Perguntas e respostas sobre React - Parte 1
date: "2018-10-24T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/26-perguntas-e-respostas-sobre-react-parte-1/"
category: "React"
tags:
  - "React"
description: "Ou: 26 maneiras de finalmente esclarecer React e Redux"
---

![React / Redux](/media/0_1p4U99DAhsOHqX-m.jpg)

Originalmente essas perguntas vieram de um tópico de ["26 questões para entrevistas de React / Redux"](https://dev.to/aershov24/26-reactredux-interview-questions-you-should-know-in-2018-41je), porém, lendo o artigo, as perguntas e respostas ajudam até mesmo a compreender o ecossistema, por isso resolvi traduzir e disponibiliza-lás:

### 1. O que é React?

React é uma biblioteca JavaScript open-source criada pelo Facebook para a construção de UIs complexas e interativas tanto na Web quanto em aplicações mobile. Como o core do React é a construção de componentes de UI, ele se refere apenas ao "V" (View) na arquitetura "MVC".

### 2. O que é Redux?

Redux é um container de estado para apps JavaScript baseado no padrão Flux. O redux pode ser utilizado juntamente com o React, ou com qualquer outra biblioteca de UI.

### 3. O que é virtual DOM?

É uma representação do DOM direto na memória. É o passo entre a função de render e a apresentação dos elementos na tela.

### 4. O que é Flux?

Flux é um paradigma usado para substituir o tradicional padrão MVC. Não é um framework ou biblioteca, mas é uma nova abordagem de arquitetura que complementa o React e o conceito de Fluxo de Dados Unidirecional.

![Dispatcher, stores e views](/media/flux.png)

### 5. Quais as vantagens de utilizar React?

1. Aumento de performance da aplicação com o uso do virtual DOM
2. JSX torna o código fácil de ler e escrever
3. Pode ser renderizado no lado do cliente ou do servidor
4. Fácil de integrar com outros frameworks já que o React é apenas um biblioteca
5. Fácil de escrever Testes Cases de UI e de integração com ferramentas como o JEST

### 6. Quais os principais recursos do React?

- O uso do **Virtual DOM** ao invés do Real DOM já que as manipulações usando o Real DOM são bastante custosas em termos de performance
- Suporta **renderização pelo servidor**
- Fluxo de dados **unidirecional**
- Utiliza componentes de UI **reutlizáveis** para desenvolver a view

### 7. Qual a diferença entre um componente de apresentação e um componente container?

- **Componente de apresentação _(Presentational Components)_** geralmente são responsáveis pela _apresentação_. Eles geralmente recebem dados e callbacks exclusivamente via props. Esses componentes raramente possuem estado, mas quando possuem, se preocupam com o estado da UI e não o estado dos dados.

- **Componente Container** geralmente são responsáveis em _como as coisas funcionam_. Esses componentes provê os dados e comportamento aos componentes de apresentação ou outros containers. Eles são responsáveis pelas chamadas a actions do paradigma Flux e provê esses callbacks para os componentes de apresentação.

### 8. Como eventos são tratados no React?

Com o propósito de resolver problemas de compatibilidade entre browsers, o manipuladores de eventos do React são passados como instâncias do _SyntheticEvent_, que é o meio do React contornar os eventos nativos dos browsers. O _SyntheticEvent_ possui a mesma interface que os eventos nativos do browser, com a vantagem de ter funcionamento idêntico em todos os browsers.
O interessante é que o React não anexa eventos aos nós filhos propriamente dito. Ele escuta por todos eventos a um nível mais alto usando um único listener. Isso é bom pra performance e significa que o React não precisa se preocupar em acompanhar os listeners dos eventos quando atualiza o DOM.

### 9. O que é _state_ no React?

**_State_** de um componente é um objeto que contém algumas informações que podem alterar durante o ciclo de vida do componente. Devemos sempre tentar manter o _state_ o mais simples possível, e diminuir a quantidade de componentes com estado (**stateful components**).

Ex. de componente com _state_:

```javascript
class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Bem vindo ao React',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
```

### 10. Qual a diferença entre _state_ e _props_?

Ambos são objetos JavaScript além de que ambos também armazenam informações que influenciam na saída da renderização de um componente. Mas existe diferenças funcionais entre eles:

- _Props_ é repassado ao componente de maneira similar a parâmetros de uma função.
- _State_ é gerenciado pelo próprio componente, de maneira similar a uma variável.

### 11. Quais são as limitações do React?

- React é uma biblioteca, não um framework
- Existe uma curva de aprendizagem para quem começa, principalmente que é novo em desenvolvimento web
- Integrar o React há um framework tradicionalmente MVC requer demasiadas configurações
- A complexidade do código aumenta com o uso de templates _inline_ e JSX
- Pequenos componentes em excesso pode levar a um excesso de engenharia

### 12. Qual a diferença entre _Element_ e _Component_?

Explicando de uma maneira simples, um _element_ descreve o que será representado na tela, é a representação da UI.
O _Component_ é uma função ou classe onde pode opcionalmente aceitar _inputs_ e retornar um _element_.

### 13. Qual a diferença entre React e AngularJS (1.x)?

O AngularJS segue uma abordagem de extender a marcação HTML e injetar diversos construtores (_ex. Directives, Controllers e Service_) em tempo de execução. Essas abstrações são certamente úteis em alguns casos, mas elas pode causar um custo na flexibilidade da arquitetura da aplicação.
Já no lado contrário, o React foca exclusivamente na criação de componentes e se aplica pouco (quando aplica) na arquitetura da aplicação. Isso permite a flexibilidade na escolha da arquitetura que a aplicação irá seguir.

### 14. Quais as desvantagens do Redux em relação ao Flux?

Ao invés de abordarmos as desvantagens, vejamos alguns poréns do Redux em relação ao Flux:

1. **Você precisa aprender a evitar mutações:** Flux é independente em relação a mutação de dados, já o Redux, não é projetado para mutações.
2. **Você precisa escolher com cuidados seus pacotes:** Enquanto o Flux não tenta resolver problemas como persistência ou formulários, o Redux possui diversos pontos de extensão como middleware e stores, e acabou se tornando um ecossistema jovem e rico. Isso significa que a maioria dos seus pacotes são ideias novas e ainda não muito difundidas no mercado.
3. **Ainda não existe uma integração padrão para o Flow:** Flux permite você fazer verificações por tipo estático, enquanto o Redux ainda não possui esse suporte.

### 15. O que são os _error boundaries_?

_Error boundaries (ou limite de erros)_ são componentes React que capturam os erros de JavaScript em qualquer componente abaixo dele na árvore de componentes, registra esses erros e exibe uma UI de fallback em vez da árvore de componentes com erro.

Ex. de componente de captura de erros:

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

Depois basta usar como um componente regular

```jsx
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

---

Espero que tenha esclarecido algumas dúvidas e que esses compilado de perguntas e repostas possa ter auxiliado nos estudos de React.
Em breve a parte 2!!

Vlw!
