import { Wizard } from "./Wizard";

export class PoisonWizard extends Wizard {
    private poisonDamage: number;

    constructor() {
        super();
        this.poisonDamage = 5;
    }

    getDescription(): string {
        return `Ядовитый ${super.getDescription()} с периодическим уроном от яда ${this.poisonDamage}`;
    }
}
