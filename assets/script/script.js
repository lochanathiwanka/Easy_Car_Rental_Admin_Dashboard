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

//-------------------------------Load Screens----------------------------------

//load Home screen
$('#btnHome').click(function () {
    let list_items = ['line-btnVehicles', 'line-btnDrivers', 'line-btnCustomers', 'line-btnRequests', 'line-btnBookings', 'line-btnSchedule', 'line-btnSettings', 'line-btnAbout'];
    let button_list = ['btnVehicles', 'btnDrivers', 'btnCustomers', 'btnRequests', 'btnBookings', 'btnSchedule', 'btnSettings', 'btnAbout'];
    changeScreensStyles('Home', 'fas fa-home', 'line-btnHome', 'btnHome', list_items, button_list);
    $('#main-container').html('<h1>Home Page</h1>');
});
//load Vehicle screen
$('#btnVehicles').click(function () {
    let list_items = ['line-btnHome', 'line-btnDrivers', 'line-btnCustomers', 'line-btnRequests', 'line-btnBookings', 'line-btnSchedule', 'line-btnSettings', 'line-btnAbout'];
    let button_list = ['btnHome', 'btnDrivers', 'btnCustomers', 'btnRequests', 'btnBookings', 'btnSchedule', 'btnSettings', 'btnAbout'];
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
            loadAllVehicles();
            vehicleTblOnClick();
            selectVehicleFromVehicleDataList();
            vehicleResetButtonOnClick();
            deleteVehicle();
            $('#btnDeleteVehicleCategory').prop('disabled', true);
            $('#btnDeleteVehicle').prop('disabled', true);
            $('#btnUpdateVehicleCategory').prop('disabled', true);
            $('#btnUpdateVehicle').prop('disabled', true);
            updateVehicle();
            updateVehicleCategory();
        }
    });
});
//load Drivers screen
$('#btnDrivers').click(function () {
    let list_items = ['line-btnHome', 'line-btnVehicles', 'line-btnCustomers', 'line-btnRequests', 'line-btnBookings', 'line-btnSchedule', 'line-btnSettings', 'line-btnAbout'];
    let button_list = ['btnHome', 'btnVehicles', 'btnCustomers', 'btnRequests', 'btnBookings', 'btnSchedule', 'btnSettings', 'btnAbout'];
    changeScreensStyles('Drivers', 'fas fa-users', 'line-btnDrivers', 'btnDrivers', list_items, button_list);

    $.ajax({
        method: 'GET',
        async: true,
        url: './views/drivers.html',
        contentType: 'text/html',
        success: (data) => {
            $('#main-container').html(data);
            loadAllDrivers();
            driverTableOnClick();
            selectDriverFromDriversDataList();
            $('#btnDeleteDriver').attr('disabled', true);
            $('#btnUpdateDriver').attr('disabled', true);
        }
    });
});
//load Customers screen
$('#btnCustomers').click(function () {
    let list_items = ['line-btnHome', 'line-btnVehicles', 'line-btnDrivers', 'line-btnRequests', 'line-btnBookings', 'line-btnSchedule', 'line-btnSettings', 'line-btnAbout'];
    let button_list = ['btnHome', 'btnVehicles', 'btnDrivers', 'btnRequests', 'btnBookings', 'btnSchedule', 'btnSettings', 'btnAbout'];
    changeScreensStyles('Customers', 'fas fa-user', 'line-btnCustomers', 'btnCustomers', list_items, button_list);

    $.ajax({
        method: 'GET',
        async: true,
        url: './views/customers.html',
        contentType: 'text/html',
        success: (data) => {
            $('#main-container').html(data);
            loadAllCustomers();
            customerTableOnClick();
            selectCustomerFromCustomersDataList();
            $('#btnDeleteCustomer').attr('disabled', true);
            $('#btnUpdateCustomer').attr('disabled', true);
        }
    });
});
//load Notifications screen
$('#btnRequests').click(function () {
    let list_items = ['line-btnHome', 'line-btnVehicles', 'line-btnDrivers', 'line-btnCustomers', 'line-btnBookings', 'line-btnSchedule', 'line-btnSettings', 'line-btnAbout'];
    let button_list = ['btnHome', 'btnVehicles', 'btnDrivers', 'btnCustomers', 'btnBookings', 'btnSchedule', 'btnSettings', 'btnAbout'];
    changeScreensStyles('Requests', 'fas fa-bell', 'line-btnRequests', 'btnRequests', list_items, button_list);

    $.ajax({
        method: 'GET',
        async: true,
        url: './views/requests.html',
        contentType: 'text/html',
        success: (data) => {
            $('#main-container').html(data);
            loadAllRequests();
            loadAllVehicles();
            requestTblOnClick();
            requestDetailTblOnClick();
            selectDriverFromSelectBox();
            selectVehicleFromSelectBox();
            confirmRequest();
            rejectRequest();
            btnReqDeleteOnAction();
            addRequestToBooking();
            onMessageTyping();
            request_message = "Your request has been rejected!";
        }
    });
});
//load Bookings screen
$('#btnBookings').click(function () {
    let list_items = ['line-btnHome', 'line-btnVehicles', 'line-btnDrivers', 'line-btnCustomers', 'line-btnRequests', 'line-btnSchedule', 'line-btnSettings', 'line-btnAbout'];
    let button_list = ['btnHome', 'btnVehicles', 'btnDrivers', 'btnCustomers', 'btnRequests', 'btnSchedule', 'btnSettings', 'btnAbout'];
    changeScreensStyles('Bookings', 'fas fa-book-open', 'line-btnBookings', 'btnBookings', list_items, button_list);

    $.ajax({
        method: 'GET',
        async: true,
        url: './views/booking.html',
        contentType: 'text/html',
        success: (data) => {
            $('#main-container').html(data);
            loadAllBookings();
            bookingTblOnClick();
            bookingDetailTblOnClick();
            updateBookingDetails();
        }
    });
});
//load Schedule screen
$('#btnSchedule').click(function () {
    let list_items = ['line-btnHome', 'line-btnVehicles', 'line-btnDrivers', 'line-btnCustomers', 'line-btnRequests', 'line-btnBookings', 'line-btnSettings', 'line-btnAbout'];
    let button_list = ['btnHome', 'btnVehicles', 'btnDrivers', 'btnCustomers', 'btnRequests', 'btnBookings', 'btnSettings', 'btnAbout'];
    changeScreensStyles('Schedule', 'fas fa-book-open', 'line-btnSchedule', 'btnSchedule', list_items, button_list);

    $.ajax({
        method: 'GET',
        async: true,
        url: './views/schedule.html',
        contentType: 'text/html',
        success: (data) => {
            $('#main-container').html(data);
            loadAllDriversSchedule();
            loadAllVehicleSchedule();
            updateDriverSchedule();
            updateVehicleSchedule();
            driversScheduleTableOnClick();
            vehicleScheduleTableOnClick();
            deleteDriverSchedule();
            deleteVehicleSchedule();
        }
    });
});
//load Settings screen
$('#btnSettings').click(function () {
    let list_items = ['line-btnHome', 'line-btnVehicles', 'line-btnDrivers', 'line-btnCustomers', 'line-btnRequests', 'line-btnBookings', 'line-btnSchedule', 'line-btnAbout'];
    let button_list = ['btnHome', 'btnVehicles', 'btnDrivers', 'btnCustomers', 'btnRequests', 'btnBookings', 'btnSchedule', 'btnAbout'];
    changeScreensStyles('Settings', 'fas fa-sliders-h', 'line-btnSettings', 'btnSettings', list_items, button_list);
    $('#main-container').html('<h1>Settings Page</h1>');
});
//load About screen
$('#btnAbout').click(function () {
    let list_items = ['line-btnHome', 'line-btnVehicles', 'line-btnDrivers', 'line-btnCustomers', 'line-btnRequests', 'line-btnBookings', 'line-btnSchedule', 'line-btnSettings'];
    let button_list = ['btnHome', 'btnVehicles', 'btnDrivers', 'btnCustomers', 'btnRequests', 'btnBookings', 'btnSchedule', 'btnSettings'];
    changeScreensStyles('About', 'fas fa-user-circle', 'line-btnAbout', 'btnAbout', list_items, button_list);
    $('#main-container').html('<h1>About Page</h1>');
});

//-------------------------------------------------------------------------------------------------------------------

//------------------ Vehicle Screen-----------------------------------------------------------------------------

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

//vehicle form validation
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

