//Завдання 1
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    Great(){
        return `Вітаю вас, ${this.name}!`;
    }
};

const user = new User("Користувач", "Username@gmail.com");

console.log(user.Great());

//Завдання 2
class Admin extends User{
    constructor(name, email, role){
        super(name, email);
        this.role = role;
    }

    DisplayRole(){
        console.log(`Роль користувача "${this.name}": ${this.role}.`);
    }
};

const admin = new Admin(user.name, user.email, "Письменник");

admin.DisplayRole();

//Завдання 3
class BankAccount{
    #balance = 100; //Private integer

    Deposite(){
        this.#balance -= 50;
        console.log(`Ви внесли до вашого депозиту 50.
            \nВаш баланс: ${this.#balance}`);
    }

    WithdrawingFunds(){
        this.#balance += 50;
        console.log(`Ви зняли ваші кошти на суму: 50.
            \nВаш баланс: ${this.#balance}`);
    }
};

const bankAcc = new BankAccount();

bankAcc.Deposite();
bankAcc.WithdrawingFunds();