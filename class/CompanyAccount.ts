import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanAmount: number): void => {
    if (this.getValidateStatus() === true) {
     //return  `Empréstimo concedido! O saldo atual da conta é: ${this.balance += loanAmount}`;
     console.log(`Empréstimo concedido! O saldo atual da conta é: ${this.balance += loanAmount}`);
    } else {
      //return `Desculpe, sua conta está inativa e não pode fazer empréstimos.`
      console.log("Desculpe, sua conta está inativa e não pode fazer empréstimos.");
    }
  }
    
}


