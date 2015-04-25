'use strict';

app.dataListViewOrders = kendo.observable({});
(function(parent) {
    var dataProvider = app.data.aguaAppBackend;
    var dataSource = new kendo.data.DataSource({
        type: 'everlive',
        transport: {
            typeName: 'Pedidos',
            dataProvider: dataProvider
        },
        schema: {
            model: {
                fields: {
                    statusPedido: {
                        field: 'statusPedido',
                        defaultValue: ''
                    },
                    quantidade: {
                        field: 'quantidade',
                        defaultValue: ''
                    },
                },
                icon: function() {
                    var i = 'globe';
                    return kendo.format('km-icon km-{0}', i);
                }
            }
        },
        serverSorting: true,
        serverPaging: true,
        pageSize: 50
    });

    var dataListViewOrdersModel = kendo.observable({
        dataSource: dataSource,
        itemClick: function(e) {
            app.mobileApp.navigate('#dataListViewOrders/details.html?uid=' + e.dataItem.uid);
        },
        detailsShow: function(e) {
            var item = e.view.params.uid,
                itemModel = dataSource.getByUid(item);
            dataListViewOrdersModel.set('currentItem', itemModel);
        },
        currentItem: null
    });

    parent.set('dataListViewOrdersModel', dataListViewOrdersModel);
})(app.dataListViewOrders);