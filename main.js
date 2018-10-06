{
    document.querySelector("#survey-form").addEventListener("submit", e => {
        e.preventDefault();
        console.log("Form submitted");
        console.log(e);
    });


}