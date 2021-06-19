function changeScreensStyles(title, css_class, valid_list_item, valid_button, list_items, button_list) {
    $('#screen-title').text(`${title}`);
    $('#screen-logo').attr('class', `${css_class}`);

    $(`#${valid_list_item}`).css("display", "block");

    $(`#${valid_button}`).css({
        "backgroundColor": "#6C63FF",
        "boxShadow": "3px 2px 7px 1px #c3c3c3",
    });
    $(`#${valid_button} > i`).css("color", "#F8F8F8");
    $(`#${valid_button} > span`).css("color", "#F8F8F8");

    for (let i = 0; i < list_items.length; i++) {
        $(`#${list_items[i]}`).css("display", "none");

        $(`#${button_list[i]}`).css({
            "backgroundColor": "#FBFBFB",
            "boxShadow": "none"
        });
        $(`#${button_list[i]} > i`).css("color", "#BCBCBC");
        $(`#${button_list[i]} > span`).css("color", "#BCBCBC");
    }
}

//load Home screen
$('#btnHome').click(function () {
    let list_items = ['line-btnVehicles', 'line-btnDrivers', 'line-btnCustomers', 'line-btnNotifications', 'line-btnBookings', 'line-btnSettings', 'line-btnAbout'];
    let button_list = ['btnVehicles', 'btnDrivers', 'btnCustomers', 'btnNotifications', 'btnBookings', 'btnSettings', 'btnAbout'];
    changeScreensStyles('Home', 'fas fa-home', 'line-btnHome', 'btnHome', list_items, button_list);
    $('#main-container').html('<h1>Home Page</h1>');
});


//load Vehicle screen
$('#btnVehicles').click(function () {
    let list_items = ['line-btnHome', 'line-btnDrivers', 'line-btnCustomers', 'line-btnNotifications', 'line-btnBookings', 'line-btnSettings', 'line-btnAbout'];
    let button_list = ['btnHome', 'btnDrivers', 'btnCustomers', 'btnNotifications', 'btnBookings', 'btnSettings', 'btnAbout'];
    changeScreensStyles('Vehicles', 'fas fa-car-side', 'line-btnVehicles', 'btnVehicles', list_items, button_list);

    $.ajax({
        method: 'GET',
        async: true,
        url: './views/vehicle.html',
        contentType: 'text/html',
        success: (data) => {
            $('#main-container').html(data);
        }
    });
});


//load Drivers screen
$('#btnDrivers').click(function () {
    let list_items = ['line-btnHome', 'line-btnVehicles', 'line-btnCustomers', 'line-btnNotifications', 'line-btnBookings', 'line-btnSettings', 'line-btnAbout'];
    let button_list = ['btnHome', 'btnVehicles', 'btnCustomers', 'btnNotifications', 'btnBookings', 'btnSettings', 'btnAbout'];
    changeScreensStyles('Drivers', 'fas fa-users', 'line-btnDrivers', 'btnDrivers', list_items, button_list);

    $.ajax({
        method: 'GET',
        async: true,
        url: './views/drivers.html',
        contentType: 'text/html',
        success: (data) => {
            $('#main-container').html(data);
        }
    });
});


//load Customers screen
$('#btnCustomers').click(function () {
    let list_items = ['line-btnHome', 'line-btnVehicles', 'line-btnDrivers', 'line-btnNotifications', 'line-btnBookings', 'line-btnSettings', 'line-btnAbout'];
    let button_list = ['btnHome', 'btnVehicles', 'btnDrivers', 'btnNotifications', 'btnBookings', 'btnSettings', 'btnAbout'];
    changeScreensStyles('Customers', 'fas fa-user', 'line-btnCustomers', 'btnCustomers', list_items, button_list);
    $('#main-container').html('<h1>Customers Page</h1>');
});


//load Notifications screen
$('#btnNotifications').click(function () {
    let list_items = ['line-btnHome', 'line-btnVehicles', 'line-btnDrivers', 'line-btnCustomers', 'line-btnBookings', 'line-btnSettings', 'line-btnAbout'];
    let button_list = ['btnHome', 'btnVehicles', 'btnDrivers', 'btnCustomers', 'btnBookings', 'btnSettings', 'btnAbout'];
    changeScreensStyles('Notifications', 'fas fa-bell', 'line-btnNotifications', 'btnNotifications', list_items, button_list);
    $('#main-container').html('<h1>Notifications Page</h1>');
});


//load Bookings screen
$('#btnBookings').click(function () {
    let list_items = ['line-btnHome', 'line-btnVehicles', 'line-btnDrivers', 'line-btnCustomers', 'line-btnNotifications', 'line-btnSettings', 'line-btnAbout'];
    let button_list = ['btnHome', 'btnVehicles', 'btnDrivers', 'btnCustomers', 'btnNotifications', 'btnSettings', 'btnAbout'];
    changeScreensStyles('Bookings', 'fas fa-book-open', 'line-btnBookings', 'btnBookings', list_items, button_list);
    $('#main-container').html('<h1>Bookings Page</h1>');
});


//load Settings screen
$('#btnSettings').click(function () {
    let list_items = ['line-btnHome', 'line-btnVehicles', 'line-btnDrivers', 'line-btnCustomers', 'line-btnNotifications', 'line-btnBookings', 'line-btnAbout'];
    let button_list = ['btnHome', 'btnVehicles', 'btnDrivers', 'btnCustomers', 'btnNotifications', 'btnBookings', 'btnAbout'];
    changeScreensStyles('Settings', 'fas fa-sliders-h', 'line-btnSettings', 'btnSettings', list_items, button_list);
    $('#main-container').html('<h1>Settings Page</h1>');
});


//load About screen
$('#btnAbout').click(function () {
    let list_items = ['line-btnHome', 'line-btnVehicles', 'line-btnDrivers', 'line-btnCustomers', 'line-btnNotifications', 'line-btnBookings', 'line-btnSettings'];
    let button_list = ['btnHome', 'btnVehicles', 'btnDrivers', 'btnCustomers', 'btnNotifications', 'btnBookings', 'btnSettings'];
    changeScreensStyles('About', 'fas fa-user-circle', 'line-btnAbout', 'btnAbout', list_items, button_list);
    $('#main-container').html('<h1>About Page</h1>');
});