//add vehicle
$('#main-container').on('click', '#btnAddVehicle', function () {
    //fields validation
    let brand = $('#txtBrand')[0];
    let type = $('#txtType')[0];
    let fuel_type = $('#txtFuelType')[0];
    let transmission_type = $('#txtTransmissionType')[0];
    let no_of_passenger = $('#txtNoOfPassenger')[0];
    let daily_rate = $('#txtDailyRate')[0];
    let monthly_rate = $('#txtMonthlyRate')[0];
    let mileage = $('#txtMileage')[0];
    let free_mileage = $('#txtFreeMileage')[0];
    let extra_km_price = $('#txtExtraKMPrice')[0];
    let ldw_fee = $('#txtLdwFee')[0];
    let reg_number = $('#txtRegNumber')[0];
    let txt_color = $('#txtColor')[0];
    let image1 = $('#vehicle_image_1')[0];
    let image2 = $('#vehicle_image_2')[0];
    let image3 = $('#vehicle_image_3')[0];
    let image4 = $('#vehicle_image_4')[0];
    let txt_available = $('#txtAvailability')[0];
    let txt_maintenance = $('#txtMaintenance')[0];


    if (input_validation(brand) && input_validation(type) && input_validation(fuel_type) && input_validation(transmission_type) && input_validation(no_of_passenger)
        && input_validation(daily_rate) && input_validation(monthly_rate) && input_validation(mileage) && input_validation(free_mileage) && input_validation(extra_km_price)
        && input_validation(ldw_fee) && input_validation(reg_number) && input_validation(txt_color) && input_validation(txt_available) && input_validation(txt_maintenance)
        && input_validation(image1) && input_validation(image2) && input_validation(image3) && input_validation(image4)) {

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
                ldw_fee: parseFloat($('#txtLdwFee').val()),
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
                loadAllVehicles();
                resetVehicleFormFields();
            }
        });
    }

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

//reset vehicle form fields
function resetVehicleFormFields() {
    generateVID();
    generateVDID();
    $('#txtBrand').val('');
    $('#txtType').val('');
    $('#txtNoOfPassenger').val('');
    $('#txtTransmissionType').val('');
    $('#txtFuelType').val('');
    $('#txtDailyRate').val('');
    $('#txtMonthlyRate').val('');
    $('#txtLdwFee').val('');
    $('#txtMileage').val('');
    $('#txtFreeMileage').val('');
    $('#txtExtraKMPrice').val('');
    $('#txtRegNumber').val('');
    $("#txtColor")[0].selectedIndex = 0;
    $('#vehicle_image_1').val('');
    $('#vehicle_image_2').val('');
    $('#vehicle_image_3').val('');
    $('#vehicle_image_4').val('');
    $('#txtAvailability').val('Available');
    $('#txtMaintenance').val('No');
}

//load all vehicles
let vehicles_list;

function loadAllVehicles() {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/vehicle',
        method: 'get',
        async: true,
        dataType: 'json',
        success: function (response) {
            vehicles_list = response.data;
            $('#vehicle-table > tbody').empty();
            $('#vehicle-data-list').empty();
            for (let i = 0; i < vehicles_list.length; i++) {
                for (let j = 0; j < vehicles_list[i].vehicleDetailList.length; j++) {
                    $('#vehicle-table > tbody').append(
                        `
                        <tr>
                            <td>${vehicles_list[i].vid}</td>
                            <td>${vehicles_list[i].vehicleDetailList[j].vdid}</td>
                            <td>${vehicles_list[i].brand}</td>
                            <td>${vehicles_list[i].type}</td>
                        </tr>
                        `
                    );
                }
                //add vehicle brand into vehicle data list
                addDataIntoVehicleDataList(vehicles_list[i].brand);
            }
        }
    });
}

loadAllVehicles();

//add vehicle data into vehicle-data-list
function addDataIntoVehicleDataList(vehicle_brand) {
    $('#vehicle-data-list').append(
        `
         <option value="${vehicle_brand}">
        `
    );
}

//select vehicle from the vehicle table
function vehicleTblOnClick() {
    $('#vehicle-table > tbody').on('click', 'tr', function () {
        let selectedRow = $(this).closest('tr');
        for (let i = 0; i < vehicles_list.length; i++) {
            if (vehicles_list[i].vid === selectedRow.find('td:eq(0)').text()) {

                $('#txtVid').val(vehicles_list[i].vid);
                $('#txtBrand').val(vehicles_list[i].brand);
                $('#txtType').val(vehicles_list[i].type);
                $('#txtNoOfPassenger').val(vehicles_list[i].no_of_passenger);
                $('#txtTransmissionType').val(vehicles_list[i].transmission_type);
                $('#txtFuelType').val(vehicles_list[i].fuel_type);
                $('#txtDailyRate').val(vehicles_list[i].daily_rate);
                $('#txtMonthlyRate').val(vehicles_list[i].monthly_rate);
                $('#txtLdwFee').val(vehicles_list[i].ldw_fee);
                $('#txtMileage').val(vehicles_list[i].mileage);
                $('#txtFreeMileage').val(vehicles_list[i].free_mileage);
                $('#txtExtraKMPrice').val(vehicles_list[i].extra_km_price);

                for (let j = 0; j < vehicles_list[i].vehicleDetailList.length; j++) {
                    if (vehicles_list[i].vehicleDetailList[j].vdid === selectedRow.find('td:eq(1)').text()) {
                        $('#txtVDID').val(vehicles_list[i].vehicleDetailList[j].vdid);
                        $('#txtRegNumber').val(vehicles_list[i].vehicleDetailList[j].reg_number);
                        $('#txtColor').val(vehicles_list[i].vehicleDetailList[j].color);
                        $('#txtAvailability').val(vehicles_list[i].vehicleDetailList[j].availability);
                        $('#txtMaintenance').val(vehicles_list[i].vehicleDetailList[j].maintenance);
                    }
                }

                disableVehicleFormFields(true, false);
                $('#btnAddVehicle').prop('disabled', true);
                $('#btnDeleteVehicle').prop('disabled', false);
                $('#btnUpdateVehicle').prop('disabled', false);
                $('#btnDeleteVehicleCategory').prop('disabled', true);
                $('#btnUpdateVehicleCategory').prop('disabled', true);
            }

        }
    });
}

//select vehicle from the vehicle data list
function selectVehicleFromVehicleDataList() {
    $('#txtSearchVehicle').on('keyup', function () {
        for (let i = 0; i < vehicles_list.length; i++) {
            if (vehicles_list[i].brand.toLowerCase().trim() === $(this).val().toLowerCase().trim()) {
                disableVehicleFormFields(false);

                $('#txtVid').val(vehicles_list[i].vid);
                $('#txtBrand').val(vehicles_list[i].brand);
                $('#txtType').val(vehicles_list[i].type);
                $('#txtNoOfPassenger').val(vehicles_list[i].no_of_passenger);
                $('#txtTransmissionType').val(vehicles_list[i].transmission_type);
                $('#txtFuelType').val(vehicles_list[i].fuel_type);
                $('#txtDailyRate').val(vehicles_list[i].daily_rate);
                $('#txtMonthlyRate').val(vehicles_list[i].monthly_rate);
                $('#txtLdwFee').val(vehicles_list[i].ldw_fee);
                $('#txtMileage').val(vehicles_list[i].mileage);
                $('#txtFreeMileage').val(vehicles_list[i].free_mileage);
                $('#txtExtraKMPrice').val(vehicles_list[i].extra_km_price);

                generateVDID();
                $('#txtRegNumber').val('');
                $("#txtColor")[0].selectedIndex = 0;
                $('#vehicle_image_1').val('');
                $('#vehicle_image_2').val('');
                $('#vehicle_image_3').val('');
                $('#vehicle_image_4').val('');

                $('#btnDeleteVehicle').prop('disabled', true);
                $('#btnUpdateVehicle').prop('disabled', true);
                $('#btnDeleteVehicleCategory').prop('disabled', false);
                $('#btnUpdateVehicleCategory').prop('disabled', false);
            }
        }
    });
}

