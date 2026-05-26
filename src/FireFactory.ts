import { UnitFactory } from "./UnitFactory";
import { Unit } from "./Unit";
import { FireWarrior } from "./FireWarrior";
import { FireWizard } from "./FireWizard";
import { FireArcher } from "./FireArcher";

export class FireFactory extends UnitFactory {
    createWarrior(): Unit {
        return new FireWarrior();
    }

    createWizard(): Unit {
        return new FireWizard();
    }

    createArcher(): Unit {
        return new FireArcher();
    }
}
