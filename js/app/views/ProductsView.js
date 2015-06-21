define(['dojo/Evented', 'dojo/_base/declare', 'dijit/_WidgetBase', 'dijit/_TemplatedMixin',
        'dojo/on', 'dojo/dom-construct', 'dojo/_base/window', 'require',
        '../presenters/ProductListPresenter',
        './widgets/ProductDropdownRow',
        './widgets/ProductListRow',
        'dojo/text!./_templates/ProductsView.html'],
    function (Evented, declare, _WidgetBase, _TemplatedMixin, on, domConstruct, win, require, presenter,
              ProductDropdownRow, ProductListRow, template) {

        var ProductListView = declare([_WidgetBase, _TemplatedMixin], {

            templateString: template,

            products: null,
            productDropdownRows: null,
            productListRows: null,

            postCreate: function () {
                this.products = presenter.getAll();
                this.productDropdownRows = [];
                this.productListRows = [];

                this.populateProductDropdown();
            },

            handleDropdownList: function () {
                this.productDropdownRows.forEach(function (productDropdownRow) {
                    productDropdownRow.selector.checked = productDropdownRow.product.selected;
                    productDropdownRow.selector.disabled = productDropdownRow.product.selected;
                });
            },

            hideDropdownList: function (e) {
                this.productDropDown.classList.add('hidden');
                this.handleDropdownList();
            },

            showDropdownList: function (e) {
                this.productDropDown.classList.remove('hidden');
                this.handleDropdownList();

                on(this.productDropDown, "click", function(e) {
                    e.stopPropagation();
                });

                e.stopPropagation();
                on.once(win.body(), "click", dojo.hitch(this, function() {
                    this.hideDropdownList();
                }));
            },

            remove: function (product) {
                product.selected = false;
                var ix = this.productListRows.indexOf(product);
                this.productListRows.splice(ix, 1);
                domConstruct.destroy(this.productListContainer.children[ix]);
            },

            populateProductDropdown: function () {
                var self = this;

                this.products.forEach(function (product) {
                    var productDropdownRow = new ProductDropdownRow({product: product});

                    productDropdownRow.placeAt(self.productDropdownContainer);
                    self.productDropdownRows.push(productDropdownRow);

                    productDropdownRow.on('productSelection', function (selected, product) {
                        if (selected) {
                            product.selected = true;
                            var productListRow = new ProductListRow({product: product});
                            productListRow.placeAt(self.productListContainer);
                            self.productListRows.push(product);
                            productListRow.on('remove', function (product) {
                                self.remove(product);
                            });
                        } else {
                            product.selected = false;
                            self.remove(product);
                        }
                    });
                });
            }

        });

        return ProductListView;
    }
);