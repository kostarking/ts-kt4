import { UnitFactory } from "./UnitFactory";
import { FireFactory } from "./FireFactory";
import { FrostFactory } from "./FrostFactory";
import { PoisonFactory } from "./PoisonFactory";
import { Unit } from "./Unit";

function getRandomFactory(): UnitFactory {
    const factories: UnitFactory[] = [
        new FireFactory(),
        new FrostFactory(),
        new PoisonFactory()
    ];
    const randomIndex = Math.floor(Math.random() * factories.length);
    return factories[randomIndex];
}

function getRandomUnit(factory: UnitFactory): Unit {
    const creators = [
        () => factory.createWarrior(),
        () => factory.createWizard(),
        () => factory.createArcher()
    ];
    const randomIndex = Math.floor(Math.random() * creators.length);
    return creators[randomIndex]();
}

function main(): void {
    console.log("=== Генерация 10 случайных юнитов ===\n");

    for (let i = 1; i <= 10; i++) {
        const factory = getRandomFactory();
        const unit = getRandomUnit(factory);
        console.log(`${i}. ${unit.getDescription()}`);
    }
}

main();
