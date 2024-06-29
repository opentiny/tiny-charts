const option = {
    theme: 'light',
    roam: true,
    data: [{
        name: "Food",
        children: [{
            value: 30,
            name: "Fruits",
            children: [{
                value: 10,
                name: "Apple"
            }, {
                value: 20,
                name: "Orange",
                children: [{
                    name: "Seville",
                    value: 10
                }, {
                    name: "Blood",
                    value: 10
                }]
            }]
        }, {
            value: 90,
            name: "Meats",
            children: [{
                value: 60,
                name: "Beaf",
                children: [{
                    name: "beaf",
                    value: 10
                }, {
                    name: "Rib",
                    value: 10
                }, {
                    name: "Pork",
                    value: 10
                }, {
                    name: "Shank",
                    value: 10
                }]
            }, {
                value: 20,
                name: "Chickens",
                children: [{
                    name: "Wings",
                    value: 20
                }]
            }, {
                name: "Breast",
                value: 10
            }]
        }]
    }, {
        value: 60,
        name: "Drinks",
        children: [{
            value: 30,
            name: "Wine",
            children: [{
                name: "USA",
                value: 20
            }, {
                name: "Europe",
                children: [{
                    name: "Germany",
                    value: 10
                }]
            }]
        }, {
            name: "Soft Drink",
            children: [{
                value: 30,
                name: "Juice",
                children: [{
                    name: "Apple Juice",
                    value: 10
                }, {
                    name: "Orange Juice",
                    value: 20
                }]
            }]
        }]
    }, {
        value: 60,
        name: "Fashion",
        children: [{
            name: "Clothing",
            children: [{
                name: "Shirts",
                value: 10
            }, {
                name: "Jackets",
                value: 30,
                children: [{
                    name: "Men",
                    value: 10
                }, {
                    name: "Woman",
                    value: 10
                }]
            }, {
                value: 20,
                name: "Coats",
                children: [{
                    name: "Men",
                    value: 10
                }, {
                    name: "Woman",
                    value: 10
                }]
            }]
        }]
    }]
};