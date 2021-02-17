let combatWidthAttack;
let combatWidthDefence;
let regimentsAttack;
let regimentsDefence;

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
    return combatWidthAttack, combatWidthDefence, regimentsAttack, regimentsDefence
}

function arrangement(combatWidthAttack, combatWidthDefence, regimentsAttack, regimentsDefence) {
    let firstLineAttack = [];
    let secondLineAttack = [];
    let reserveAttack = [];
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

function battle(combatWidthAttack, combatWidthDefence, regimentsAttack, regimentsDefence) {
    arrangement(combatWidthAttack, combatWidthDefence, regimentsAttack, regimentsDefence)

}

forces()
battle(combatWidthAttack, combatWidthDefence, regimentsAttack, regimentsDefence)