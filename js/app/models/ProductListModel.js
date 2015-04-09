define(['dojo/store/Memory'] ,
    function (Memory) {
        var nextId = 4;

        var productList = new Memory({
            data: [
                { id: 1, name: 'Milk', quantity: 10, price: '2.49', selected: false },
                { id: 2, name: 'Eggs', quantity: 5, price: '1.69', selected: false },
                { id: 3, name: 'Apples', quantity: 36, price: '0.69', selected: false }
            ]
        });

        return {
            productList: productList
        };
    }
);