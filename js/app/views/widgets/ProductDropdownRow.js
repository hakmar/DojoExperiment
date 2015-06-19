define(['dojo/Evented', 'dojo/_base/declare', 'dijit/_WidgetBase', 'dijit/_TemplatedMixin',
        'dojo/text!./_templates/ProductDropdownRow.html'],
    function (Evented, declare, _WidgetBase, _TemplatedMixin, template) {

        var ProductRow = declare([_WidgetBase, _TemplatedMixin, Evented], {

            templateString: template,

            product: null,

            postCreate: function(){
                if (this.product) {
                    this.name.innerText = this.product.name;
                }
            },

            performSelection: function (e) {
                this.emit('productSelection', e.target.checked, this.product);
            }

        });

        return ProductRow;
    }
);