import { createStore, compose, applyMiddleware } from 'redux';

/*
  compose é um utilitário do redux que permite passar aprimoradores para a Store.
  Neste caso, a constante enhancer é criada para caso esteja em ambiente dev injetamos o console.tron
  Caso não, passamos apenas os middlewares usando operador de sprad (...) uma vez que, recebemos um array de middlewares e assim criamos a store.
*/

export default (reducers, middlewares) => {
  // createEnhancer é a integração do redux com o reactotron
  const enhancer = __DEV__
    ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

  /*
    Cria uma Redux Store que contém a árvore de estados completa da aplicação (só deve haver uma única store na aplicação).
    Argumentos:
    #reducer (função): estados atual da aplicação a ser manipulada.
    #enhancer (Função) : o aprimorador da loja (opcional). Você pode especificá-lo para aprimorar a loja com recursos de
    terceiros, como middleware. O único aprimorador de loja que acompanha o Redux é applyMiddleware().
  */
  return createStore(reducers, enhancer);
};
