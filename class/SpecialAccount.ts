import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (addBalance:number): void => {
        if(this.getValidateStatus()){
            if (addBalance) {
                console.log(`Você deposito: ${addBalance}, e ganhou cash back de 10! Novo saldo e ${addBalance+10}`)  
                addBalance += 10
                //console.log('Voce depositou: ' + addBalance + ' e novo saldo é ' + addBalance + 10)
                
            }
            this.balance += addBalance
        }
    }
}
