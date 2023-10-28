# Desenvolvendo o Dio Bank
desenvolvido por [Nathally Souza](https://github.com/nathyts)

#### Projeto desenvolvido com conceitos básicos de typescript

### Tecnologias
- Typescript

### Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependeências
    
    npm install

3 - Execute o projeto

    npm run dev

#### Desafios
[ ] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
  - Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
  - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

    **Resposta**
    - *deposite*: Usei uma condição para avaliar o status da conta onde caso o status fosse verdadeiro, a conta esta autorizado a depositar, caso contrário
    irá retornar conta inesitente.
    - *withdraw / balance*: Usei uma condição que avalia o status e o saldo com o valor solicitado para saque, caso toda essa condição fosse verdadeira o saque seria autorizado, caso não retornaria saldo insuficiênte.
    
[ ] Implementar o método de empréstimo (getLoan) na classe CompanyAccount
  - Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
  - Apenas contas com o status true podem fazer empréstimo

    **Reposta**
    - Usei uma condição para avaliar o status atraves de uma função pois o status é um metodo privado de DioAccount , com retorno booleano.

[ ] Criar um novo tipo de conta a partir da DioAccount
  - Esta conta não deve receber novos atributos
  - Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)

  **Resposta**
  - A classe que criava um novo objeto conta foi a SpecialAccount , especial pois foi atruida a essa classe um metodo deposit que acrescentava 10 em cada vez que a função do metodo da classe era chamado.

[ ] Todos os atributos de qualquer conta devem ser privados

**ok**

[ ] Os atributos name e accountNumber não podem ser alterados internamente ou externamente

**ok**

[ ] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.

**ok**