import { Unit } from "./Unit";

export class Archer extends Unit {
    constructor() {
        super("лучник", 12);
    }

    getDescription(): string {
        return `${this.name}, базовый урон ${this.baseDamage}`;
    }
}
