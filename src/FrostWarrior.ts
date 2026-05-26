import { Warrior } from "./Warrior";

export class FrostWarrior extends Warrior {
    private slowdown: number;

    constructor() {
        super();
        this.slowdown = 30;
    }

    getDescription(): string {
        return `Морозный ${super.getDescription()} с эффектом заморозки ${this.slowdown}%`;
    }
}
