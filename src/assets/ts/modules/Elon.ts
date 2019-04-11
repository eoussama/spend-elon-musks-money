export class Elon {
    static money: number = ELONs_NET_WORTH;
    static properties: Property[] = [];

    static Pay(money) {
        this.money -= money;
        moneyPanel.textContent = `$${this.money.formatMoney(2, '.', ',')}`;

        if (this.money < 1) {
            document.body.style.overflowY = 'hidden';
            modalBroke.style.top = window.scrollY + 'px';
            modalBroke.style.display = 'block';

            propCount.textContent = `Properties [${Elon.getPropertiesCount()}]`;
            propList.innerHTML = "";

            for (let _property of Elon.properties) {
                let
                    _row = document.createElement('tr'),
                    _col_prop = document.createElement('td'),
                    _col_amount = document.createElement('td'),
                    _col_worth = document.createElement('td');

                _col_prop.textContent = _property.name;
                _col_amount.textContent = _property.amount.toString();
                _col_worth.textContent = "$" + (_property.amount * getGoodiePrice(_property.name)).formatMoney(2, '.', ',');
                _col_worth.classList.add('text-red', 'text-bold');

                _row.appendChild(_col_prop);
                _row.appendChild(_col_amount);
                _row.appendChild(_col_worth);
                propList.appendChild(_row);
            }
        }
    }

    static hasProperty(name): boolean {
        for (let _property of Elon.properties) {
            if (_property.name === name)
                return true;
        }

        return false;
    }

    static giveProperty(name) {
        if (this.hasProperty(name) === false)
            Elon.properties.push(new Property(name, 1));
        else {
            for (let _property of Elon.properties) {
                if (_property.name === name) {
                    _property.amount++;
                    break;
                }
            }
        }

        updateProps();
    }

    static getPropertiesCount(): number {
        let _count: number = 0;

        for (let _property of Elon.properties)
            _count += _property.amount;

        return _count;
    }
}
