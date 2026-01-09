/**
 * Quote Form JavaScript
 * Handles form validation and submission for the moving quote form
 */

var emailjs_service_id_admin = "donotreply_studentmovers_net";
var emailjs_template_id_admin = "send_to_admin_prod";
var emailjs_service_id_customer = "quotes_studentmovers_net";
var emailjs_template_id_customer = "send_to_customer_prod";
var emailjs_service_id_problem = "consultants_houstonstudentmovers_com";
var emailjs_template_id_problem = "email_problem";
var IPAddress;

function showError(valid, obj, errorMess) {
    jQuery("#" + obj.attr('id') + "_error").remove();
    if (!valid)
        obj.parent().append('<label id="' + obj.attr('id') + '_error" class="error">' + errorMess + '</label>');
    return valid;
}

function isValidPhone(p) {
    var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    var digits = p.val().replace(/\D/g, "");
    return phoneRe.test(digits);
}

function isValidEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.val());
}

function isValidDate(date, threshold) {
    try {
        testdate = jQuery.datepicker.parseDate('mm/dd/yy', date.val());
        return threshold === undefined ? date.val().trim().length > 0 : (new Date(date.val())).getTime() >= (new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate())).getTime();
    } catch (e) {
        return false;
    }
}

function isValidNumber(number) {
    if (number === "")
        return true;
    var numbers = /^[0-9]+$/;
    return number.match(numbers);
}

function isValidUSZip(zip) {
    var USzipReg = /^\b\d{5}(-\d{4})?\b$/;
    return USzipReg.test(zip)
}

function isValid() {
    var returnVal = true;
    returnVal = showError((jQuery('#companyPhone').val().trim() === "" || isValidPhone(jQuery('#companyPhone'))), jQuery('#companyPhone'), "Please provide a correct company phone number.") && returnVal;
    returnVal = showError(jQuery('#firstName').val().trim().length > 0, jQuery('#firstName'), "Please provide contact first name.") && returnVal;
    returnVal = showError(jQuery('#lastName').val().trim().length > 0, jQuery('#lastName'), "Please provide contact last name.") && returnVal;
    returnVal = showError(isValidPhone(jQuery('#phoneNumber')), jQuery('#phoneNumber'), "Please specify a valid phone number.") && returnVal;
    returnVal = showError(isValidEmail(jQuery('#email')), jQuery('#email'), "Please specify a valid email address.") && returnVal;
    returnVal = showError(jQuery('#moveType').val() != '--', jQuery('#moveType'), "Please select a move type.") && returnVal;
    returnVal = showError(isValidDate(jQuery('#moveDate'), Date.now), jQuery('#moveDate'), "Please select today's date or future date for booking request.") && returnVal;
    returnVal = showError(isValidUSZip(jQuery('#fromZip').val().trim()), jQuery('#fromZip'), "Please provide a valid from zip code.") && returnVal;
    returnVal = showError(isValidUSZip(jQuery('#toZip').val().trim()), jQuery('#toZip'), "Please provide a valid to zip code.") && returnVal;
    returnVal = showError(jQuery('#moveTime').val() != '--', jQuery('#moveTime'), "Please select a preferred move time.") && returnVal;
    returnVal = showError(jQuery('#fromBedrooms').val() != '--', jQuery('#fromBedrooms'), "Please select a from number of bedrooms.") && returnVal;
    returnVal = showError(jQuery('#toBedrooms').val() != '--', jQuery('#toBedrooms'), "Please select a to number of bedrooms.") && returnVal;
    returnVal = showError(isValidNumber(jQuery('#fromFloors').val().trim()), jQuery('#fromFloors'), "Please provide a valid from number of floors.") && returnVal;
    returnVal = showError(isValidNumber(jQuery('#toFloors').val().trim()), jQuery('#toFloors'), "Please provide a valid to number of floors.") && returnVal;
    returnVal = showError(jQuery('#fromPropertyType').val() != '--', jQuery('#fromPropertyType'), "Please select a from property type.") && returnVal;
    returnVal = showError(jQuery('#toPropertyType').val() != '--', jQuery('#toPropertyType'), "Please select a to property type.") && returnVal;
    return returnVal;
}

