const { log } = require('console');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Attach the public directory to our express server
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.redirect('/homepage');
});

// login
app.get('/login', (req, res) => {
    res.sendFile('/pages/login page.html', { root: __dirname });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // login logic here
    console.log(email)
    if (email == 'super@gmail.com'  & password == '1') {
        res.redirect('/Superdashboard');
    }
    else if (email == 'john@gmail.com'  & password == '2') {
        res.redirect('/dashboard');
    } else {
        res.redirect('/product');
    }
});

// sign up page
app.get('/signup', (req, res) => {
    res.sendFile('/pages/signup page.html', { root: __dirname });
});

app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    // signup logic here
    res.redirect('/login');
});

// product
app.get('/product', (req, res) => {
    res.sendFile('/pages/order_Products.html', { root: __dirname });
});

app.get('/place_order', (req, res) => {
    res.sendFile('/pages/order_Products(step 4).html', { root: __dirname });
});

// service
app.get('/service', (req, res) => {
    res.sendFile('/pages/order services(step1).html', { root: __dirname });
});

app.get('/book', (req, res) => {
    res.sendFile('/pages/order services(step2,3,4).html', { root: __dirname });
});

// homepage
app.get('/homepage', (req, res) => {
    res.sendFile('/pages/homepage.html', { root: __dirname });
});

/// Admin dashboard ///
app.get('/dashboard', (req, res) => {
    res.sendFile('/pages/dashboard_Page.html', { root: __dirname });
});

// dashboard product
app.get('/dashboard_product', (req, res) => {
    res.sendFile('/pages/Products_Page.html', { root: __dirname });
});

// dashboard suppliers
app.get('/supplier', (req, res) => {
    res.sendFile('/pages/Suppliers.html', { root: __dirname });
});

// dashboard billing / subscription
app.get('/dashboard_subscription', (req, res) => {
    res.sendFile('/pages/subscription_Page.html', { root: __dirname });
});

app.get('/dashboard_billing', (req, res) => {
    res.sendFile('/pages/subscription_billing.html', { root: __dirname });
});

// dashboard service
app.get('/dashboard_service', (req, res) => {
    res.sendFile('/pages/service_page.html', { root: __dirname });
});

// dashboard view shop
app.get('/dashboard_shop', (req, res) => {
    res.sendFile('/pages/shop(business owner view).html', { root: __dirname });
});

// shop setup
app.get('/dashboard_shopSetup', (req, res) => {
    res.sendFile('/pages/shop setup Page.html', { root: __dirname });
});

app.get('/dashboard_shopSetup_integration', (req, res) => {
    res.sendFile('/pages/setup_integrations.html', { root: __dirname });
});

app.get('/dashboard_shopSetup_team', (req, res) => {
    res.sendFile('/pages/setup_Team.html', { root: __dirname });
});

// projects
app.get('/dashboard_project', (req, res) => {
    res.sendFile('/pages/project page.html', { root: __dirname });
});

// clients
app.get('/dashboard_clients', (req, res) => {
    res.sendFile('/pages/client page.html', { root: __dirname });
});

app.get('/dashboard_clients_type', (req, res) => {
    res.sendFile('/pages/client type page.html', { root: __dirname });
});

// orders
app.get('/dashboard_orders', (req, res) => {
    res.sendFile('/pages/orders Page.html', { root: __dirname });
});

app.get('/dashboard_invoice', (req, res) => {
    res.sendFile('/pages/orders_and_invoices.html', { root: __dirname });
});

app.get('/dashboard_order_detail', (req, res) => {
    res.sendFile('/pages/orders_and_invoinces_details.html', { root: __dirname });
});

// notifications
app.get('/dashboard_notifications', (req, res) => {
    res.sendFile('/pages/Notifications Page.html', { root: __dirname });
});

/// Super Admin dashboard ///

app.get('/Superdashboard', (req, res) => {
    res.sendFile('/pages/SuperAdmin_dashboard.html', { root: __dirname });
});

// members
app.get('/Superdashboard_members', (req, res) => {
    res.sendFile('/pages/superAdmin_Members_Page.html', { root: __dirname });
});

// plan
app.get('/Superdashboard_plan', (req, res) => {
    res.sendFile('/pages/SuperAdmin_PlanPage.html', { root: __dirname });
});

// orders
app.get('/Superdashboard_orders', (req, res) => {
    res.sendFile('/pages/SuperAdmin_OrdersPage.html', { root: __dirname });
});

app.get('/Superdashboard_invoice', (req, res) => {
    res.sendFile('/pages/SuperAdmin_orders_and_invoices.html', { root: __dirname });
});

// notifications
app.get('/Superdashboard_notifications', (req, res) => {
    res.sendFile('/pages/SuperAdmin-Notification.html', { root: __dirname });
});

// Landing Page
app.get('/Superdashboard_landingPage', (req, res) => {
    res.sendFile('/pages/SuperAdmin_Landing_Page.html', { root: __dirname });
});

// Settings
app.get('/Superdashboard_setting', (req, res) => {
    res.sendFile('/pages/settings.html', { root: __dirname });
});

// listen for requests
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})