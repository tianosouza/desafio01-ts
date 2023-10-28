import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'


/* Contas normais */

console.log('Contas normais')
const peopleAccount: PeopleAccount = new PeopleAccount(10 ,'Cristiano', 1)
peopleAccount.getName()
peopleAccount.getAccountNumber()
peopleAccount.getBalance()
peopleAccount.deposit(1000)
peopleAccount.getBalance()
peopleAccount.withdraw(10)
peopleAccount.getBalance()
peopleAccount.deposit(1000)
peopleAccount.getBalance()
console.log(peopleAccount)

/* Contas do banco */

console.log('Contas do banco')
const companyAccount: CompanyAccount = new CompanyAccount('DIO-Bank', 20)
companyAccount.getName()
companyAccount.getAccountNumber()
companyAccount.getBalance()
companyAccount.deposit(10)
companyAccount.getBalance()
companyAccount.getLoan(1000)
companyAccount.getBalance()
companyAccount.withdraw(50)
companyAccount.getBalance()
console.log(companyAccount)

/* Contas especiais */

console.log('Contas especiais')

const specialAccount: SpecialAccount = new SpecialAccount('Ronaldo', 5)
specialAccount.getName()
specialAccount.getAccountNumber()
specialAccount.getBalance()
specialAccount.deposit(3000)
specialAccount.getBalance()
specialAccount.withdraw(2000)
specialAccount.getBalance()
console.log(specialAccount)