//disable vehicle form fields
function disableVehicleFormFields(value, value2) {
    $('#txtVid').prop('disabled', value);
    $('#txtBrand').prop('disabled', value);
    $('#txtType').prop('disabled', value);
    $('#txtNoOfPassenger').prop('disabled', value);
    $('#txtTransmissionType').prop('disabled', value);
    $('#txtFuelType').prop('disabled', value);
    $('#txtDailyRate').prop('disabled', value);
    $('#txtMonthlyRate').prop('disabled', value);
    $('#txtLdwFee').prop('disabled', value);
    $('#txtMileage').prop('disabled', value);
    $('#txtFreeMileage').prop('disabled', value);
    $('#txtExtraKMPrice').prop('disabled', value);

    $('#txtVDID').prop('disabled', value2);
    $('#txtRegNumber').prop('disabled', value2);
    $('#txtColor').prop('disabled', value2);
    $('#vehicle_image_1').prop('disabled', value2);
    $('#vehicle_image_2').prop('disabled', value2);
    $('#vehicle_image_3').prop('disabled', value2);
    $('#vehicle_image_4').prop('disabled', value2);
    $('#txtAvailability').prop('disabled', value2);
    $('#txtMaintenance').prop('disabled', value2);

    $('#btnAddVehicle').prop('disabled', value);
    /*$('#btnDeleteVehicle').prop('disabled', value);
    $('#btnUpdateVehicle').prop('disabled', value);*/

    $('#txtSearchVehicle').val('');
}

//vehicle reset button on click
function vehicleResetButtonOnClick() {
    $('#btnReset').click(function () {
        resetVehicleFormFields();
        disableVehicleFormFields(false);
        $('#btnDeleteVehicle').prop('disabled', true);
        $('#btnUpdateVehicle').prop('disabled', true);
        $('#btnDeleteVehicleCategory').prop('disabled', true);
        $('#btnUpdateVehicleCategory').prop('disabled', true);
    });
}

//delete vehicle
function deleteVehicle() {
    $('#btnDeleteVehicle').click(function () {
        $.ajax({
            url: 'http://localhost:8080/Easy_Car_Rental_Server/vehicle_detail/?id=' + $('#txtVDID').val(),
            method: 'DELETE',
            async: true,
            dataType: 'json',
            success: function (response) {
                alert(response.message);
                deleteVehiclePhotos($('#txtVDID').val());
                loadAllVehicles();
                resetVehicleFormFields();
                disableVehicleFormFields(false);
                $('#btnDeleteVehicle').prop('disabled', true);
                $('#btnUpdateVehicle').prop('disabled', true);
            }
        });
    });
}

//delete vehicle photos
function deleteVehiclePhotos(vdid) {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/vehicle_detail/delete_images/?id=' + vdid,
        method: 'delete',
        async: true,
        dataType: 'json',
        success: function (response) {
        }
    });
}

//update vehicle
function updateVehicle() {
    $('#btnUpdateVehicle').click(function () {

        let image1 = '';
        let image2 = '';
        let image3 = '';
        let image4 = '';

        for (let i = 0; i < vehicles_list.length; i++) {
            for (let j = 0; j < vehicles_list[i].vehicleDetailList.length; j++) {
                if (vehicles_list[i].vehicleDetailList[j].vdid === $('#txtVDID').val()) {
                    image1 = vehicles_list[i].vehicleDetailList[j].image1;
                    image2 = vehicles_list[i].vehicleDetailList[j].image2;
                    image3 = vehicles_list[i].vehicleDetailList[j].image3;
                    image4 = vehicles_list[i].vehicleDetailList[j].image4;
                }
            }
        }

        $.ajax({
            url: 'http://localhost:8080/Easy_Car_Rental_Server/vehicle_detail',
            method: 'put',
            async: true,
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({
                vdid: $('#txtVDID').val(),
                vehicle: {
                    vid: $('#txtVid').val()
                },
                image1: image1,
                image2: image2,
                image3: image3,
                image4: image4,
                reg_number: $('#txtRegNumber').val(),
                color: $('#txtColor :selected').val(),
                availability: $('#txtAvailability').val(),
                maintenance: $('#txtMaintenance').val()
            }),
            success: function (response) {
                alert(response.message);
                resetVehicleFormFields();
                disableVehicleFormFields(false, false);
                loadAllVehicles();
                $('#btnDeleteVehicle').prop('disabled', true);
                $('#btnUpdateVehicle').prop('disabled', true);
            }
        });
    });
}

//update vehicle category
function updateVehicleCategory() {
    $('#btnUpdateVehicleCategory').click(function () {

        $.ajax({
            url: 'http://localhost:8080/Easy_Car_Rental_Server/vehicle',
            method: 'put',
            async: true,
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({
                vid: $('#txtVid').val(),
                brand: $('#txtBrand').val(),
                type: $('#txtType').val(),
                no_of_passenger: parseInt($('#txtNoOfPassenger').val()),
                transmission_type: $('#txtTransmissionType').val(),
                fuel_type: $('#txtFuelType').val(),
                daily_rate: parseFloat($('#txtDailyRate').val()),
                monthly_rate: parseFloat($('#txtMonthlyRate').val()),
                ldw_fee: parseFloat($('#txtLdwFee').val()),
                mileage: parseInt($('#txtMileage').val()),
                free_mileage: $('#txtFreeMileage').val(),
                extra_km_price: parseFloat($('#txtExtraKMPrice').val())
            }),
            success: function (response) {
                alert(response.message);
                console.log(response);
                resetVehicleFormFields();
                disableVehicleFormFields(false, false);
                loadAllVehicles();
                $('#btnDeleteVehicleCategory').prop('disabled', true);
                $('#btnUpdateVehicleCategory').prop('disabled', true);
            }
        });
    });
}

//--------------------------------------------------------------------------------------------

//-------------------------Drivers----------------------------

//load all drivers
let drivers_list;

function loadAllDrivers() {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/driver',
        method: 'get',
        async: true,
        dataType: 'json',
        success: function (response) {
            drivers_list = response.data;
            $('#drivers-table > tbody').empty();
            $('#drivers-data-list').empty();
            for (let i = 0; i < drivers_list.length; i++) {

                $('#drivers-table > tbody').append(
                    `
                        <tr>
                            <td>${drivers_list[i].user.uid}</td>
                            <td>${drivers_list[i].did}</td>
                            <td>${drivers_list[i].name}</td>
                            <td>${drivers_list[i].nic}</td>
                            <td>${drivers_list[i].user.email}</td>
                        </tr>
                        `
                );

                //add driver's name into drivers data list
                addDataIntoDriversDataList(drivers_list[i].name);
            }
        }
    });
}

loadAllDrivers();

//add drivers data into drivers-data-list
function addDataIntoDriversDataList(driver_name) {
    $('#drivers-data-list').append(
        `
         <option value="${driver_name}">
        `
    );
}

//driver table on click
function driverTableOnClick() {
    $('#drivers-table > tbody').on('click', 'tr', function () {
        let selectedRow = $(this).closest('tr');
        for (let i = 0; i < drivers_list.length; i++) {
            if (drivers_list[i].did === selectedRow.find('td:eq(1)').text()) {

                $('#txtDriverUID').val(drivers_list[i].user.uid);
                $('#txtDID').val(drivers_list[i].did);
                $('#txtDriverName').val(drivers_list[i].name);
                $('#txtDriverAddress').val(drivers_list[i].address);
                $('#txtDriverContact').val(drivers_list[i].contact);
                $('#txtDriverAvailability').val(drivers_list[i].availability);
                $('#txtDriverNIC').val(drivers_list[i].nic);
                $('#txtDriverDRLicense').val(drivers_list[i].dr_license);

                setUserImages('driver', drivers_list[i].nic_image, 'driver_nic_image');
                setUserImages('driver', drivers_list[i].dr_license_image, 'driver_drlicense_image');

                $('#btnDeleteDriver').attr('disabled', false);
                $('#btnUpdateDriver').attr('disabled', false);
            }

        }
    });
}

//select driver from the driver data list
function selectDriverFromDriversDataList() {
    $('#txtSearchDriver').on('keyup', function () {
        for (let i = 0; i < drivers_list.length; i++) {
            if (drivers_list[i].name === $(this).val()) {
                $('#txtDriverUID').val(drivers_list[i].user.uid);
                $('#txtDID').val(drivers_list[i].did);
                $('#txtDriverName').val(drivers_list[i].name);
                $('#txtDriverAddress').val(drivers_list[i].address);
                $('#txtDriverContact').val(drivers_list[i].contact);
                $('#txtDriverAvailability').val(drivers_list[i].availability);
                $('#txtDriverNIC').val(drivers_list[i].nic);
                $('#txtDriverDRLicense').val(drivers_list[i].dr_license);

                setUserImages('driver', drivers_list[i].nic_image, 'driver_nic_image');
                setUserImages('driver', drivers_list[i].dr_license_image, 'driver_drlicense_image');

                $('#btnDeleteDriver').attr('disabled', false);
                $('#btnUpdateDriver').attr('disabled', false);
            }
        }
    });
}

//----------------------------------------------------------------------------------------------

//--------------------Customers---------------------------

//load all customers
let customers_list;