function initEmailJS(obj) {
    obj.init("user_9gcQGvu8b3p4hmDamHilf");
}

function sendAdminNotifications(oFr) {
    event.preventDefault();
    var params = {
        'companyname': jQuery('#companyName').val(),
        'companyphone': jQuery('#companyPhone').val(),
        'firstname': jQuery('#firstName').val(),
        'lastname': jQuery('#lastName').val(),
        'submitted': Date(Date.now()).toLocaleString(),
        'phone': jQuery('#phoneNumber').val(),
        'email': jQuery('#email').val(),
        'fromaddress': IPAddress,
        'movedate': jQuery('#moveDate').val(),
        'movetype': jQuery('#moveType option:selected').text(),
        'movetime': jQuery('#moveTime option:selected').text(),
        'fromzip': jQuery('#fromZip').val(),
        'tozip': jQuery('#toZip').val(),
        'fromnumberbeds': jQuery('#fromBedrooms option:selected').text(),
        'tonumberbeds': jQuery('#toBedrooms option:selected').text(),
        'fromnumberfloors': jQuery('#fromFloors').val(),
        'tonumberfloors': jQuery('#toFloors').val(),
        'frompropertytype': jQuery('#fromPropertyType option:selected').text(),
        'topropertytype': jQuery('#toPropertyType option:selected').text(),
        'comment': jQuery('#item16_textarea_1').val()
    };
    jQuery('#fb-submit-button').val('Sending');
    jQuery('#fb-submit-button').attr("disabled", "disabled");
    // Send email to admin
    emailjs.send(emailjs_service_id_admin, emailjs_template_id_admin, params)
        .then(
            function() {
                // Send email to customer
                emailjs.send(emailjs_service_id_customer, emailjs_template_id_customer, params)
                    .then(
                        function() {
                            oFr.submit();
                            return true;
                        },
                        function(err) {
                            submitFormWithoutEmailSent(oFr, "customer")
                        }
                    );

            },
            function(err) {
                submitFormWithoutEmailSent(oFr, "admin")
                return true;
            }
        );
}

function submitFormWithoutEmailSent(oFr, emailType) {
    console.log("Send email failed!");
    oFr["fieldAcc11"].value = oFr["fieldAcc11"].value + String.fromCharCode(13, 10) + "**issue with sending email to " + emailType + " via EmailJS:" + Date(Date.now()).toLocaleString();
    console.log(oFr["fieldAcc11"].value);
    emailjs.send(emailjs_service_id_problem, emailjs_template_id_problem, {});
    oFr.submit();
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key.toLowerCase()] = value;
    });
    return vars;
}

function changeClientType(el) {
    var oCt = document.getElementById("clienttypeID");
    if (el.value === "10568") oCt.value = 2;
    else oCt.value = 1;
}

function submitForm() {
    var oFr = (document.all) ? document.forms(v) : document.forms["docContainer"];
    /* step 1 - validate form */

    if (isValid()) {

        /* step 2 - fill sync fields */
        oFr["fieldAcc14"].value = oFr["zip"].value;
        oFr["fieldAcc15"].value = oFr["zipPic"].value;

        var moveDate = new Date(oFr["fieldAcc3"].value);
        oFr["fieldAcc3-YEAR"].value = moveDate.getFullYear(); /* add YYYY portioin of the value from moving date collected */
        oFr["fieldAcc3-MONTH"].value = moveDate.getMonth() + 1; /* add MM portioin of the value from moving date collected */
        oFr["fieldAcc3-DAY"].value = moveDate.getDate(); /* add DD portioin of the value from moving date collected */
        if (getUrlVars()["referrer"] !== undefined) {
            oFr["fieldAcc11"].value = oFr["fieldAcc11"].value + String.fromCharCode(13, 10) + "***Referrer: " + getUrlVars()["referrer"] + "***";
        }
        return sendAdminNotifications(oFr);
    } else {
        event.preventDefault();
        return false;
    }
}

jQuery(function($) {
    initEmailJS(emailjs);
    $.getJSON('//jsonip.com/?callback=?', function(data) {
        IPAddress = data.ip;
    });
    $('.datepicker').datepicker();
});
