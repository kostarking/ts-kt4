import { Warrior } from "./Warrior";

export class PoisonWarrior extends Warrior {
    private poisonDamage: number;

    constructor() {
        super();
        this.poisonDamage = 5;
    }

    getDescription(): string {
        return `Ядовитый ${super.getDescription()} с периодическим уроном от яда ${this.poisonDamage}`;
    }
}
