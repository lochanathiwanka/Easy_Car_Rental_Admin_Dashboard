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
            confirmRequest();
            rejectRequest();
            addRequestToBooking();
            request_message = "Your request has been rejected!";
        }
    });
});
//load Bookings screen
$('#btnBookings').click(function () {
    let list_items = ['line-btnHome', 'line-btnVehicles', 'line-btnDrivers', 'line-btnCustomers', 'line-btnRequests', 'line-btnSchedule', 'line-btnSettings', 'line-btnAbout'];
    let button_list = ['btnHome', 'btnVehicles', 'btnDrivers', 'btnCustomers', 'btnRequests', 'btnSchedule', 'btnSettings', 'btnAbout'];
    changeScreensStyles('Bookings', 'fas fa-book-open', 'line-btnBookings', 'btnBookings', list_items, button_list);
    $('#main-container').html('<h1>Bookings Page</h1>');
});
//load Schedule screen
$('#btnSchedule').click(function () {
    let list_items = ['line-btnHome', 'line-btnVehicles', 'line-btnDrivers', 'line-btnCustomers', 'line-btnRequests', 'line-btnBookings', 'line-btnSettings', 'line-btnAbout'];
    let button_list = ['btnHome', 'btnVehicles', 'btnDrivers', 'btnCustomers', 'btnRequests', 'btnBookings', 'btnSettings', 'btnAbout'];
    changeScreensStyles('Schedule', 'fas fa-book-open', 'line-btnSchedule', 'btnSchedule', list_items, button_list);
    $('#main-container').html('<h1>Schedule Page</h1>');
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

                        //check if customer needs a driver & then set a driver to the customer
                        if (request_list[i].request_detail_list[j].driver.toLowerCase() === 'yes') {

                            $('#req-SearchDriver').empty();
                            $('#req-SearchDriver').append(
                                `
                                 <option selected>Select a driver</option>
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
                                 <option selected>Select a driver</option>
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
                disableBankSlipContainer(false);
            }

        }
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

//confirm request
function confirmRequest() {
    onMessageTyping();
    $('#btnReq-Confirm').click(function () {
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
                status: $('#txtReq-Status').val()
            }),
            success: function (response) {
                alert(response.message);
                loadAllRequests();
                resetRequestDetailFormFields();
                disableBankSlipContainer(true);
                $('#txtReq-Status').prop('disabled', true);
                $('#txtReq-Message').prop('disabled', true);
            }
        });
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
                status: $('#txtReq-Status').val()
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
    /*if ($('#txtReq-Driver').val().toLowerCase() === 'yes') {

    } else {}*/

    $('#btnReq-AddToBooking').click(function () {

        //check available vehicles and assign a vehicle
        let available_vehicles = [];
        for (let i = 0; i < vehicles_list.length; i++) {
            for (let j = 0; j < vehicles_list[i].vehicleDetailList.length; j++) {
                if (vehicles_list[i].vehicleDetailList[j].vehicle.vid === $('#txtReq-VID').val() && vehicles_list[i].vehicleDetailList[j].availability.toLowerCase() === 'available') {
                    available_vehicles.push(vehicles_list[i].vehicleDetailList[j].vdid);
                }
            }
        }

        let bank_slip;
        let total_fee;
        for (let i = 0; i < request_list.length; i++) {
            if (request_list[i].rid === $('#txtRID').val()) {
                bank_slip = request_list[i].bank_slip;
                total_fee = request_list[i].total_fee;
                break;
            }
        }

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
                            vdid: available_vehicles[0],
                            did: '000'
                        },
                        pickup_date: $('#txtReq-PickupDate').val(),
                        return_date: $('#txtReq-ReturnDate').val(),
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
                deleteRequest($('#txtRID').val(), $('#txtReq-VID').val());
                resetRequestDetailFormFields();
                disableBankSlipContainer(true);
                $('#txtReq-Status').prop('disabled', true);
                $('#txtReq-Message').prop('disabled', true);
            }
        });
    });
}

//generate booking id
let booking_id;

function generateBookingId() {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/booking',
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

            console.log(booking_id);
        }
    });
}

generateBookingId();

//delete request from request table
function deleteRequest(rid, vid) {
    $.ajax({
        url: `http://localhost:8080/Easy_Car_Rental_Server/request_detail/delete_request_details?rid=${rid}&vid=${vid}`,
        method: 'delete',
        async: true,
        success: function (response) {
            loadAllRequests();
        }
    });
}