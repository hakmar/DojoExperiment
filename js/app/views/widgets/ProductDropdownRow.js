define(['dojo/Evented', 'dojo/_base/declare', 'dijit/_WidgetBase', 'dijit/_TemplatedMixin',
        'dojo/text!./_templates/ProductDropdownRow.html'],
        // , 'dijit/form/CheckBox'],
    function (Evented, declare, _WidgetBase, _TemplatedMixin, template) {

        var ProductRow = declare([Evented, _WidgetBase, _TemplatedMixin], {

            templateString: template,

            product: null,

            postCreate: function(){
                if (this.product) {
                    this.name.innerText = this.product.name;
                }
            },

            onProductSelection: function() {},

            performSelection: function (e) {
                this.onProductSelection(e.target.checked, this.product);
            }

        });

        return ProductRow;
    }
);