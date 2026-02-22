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
        deposit(amount){
            if (amount <= 0){
                return "Depositive amount not valid or it must be positive"
            }
    }
}