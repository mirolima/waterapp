'use strict';

app.formView = kendo.observable({});
(function(parent) {
    var formViewModel = kendo.observable({
        fields: {
            switchNotifications: '',
            dateBirth: '',
            tel2: '',
            tel: '',
            email: '',
            username: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('formViewModel', formViewModel);
})(app.formView);