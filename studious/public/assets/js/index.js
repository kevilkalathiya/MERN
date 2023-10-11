$("#form").submit(function (e) {
  e.preventDefault();
  //alert('Data')
  // let formData = $("#form").serialize()
  // let formData = $("#form").serializeArray()
  // console.log("form ArraySerialize", formData);

  var result = {};
  $.each($("#form").serializeArray(), function () {
    result[this.name] = this.value;
  });
  console.log("called after loop", result);
  fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(result),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log("called inside response", response);
      //  console.log("called inside response", response.data);
      if (response.code == 1) {
        console.log("called inside response", response.data.Role);
        if (response.data.Role == "Admin") {
          window.location.href = "/admindashboard";
        } else {
          // window.location.href = "/"
        }
      } else {
        alert("invalid user");
      }
    });
  e.target.reset();
});
