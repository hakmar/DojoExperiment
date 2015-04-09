define(['dojo/dom', './views/ProductsView'],
    function (dom, ProductListView) {
        var parentNode = dom.byId("viewContainer");

        var productListView = new ProductListView(null, createAndAppendDiv(parentNode));

        function createAndAppendDiv(parent) {
            var div = document.createElement("div");
            parent.appendChild(div);
            return div;
        }
    }
);