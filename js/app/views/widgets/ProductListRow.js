define(['dojo/Evented', 'dojo/_base/declare', 'dijit/_WidgetBase', 'dijit/_TemplatedMixin',
        'dojo/text!./_templates/ProductListRow.html'],
    function (Evented, declare, _WidgetBase, _TemplatedMixin, template) {

        var ProductRow = declare([Evented, _WidgetBase, _TemplatedMixin], {

            templateString: template,

            product: null,

            postCreate: function(){
                if (this.product) {
                    this.name.innerText = this.product.name;
                    this.quantity.innerText = this.product.quantity;
                    this.price.innerText = this.product.price;
                }
            },

            onRemove: function() {},

            remove: function () {
                this.onRemove(this.product);
            }

        });

        return ProductRow;
    }
);