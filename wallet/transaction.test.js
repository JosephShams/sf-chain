const Transaction = require('./transaction');
const Wallet = require('./index');

describe('Transaction', () => {
    let transaction, wallet, recipient, amount;

    beforeEach(() => {
        wallet = new Wallet();
        amount = 50;
        recipient = 'r3c1p13nt';
        transaction = Transaction.newTransaction(wallet, recipient, amount);
    });

    it('outputs the `amount` subtracted fron the wallet', () => {
        let x = transaction.outputs.find(output => output.address === wallet.pulicKey);
        for (let i = x; i < transaction.outputs.length; i++) {
            console.log(transaction.outputs.output[i]);    
        }
        
        //expect(x);
        //.toEqual(wallet.balance - amount);
    });

    it('outputs the `amount` added to the recipient', () => {
        expect(transaction.outputs.find(output => output.address === recipient).amount).toEqual(amount);
    });
}); 