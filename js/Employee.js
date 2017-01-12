function Employee(data) {
    var levelTopUp = data.leveltopup;

    this.name = data.name;
    this.level = data.level;
    this.yearsOfExperience = data.experience;
    this.bonusPerYear = data.bonus;

    switch (level.toLowerCase()) {
        case 'intern':
            this.base = base;
            break;
        case 'associate':
            this.base = (1 + (levelTopUp/100)) * base;
            break;
        case 'manager':
            this.base = Math.pow((1 + (levelTopUp/100)), 2) * base;
            break;
        case 'executive':
            this.base = Math.pow((1 + (levelTopUp/100)), 3) * base;
            break;
        case 'director':
            this.base = Math.pow((1 + (levelTopUp/100)), 4) * base;
            break;
    }

    this.calculateSalary = function() {
        return this.base + (this.bonusPerYear * this.experience); 
    }
    
}

module.exports= Employee;