function loadAllCustomers() {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/customer',
        method: 'get',
        async: true,
        dataType: 'json',
        success: function (response) {
            customers_list = response.data;
            $('#customers-table > tbody').empty();
            $('#customers-data-list').empty();
            for (let i = 0; i < customers_list.length; i++) {
                $('#customers-table > tbody').append(
                    `
                        <tr>
                            <td>${customers_list[i].user.uid}</td>
                            <td>${customers_list[i].id}</td>
                            <td>${customers_list[i].name}</td>
                            <td>${customers_list[i].nic}</td>
                            <td>${customers_list[i].user.email}</td>
                        </tr>
                        `
                );

                //add customers's name into customers data list
                addDataIntoCustomersDataList(customers_list[i].name);
            }
        }
    });
}

//add customers data into customers-data-list
function addDataIntoCustomersDataList(customer_name) {
    $('#customers-data-list').append(
        `
         <option value="${customer_name}">
        `
    );
}

//customer table on click
function customerTableOnClick() {
    $('#customers-table > tbody').on('click', 'tr', function () {
        let selectedRow = $(this).closest('tr');
        for (let i = 0; i < customers_list.length; i++) {
            if (customers_list[i].id === selectedRow.find('td:eq(1)').text()) {
                $('#txtCustomerUID').val(customers_list[i].user.uid);
                $('#txtCID').val(customers_list[i].id);
                $('#txtCustomerName').val(customers_list[i].name);
                $('#txtCustomerAddress').val(customers_list[i].address);
                $('#txtCustomerContact').val(customers_list[i].contact);
                $('#txtCustomerNIC').val(customers_list[i].nic);
                $('#txtCustomerDRLicense').val(customers_list[i].dr_license);

                setUserImages('customer', customers_list[i].nic_image, 'customer_nic_image');
                setUserImages('customer', customers_list[i].dr_license_image, 'customer_drlicense_image');

                $('#btnDeleteCustomer').attr('disabled', false);
                $('#btnUpdateCustomer').attr('disabled', false);
            }

        }
    });
}

//select customer from the customers data list
function selectCustomerFromCustomersDataList() {
    $('#txtSearchCustomer').on('keyup', function () {
        for (let i = 0; i < customers_list.length; i++) {
            if (customers_list[i].name === $(this).val()) {
                $('#txtCustomerUID').val(customers_list[i].user.uid);
                $('#txtCID').val(customers_list[i].id);
                $('#txtCustomerName').val(customers_list[i].name);
                $('#txtCustomerAddress').val(customers_list[i].address);
                $('#txtCustomerContact').val(customers_list[i].contact);
                $('#txtCustomerNIC').val(customers_list[i].nic);
                $('#txtCustomerDRLicense').val(customers_list[i].dr_license);

                setUserImages('customer', customers_list[i].nic_image, 'customer_nic_image');
                setUserImages('customer', customers_list[i].dr_license_image, 'customer_drlicense_image');

                $('#btnDeleteCustomer').attr('disabled', false);
                $('#btnUpdateCustomer').attr('disabled', false);
            }
        }
    });
}

//get and set user nic image & driving license image
function setUserImages(user_role, image, img_source) {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/Easy_Car_Rental_Server/${user_role}/get_image/${image}`,
        beforeSend: function (xhr) {
            xhr.overrideMimeType('text/plain; charset=x-user-defined');
        },
        success: function (result, textStatus, jqXHR) {
            if (result.length < 1) {
                alert("The thumbnail doesn't exist");
                $("#thumbnail").attr("src", "data:image/png;base64,");
                return
            }

            let binary = "";
            let responseText = jqXHR.responseText;
            let responseTextLen = responseText.length;

            for (i = 0; i < responseTextLen; i++) {
                binary += String.fromCharCode(responseText.charCodeAt(i) & 255)
            }
            $("#thumbnail").attr("src", "data:image/png;base64,");

            $(`#${img_source}`).attr('src', 'data:image/jpg;base64,' + btoa(binary));
        },
        error: function (xhr, textStatus, errorThrown) {
            alert("Error in getting document " + textStatus);
        }
    });
}

//------------------------------------------------------------------------------------------------

//--------------------Requests---------------------

//load all requests
let request_list;

function loadAllRequests() {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/request',
        method: 'get',
        async: true,
        dataType: 'json',
        success: function (response) {
            request_list = response.data;
            $('#request-table > tbody').empty();
            for (let i = 0; i < request_list.length; i++) {
                $('#request-table > tbody').append(
                    `
                        <tr>
                            <td>${request_list[i].rid}</td>
                            <td>${request_list[i].customer.id}</td>
                            <td>${request_list[i].total_fee}</td>
                        </tr>
                        `
                );
            }
        }
    });
}

loadAllRequests();

//select a request from the request table
function requestTblOnClick() {
    $('#request-table > tbody').on('click', 'tr', function () {
        let selectedRow = $(this).closest('tr');
        $('#txtReq-Status').prop('disabled', true);
        $('#txtReq-Message').prop('disabled', true);
        request_message = "Your request has been rejected!";
        $("#req-SearchVehicle")[0].selectedIndex = 0;
        $('#txtReq-VehicleReg').val('');
        resetRequestDetailFormFields();
        $('#request-detail-table > tbody').empty();
        for (let i = 0; i < request_list.length; i++) {
            if (request_list[i].rid === selectedRow.find('td:eq(0)').text()) {
                for (let j = 0; j < request_list[i].request_detail_list.length; j++) {
                    $('#request-detail-table > tbody').append(
                        `
                        <tr>
                            <td>${request_list[i].rid}</td>
                            <td>${request_list[i].request_detail_list[j].pk.vid}</td>
                            <td>${request_list[i].request_detail_list[j].pickup_date}</td>
                            <td>${request_list[i].request_detail_list[j].return_date}</td>
                        </tr>
                        `
                    );
                }
                //set bank slip
                setBankSlip(request_list[i].bank_slip);
                disableBankSlipContainer(true);
                $('#req-search-driver-container').css('display', 'none');
                $('#req-driver-name-container').css('display', 'none');
            }

        }
    });
}

