'use strict';

app.dataListView = kendo.observable({});
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
                    Tipo: {
                        field: 'Tipo',
                        defaultValue: ''
                    },
                }
            }
        },
        serverFiltering: true,
        serverSorting: true,
        serverPaging: true,
        pageSize: 50
    });

    var dataListViewModel = kendo.observable({
        dataSource: dataSource
    });

    parent.set('dataListViewModel', dataListViewModel);
})(app.dataListView);