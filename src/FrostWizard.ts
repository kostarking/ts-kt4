import { Wizard } from "./Wizard";

export class FrostWizard extends Wizard {
    private slowdown: number;

    constructor() {
        super();
        this.slowdown = 30;
    }

    getDescription(): string {
        return `Морозный ${super.getDescription()} с эффектом заморозки ${this.slowdown}%`;
    }
}