//select a request from the request detail table
function requestDetailTblOnClick() {
    $('#request-detail-table > tbody').on('click', 'tr', function () {
        let selectedRow = $(this).closest('tr');
        $('#txtReq-Status').prop('disabled', false);
        $('#txtReq-Message').prop('disabled', false);
        request_message = "Your request has been rejected!";
        $('#txtReq-DriverName').val('');
        $('#txtReq-VehicleReg').val('');
        for (let i = 0; i < request_list.length; i++) {
            if (request_list[i].rid === selectedRow.find('td:eq(0)').text()) {
                $('#txtRID').val(request_list[i].rid);
                $('#txtReq-CID').val(request_list[i].customer.id);

                for (let j = 0; j < request_list[i].request_detail_list.length; j++) {
                    if (request_list[i].request_detail_list[j].pk.vid === selectedRow.find('td:eq(1)').text()) {
                        $('#txtReq-VID').val(request_list[i].request_detail_list[j].pk.vid);
                        $('#txtReq-QTY').val(request_list[i].request_detail_list[j].qty);
                        $('#txtReq-RentalFee').val(request_list[i].request_detail_list[j].rental_fee);
                        $('#txtReq-LDWFee').val(request_list[i].request_detail_list[j].ldw_fee);
                        $('#txtReq-PickupDate').val(request_list[i].request_detail_list[j].pickup_date);
                        $('#txtReq-ReturnDate').val(request_list[i].request_detail_list[j].return_date);
                        $('#txtReq-Driver').val(request_list[i].request_detail_list[j].driver);
                        $('#txtReq-Status').val(request_list[i].request_detail_list[j].status);
                        $('#txtReq-Message').val(request_list[i].request_detail_list[j].message);

                        if (request_list[i].request_detail_list[j].status === 'confirmed') {
                            $('#req-SearchDriver').attr('disabled', false);
                            $('#txtReq-DriverName').attr('disabled', true);
                            $('#req-SearchVehicle').attr('disabled', false);
                            $('#txtReq-VehicleReg').attr('disabled', true);
                            $('#btnReq-Confirm').attr('disabled', true);
                            $('#btnReq-AddToBooking').attr('disabled', false);
                            $('#btnReq-Reject').attr('disabled', false);
                            $('#btnReq-Delete').attr('disabled', false);

                            $('#req-search-driver-container').css('display', 'block');
                            $('#req-driver-name-container').css('display', 'block');
                        } else if (request_list[i].request_detail_list[j].status === 'rejected') {

                            $('#req-SearchDriver').attr('disabled', false);
                            $('#txtReq-DriverName').attr('disabled', false);
                            $('#req-SearchVehicle').attr('disabled', false);
                            $('#txtReq-VehicleReg').attr('disabled', false);
                            $('#btnReq-Confirm').attr('disabled', false);
                            $('#btnReq-AddToBooking').attr('disabled', true);
                            $('#btnReq-Reject').attr('disabled', true);
                            $('#btnReq-Delete').attr('disabled', false);

                        } else {
                            $('#req-SearchDriver').attr('disabled', false);
                            $('#txtReq-DriverName').attr('disabled', false);
                            $('#req-SearchVehicle').attr('disabled', false);
                            $('#txtReq-VehicleReg').attr('disabled', false);
                            $('#btnReq-Confirm').attr('disabled', false);
                            $('#btnReq-AddToBooking').attr('disabled', true);
                            $('#btnReq-Reject').attr('disabled', false);
                            $('#btnReq-Delete').attr('disabled', false);

                        }

                        //check if customer needs a driver & then set a driver to the customer
                        if (request_list[i].request_detail_list[j].driver.toLowerCase() === 'yes') {

                            $('#req-SearchDriver').empty();
                            $('#req-SearchDriver').append(
                                `
                                 <option disabled selected>Select a driver</option>
                                `
                            );
                            for (let k = 0; k < drivers_list.length; k++) {
                                //check available drivers and load them
                                if (drivers_list[k].availability.toLowerCase() === 'available') {
                                    $('#req-SearchDriver').append(
                                        `
                                        <option>${drivers_list[k].did}</option>
                                        `
                                    );

                                    $('#req-search-driver-container').css('display', 'block');
                                    $('#req-driver-name-container').css('display', 'block');
                                }
                            }
                        } else {
                            $('#req-SearchDriver').empty();
                            $('#req-SearchDriver').append(
                                `
                                 <option disabled selected>Select a driver</option>
                                `
                            );

                            $('#req-search-driver-container').css('display', 'none');
                            $('#req-driver-name-container').css('display', 'none');
                        }

                        //get vehicle brand
                        for (let k = 0; k < vehicles_list.length; k++) {
                            if (vehicles_list[k].vid === request_list[i].request_detail_list[j].pk.vid) {
                                $('#txtReq-Brand').val(vehicles_list[k].brand);
                            }
                        }
                    }

                }
            }

        }

        //check available vehicles and assign a vehicle
        //clear vehicle select box
        $('#req-SearchVehicle').empty();
        $('#req-SearchVehicle').append(
            `
            <option disabled selected>Select a vehicle</option>
            `
        );
        //add vehicles to vehicle select box
        for (let i = 0; i < vehicles_list.length; i++) {
            for (let j = 0; j < vehicles_list[i].vehicleDetailList.length; j++) {
                if (vehicles_list[i].vehicleDetailList[j].vehicle.vid === selectedRow.find('td:eq(1)').text() && vehicles_list[i].vehicleDetailList[j].availability.toLowerCase() === 'available') {
                    $('#req-SearchVehicle').append(
                        `
                        <option>${vehicles_list[i].vehicleDetailList[j].vdid}</option>
                        `
                    );
                }
            }
        }
        $("#req-SearchVehicle")[0].selectedIndex = 0;

    });
}

//reset request detail from fields
function resetRequestDetailFormFields() {
    $('#txtRID').val('');
    $('#txtReq-CID').val('');
    $('#txtReq-VID').val('');
    $('#txtReq-Brand').val('');
    $('#txtReq-QTY').val('');
    $('#txtReq-RentalFee').val('');
    $('#txtReq-LDWFee').val('');
    $('#txtReq-PickupDate').val('');
    $('#txtReq-ReturnDate').val('');
    $('#txtReq-Driver').val('');
    $('#txtReq-Status').val('');
    $('#txtReq-Message').val('');
    $("#req-SearchDriver")[0].selectedIndex = 0;
    $('#txtReq-DriverName').val('');
    $("#req-SearchVehicle")[0].selectedIndex = 0;
    $('#txtReq-VehicleReg').val('');
    disableBankSlipContainer(true);
    $('#req-search-driver-container').css('display', 'none');
    $('#req-driver-name-container').css('display', 'none');

}

//get and set bank slip image
function setBankSlip(image) {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/Easy_Car_Rental_Server/request/get_image/${image}`,
        beforeSend: function (xhr) {
            xhr.overrideMimeType('text/plain; charset=x-user-defined');
        },
        success: function (result, textStatus, jqXHR) {
            if (result.length < 1) {
                alert("The thumbnail doesn't exist");
                $("#thumbnail").attr("src", "data:image/png;base64,");
                return
            }

            let binary = "";
            let responseText = jqXHR.responseText;
            let responseTextLen = responseText.length;

            for (i = 0; i < responseTextLen; i++) {
                binary += String.fromCharCode(responseText.charCodeAt(i) & 255)
            }
            $("#thumbnail").attr("src", "data:image/png;base64,");

            $(`#bank_slip_image`).attr('src', 'data:image/jpg;base64,' + btoa(binary));
        },
        error: function (xhr, textStatus, errorThrown) {
            alert("Error in getting document " + textStatus);
        }
    });
}

//disable bank slip details container
function disableBankSlipContainer(value) {
    $('#req-SearchDriver').attr('disabled', value);
    $('#txtReq-DriverName').attr('disabled', value);
    $('#req-SearchVehicle').attr('disabled', value);
    $('#txtReq-VehicleReg').attr('disabled', value);
    $('#btnReq-Confirm').attr('disabled', value);
    $('#btnReq-AddToBooking').attr('disabled', value);
    $('#btnReq-Reject').attr('disabled', value);
    $('#btnReq-Delete').attr('disabled', value);
}

//select a driver from select box
function selectDriverFromSelectBox() {
    $('#req-SearchDriver').change(function () {
        let selected_did = $(this).children("option:selected").val();
        for (let i = 0; i < drivers_list.length; i++) {
            if (drivers_list[i].did === selected_did) {
                $('#txtReq-DriverName').val(drivers_list[i].name);
            }
        }
    });
}

//select a vehicle from select box
function selectVehicleFromSelectBox() {
    $('#req-SearchVehicle').change(function () {
        let selected_vdid = $(this).children("option:selected").val();
        for (let i = 0; i < vehicles_list.length; i++) {
            for (let j = 0; j < vehicles_list[i].vehicleDetailList.length; j++) {
                if (vehicles_list[i].vehicleDetailList[j].vdid === selected_vdid) {
                    $('#txtReq-VehicleReg').val(vehicles_list[i].vehicleDetailList[j].reg_number);
                }
            }
        }
    });
}

//check request form validity
function checkRequestFormValidity() {
    let req_search_driver = $('#req-SearchDriver')[0];
    let req_search_vehicle = $('#req-SearchVehicle')[0];

    if ($('#txtReq-Driver').val() === 'yes') {
        if ($('#req-SearchDriver :selected').text().toLowerCase() === 'select a driver') {
            req_search_driver.setCustomValidity('Select a driver');
            req_search_driver.reportValidity();
        } else if ($('#req-SearchVehicle :selected').text().toLowerCase() === 'select a vehicle') {
            req_search_vehicle.setCustomValidity('Select a vehicle');
            req_search_vehicle.reportValidity();
        } else {
            return true;
        }
        return false;
    } else {
        if ($('#req-SearchVehicle :selected').text().toLowerCase() === 'select a vehicle') {
            req_search_vehicle.setCustomValidity('Select a vehicle');
            req_search_vehicle.reportValidity();
            return false;
        } else {
            return true;
        }
    }

}

//confirm request
function confirmRequest() {
    $('#btnReq-Confirm').click(function () {

        let validity = checkRequestFormValidity();
        if (validity) {

            //get driver id
            let did;
            if ($('#txtReq-Driver').val().toLowerCase() === 'yes') {
                did = $('#req-SearchDriver :selected').text();
            } else {
                did = '000';
            }

            //get vehicle id
            let vdid = $('#req-SearchVehicle :selected').text();

            //get pickup date and return date
            let pickup_date = $('#txtReq-PickupDate').val();
            let return_date = $('#txtReq-ReturnDate').val();

            $.ajax({
                url: 'http://localhost:8080/Easy_Car_Rental_Server/request_detail/update_request_message',
                method: 'put',
                async: true,
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify({
                    pk: {
                        rid: $('#txtRID').val(),
                        vid: $('#txtReq-VID').val()
                    },
                    qty: $('#txtReq-QTY').val(),
                    driver: $('#txtReq-Driver').val(),
                    pickup_date: pickup_date,
                    return_date: return_date,
                    rental_fee: $('#txtReq-RentalFee').val(),
                    ldw_fee: $('#txtReq-LDWFee').val(),
                    message: `Your request has been accepted!\nVehicle ID: ${vdid}\t\tDriver ID: ${did}`,
                    status: 'confirmed'
                }),
                success: function (response) {
                    alert(response.message);

                    //check if customer needs a driver and then add driver's schedule
                    if ($('#txtReq-Driver').val().toLowerCase() === 'yes') {
                        addDriverSchedule(did, pickup_date, return_date);
                    }

                    //add vehicle's schedule
                    addVehicleSchedule(vdid, pickup_date, return_date);

                    loadAllRequests();
                    resetRequestDetailFormFields();
                    disableBankSlipContainer(true);
                    $('#txtReq-Status').prop('disabled', true);
                    $('#txtReq-Message').prop('disabled', true);
                }
            });
        }
    });
}

