'use strict';

app.registerView = kendo.observable({});
(function(parent) {
    var registerViewModel = kendo.observable({
        username: '',
        password: '',
        email: '',
        register: function() {
            var provider = app.data.defaultProvider,
                attrs = {
                    Email: registerViewModel.email,
                };

            provider.Users.register(registerViewModel.username, registerViewModel.password, attrs,
                function(data) {
                    if (data) {
                        app.mobileApp.navigate('home/view.html');
                    }
                },
                function(err) {}
            );
        }
    });

    parent.set('registerViewModel', registerViewModel);
})(app.registerView);