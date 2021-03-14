class Army {
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
    // distribution of total troopers to regiments 
    distribute() {
        // infantry distribution
        this.branches.infantry.filled = Math.floor(this.branches.infantry.total / 1000);
        this.branches.infantry.regiments = [];
        for (let i = 0; i < this.branches.infantry.filled; i++) {
            this.branches.infantry.regiments.push(1000);
        }
        this.branches.infantry.regiments.push(this.branches.infantry.total - (1000 * this.branches.infantry.filled));

        // cavalry distribution
        this.branches.cavalry.filled = Math.floor(this.branches.cavalry.total / 1000);
        this.branches.cavalry.regiments = [];
        for (let i = 0; i < this.branches.cavalry.filled; i++) {
            this.branches.cavalry.regiments.push(1000);
        }
        this.branches.cavalry.regiments.push(this.branches.cavalry.total - (1000 * this.branches.cavalry.filled));

        // artillery distribution
        this.branches.artillery.filled = Math.floor(this.branches.artillery.total / 1000);
        this.branches.artillery.regiments = [];
        for (let i = 0; i < this.branches.artillery.filled; i++) {
            this.branches.artillery.regiments.push(1000);
        }
        this.branches.artillery.regiments.push(this.branches.artillery.total - (1000 * this.branches.artillery.filled));
    }
}

const arrangement = (attack, defense) => {
    // distribution of total troopers to regiments 
    attack.distribute();
    defense.distribute();

    console.log('Attacking army infantry: ' + attack.branches.infantry.total + ' => ' + attack.branches.infantry.regiments.join(', '));
    console.log('Attacking army cavalry: ' + attack.branches.cavalry.total + ' => ' + attack.branches.cavalry.regiments.join(', '));
    console.log('Attacking army artillery: ' + attack.branches.artillery.total + ' => ' + attack.branches.artillery.regiments.join(', '));
    console.log('Defending army infantry: ' + defense.branches.infantry.total + ' => ' + defense.branches.infantry.regiments.join(', '));
    console.log('Defending army cavalry: ' + defense.branches.cavalry.total + ' => ' + defense.branches.cavalry.regiments.join(', '));
    console.log('Defending army artillery: ' + defense.branches.artillery.total + ' => ' + defense.branches.artillery.regiments.join(', '));
}

const battle = (attack, defense) => {
    arrangement(attack, defense);

}




let attack = new Army(4900, 1200, 2400, 15);
let defense = new Army(4200, 1500, 3200, 15);


battle(attack, defense);