//reject request
function rejectRequest() {
    onMessageTyping();
    $('#btnReq-Reject').click(function () {
        $.ajax({
            url: 'http://localhost:8080/Easy_Car_Rental_Server/request_detail/update_request_message',
            method: 'put',
            async: true,
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({
                pk: {
                    rid: $('#txtRID').val(),
                    vid: $('#txtReq-VID').val()
                },
                qty: $('#txtReq-QTY').val(),
                driver: $('#txtReq-Driver').val(),
                pickup_date: $('#txtReq-PickupDate').val(),
                return_date: $('#txtReq-ReturnDate').val(),
                rental_fee: $('#txtReq-RentalFee').val(),
                ldw_fee: $('#txtReq-LDWFee').val(),
                message: request_message,
                status: 'rejected'
            }),
            success: function (response) {
                alert('Request has been rejected!');
                loadAllRequests();
                resetRequestDetailFormFields();
                disableBankSlipContainer(true);
                $('#txtReq-Status').prop('disabled', true);
                $('#txtReq-Message').prop('disabled', true);
            }
        });
    });
}

//select vehicle from the vehicle data list
let request_message = "Your request has been rejected!";

function onMessageTyping() {
    $('#txtReq-Message').on('keyup', function () {
        request_message = $(this).val();
    });
}

//add request to bookings
function addRequestToBooking() {
    $('#btnReq-AddToBooking').click(function () {

        let validity = checkRequestFormValidity();
        if (validity) {
            //get driver id
            let did;
            if ($('#txtReq-Driver').val().toLowerCase() === 'yes') {
                did = $('#req-SearchDriver :selected').text();
            } else {
                did = '000';
            }

            //get vehicle id
            let vdid = $('#req-SearchVehicle :selected').text();

            //get bank slip & total fee
            let bank_slip;
            let total_fee;
            for (let i = 0; i < request_list.length; i++) {
                if (request_list[i].rid === $('#txtRID').val()) {
                    bank_slip = request_list[i].bank_slip;
                    total_fee = request_list[i].total_fee;
                    break;
                }
            }

            //get pickup date and return date
            let pickup_date = $('#txtReq-PickupDate').val();
            let return_date = $('#txtReq-ReturnDate').val();

            $.ajax({
                url: 'http://localhost:8080/Easy_Car_Rental_Server/booking',
                method: 'post',
                async: true,
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify({
                    bid: booking_id,
                    customer: {
                        id: $('#txtReq-CID').val()
                    },
                    booking_detail_list: [
                        {
                            pk: {
                                bid: booking_id,
                                vdid: vdid,
                                did: did
                            },
                            pickup_date: pickup_date,
                            return_date: return_date,
                            return_time: 'empty',
                            rental_fee: $('#txtReq-RentalFee').val(),
                            ldw_fee: $('#txtReq-LDWFee').val()
                        }
                    ],
                    date: new Date().toLocaleDateString(),
                    total_fee: total_fee,
                    bank_slip: bank_slip
                }),
                success: function (response) {
                    alert(response.message);

                    //update vehicle availability
                    changeVehicleAvailability(vdid);

                    //check if customer needs a driver and then update driver availability
                    if ($('#txtReq-Driver').val().toLowerCase() === 'yes') {
                        changeDriverAvailability($('#req-SearchDriver :selected').text());
                    }

                    loadAllRequests();
                    generateBookingId();
                    deleteRequest($('#txtRID').val(), $('#txtReq-VID').val());
                    resetRequestDetailFormFields();
                    disableBankSlipContainer(true);
                    $('#txtReq-Status').prop('disabled', true);
                    $('#txtReq-Message').prop('disabled', true);
                }
            });
        }
    });
}

//change vehicle availability
function changeVehicleAvailability(vdid) {
    $.ajax({
        url: `http://localhost:8080/Easy_Car_Rental_Server/vehicle_detail/update_availability?id=${vdid}`,
        method: 'put',
        async: true,
        dataType: 'json',
        success: function (response) {
            loadAllVehicles();
        }
    });
}

//change driver availability
function changeDriverAvailability(did) {
    $.ajax({
        url: `http://localhost:8080/Easy_Car_Rental_Server/driver/update_availability?id=${did}`,
        method: 'put',
        async: true,
        dataType: 'json',
        success: function (response) {
            loadAllDrivers();
        }
    });
}

//delete all requests with parent from request table
function deleteAllRequestsWithParent(rid) {
    $.ajax({
        url: `http://localhost:8080/Easy_Car_Rental_Server/request/delete_request?rid=${rid}`,
        method: 'delete',
        async: true,
        success: function (response) {
            alert(response.message);
            loadAllRequests();
            resetRequestDetailFormFields();
            disableBankSlipContainer(true);
            $('#txtReq-Status').prop('disabled', true);
            $('#txtReq-Message').prop('disabled', true);
            $('#request-detail-table > tbody').empty();
        }
    });
}

//delete request from request detail table
let response_message;

function deleteRequest(rid, vid) {
    $.ajax({
        url: `http://localhost:8080/Easy_Car_Rental_Server/request_detail/delete_request_details?rid=${rid}&vid=${vid}`,
        method: 'delete',
        async: true,
        success: function (response) {
            response_message = response.message;
            loadAllRequests();
            resetRequestDetailFormFields();
            disableBankSlipContainer(true);
            $('#txtReq-Status').prop('disabled', true);
            $('#txtReq-Message').prop('disabled', true);
            $('#request-detail-table > tbody').empty();
        }
    });
}

//btnReq-Delete on action
function btnReqDeleteOnAction() {
    $('#btnReq-Delete').click(function () {
        let rid = $('#txtRID').val();
        let vid = $('#txtReq-VID').val();

        for (let i = 0; i < request_list.length; i++) {
            if (request_list[i].request_detail_list.length === 1) {
                deleteAllRequestsWithParent(rid);
            } else {
                deleteRequest(rid, vid);
                alert(response_message);
            }
        }
    });
}

//---------------------------------------------------------------------------


//------------------------Schedule-----------------------

//generate driver schedule id
let driver_sdid;

function generateDriver_Sdid() {
    $.ajax({
        url: `http://localhost:8080/Easy_Car_Rental_Server/driver_schedule/last_id`,
        method: 'get',
        async: true,
        dataType: 'json',
        success: function (response) {
            try {
                let last_id = response.data;
                let newId = parseInt(last_id.substring(3, 6)) + 1;
                if (newId < 10) {
                    driver_sdid = "DSD00" + newId;
                } else if (newId < 100) {
                    driver_sdid = "DSD0" + newId;
                } else {
                    driver_sdid = "DSD" + newId;
                }

            } catch (e) {
                driver_sdid = "DSD001";
            }
        }
    });
}

generateDriver_Sdid();

//load all drivers schedule
let driver_schedule_list;

function loadAllDriversSchedule() {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/driver_schedule',
        method: 'get',
        async: true,
        dataType: 'json',
        success: function (response) {
            driver_schedule_list = response.data;
            $('#drivers-schedule-table > tbody').empty();
            for (let i = 0; i < driver_schedule_list.length; i++) {
                $('#drivers-schedule-table > tbody').append(
                    `
                        <tr>
                            <td>${driver_schedule_list[i].driver_sdid}</td>
                            <td>${driver_schedule_list[i].driver.did}</td>
                            <td>${driver_schedule_list[i].driver.name}</td>
                            <td>${driver_schedule_list[i].start_date}</td>
                            <td>${driver_schedule_list[i].end_date}</td>
                        </tr>
                        `
                );
            }
        }
    });
}

loadAllDriversSchedule();

//drivers schedule table on click
let driver_schedule_did;

