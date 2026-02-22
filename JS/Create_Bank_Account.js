function createBankAccount(){
    let balance = 0
    let transcations = [];
    return {
        deposit(amount){
            if (amount <= 0){
                return "Depositive amount not valid or it must be positive"
            }
            balance+=amount;
            transcations.push({type:"deposite",amount})
            return `Deposited ${amount}`
        }
        withdraw(amount){
            if (withdraw <= 0){
                return "withdraw amount not valid or it must be positive"
            }
            if(amount > balance){
                return "Insufficient balance"
            }

            balance -= amount;
            transcations.push({type:"withdraw",amount});
            return `withdraw $amount`
            

    }
    getBalance(){
        return balance
    }
    getTransactions(){
        return transcations

    }
}
}