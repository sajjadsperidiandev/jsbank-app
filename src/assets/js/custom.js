// ------------step-wizard-------------
$(document).ready(function () {
    $('.nav-tabs > li a[title]').tooltip();
    
    //Wizard
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        var target = $(e.target);
    
        if (target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var active = $('.wizard .nav-tabs li.active');
        active.next().removeClass('disabled');
        nextTab(active);

    });
    $(".prev-step").click(function (e) {

        var active = $('.wizard .nav-tabs li.active');
        prevTab(active);

    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}


$('.nav-tabs').on('click', 'li', function() {
    $('.nav-tabs li.active').removeClass('active');
    $(this).addClass('active');
});








// Countries
var country_arr = new Array("Azaad Kashmir","Balochistan","Fata","Gilgit Baltistan","Islamabad","Khyber Pakhtunkhwa","Punjab","Sindh","Southern Punjab");

// States
var s_a = new Array();
s_a[0] = "";
s_a[1] = "BAGH|BHIMBER|HATTIAN BALA|HAVELI|KOTLI|MIRPUR|MUZZAFARABAD|NEELUM VALLEY|RAWALAKOT|SUDHANOTI";
s_a[2] = "Quetta|Turbat|Khuzdar|Hub|Chaman|Gwadar|Dera Allah Yar|Usta Mohammad|Sui|Sibi|Loralai|Tump|Nushki|Zhob|Kharan|Chitkan|Khanozai";
s_a[3] = "Jamrūd|Landi Kotal|Sadda";
s_a[4] = "Gilgit|Skardu|Khaplu|Dambudas|Tolti|Eidghah|Shigar|Nagarkhas|Ishkoman|Juglot";
s_a[5] = "Rawalpindi Pakistan|Kahuta Pakistan|Wah Pakistan|Haripur Pakistan|Murree Pakistan";
s_a[6] = "Karak|Kohat|Kulachi|Lakki Marwat|Latamber|Madyan|Mansehra|Mardan|Mastuj|Mingora|Nowshera|Paharpur|Pabbi|Peshawar|Saidu Sharif|Shorkot|Shewa Adda|Swabi|Swat|Tangi|Tank|Thall|Timergara|Tordher|";
s_a[7] = "Ahmadpur East|Ahmed Nager Chatha|Ali Khan Abad|Alipur|Arifwala|Attock|Bhera|Bhalwal|Bahawalnagar|Bahawalpur|Bhakkar|Burewala|Chillianwala|Chakwal|Chichawatni|Chiniot|Chishtian|Daska|Darya Khan|Dera Ghazi Khan|Dhaular|Dina|Dinga|Dipalpur|Faisalabad|Fateh Jang|Ghakhar Mandi|Gojra|Gujranwala|Gujrat|Gujar Khan|Hafizabad|Haroonabad|Hasilpur|Haveli Lakha|Jalalpur Jattan|Jampur|Jaranwala|Jhang|Jhelum|Kalabagh|Karor Lal Esan|Kasur|Kamalia|Kāmoke|Khanewal|Khanpur|Kharian|Khushab|Kot Adu|Jauharabad|Lahore|Lalamusa|Layyah|Liaquat Pur|Lodhran|Malakwal|Mamoori|Mailsi|Mandi Bahauddin|Mian Channu|Mianwali|Multan|Murree|Muridke|Mianwali Bangla|Muzaffargarh|Narowal|Okara|Renala Khurd|Pakpattan|Pattoki|Pir Mahal|Qaimpur|Qila Didar Singh|Rabwah|Raiwind|Rajanpur|Rahim Yar Khan|Rawalpindi|Sadiqabad|Safdarabad|Sahiwal|Sangla Hill|Sarai Alamgir|Sargodha|Shakargarh|Sheikhupura|Sialkot|Sohawa|Soianwala|Siranwali|Talagang|Taxila|Toba Tek Singh|Vehari|Wah Cantonment|Wazirabad";
s_a[8] = "Badin|Bhirkan|Rajo Khanani|Chak|Dadu|Digri|Diplo|Dokri|Ghotki|Haala|Hyderabad|Islamkot|Jacobabad|Jamshoro|Jungshahi|Kandhkot|Kandiaro|Karachi|Kashmore|Keti Bandar|Khairpur|Kotri|Larkana|Matiari|Mehar|Mirpur Khas|Mithani|Mithi|Mehrabpur|Moro|Nagarparkar|Naudero|Naushahro Feroze|Naushara|Nawabshah|Nazimabad|Qambar|Qasimabad|Ranipur|Ratodero|Rohri|Sakrand|Sanghar|Shahbandar|Shahdadkot|Shahdadpur|Shahpur Chakar|Shikarpaur|Sukkur|Tangwani|Tando Adam Khan|Tando Allahyar|Tando Muhammad Khan|Thatta|Umerkot|Warah";
s_a[9] = "Others";

function populateStates(countryElementId, stateElementId) {

    var selectedCountryIndex = document.getElementById(countryElementId).selectedIndex;

    var stateElement = document.getElementById(stateElementId);

    stateElement.length = 0; // Fixed by Julian Woods
    stateElement.options[0] = new Option('Select State', '');
    stateElement.selectedIndex = 0;

    var state_arr = s_a[selectedCountryIndex].split("|");

    for (var i = 0; i < state_arr.length; i++) {
        stateElement.options[stateElement.length] = new Option(state_arr[i], state_arr[i]);
    }
}

function populateCountries(countryElementId, stateElementId) {
    // given the id of the <select> tag as function argument, it inserts <option> tags
    var countryElement = document.getElementById(countryElementId);
    countryElement.length = 0;
    countryElement.options[0] = new Option('Select Country', '-1');
    countryElement.selectedIndex = 0;
    for (var i = 0; i < country_arr.length; i++) {
        countryElement.options[countryElement.length] = new Option(country_arr[i], country_arr[i]);
    }

    // Assigned all countries. Now assign event listener for the states.

    if (stateElementId) {
        countryElement.onchange = function () {
            populateStates(countryElementId, stateElementId);
        };
    }
}



populateCountries("country", "state");