function driversScheduleTableOnClick() {
    $('#drivers-schedule-table > tbody').on('click', 'tr', function () {
        let selectedRow = $(this).closest('tr');

        $('#sch-SearchDriver').val(selectedRow.find('td:eq(0)').text());
        driver_schedule_did = selectedRow.find('td:eq(1)').text();
        $('#txtSch-DriverName').val(selectedRow.find('td:eq(2)').text());

        //convert date into yyyy-mm-dd format
        //start date
        let start_date = new Date(selectedRow.find('td:eq(3)').text()).toLocaleDateString('en-ZA');
        let start_date_split = start_date.split('/', 3);
        $('#sch-Driver-StartDate').val(`${start_date_split[0]}-${start_date_split[1]}-${start_date_split[2]}`);
        //end date
        let end_date = new Date(selectedRow.find('td:eq(4)').text()).toLocaleDateString('en-ZA');
        let end_date_split = end_date.split('/', 3);
        $('#sch-Driver-EndDate').val(`${end_date_split[0]}-${end_date_split[1]}-${end_date_split[2]}`);

        $('#sch-Driver-StartDate').attr('disabled', false);
        $('#sch-Driver-EndDate').attr('disabled', false);
        $('#btnUpdateDriverSchedule').attr('disabled', false);
        $('#btnDeleteDriverSchedule').attr('disabled', false);

    });
}

//add driver schedule
function addDriverSchedule(did, start_date, end_date) {
    $.ajax({
        url: `http://localhost:8080/Easy_Car_Rental_Server/driver_schedule`,
        method: 'post',
        async: true,
        contentType: 'application/json',
        data: JSON.stringify({
            driver_sdid: driver_sdid,
            driver: {
                did: did
            },
            start_date: start_date,
            end_date: end_date
        }),
        success: function (response) {
            generateDriver_Sdid();
        }
    });
}

//update driver schedule
function updateDriverSchedule() {
    $('#btnUpdateDriverSchedule').click(function () {
        let driver_sdid = $('#sch-SearchDriver').val();
        let did = driver_schedule_did;
        let start_date = new Date($('#sch-Driver-StartDate').val());
        let end_date = new Date($('#sch-Driver-EndDate').val());

        $.ajax({
            url: `http://localhost:8080/Easy_Car_Rental_Server/driver_schedule`,
            method: 'put',
            async: true,
            contentType: 'application/json',
            data: JSON.stringify({
                driver_sdid: driver_sdid,
                driver: {
                    did: did
                },
                start_date: start_date.toLocaleDateString(),
                end_date: end_date.toLocaleDateString()
            }),
            dataType: 'json',
            success: function (response) {
                alert(response.message);
                loadAllDriversSchedule();
                $('#sch-SearchDriver').val('');
                $('#txtSch-DriverName').val('');
                $('#sch-Driver-StartDate').val('');
                $('#sch-Driver-EndDate').val('');
                $('#sch-Driver-StartDate').attr('disabled', true);
                $('#sch-Driver-EndDate').attr('disabled', true);
                $('#btnUpdateDriverSchedule').attr('disabled', true);
                $('#btnDeleteDriverSchedule').attr('disabled', true);
                driver_schedule_did = '';
            }
        });
    });
}

//delete driver schedule
function deleteDriverSchedule() {
    $('#btnDeleteDriverSchedule').click(function () {
        $.ajax({
            url: `http://localhost:8080/Easy_Car_Rental_Server/driver_schedule?id=${$('#sch-SearchDriver').val()}`,
            method: 'delete',
            async: true,
            success: function (response) {
                alert(response.message);
                loadAllDriversSchedule();
                $('#sch-SearchDriver').val('');
                $('#txtSch-DriverName').val('');
                $('#sch-Driver-StartDate').val('');
                $('#sch-Driver-EndDate').val('');
                $('#sch-Driver-StartDate').attr('disabled', true);
                $('#sch-Driver-EndDate').attr('disabled', true);
                $('#btnUpdateDriverSchedule').attr('disabled', true);
                $('#btnDeleteDriverSchedule').attr('disabled', true);
                driver_schedule_did = '';
            }
        });
    });
}

//---------------------------------------

//generate vehicle schedule id
let vehicle_sdid;

function generateVehicle_Sdid() {
    $.ajax({
        url: `http://localhost:8080/Easy_Car_Rental_Server/vehicle_schedule/last_id`,
        method: 'get',
        async: true,
        dataType: 'json',
        success: function (response) {
            try {
                let last_id = response.data;
                let newId = parseInt(last_id.substring(3, 6)) + 1;
                if (newId < 10) {
                    vehicle_sdid = "VSD00" + newId;
                } else if (newId < 100) {
                    vehicle_sdid = "VSD0" + newId;
                } else {
                    vehicle_sdid = "VSD" + newId;
                }

            } catch (e) {
                vehicle_sdid = "VSD001";
            }
        }
    });
}

generateVehicle_Sdid();

//load all vehicles schedule
let vehicle_schedule_list;

function loadAllVehicleSchedule() {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/vehicle_schedule',
        method: 'get',
        async: true,
        dataType: 'json',
        success: function (response) {
            vehicle_schedule_list = response.data;
            $('#vehicle-schedule-table > tbody').empty();
            for (let i = 0; i < vehicle_schedule_list.length; i++) {
                $('#vehicle-schedule-table > tbody').append(
                    `
                        <tr>
                            <td>${vehicle_schedule_list[i].vehicle_sdid}</td>
                            <td>${vehicle_schedule_list[i].vehicle.vdid}</td>
                            <td>${vehicle_schedule_list[i].vehicle.vehicle.brand}</td>
                            <td>${vehicle_schedule_list[i].start_date}</td>
                            <td>${vehicle_schedule_list[i].end_date}</td>
                        </tr>
                        `
                );
            }
        }
    });
}

loadAllVehicleSchedule();

//vehicle schedule table on click
let vehicle_schedule_vdid;

function vehicleScheduleTableOnClick() {
    $('#vehicle-schedule-table > tbody').on('click', 'tr', function () {
        let selectedRow = $(this).closest('tr');

        $('#sch-SearchVehicle').val(selectedRow.find('td:eq(0)').text());
        vehicle_schedule_vdid = selectedRow.find('td:eq(1)').text();
        $('#txtSch-VehicleBrand').val(selectedRow.find('td:eq(2)').text());

        //convert date into yyyy-mm-dd format
        //start date
        let start_date = new Date(selectedRow.find('td:eq(3)').text()).toLocaleDateString('en-ZA');
        let start_date_split = start_date.split('/', 3);
        $('#sch-Vehicle-StartDate').val(`${start_date_split[0]}-${start_date_split[1]}-${start_date_split[2]}`);
        //end date
        let end_date = new Date(selectedRow.find('td:eq(4)').text()).toLocaleDateString('en-ZA');
        let end_date_split = end_date.split('/', 3);
        $('#sch-Vehicle-EndDate').val(`${end_date_split[0]}-${end_date_split[1]}-${end_date_split[2]}`);

        $('#sch-Vehicle-StartDate').attr('disabled', false);
        $('#sch-Vehicle-EndDate').attr('disabled', false);
        $('#btnUpdateVehicleSchedule').attr('disabled', false);
        $('#btnDeleteVehicleSchedule').attr('disabled', false);

    });
}

//add vehicle schedule
function addVehicleSchedule(vdid, start_date, end_date) {
    $.ajax({
        url: `http://localhost:8080/Easy_Car_Rental_Server/vehicle_schedule`,
        method: 'post',
        async: true,
        contentType: 'application/json',
        data: JSON.stringify({
            vehicle_sdid: vehicle_sdid,
            vehicle: {
                vdid: vdid
            },
            start_date: start_date,
            end_date: end_date
        }),
        success: function (response) {
            generateVehicle_Sdid();
        }
    });
}

//update vehicle schedule
function updateVehicleSchedule() {
    $('#btnUpdateVehicleSchedule').click(function () {
        let vehicle_sdid = $('#sch-SearchVehicle').val();
        let vdid = vehicle_schedule_vdid;
        let start_date = new Date($('#sch-Vehicle-StartDate').val());
        let end_date = new Date($('#sch-Vehicle-EndDate').val());

        $.ajax({
            url: `http://localhost:8080/Easy_Car_Rental_Server/vehicle_schedule`,
            method: 'put',
            async: true,
            contentType: 'application/json',
            data: JSON.stringify({
                vehicle_sdid: vehicle_sdid,
                vehicle: {
                    vdid: vdid
                },
                start_date: start_date.toLocaleDateString(),
                end_date: end_date.toLocaleDateString()
            }),
            dataType: 'json',
            success: function (response) {
                alert(response.message);
                loadAllVehicleSchedule();
                $('#sch-SearchVehicle').val('');
                $('#txtSch-VehicleBrand').val('');
                $('#sch-Vehicle-StartDate').val('');
                $('#sch-Vehicle-EndDate').val('');
                $('#sch-Vehicle-StartDate').attr('disabled', true);
                $('#sch-Vehicle-EndDate').attr('disabled', true);
                $('#btnUpdateVehicleSchedule').attr('disabled', true);
                $('#btnDeleteVehicleSchedule').attr('disabled', true);
                vehicle_schedule_vdid = '';
            }
        });
    });
}

