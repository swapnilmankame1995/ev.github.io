var name;
var number;
var email;
var company;
var state;
var disc
var role;
var col;
var row;
var i;
var x;
var indexpos = [];
var names = [];

function adddata(col) {
  //adddata() is called when a option is clicked from the sidebar

  //PHASE I : RESPONSE READING STAGE ---------------------------------------------------------------
  //col = selected option from the side menu
  var response = [];
  document.getElementById("contactcard").innerHTML = "";
  var name = "Swapnil";
  var data
  new RGraph.Sheets('186WP_S-Th-njmMzMCq0dacfMTYU2MPumiT727llCXLI', function(sheet) {
    var selection = sheet.get(col + 1);
    for (row = 2; data !== null; row++) {
      // loop through all rows in one column
      data = sheet.get(col + row); //data variable stores all the values from the selected single column
      //traversing through the col until null value is reached, then break from loop
      if (data == null) {
        break;
      }

      response.push(data);
    }
console.log(selection);
    //PHASE I : RESPONSE READING STAGE END ---------------------------------------------------------------

    console.log("Array elements");
    console.log(response);
    indexpos = [];
    response.forEach(nameFilter);


    function nameFilter(value, index, array) {

      if (value == "Yes") {
        indexpos.push(index);
        console.log(indexpos);
      }
    }
    var arrayLength = indexpos.length;


    //----------------------------------COLLECT NAMES WITH "YES" AS A REPLY-------------
    names = [];
    for (x = 0; x < arrayLength; x++) {
      // loop through all rows in one column
      name = sheet.get("C" + (indexpos[x] + 2)); //name variable stores all the name from the selected single column with a yes response
      //traversing through the col until null value is reached, then break from loop
      //console.log(name);
      //console.log(data);
      names.push(name);
    }
    console.log(names);
    //----------------------------------COLLECT NAMES WITH "YES" AS A REPLY END-------

    //----------------------------------COLLECT NUMBERS WITH "YES" AS A REPLY-------------
    var numbers = [];
    for (x = 0; x < arrayLength; x++) {
      // loop through all rows in one column
      number = sheet.get("D" + (indexpos[x] + 2)); //name variable stores all the name from the selected single column with a yes response
      //traversing through the col until null value is reached, then break from loop
      //console.log(number);
      //console.log(data);
      numbers.push(number);
    }
    console.log(numbers);
    //----------------------------------COLLECT NUMBERS WITH "YES" AS A REPLY END-------


    //----------------------------------COLLECT EMAIL WITH "YES" AS A REPLY-------------
    var emails = [];
    for (x = 0; x < arrayLength; x++) {
      // loop through all rows in one column
      email = sheet.get("B" + (indexpos[x] + 2)); //name variable stores all the name from the selected single column with a yes response
      //traversing through the col until null value is reached, then break from loop
      //console.log(email);
      //console.log(data);
      emails.push(email);
    }
    console.log(emails);
    //----------------------------------COLLECT EMAIL WITH "YES" AS A REPLY END-------

    //----------------------------------COLLECT COMPANY WITH "YES" AS A REPLY-------------
    var companies = [];
    for (x = 0; x < arrayLength; x++) {
      // loop through all rows in one column
      company = sheet.get("E" + (indexpos[x] + 2)); //name variable stores all the name from the selected single column with a yes response
      //traversing through the col until null value is reached, then break from loop
      //console.log(company);
      //console.log(data);
      companies.push(company);
    }
    console.log(companies);
    //----------------------------------COLLECT COMPANY WITH "YES" AS A REPLY END-------

    //----------------------------------COLLECT STATE WITH "YES" AS A REPLY-------------
    var states = [];
    for (x = 0; x < arrayLength; x++) {
      // loop through all rows in one column
      state = sheet.get("F" + (indexpos[x] + 2)); //name variable stores all the name from the selected single column with a yes response
      //traversing through the col until null value is reached, then break from loop
      //console.log(state);
      //console.log(data);
      states.push(state);
    }
    console.log(states);
    //----------------------------------COLLECT STATE WITH "YES" AS A REPLY END-------

    //----------------------------------COLLECT ROLE WITH "YES" AS A REPLY-------------
    var roles = [];
    for (x = 0; x < arrayLength; x++) {
      // loop through all rows in one column
      role = sheet.get("G" + (indexpos[x] + 2)); //name variable stores all the name from the selected single column with a yes response
      //traversing through the col until null value is reached, then break from loop
      //console.log(role);
      //console.log(data);
      roles.push(role);
    }
    console.log(roles);
    //----------------------------------COLLECT ROLE WITH "YES" AS A REPLY END-------
    //----------------------------------COLLECT ROLE WITH "YES" AS A REPLY-------------
    var discs = [];
    for (x = 0; x < arrayLength; x++) {
      // loop through all rows in one column
      disc = sheet.get("H" + (indexpos[x] + 2)); //name variable stores all the name from the selected single column with a yes response
      //traversing through the col until null value is reached, then break from loop
      //console.log(role);
      //console.log(data);
      discs.push(disc);
    }
    console.log(disc);
    //----------------------------------COLLECT ROLE WITH "YES" AS A REPLY END-------
document.getElementById("intro").innerHTML = "<h7><i>All entries for</i></h7>" + " " + selection;
    //console.log(selection);



    for (i = 0; i < arrayLength; i++) {


          if (discs[i] == '') {
            discs[i] = "No discription given";
            console.log(discs[i]);
          }


      var card = document.createElement('div');

      card.innerHTML = '<div class="col-md-4">' +
        '<div class="thumbnail">' +
        '<div class="card" style="width: 18rem;">' +
        '<div class="card-body">' +
        '<h5 class="card-title">' + names[i] + ' </h5>' +
        '<h6 class="card-subtitle mb-2 text-muted">' + roles[i] + '</h6>' +
        '<h6 class="card-subtitle mb-2 text-muted">' + companies[i] + '</h6>' +

        '<h6 class="card-subtitle mb-2 text-muted">' + numbers[i] + '</h6>' +
        '<h6 class="card-subtitle mb-2 text-muted">' + emails[i] + '</h6>' +

              '<h6 class="card-subtitle mb-2 text-muted"><a  data-toggle="collapse" href="#collapseExample'+i+'"'+' role="button" aria-expanded="false" aria-controls="collapseExample">Company Description</a></h6>' +
                '<div class="collapse" id="collapseExample' + i +'">' +
                '<p class="card-text">' + discs[i] + '</p>' +
                '</div>' +

        '<a href="tel:' + numbers[i] + '" class="card-link">Call</a>' +

        '<a href = "mailto: ' + emails[i] + '" class="card-link">Send Mail</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';

      document.getElementById("contactcard").appendChild(card);

    }

    if (arrayLength == 0) {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function() {
        x.className = x.className.replace("show", "");
      }, 2000);



    } else {

      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        $("#wrapper").toggleClass("toggled");
      }

    }
    document.getElementById("intro").innerHTML = "";
    document.getElementById("intro").innerHTML = "<h7><i>All entries for</i></h7>" + " " + selection;

  });




}









