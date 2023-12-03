let model = document.getElementById('model');
const button = document.querySelector('.button');
let totalPrice;

// Модель автомобиля 

const AudiModels = [
    'A 1',
    'A 2',
    'A 3',
    'A 4',
    'A 5',
    'A 6',
    'A 7',
    'Q 3',
    'Q 5',
    'Q 7',
];
const BMWModels = [
    '1 Series',
    '2 Series',
    '3 Series',
    '4 Series',
    '5 Series',
    '6 Series',
    '7 Series',
    'M Series',
    'X Series',
];
const MazdaModels = [
    '3',
    '6',
    'CX-3',
    'CX-30',
    'CX-5',
    'CX-7',
    'CX-9',
];
const MercedesModels = [
    'A-Class',
    'B-Class',
    'C-Class',
    'CLK-Class',
    'CLS-Class',
    'E-Class',
    'G-Class',
    'GLA-Class',
    'GLE-Class',
    'GLK-Class',
    'GLS-Class',
    'M-Class',
    'S-Class',
    'SLC-Class',
    'SLK-Class',
];
//Цена автомобиля 
const AudiPrices = [
    {
        "name": 'A 1',
        "price": 2500000,
    },
    {
        "name": 'A 2',
        "price": 3000000,
    },
    {
        "name": 'A 3',
        "price": 3500000,
    },
    {
        "name": 'A 4',
        "price": 4000000,
    },
    {
        "name": 'A 5',
        "price": 4500000,
    },
    {
        "name": 'A 6',
        "price": 5000000,
    },
    {
        "name": 'A 7',
        "price": 5500000,
    },
    {
        "name": 'Q 3',
        "price": 6000000,
    },
    {
        "name": 'Q 5',
        "price": 6500000,
    },
    {
        "name": 'Q 7',
        "price": 7000000,
    },
];
const BMWPrices = [
    {
        "name": '1 Series',
        "price": 2600000,
    },
    {
        "name": '2 Series',
        "price": 3100000,
    },
    {
        "name": '3 Series',
        "price": 3600000,
    },
    {
        "name": '4 Series',
        "price": 4100000,
    },
    {
        "name": '5 Series',
        "price": 4600000,
    },
    {
        "name": '6 Series',
        "price": 5100000,
    },
    {
        "name": '7 Series',
        "price": 5600000,
    },
    {
        "name": 'M Series',
        "price": 6100000,
    },
    {
        "name": 'X Series ',
        "price": 6600000,
    },
];
const MazdaPrices = [
    {
        "name": '3',
        "price": 2400000,
    },
    {
        "name": '6',
        "price": 3400000,
    },
    {
        "name": 'CX-3',
        "price": 4200000,
    },
    {
        "name": 'CX-30',
        "price": 4400000,
    },
    {
        "name": 'CX-5',
        "price": 5200000,
    },
    {
        "name": 'CX-7',
        "price": 5400000,
    },
    {
        "name": 'CX-9',
        "price": 6200000,
    },
];
const MercedesPrices = [
    {
        "name": 'A-Class',
        "price": 2300000,
    },
    {
        "name": 'C-Class',
        "price": 3300000,
    },
    {
        "name": 'CLK-Class',
        "price": 3700000,
    },
    {
        "name": 'CLS-Class',
        "price": 4300000,
    },
    {
        "name": 'E-Class',
        "price": 4700000,
    },
    {
        "name": 'G-Class',
        "price": 15000000,
    },
    {
        "name": 'GLA-Class',
        "price": 5300000,
    },
    {
        "name": 'GLE-Class',
        "price": 7300000,
    },
    {
        "name": 'GLK-Class',
        "price": 5700000,
    },
    {
        "name": 'GLS-Class',
        "price": 6300000,
    },
    {
        "name": 'M-Class',
        "price": 7300000,
    },
    {
        "name": 'S-Class',
        "price": 6700000,
    },
    {
        "name": 'SLC-Class',
        "price": 7300000,
    },
    {
        "name": 'SLK-Class',
        "price": 7700000,
    },
];

