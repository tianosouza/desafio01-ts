export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getAccountNumber = (): void => {
    
    console.log('O número da sua conta é ' + this.accountNumber)
  }  

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso! Novo nome: ' + name)
  } 

  getName = (): void => {
    console.log(this.name) 
  }

  deposit = (addBalance:number): void => {
    if(this.validateStatus()){
      this.balance += addBalance
      console.log('Voce depositou: ' + addBalance)
    } else 
    console.log('Conta inesistente!')
  }

  withdraw = (toWithdraw:number): void => {
    if(this.status && this.balance > toWithdraw) {
      console.log('Você sacou: ' + toWithdraw)
    } else {
      console.log('Saldo insuficiente')
    }
    this.balance -= toWithdraw
  }

  getBalance = (): void => {
    console.log('Seu saldo é: ' + this.balance)
  }

  setBalance = (): void => {
    this.balance = 0
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  getValidateStatus = (): boolean => {
    return this.validateStatus()
  }
}
