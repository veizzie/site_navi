function rez(){
    var iMhours,yourhours, result;
    iMhours = 16842;
    yourhours = parseInt(document.getElementById('yourhours').value, 10);

    if (isNaN(yourhours)) {
        document.getElementById('textrez').innerHTML = 'Будь ласка, введіть коректну кількість годин.';
        return;
    }

    if (iMhours > yourhours) {
        result = iMhours - yourhours;
        message = 'Різниця годин: У iM на ' + result + ' годин більше. (Кількість годин iM - '+iMhours+')';
    } else if (iMhours < yourhours) {
        result = yourhours - iMhours;
        message = 'Різниця годин: У вас на ' + result + ' годин більше. (Кількість годин iM - '+iMhours+')';
    } else {
        message = 'Кількість годин однакова.';
    }
    
    document.getElementById('textrez').innerHTML = message;
}