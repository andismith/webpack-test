import $ from 'jquery';

if (document.querySelectorAll('a').length) {
    require.ensure([], () => {
        const Button = require('./components/button').default;
        const button = new Button('example.com');

        button.render('a');
    }, 'button');
}

// If we have a title, render the Header component on it
if (document.querySelectorAll('h1').length) {
    require.ensure([], () => {
        const Header = require('./components/header');

        new Header().render('h1');
    }, 'header');
}
