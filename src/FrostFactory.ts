import { UnitFactory } from "./UnitFactory";
import { Unit } from "./Unit";
import { FrostWarrior } from "./FrostWarrior";
import { FrostWizard } from "./FrostWizard";
import { FrostArcher } from "./FrostArcher";

export class FrostFactory extends UnitFactory {
    createWarrior(): Unit {
        return new FrostWarrior();
    }

    createWizard(): Unit {
        return new FrostWizard();
    }

    createArcher(): Unit {
        return new FrostArcher();
    }
}
