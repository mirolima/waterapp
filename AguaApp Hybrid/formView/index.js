'use strict';

app.formView = kendo.observable({});
(function(parent) {
    var formViewModel = kendo.observable({
        fields: {},
        submit: function() {},
        cancel: function() {}
    });

    parent.set('formViewModel', formViewModel);
})(app.formView);