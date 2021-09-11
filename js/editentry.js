//  Created by Swapnil Mankame
//  Copyright 2020. All rights reserved.

function editResponce() {
  var response = [];
  var emailslst = [];
  var emailresponce = document.getElementById("InputEmail").value;
  console.log(emailresponce);

  new RGraph.Sheets('AIzaSyANrr-djxnWNW0SUVyo0U1509gCbtYkke8','186WP_S-Th-njmMzMCq0dacfMTYU2MPumiT727llCXLI','Form responses 1', function(sheet) {
    var data = [];
    for (row = 2; data !== null; row++) {
      // loop through all rows in one column from row number 2
      data = sheet.get("B" + row); //data variable stores all the values from the selected single column
      //traversing through the col until null value is reached, then break from loop
      // console.log(data);
      if (data == null) {
        // console.log(data);
        break;
      }
      response.push(data);
      // console.log(arrayLength);
    }
    var arrayLength = response.length;
    // --------------------------------
    var emails = [];
    for (x = 2; x < arrayLength + 2; x++) {
      // loop through all rows in one column
      email = sheet.get("B" + ([x])); //email variable stores all the name from the selected single column with a yes response

      emails.push(email);
    }

    response.forEach(nameFilter);
    function nameFilter(currentElement, index, array) {
      // console.log(emailresponce);
      if (emailresponce == currentElement) {
        indexpos = index;
        // console.log(indexpos);

      }

    }

    var responceURLs = [];

    for (x = 02; x < arrayLength + 2; x++) {
      // loop through all rows in one column
      respURl = sheet.get("BL" + ([x])); //disc variable stores all the name from the selected single column with a yes response
      // console.log(indexpos[x] + 2);
      responceURLs.push(respURl);
    }
    console.log(responceURLs[indexpos]);
    var emailBody =
      '<html>' +
      '<head>' +
      '<title></title>' +
      '<link href="https://svc.webspellchecker.net/spellcheck31/lf/scayt3/ckscayt/css/wsc.css" rel="stylesheet" type="text/css" />' +
      '</head>' +
      '<body aria-readonly="false">Hey There, This Message is from the EV suppliers list!&nbsp;<br />' +
      '<br />' +
      'Here is the link to your Form Response. Click the link below to edit.<br />' +
      '<br />' +
      responceURLs[indexpos] + '<br />' +
      '<br />' +
      'Thank you for showing your support<br />' +
      '<br />' +
      'Regards<br />' +
      'Swapnil Mankame<br />'+
      'CEO Mankame Automotive<br />'+
      'R&D Head eMatrixMile<br />'+
      '</body>' +
      '</html>';

      Email.send({
        // SecureToken: "98a9310f-63fb-4cd8-a644-1b2c3ac954a1",
        Host : "smtp25.elasticemail.com",
        Username : "swapnilum95@gmail.com",
        Password : "ECBB6E1F170DACFC2F713E2DC21F8DFA5689",
        To: emails[indexpos],
        From: "swapnil@evsupplierlist.com",
        Subject: "EV list editing link",
        Body: emailBody

      }).then(
        message => alert("Email Sent to " + emails[indexpos] + ", Check your registered mail for the edit link")


      );


  });

}
