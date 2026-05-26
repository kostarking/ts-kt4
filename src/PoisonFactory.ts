import { UnitFactory } from "./UnitFactory";
import { Unit } from "./Unit";
import { PoisonWarrior } from "./PoisonWarrior";
import { PoisonWizard } from "./PoisonWizard";
import { PoisonArcher } from "./PoisonArcher";

export class PoisonFactory extends UnitFactory {
    createWarrior(): Unit {
        return new PoisonWarrior();
    }

    createWizard(): Unit {
        return new PoisonWizard();
    }

    createArcher(): Unit {
        return new PoisonArcher();
    }
}
