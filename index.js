const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory

const cspDirectives = {
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
            "'self'",
            "'unsafe-eval'",
            "'unsafe-inline'",
            'https://play.google.com/billing',
            'https://www.google.com/recaptcha/',
            'https://www.gstatic.com',
            'https://www.google-analytics.com',
            'https://mc.yandex.ru',
            'https://apis.google.com',
            'https://apps.googleusercontent.com',
            'https://*.apps.googleusercontent.com',
            'https://vk.com',
            'https://connect.facebook.net',
            'https://api.odnoklassniki.ru',
            'https://games.mail.ru',
            'https://store.my.games',
            'https://games.rambler.ru',
            'https://static.miniclipcdn.com',
            'https://www.googletagmanager.com',
            'https://vkplay.ru',
            'https://js.braintreegateway.com',
            'https://assets.braintreegateway.com',
            'https://songbirdstag.cardinalcommerce.com',
            'https://www.paypalobjects.com',
            '*.paypal.com',
            'https://songbird.cardinalcommerce.com',
            'https://requestly.onrender.com'
        ]
    }
};

// Use Helmet to set CSP headers
app.use(
    helmet.contentSecurityPolicy(cspDirectives)
);



app.use(express.static(path.join(__dirname, 'public')));

// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});