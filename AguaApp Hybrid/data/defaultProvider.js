'use strict';
//create a reference for the data provider to be used throughout the app
(function() {
    app.data.defaultProvider = new Everlive({
        apiKey: 'lJVuZnfh0fvTeFfL',
        url: '//platform.telerik.com/bs-api/v1/',
        scheme: 'https'
    });
}());