//showing all entries in the homepage

//PHASE I : RESPONSE READING STAGE ---------------------------------------------------------------
//col = selected option from the side menu
var response = [];

new RGraph.Sheets('186WP_S-Th-njmMzMCq0dacfMTYU2MPumiT727llCXLI', function(sheet) {
  var data = [];
  // console.log("1 " +data);

  for (row = 2; data !== null; row++) {
    // loop through all rows in one column
    data = sheet.get("C" + row); //data variable stores all the values from the selected single column
    //traversing through the col until null value is reached, then break from loop
    // console.log("2 = " +data);

    if (data == null) {
      break;
    }
    // console.log("3 = " +data);


    response.push(data);
  }


  console.log("4 = " +response);

  var arrayLength = response.length;
  console.log("length = " + arrayLength);
  //
  // //PHASE I : RESPONSE READING STAGE END ---------------------------------------------------------------
  //
  // console.log("Array elements");
  // console.log(data);
  // indexpos = [];
  // response.forEach(nameFilter);
  //
  //
  // function nameFilter(value, index, array) {
  //
  //   if (value == "Yes") {
  //     indexpos.push(index);
  //     console.log(indexpos);
  //   }
  // }
  //

  //----------------------------------COLLECT NAMES WITH "YES" AS A REPLY-------------
  names = [];
  for (x = 2; x < arrayLength+2; x++) {
    // loop through all rows in one column
    name = sheet.get("C" + ([x])); //name variable stores all the name from the selected single column with a yes response
    //traversing through the col until null value is reached, then break from loop
    //console.log(name);
    //console.log(data);
    names.push(name);
  }
  console.log(names);
  //----------------------------------COLLECT NAMES WITH "YES" AS A REPLY END-------

  //----------------------------------COLLECT NUMBERS WITH "YES" AS A REPLY-------------
  var numbers = [];
  for (x = 2; x < arrayLength+2; x++) {
    // loop through all rows in one column
    number = sheet.get("D" + ([x])); //name variable stores all the name from the selected single column with a yes response
    //traversing through the col until null value is reached, then break from loop
    //console.log(number);
    //console.log(data);
    numbers.push(number);
  }
  console.log(numbers);
  //----------------------------------COLLECT NUMBERS WITH "YES" AS A REPLY END-------


  //----------------------------------COLLECT EMAIL WITH "YES" AS A REPLY-------------
  var emails = [];
  for (x = 2; x < arrayLength+2; x++) {
    // loop through all rows in one column
    email = sheet.get("B" + ([x])); //name variable stores all the name from the selected single column with a yes response
    //traversing through the col until null value is reached, then break from loop
    //console.log(email);
    //console.log(data);
    emails.push(email);
  }
  console.log(emails);
  //----------------------------------COLLECT EMAIL WITH "YES" AS A REPLY END-------

  //----------------------------------COLLECT COMPANY WITH "YES" AS A REPLY-------------
  var companies = [];
  for (x = 2; x < arrayLength+2; x++) {
    // loop through all rows in one column
    company = sheet.get("E" + ([x])); //name variable stores all the name from the selected single column with a yes response
    //traversing through the col until null value is reached, then break from loop
    //console.log(company);
    //console.log(data);
    companies.push(company);
  }
  console.log(companies);
  //----------------------------------COLLECT COMPANY WITH "YES" AS A REPLY END-------

  //----------------------------------COLLECT STATE WITH "YES" AS A REPLY-------------
  var states = [];
  for (x = 2; x < arrayLength+2; x++) {
    // loop through all rows in one column
    state = sheet.get("F" + ([x])); //name variable stores all the name from the selected single column with a yes response
    //traversing through the col until null value is reached, then break from loop
    //console.log(state);
    //console.log(data);
    states.push(state);
  }
  console.log(states);
  //----------------------------------COLLECT STATE WITH "YES" AS A REPLY END-------

  //----------------------------------COLLECT ROLE WITH "YES" AS A REPLY-------------
  var roles = [];
  for (x = 2; x < arrayLength+2; x++) {
    // loop through all rows in one column
    role = sheet.get("G" + ([x])); //name variable stores all the name from the selected single column with a yes response
    //traversing through the col until null value is reached, then break from loop
    //console.log(role);
    //console.log(data);
    roles.push(role);
  }
  console.log(roles);
  //----------------------------------COLLECT ROLE WITH "YES" AS A REPLY END-------
  //----------------------------------COLLECT ROLE WITH "YES" AS A REPLY-------------
  var discs = [];
  for (x = 2; x < arrayLength+2; x++) {
    // loop through all rows in one column
    disc = sheet.get("H" + ([x])); //name variable stores all the name from the selected single column with a yes response
    //traversing through the col until null value is reached, then break from loop
    //console.log(role);
    //console.log(data);
    discs.push(disc);
  }
  console.log(disc);
  //----------------------------------COLLECT ROLE WITH "YES" AS A REPLY END-------

  //console.log(selection);
  for (i = 0; i < arrayLength; i++) {

    var card = document.createElement('div');
    //console.log(discs[i]);

    if (discs[i] == '') {
      discs[i] = "No discription given";
      console.log(discs[i]);
    }

    card.innerHTML =
     '<div class="col-md-4">' +

      '<div class="thumbnail">' +
      '<div class="card" style="width: 18rem;">' +
      '<div class="card-body">' +
      '<h5 class="card-title">' + names[i] + ' </h5>' +
      '<h6 class="card-subtitle mb-2 text-muted">' + roles[i] + '</h6>' +
      '<h6 class="card-subtitle mb-2 text-muted">' + companies[i] + '</h6>' +

      '<h6 class="card-subtitle mb-2 text-muted">' + numbers[i] + '</h6>' +
      '<h6 class="card-subtitle mb-2 text-muted">' + emails[i] + '</h6>' +

      '<h6 class="card-subtitle mb-2 text-muted"><a  data-toggle="collapse" href="#collapseExample'+i+'"'+' role="button" aria-expanded="false" aria-controls="collapseExample">Click for Company Description</a></h6>' +
        '<div class="collapse" id="collapseExample' + i +'">' +
        '<p class="card-text">' + discs[i] + '</p>' +
        '</div><br>' +

      '<a href="tel:' + numbers[i] + '" class="card-link">Call</a>' +
      '<a href = "mailto: ' + emails[i] + '" class="card-link">Send Mail</a>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';

    document.getElementById("contactcard").appendChild(card);

  }

  if (arrayLength == 0) {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function() {
      x.className = x.className.replace("show", "");
    }, 2000);



  }
  // document.getElementById("intro").innerHTML = "";

});
