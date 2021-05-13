// Conditions Apply, To receive validation code make a purchase, retain receipt from your KFC purchase and complete the online survey within 3 days of purchase. To redeem, print/write down validation code on the original KFC receipt and show to staff at the KFC restaurant. Spend $4.95 in 1 transaction on your next purchase to redeem regular chips and drink. Spend $19.95 in 1 transaction on your next purchase to redeem large chips and drink. Max. of 1 validation per transaction. Validation code valid for 14 days from date of issue. Not valid with any other offer.

(function () {
    // First page
    var inputs = document.querySelectorAll("#surveyEntryForm input, #surveyEntryForm select");
    for ( let input of inputs )
    {
        switch ( input.id )
        {
            case 'InputStoreNum': input.value=1431; continue;
            case 'InputTransactionNum': input.value=parseInt(window.prompt("Transaction number", "")); continue;
            case 'InputDay': input.value=padLeft((new Date).getDate(), 2); continue;
            case 'InputMonth': input.value=padLeft((new Date).getMonth()+1, 2); continue;
            case 'InputYear': input.value=(new Date).getFullYear().toString().substring(2); continue;
            case 'InputHour': input.value='01'; continue;
            case 'InputMinute': input.value='01'; continue;
            case 'InputMeridian': input.value='AM'; continue;
        }
    }

    // Next pages
    var rows = document.querySelectorAll("#surveyForm TR, #surveyForm .inputtyperblv");
    for ( let row of rows )
    {
        var inputs = row.querySelectorAll('input[type=radio]');
        if ( inputs.length )
        {
            // These are the 'Would you like to recognise someone' and 'Would you be interested in signing up' checkbox. Say no to avoid extra steps.
            let targ = inputs[0].name in [ 'R038000', 'R048000' ] ? 1 : 0;
            inputs[targ].checked = true;
        }
    }

    // Click Next
    var nextButton = document.querySelector('#surveyEntryForm #NextButton, #surveyForm #NextButton');
    if ( nextButton )
        nextButton.click();


    // Pad string nr to a length of n
    function padLeft(nr, n, str){ return Array(n-String(nr).length+1).join(str||'0')+nr; }
    // Get 12-based hour
    function hours12(date) { return (date.getHours() + 24) % 12 || 12; }
}());