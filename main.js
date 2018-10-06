{
    document.querySelector("#survey-form").addEventListener("submit", e => {
        e.preventDefault();
        console.log("Form submitted");
        console.log(e);
    });

    function checkboxOtherClicked (){
        document.getElementById("extra-procedure").style.display = document.querySelector("input[value=other]").checked ? 'block' : 'none'; 
    }
}