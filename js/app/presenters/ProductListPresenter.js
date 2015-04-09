define(["dojo/_base/declare", "../models/ProductListModel"],
    function (declare, model) {
        var ProductListPresenter = declare([], {
            getAll: function () {
                return model.productList.query({});
            }
        });

        return new ProductListPresenter;
    }
);