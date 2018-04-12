$( function(){
  $("#news").submit(function (event) {
    console.log(data = $(this).serializeArray());
    event.preventDefault();
    p = { "email_address": data[0].value,
      "status": "subscribed",
      "merge_fields": {}
    };
    fetch("https://json-api-wuyywqnnuj.now.sh", {
      headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
      },
      "method": "POST",
      body: JSON.stringify(p)
    }).then(response => {
      $('#news').trigger("reset");
    });
  });
});