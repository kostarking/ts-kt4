import { Archer } from "./Archer";

export class FrostArcher extends Archer {
    private slowdown: number;

    constructor() {
        super();
        this.slowdown = 30;
    }

    getDescription(): string {
        return `Морозный ${super.getDescription()} с эффектом заморозки ${this.slowdown}%`;
    }
}
