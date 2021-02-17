let combatWidthAttack;
let combatWidthDefence;
let forcesAttack;
let forcesDefence;

function forces() {
    combatWidthAttack = 15;
    combatWidthDefence = 15;
    regimentsAttack = {
        "infantry": [0.9, 1, 1, 0.4, 0.8],
        "cavalry": [1, 1, 0.7],
        "artillery": [1, 1, 1, 1, 1]
    };
    regimentsDefence = {
        "infantry": [0.9, 1, 1, 0.9],
        "cavalry": [1, 0.2, 0.6, 1, 0.9],
        "artillery": [1, 1, 1, 1, 1]
    };
    return combatWidthAttack, combatWidthDefence, forcesAttack, forcesDefence
}

function arrangement(combatWidthAttack, combatWidthDefence, forcesAttack, forcesDefence) {
    let firstLineAttack = [];
    regimentsAttack.infantry.sort();
    regimentsAttack.cavalry.sort();
    regimentsAttack.artillery.sort();
    if (regimentsAttack.infantry.length >= combatWidthAttack) {
        for (let i = 0; i < combatWidthAttack; i++) {
            firstLineAttack.push(["infantry", ])
        }
    }
    for (let i = 0; i < combatWidthAttack; i++) {
        firstLineAttack[i] = [""]
    }
    console.log(regimentsAttack)
}

function battle(combatWidthAttack, combatWidthDefence, forcesAttack, forcesDefence) {
    arrangement(combatWidthAttack, combatWidthDefence, forcesAttack, forcesDefence)

}

forces()
battle(combatWidthAttack, combatWidthDefence, forcesAttack, forcesDefence)