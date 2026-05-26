export abstract class Unit {
    protected name: string;
    protected baseDamage: number;

    constructor(name: string, baseDamage: number) {
        this.name = name;
        this.baseDamage = baseDamage;
    }

    abstract getDescription(): string;

    getBaseDamage(): number {
        return this.baseDamage;
    }

    getName(): string {
        return this.name;
    }
}
