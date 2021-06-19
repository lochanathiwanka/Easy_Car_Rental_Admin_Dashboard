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
            generateVID();
            generateVDID();
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

    $.ajax({
        method: 'GET',
        async: true,
        url: './views/customers.html',
        contentType: 'text/html',
        success: (data) => {
            $('#main-container').html(data);
        }
    });
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


//add vehicle
//vehicle form validation
$('#main-container').on('click', '#btnAddVehicle', function () {
    //fields validation
    /*let brand = $('#txtBrand')[0];
    let type = $('#txtType')[0];
    input_validation(type);
    input_validation(brand);*/

    let vdid = $('#txtVDID').val();

    //get image 1 data
    let image1Object = $('#vehicle_image_1')[0].files[0];
    let image1_file_name = `${vdid}-image1`;

    //get image 2 data
    let image2Object = $('#vehicle_image_2')[0].files[0];
    let image2_file_name = `${vdid}-image2`;

    //get image 3 data
    let image3Object = $('#vehicle_image_3')[0].files[0];
    let image3_file_name = `${vdid}-image3`;

    //get image 4 data
    let image4Object = $('#vehicle_image_4')[0].files[0];
    let image4_file_name = `${vdid}-image4`;

    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/vehicle',
        method: 'post',
        async: true,
        contentType: 'application/json',
        data: JSON.stringify({
            vid: $('#txtVid').val(),
            brand: $('#txtBrand').val(),
            type: $('#txtType').val(),
            no_of_passenger: parseInt($('#txtNoOfPassenger').val()),
            transmission_type: $('#txtTransmissionType').val(),
            fuel_type: $('#txtFuelType').val(),
            daily_rate: parseFloat($('#txtDailyRate').val()),
            monthly_rate: parseFloat($('#txtMonthlyRate').val()),
            mileage: parseInt($('#txtMileage').val()),
            free_mileage: $('#txtFreeMileage').val(),
            extra_km_price: parseFloat($('#txtExtraKMPrice').val()),
            vehicleDetailList: [
                {
                    vdid: vdid,
                    vehicle: {
                        vid: $('#txtVid').val()
                    },
                    image1: image1_file_name,
                    image2: image2_file_name,
                    image3: image3_file_name,
                    image4: image4_file_name,
                    reg_number: $('#txtRegNumber').val(),
                    color: $('#txtColor :selected').val(),
                    availability: $('#txtAvailability').val(),
                    maintenance: $('#txtMaintenance').val()
                }
            ]
        }),
        success: function (response) {
            uploadVehiclePhotos(image1Object, image1_file_name);
            uploadVehiclePhotos(image2Object, image2_file_name);
            uploadVehiclePhotos(image3Object, image3_file_name);
            uploadVehiclePhotos(image4Object, image4_file_name);
            alert(response.message);
            generateVID();
            generateVDID();
            resetVehicleFormFields();
        }
    });
});


//upload vehicle photos
function uploadVehiclePhotos(image, name) {
    let image_data = new FormData();
    image_data.append("image", image, name);

    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/vehicle_detail/upload_images',
        method: 'post',
        async: true,
        processData: false,
        contentType: false,
        data: image_data,
        success: function (response) {
            console.log(response);
        }
    });
}

function input_validation(value) {
    let input = value;
    const validityState = input.validity;

    if (validityState.valueMissing) {
        input.setCustomValidity('You gotta fill this out, yo!');
        input.reportValidity();
        return false;
    } else if (validityState.patternMismatch) {
        input.setCustomValidity('Regex error');
        input.reportValidity();
        return false;
    } else {
        input.setCustomValidity('');
        input.reportValidity();
        return true;
    }
}


//reset vehicle form fields
function resetVehicleFormFields() {
    $('#txtBrand').val('');
    $('#txtType').val('');
    $('#txtNoOfPassenger').val('');
    $('#txtTransmissionType').val('');
    $('#txtFuelType').val('');
    $('#txtDailyRate').val('');
    $('#txtMonthlyRate').val('');
    $('#txtMileage').val('');
    $('#txtFreeMileage').val('');
    $('#txtExtraKMPrice').val('');
    $('#txtRegNumber').val('');
    $("#txtColor")[0].selectedIndex = 0;
    $('#vehicle_image_1').val('');
    $('#vehicle_image_2').val('');
    $('#vehicle_image_3').val('');
    $('#vehicle_image_4').val('');
}


//generate VID
let vid;

function generateVID() {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/vehicle/lastid',
        method: 'get',
        async: true,
        dataType: 'json',
        success: function (response) {
            try {
                let last_vid = response.data;
                let newId = parseInt(last_vid.substring(1, 4)) + 1;
                if (newId < 10) {
                    vid = "V00" + newId;
                } else if (newId < 100) {
                    vid = "V0" + newId;
                } else {
                    vid = "V" + newId;
                }

            } catch (e) {
                vid = "V001";
            }
            $('#txtVid').val(vid);
        }
    });
}

//generate VDID
let vdid;

function generateVDID() {

    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/vehicle_detail/lastid',
        method: 'get',
        async: true,
        dataType: 'json',
        success: function (response) {
            try {
                let last_vdid = response.data;
                let newId = parseInt(last_vdid.substring(2, 5)) + 1;
                if (newId < 10) {
                    vdid = "VD00" + newId;
                } else if (newId < 100) {
                    vdid = "VD0" + newId;
                } else {
                    vdid = "VD" + newId;
                }
            } catch (e) {
                vdid = "VD001";
            }
            $('#txtVDID').val(vdid);
        }
    });
}
