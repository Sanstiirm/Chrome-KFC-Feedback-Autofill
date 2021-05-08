(function () {
    // First page
    var inputs = document.querySelectorAll("#surveyEntryForm input, #surveyEntryForm select");
    for ( i = 0; i < inputs.length; i++ )
    {
        var input = inputs[i];
        switch ( input.id )
        {
            case 'InputStoreNum': input.value=1431; continue;
            case 'InputTransactionNum': input.value=130318; continue;
            case 'InputDay': input.value=padLeft((new Date).getDate(), 2); continue;
            case 'InputMonth': input.value=padLeft((new Date).getMonth()+1, 2); continue;
            case 'InputYear': input.value=(new Date).getFullYear().toString().substring(2); continue;
            case 'InputHour': input.value='01'; continue;
            case 'InputMinute': input.value='01'; continue;
            case 'InputMeridian': input.value='AM'; continue;
            case 'InputTransactionNum': input.value=1001; continue;
        }
    }

    // Next pages
    var rows = document.querySelectorAll("#surveyForm TR, #surveyForm .inputtyperblv");
    for ( i = 0; i < rows.length; i++ )
    {
        var inputs = rows[i].querySelectorAll('input[type=radio]');
        if ( inputs.length )
        {
            // These are the 'Would you like to recognise someone' and 'Would you be interested in signing up' checkbox. Say no to avoid extra steps.
            if ( inputs[0].name == 'R038000' || inputs[0].name == 'R048000' )
                inputs[1].checked = true;
            else
                inputs[0].checked = true;
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