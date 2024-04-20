document.getElementById("tableBookingForm").addEventListener("submit", function(event) {
    event.preventDefault();


    const formData = new FormData(this);


    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });


    console.log(jsonData);
});
