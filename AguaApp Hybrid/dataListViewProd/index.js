'use strict';

app.dataListViewProd = kendo.observable({});
(function(parent) {
    var dataProvider = app.data.aguaAppBackend;
    var dataSource = new kendo.data.DataSource({
        type: 'everlive',
        transport: {
            typeName: 'Produtos',
            dataProvider: dataProvider
        },
        schema: {
            model: {
                fields: {
                    Descricao: {
                        field: 'Descricao',
                        defaultValue: ''
                    },
                    Tipo: {
                        field: 'Tipo',
                        defaultValue: ''
                    },
                },
                icon: function() {
                    var i = 'globe';
                    return kendo.format('km-icon km-{0}', i);
                }
            }
        },
        serverFiltering: true,
        serverSorting: true,
        serverPaging: true,
        pageSize: 50
    });

    var dataListViewProdModel = kendo.observable({
        dataSource: dataSource
    });

    parent.set('dataListViewProdModel', dataListViewProdModel);
})(app.dataListViewProd);