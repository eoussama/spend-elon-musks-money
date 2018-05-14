var ELONs_NET_WORTH = 19600000000.00;
var goodies, moneyPanel = null, modalBroke = null, propCount = null, propList = null;
var Elon = /** @class */ (function () {
    function Elon() {
    }
    Elon.Pay = function (money) {
        this.money -= money;
        moneyPanel.textContent = "$" + this.money.formatMoney(2, '.', ',');
        if (this.money < 1) {
            document.body.style.overflowY = 'hidden';
            modalBroke.style.top = window.scrollY + 'px';
            modalBroke.style.display = 'block';
            propCount.textContent = "Properties [" + Elon.getPropertiesCount() + "]";
            propList.innerHTML = "";
            for (var _i = 0, _a = Elon.properties; _i < _a.length; _i++) {
                var _property = _a[_i];
                var _row = document.createElement('tr'), _col_prop = document.createElement('td'), _col_amount = document.createElement('td'), _col_worth = document.createElement('td');
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
    };
    Elon.hasProperty = function (name) {
        for (var _i = 0, _a = Elon.properties; _i < _a.length; _i++) {
            var _property = _a[_i];
            if (_property.name === name)
                return true;
        }
        return false;
    };
    Elon.giveProperty = function (name) {
        if (this.hasProperty(name) === false)
            Elon.properties.push(new Property(name, 1));
        else {
            for (var _i = 0, _a = Elon.properties; _i < _a.length; _i++) {
                var _property = _a[_i];
                if (_property.name === name) {
                    _property.amount++;
                    break;
                }
            }
        }
    };
    Elon.getPropertiesCount = function () {
        var _count = 0;
        for (var _i = 0, _a = Elon.properties; _i < _a.length; _i++) {
            var _property = _a[_i];
            _count += _property.amount;
        }
        return _count;
    };
    Elon.money = ELONs_NET_WORTH;
    Elon.properties = [];
    return Elon;
}());
var Property = /** @class */ (function () {
    function Property(name, amount) {
        this.name = "";
        this.amount = 0;
        this.name = name;
        this.amount = amount;
    }
    return Property;
}());
var Goodie = /** @class */ (function () {
    function Goodie(name, price, image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
    Goodie.prototype.Buy = function () {
        Elon.giveProperty(this.name);
        Elon.Pay(this.price);
    };
    return Goodie;
}());
function reboot() {
    Elon.money = ELONs_NET_WORTH;
    Elon.properties = [];
    document.body.style.overflowY = 'auto';
    modalBroke.style.display = 'none';
    moneyPanel.textContent = "$" + Elon.money.formatMoney(2, '.', ',');
}
function getGoodiePrice(name) {
    for (var _i = 0, goodies_1 = goodies; _i < goodies_1.length; _i++) {
        var _goodie = goodies_1[_i];
        if (_goodie.name === name)
            return _goodie.price;
    }
    return 0;
}
Number.prototype.formatMoney = function (c, d, t) {
    var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "." : d, t = t == undefined ? "," : t, s = n < 0 ? "-" : "", i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
window.addEventListener('load', function () {
    var target = document.getElementById('target'), moneyBanner = document.querySelector('div.money-banner');
    propCount = document.getElementById('propCount'),
        propList = document.getElementById('propList');
    goodies = [
        new Goodie("Cup of Coffee", 3.63, "coffee.jpg"),
        new Goodie("Pencile", 0.36, "pencile.jpg"),
        new Goodie("Glasses", 39.50, "glasses.jpg"),
        new Goodie("Canon Camera", 456.00, "canon.jpg"),
        new Goodie("5 Gum", 1.49, "5gum.jpg"),
        new Goodie("Apple", 800000000.00, "apple.jpg"),
        new Goodie("Clones", 8000000.00, "clone.jpg"),
        new Goodie("Eiffel Tower", 1700000000.00, "eiffel_tower.jpg"),
        new Goodie("Ferrari", 380000.00, "ferrari.png"),
        new Goodie("Footall Stadium", 1150000000.00, "football_stadium.jpg"),
        new Goodie("Game PC", 700.00, "gamer_pc.jpg"),
        new Goodie("Helicopter", 415000.00, "helicopter.jpg"),
        new Goodie("Castle", 3412300.00, "castle.jpg"),
        new Goodie("Private Rocket", 936015000.00, "rocket.jpg"),
        new Goodie("iMac Pro", 4999.00, "imac_pro.jpg"),
        new Goodie("iPhone X", 1149.00, "iphonex.jpg"),
        new Goodie("Private Island", 169727.00, "island.jpg"),
        new Goodie("iWatch", 459.00, "iwatch.jpg"),
        new Goodie("Military Jet", 160000000.00, "jet.jpg"),
        new Goodie("Kawasaki", 8399.00, "kawazaki.jpg"),
        new Goodie("lamborghini", 200000.00, "lambo.jpg"),
        new Goodie("Pizza", 14.99, "pizza.jpg"),
        new Goodie("Private Planet", 965365556963213567785.99, "planet.jpg"),
        new Goodie("Private Jet", 70000000.00, "private_plane.jpeg"),
        new Goodie("PS4 Pro", 399.00, "ps4_pro.jpg"),
        new Goodie("The Pyramids", 5000000000.00, "pyramides.jpg"),
        new Goodie("Automata", 95600.06, "robot.jpg"),
        new Goodie("Portal", 656999631.00, "portal.jpg"),
        new Goodie("Rockstar Games", 6000500000.00, "rockstar_games.png"),
        new Goodie("Submarine", 2000000000.00, "submarine.jpg"),
        new Goodie("Swiss Army Knife", 19.99, "swiss_army_knife.jpg"),
        new Goodie("Tesla", 101500.00, "tesla.jpg"),
        new Goodie("Time Machine", 9653300052423.00, "time_machine.jpeg"),
        new Goodie("VR Headset", 799.00, "vr_headset.jpg"),
        new Goodie("XBOX One X", 499.00, "xbox_one_x.jpg"),
        new Goodie("Yacht", 275000000.00, "yacht.jpeg")
    ];
    modalBroke = document.querySelector('div.modalBroke');
    moneyPanel = document.getElementById('cash');
    moneyPanel.textContent = "$" + Elon.money.formatMoney(2, '.', ',');
    goodies.forEach(function (_goodie) {
        var fold = document.createElement('div'), fold_thumbnail = document.createElement('div'), img = document.createElement('img'), price = document.createElement('span'), fold_header = document.createElement('div'), h3 = document.createElement('h3'), button = document.createElement('button');
        fold.classList.add('fold', 'goodie');
        fold_thumbnail.classList.add('fold-thumbnail');
        fold_header.classList.add("fold-header", "pt-reset");
        price.classList.add('cig', 'green', 'invert', 'text-bold'),
            h3.classList.add('text-center'),
            button.classList.add('btn', 'green', 'size-fluid');
        h3.textContent = _goodie.name;
        img.src = "images/goodies/" + _goodie.image;
        button.textContent = "Buy";
        price.textContent = _goodie.price.formatMoney(2, '.', ',');
        button.addEventListener('click', function () {
            if (Elon.money >= _goodie.price)
                _goodie.Buy();
            else {
                fold.classList.add('unaffordable');
                setTimeout(function () { fold.classList.remove('unaffordable'); }, 2500);
            }
        });
        fold_thumbnail.appendChild(img);
        fold_thumbnail.appendChild(price);
        fold_header.appendChild(h3);
        fold.appendChild(fold_thumbnail);
        fold.appendChild(fold_header);
        fold.appendChild(button);
        target.appendChild(fold);
    });
    window.addEventListener('scroll', function (e) {
        if (window.scrollY >= 375)
            moneyBanner.classList.add('stick');
        else
            moneyBanner.classList.remove('stick');
    });
});
