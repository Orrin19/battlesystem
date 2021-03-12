class Side {
    constructor(inf, cav, art, cw) {
        this.branches = {};
        this.branches.infantry = {};
        this.branches.cavalry = {};
        this.branches.artillery = {};

        this.branches.infantry.total = inf;
        this.branches.cavalry.total = cav;
        this.branches.artillery.total = art;
        this.combatWidth = cw;
    }
}

const arrangement = (attack, defense) => {
    attack.branches.infantry.filled = Math.floor(attack.branches.infantry.total / 1000);
    attack.branches.infantry.regiments = [];
    for (let i = 0; i < attack.branches.infantry.filled; i++) {
        attack.branches.infantry.regiments.push(1000);
    }
    attack.branches.infantry.regiments.push(attack.branches.infantry.total - (1000 * attack.branches.infantry.filled));

    attack.branches.cavalry.filled = Math.floor(attack.branches.cavalry.total / 1000);
    attack.branches.cavalry.regiments = [];
    for (let i = 0; i < attack.branches.cavalry.filled; i++) {
        attack.branches.cavalry.regiments.push(1000);
    }
    attack.branches.cavalry.regiments.push(attack.branches.cavalry.total - (1000 * attack.branches.cavalry.filled));

    attack.branches.artillery.filled = Math.floor(attack.branches.artillery.total / 1000);
    attack.branches.artillery.regiments = [];
    for (let i = 0; i < attack.branches.artillery.filled; i++) {
        attack.branches.artillery.regiments.push(1000);
    }
    attack.branches.artillery.regiments.push(attack.branches.artillery.total - (1000 * attack.branches.artillery.filled));

    console.log(attack.branches.infantry.regiments + ' ' + attack.branches.cavalry.regiments + ' ' + attack.branches.artillery.regiments);
}

const battle = (attack, defense) => {
    arrangement(attack, defense);

}




let attack = new Side(4900, 1200, 2400, 15);
let defense = new Side(4200, 1500, 3200, 15);


battle(attack, defense);