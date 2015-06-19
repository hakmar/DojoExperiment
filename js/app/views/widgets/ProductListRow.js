define(['dojo/Evented', 'dojo/_base/declare', 'dijit/_WidgetBase', 'dijit/_TemplatedMixin',
        'dojo/text!./_templates/ProductListRow.html'],
    function (Evented, declare, _WidgetBase, _TemplatedMixin, template) {

        var ProductRow = declare([_WidgetBase, _TemplatedMixin, Evented], {

            templateString: template,

            product: null,

            postCreate: function(){
                if (this.product) {
                    this.name.innerText = this.product.name;
                    this.quantity.innerText = this.product.quantity;
                    this.price.innerText = this.product.price;
                }
            },

            remove: function () {
                this.emit('remove', this.product);
            }

        });

        return ProductRow;
    }
);