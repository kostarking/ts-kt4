import { Unit } from "./Unit";

export class Wizard extends Unit {
    constructor() {
        super("маг", 10);
    }

    getDescription(): string {
        return `${this.name}, базовый урон ${this.baseDamage}`;
    }
}
