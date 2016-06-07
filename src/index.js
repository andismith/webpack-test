import $ from 'jquery';

if (document.querySelectorAll('a').length) {
    require.ensure([], () => {
        const Button = require('./components/button').default;
        const button = new Button('example.com');

        button.render('a');
    }, 'button');
}