//Функция подстановки модели в зависимости от марки
function checkModel() {
let marka = document.getElementById("marka").value;
    if (marka === 'Audi') {
        model.options.length = 0;
        for (let AudiModel of AudiModels) {
        let i = AudiModel;
        let newModel = document.createElement('option');
        newModel.innerHTML = `<option value="${i}" id="model `+` ${i}">
        ${i} </option>`;
        model.appendChild(newModel);
        };
    } else if (marka === 'BMW') {
            model.options.length = 0;
            for (let BMWModel of BMWModels) {
                let a = BMWModel;
                let newModel = document.createElement('option');
                newModel.innerHTML = `<option value="${a}" id="model `+` ${a}">
                ${a} </option>`;
                model.appendChild(newModel);
                };
    } else if (marka === 'Mazda') {
        model.options.length = 0;
        for (let MazdaModel of MazdaModels) {
            let b = MazdaModel;
            let newModel = document.createElement('option');
            newModel.innerHTML = `<option value="${b}" id="model `+` ${b}">
            ${b} </option>`;
            model.appendChild(newModel);
            };
    } else if (marka === 'Mercedes') {
        model.options.length = 0;
        for (let MercedesModel of MercedesModels) {
            let c = MercedesModel;
            let newModel = document.createElement('option');
            newModel.innerHTML = `<option value="${c}" id="model `+` ${c}">
            ${c} </option>`;
            model.appendChild(newModel);
            };
    } else {
        alert('Выберите марку');
    }
};
//Функция определения цены из массива по модели авто
let carPrice;
function checkPrice() {
    let marka = document.getElementById("marka").value;
    if (marka === 'Audi') {
        modelAudi = document.getElementById("model").value;
        for (let audiprice of AudiPrices) {
            if (modelAudi === audiprice.name) {
                carPrice = audiprice.price;
            }
        };
    } else if (marka === 'BMW') {
        modelBMW = document.getElementById("model").value;
        for (let bmwprice of BMWPrices) {
            if (modelBMW === bmwprice.name) {
                carPrice = bmwprice.price;
            }
        };
        } else if (marka === 'Mazda') {
        modelMazda = document.getElementById("model").value;
        for (let mazdaprice of MazdaPrices) {
            if (modelMazda === mazdaprice.name) {
                carPrice = mazdaprice.price;
            }
        };
        } else if (marka === 'Mercedes') {
        modelMercedes = document.getElementById("model").value;
        for (let mercedesprice of MercedesPrices) {
            if (modelMercedes === mercedesprice.name) {
                carPrice = mercedesprice.price;
            }
        };
        } else {
            alert('Выберите модель');
        }
return carPrice;
};
//Функция подсчета цены, в зависимости от выбранных параметров
function calculatePrice() {
    //Определение коэффициента, применяемого к цене, в зависимости от года выпуска
    let year = document.getElementById("year").value;
    let kYear = 1 - ((2023 - year) * 0.05);

    //Определение коэффициента, применяемого к цене, в зависимости от типа коробки передач
    let transmissions = document.getElementById("transmission").value;
    let kTM;
    if (transmissions == 'AT') {
        kTM = 1;
    } else if (transmissions == 'MT') {
        kTM = 0.8;
    } else {
        kTM = 0.9;
    }

    //Определение коэффициента, применяемого к цене, в зависимости от объема двигателя
    let volume = document.getElementById("volume").value;
    //console.log(volume);
    let kVolume = 1;
    if (volume <= 1.6) {
        kVolume = 0.8;
    } else if (volume <= 2) {
        kVolume = 1;
    } else if (volume <= 2.5 ) {
        kVolume = 1.1;
    } else if (volume <= 3) {
        kVolume = 1.2;
    } else {
        kVolume = 1.25;
    }

    //Определение коэффициента, применяемого к цене, в зависимости от типа топлива
    let fuels = document.querySelectorAll('input[name="fuel"]');
    for (const f of fuels) {
        if (f.checked) {
        fu = f.value;
        }
    }
    let kFuel;
    if (fu === 'petrol') {
        kFuel = 0.9;
    } else {
        kFuel = 1;
    }

    //Определение коэффициента, применяемого к цене, в зависимости от количества владельцев по ПТС

    //Определение старого авто для запуска функции отображения скрытого блока
    let conditions = document.querySelectorAll('input[name="pts"]');
    let cond;
    let kPTS;
    for (const c of conditions) {
        if (c.checked) {
            cond = c.value;
            vewDiv(cond);
        }
    };
    //Определение коэффициента
    let owners = document.querySelectorAll('input[name="owner"]');
    let PTS;
    for (const owner of owners) {
        if (owner.checked) {
            PTS = owner.value
        }
    };
    if (cond === 'new') {
        kPTS = 1;
    } else if (PTS === 'one'){
        kPTS = 0.98;
    } else if (PTS === 'two') {
        kPTS = 0.96;
    } else if (PTS === 'three') {
        kPTS = 0.94;
    } else {
        kPTS = 0.92;
    }

    //Определение коэффициента, применяемого к цене, в зависимости от типа оплаты
    let payments = document.querySelectorAll('input[name="pay"]');
    for (const payment of payments) {
        if (payment.checked) {
        p = payment.value;
        }
    };
    let kPay = 1;
    if (p === "bill") {
        kPay = 1.03;
    } else if (p === "card") {
        kPay = 1.01;
    } else {
        kPay = 1;
    }

    //Определение конечной цены автомобиля
    console.log(carPrice, kYear, kTM, kVolume, kFuel, kPTS, kPay);
    totalPrice = carPrice * kYear * kTM * kVolume * kFuel * kPTS * kPay;
    console.log(totalPrice);
};
console.log(totalPrice);
//Функция вывода результата
function addTotalPrice() {
     //Создание блока
    let form = document.getElementById("form");
    document.getElementById("totaltext").style.display = 'block';
    document.getElementById("totalprice").style.display = 'block';
    let p = document.getElementById("totalprice");
    let newPrice = Math.round(totalPrice)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    p.textContent = `${newPrice} рублей`;
    form.reset();
}
button.addEventListener("click", addTotalPrice);

//Функция видимости блока с выбором количества собственников
function vewDiv(cond) {
    if (cond === 'old'){
        document.getElementById("p_owner").style.display = 'block';
        document.getElementById("div_owner").style.display = 'grid';
     } else{
        document.getElementById("p_owner").style.display = 'none';
        document.getElementById("div_owner").style.display = 'none';
     }
};
