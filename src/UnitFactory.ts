import { Unit } from "./Unit";

export abstract class UnitFactory {
    abstract createWarrior(): Unit;
    abstract createWizard(): Unit;
    abstract createArcher(): Unit;
}
