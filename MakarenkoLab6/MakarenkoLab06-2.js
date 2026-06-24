class GridItem {
    dayPower() { return 0; }
    nightPower() { return 0; }
}

class PowerPlant extends GridItem {
    constructor(name, power) {
        super();
        this.name = name;
        this.power = power;
    }

    dayPower() { return this.power; }
    nightPower() { return this.power; }
}

class SolarStation extends GridItem {
    constructor(name, power) {
        super();
        this.name = name;
        this.power = power;
    }

    dayPower() { return this.power; }
    nightPower() { return 0; }
}

class ResidentialBlock extends GridItem {
    constructor(name, flats) {
        super();
        this.name = name;
        this.flats = flats;
    }

    dayPower() { return -(this.flats * 4) / 1000; }
    nightPower() { return -(this.flats * 1) / 1000; }
}

class ExternalLine {
    constructor(title, limit, price) {
        this.title = title;
        this.limit = limit;
        this.price = price;
    }

    use(balance) {
        const amount = Math.min(Math.abs(balance), this.limit);
        if (amount === 0) return { amount: 0, money: 0 };

        return balance < 0
            ? { amount, money: amount * this.price }
            : { amount, money: -amount * this.price };
    }
}

class EnergySystem {
    constructor() {
        this.items = [];
        this.lines = [];
    }

    addItem(item) { this.items.push(item); }
    addLine(line) { this.lines.push(line); }

    getBalance(period) {
        return this.items.reduce((sum, item) => {
            return sum + (period === 'day' ? item.dayPower() : item.nightPower());
        }, 0);
    }

    printReport(period) {
        let balance = this.getBalance(period);
        let totalMoney = 0;

        console.log(`
--- ${period === 'day' ? 'День' : 'Ніч'} ---`);
        console.log(`Початковий баланс: ${balance.toFixed(2)} МВт`);

        for (const line of this.lines) {
            if (balance === 0) break;

            const operation = line.use(balance);
            if (operation.amount === 0) continue;

            balance += balance < 0 ? operation.amount : -operation.amount;
            totalMoney += operation.money;

            const action = operation.money > 0 ? 'куплено' : 'продано';
            console.log(`${line.title}: ${action} ${operation.amount.toFixed(2)} МВт`);
        }

        console.log(`Залишок: ${balance.toFixed(2)} МВт`);
        console.log(totalMoney >= 0 ? `Витрати: ${totalMoney.toFixed(2)}` : `Прибуток: ${Math.abs(totalMoney).toFixed(2)}`);
    }
}

const cityGrid = new EnergySystem();
cityGrid.addItem(new PowerPlant('ТЕЦ-1', 50));
cityGrid.addItem(new PowerPlant('ТЕЦ-2', 30));
cityGrid.addItem(new SolarStation('СЕС біля міста', 7));
cityGrid.addItem(new ResidentialBlock('ЖК Північний', 120));
cityGrid.addItem(new ResidentialBlock('ЖК Центральний', 280));
cityGrid.addLine(new ExternalLine('Лінія А', 20, 100));
cityGrid.addLine(new ExternalLine('Лінія Б', 50, 120));

cityGrid.printReport('day');
cityGrid.printReport('night');