//delete vehicle schedule
function deleteVehicleSchedule() {
    $('#btnDeleteVehicleSchedule').click(function () {
        $.ajax({
            url: `http://localhost:8080/Easy_Car_Rental_Server/vehicle_schedule?id=${$('#sch-SearchVehicle').val()}`,
            method: 'delete',
            async: true,
            success: function (response) {
                alert(response.message);
                loadAllVehicleSchedule();
                $('#sch-SearchVehicle').val('');
                $('#txtSch-VehicleBrand').val('');
                $('#sch-Vehicle-StartDate').val('');
                $('#sch-Vehicle-EndDate').val('');
                $('#sch-Vehicle-StartDate').attr('disabled', true);
                $('#sch-Vehicle-EndDate').attr('disabled', true);
                $('#btnUpdateVehicleSchedule').attr('disabled', true);
                $('#btnDeleteVehicleSchedule').attr('disabled', true);
                vehicle_schedule_vdid = '';
            }
        });
    });
}

//------------------------------------------------------------------------------


//-------------Booking------------------------

//generate booking id
let booking_id;

function generateBookingId() {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/booking/last_id',
        method: 'get',
        async: true,
        dataType: 'json',
        success: function (response) {
            try {
                let last_bid = response.data;
                let newId = parseInt(last_bid.substring(1, 4)) + 1;
                if (newId < 10) {
                    booking_id = "B00" + newId;
                } else if (newId < 100) {
                    booking_id = "B0" + newId;
                } else {
                    booking_id = "B" + newId;
                }

            } catch (e) {
                booking_id = "B001";
            }
        }
    });
}

generateBookingId();

//load all bookings
let booking_list;

function loadAllBookings() {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/booking',
        method: 'get',
        async: true,
        dataType: 'json',
        success: function (response) {
            booking_list = response.data;
            $('#booking-table > tbody').empty();
            for (let i = 0; i < booking_list.length; i++) {
                $('#booking-table > tbody').append(
                    `
                    <tr>
                        <td>${booking_list[i].bid}</td>
                        <td>${booking_list[i].customer.id}</td>
                        <td>${booking_list[i].date}</td>
                        <td>${booking_list[i].total_fee}</td>
                    </tr>
                    `
                );
            }
        }
    });
}

loadAllBookings();

//booking table on click
function bookingTblOnClick() {
    $('#booking-table > tbody').on('click', 'tr', function () {
        let selectedRow = $(this).closest('tr');
        resetBookingDetailFields();
        disableBookingDetailFields(true, true);
        for (let i = 0; i < booking_list.length; i++) {
            if (booking_list[i].bid === selectedRow.find('td:eq(0)').text()) {
                $('#booking-detail-table > tbody').empty();
                for (let j = 0; j < booking_list[i].booking_detail_list.length; j++) {
                    $('#booking-detail-table > tbody').append(
                        `
                        <tr>
                            <td>${booking_list[i].bid}</td>
                            <td>${booking_list[i].booking_detail_list[j].pk.vdid}</td>
                            <td>${booking_list[i].booking_detail_list[j].pk.did}</td>
                            <td>${booking_list[i].booking_detail_list[j].pickup_date}</td>
                            <td>${booking_list[i].booking_detail_list[j].return_date}</td>
                        </tr>
                        `
                    );
                }
            }
        }
    });
}

//booking detail table on click
function bookingDetailTblOnClick() {
    $('#booking-detail-table > tbody').on('click', 'tr', function () {
        let selectedRow = $(this).closest('tr');
        disableBookingDetailFields(true, false);
        for (let i = 0; i < booking_list.length; i++) {
            if (booking_list[i].bid === selectedRow.find('td:eq(0)').text()) {

                $('#txtBID').val(booking_list[i].bid);
                $('#txtBooking-CID').val(booking_list[i].customer.id);

                for (let j = 0; j < booking_list[i].booking_detail_list.length; j++) {
                    $('#txtBooking-DID').val(booking_list[i].booking_detail_list[j].pk.did);
                    $('#txtBooking-VDID').val(booking_list[i].booking_detail_list[j].pk.vdid);
                    $('#txtBooking-ReturnTime').val(booking_list[i].booking_detail_list[j].return_time);
                    $('#txtBooking-RentalFee').val(booking_list[i].booking_detail_list[j].rental_fee);
                    $('#txtBooking-LDWFee').val(booking_list[i].booking_detail_list[j].ldw_fee);

                    //convert date into yyyy-mm-dd format
                    //start date
                    let pickup_date = new Date(booking_list[i].booking_detail_list[j].pickup_date).toLocaleDateString('en-ZA');
                    let pickup_date_split = pickup_date.split('/', 3);
                    $('#txtBooking-PickupDate').val(`${pickup_date_split[0]}-${pickup_date_split[1]}-${pickup_date_split[2]}`);
                    //end date
                    let return_date = new Date(booking_list[i].booking_detail_list[j].return_date).toLocaleDateString('en-ZA');
                    let return_date_split = return_date.split('/', 3);
                    $('#txtBooking-ReturnDate').val(`${return_date_split[0]}-${return_date_split[1]}-${return_date_split[2]}`);
                }

                //set vehicle brand
                for (let j = 0; j < vehicles_list.length; j++) {
                    for (let k = 0; k < vehicles_list[j].vehicleDetailList.length; k++) {
                        if (vehicles_list[j].vehicleDetailList[k].vdid === $('#txtBooking-VDID').val()) {
                            $('#txtBooking-Brand').val(vehicles_list[j].brand);
                        }
                    }
                }
            }
        }
    });
}

//reset booking form fields
function resetBookingDetailFields() {
    $('#txtBID').val('');
    $('#txtBooking-CID').val('');
    $('#txtBooking-DID').val('');
    $('#txtBooking-VDID').val('');
    $('#txtBooking-Brand').val('');
    $('#txtBooking-PickupDate').val('');
    $('#txtBooking-ReturnDate').val('');
    $('#txtBooking-ReturnTime').val('');
    $('#txtBooking-RentalFee').val('');
    $('#txtBooking-LDWFee').val('');
}

//disable booking form fields
function disableBookingDetailFields(value1, value2) {
    $('#txtBID').attr('disabled', value1);
    $('#txtBooking-CID').attr('disabled', value1);
    $('#txtBooking-DID').attr('disabled', value1);
    $('#txtBooking-VDID').attr('disabled', value1);
    $('#txtBooking-Brand').attr('disabled', value1);
    $('#txtBooking-PickupDate').attr('disabled', value2);
    $('#txtBooking-ReturnDate').attr('disabled', value2);
    $('#txtBooking-ReturnTime').attr('disabled', value2);
    $('#txtBooking-RentalFee').attr('disabled', value2);
    $('#txtBooking-LDWFee').attr('disabled', value1);
    $('#btnBooking-Update').attr('disabled', value2);
}

//update booking details
function updateBookingDetails() {
    $('#btnBooking-Update').click(function () {
        let bid = $('#txtBID').val();
        let did = $('#txtBooking-DID').val();
        let vdid = $('#txtBooking-VDID').val();
        let pickup_date = $('#txtBooking-PickupDate').val();
        let return_date = $('#txtBooking-ReturnDate').val();
        let return_time = '123';
        let rental_fee = parseFloat($('#txtBooking-RentalFee').val());
        let ldw_fee = parseFloat($('#txtBooking-LDWFee').val());

        $.ajax({
            url: `http://localhost:8080/Easy_Car_Rental_Server/booking_detail`,
            method: 'put',
            async: true,
            dataType: 'json',
            data: JSON.stringify({
                pk: {
                    bid: bid,
                    vdid: vdid,
                    did: did
                },
                pickup_date: pickup_date.toLocaleDateString(),
                return_date: return_date.toLocaleDateString(),
                return_time: '',
                rental_fee: rental_fee,
                ldw_fee: ldw_fee
            }),
            success: function (response) {
                console.log(response);
            }
        });
    });
}