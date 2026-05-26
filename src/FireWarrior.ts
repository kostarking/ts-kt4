import { Warrior } from "./Warrior";

export class FireWarrior extends Warrior {
    private fireDamage: number;

    constructor() {
        super();
        this.fireDamage = 10;
    }

    getDescription(): string {
        return `Огненный ${super.getDescription()} с дополнительным уроном от огня ${this.fireDamage}`;
    }
}
