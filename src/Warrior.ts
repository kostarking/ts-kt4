import { Unit } from "./Unit";

export class Warrior extends Unit {
    constructor() {
        super("воин", 15);
    }

    getDescription(): string {
        return `${this.name}, базовый урон ${this.baseDamage}`;
    }
}
