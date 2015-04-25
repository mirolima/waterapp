'use strict';

app.signInView = kendo.observable({});
(function(parent) {
    var signInViewModel = kendo.observable({
        username: '',
        password: '',
        signin: function() {
            var provider = app.data.defaultProvider;
            provider.Users.login(signInViewModel.username, signInViewModel.password,
                function(data) {
                    if (data && data.result) {
                        app.user = data.result;
                        app.mobileApp.navigate('home/view.html');
                    }
                },
                function(err) {}
            );
        }
    });

    parent.set('signInViewModel', signInViewModel);
})(app.signInView);