import { Wizard } from "./Wizard";

export class FireWizard extends Wizard {
    private fireDamage: number;

    constructor() {
        super();
        this.fireDamage = 10;
    }

    getDescription(): string {
        return `Огненный ${super.getDescription()} с дополнительным уроном от огня ${this.fireDamage}`;
    }
}
