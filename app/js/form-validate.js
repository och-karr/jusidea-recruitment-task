function validateForm() {
    var formElem = document.getElementById('form-select');
    var checkboxElem = document.getElementById('js-checkbox');

    formElem.addEventListener('submit', (function (e) {
        e.preventDefault();

        if (checkboxElem.checked == false) {

            function setRedColor(element) {

                element.classList.add("red-border");
            }

        } else {

            

            var checkboxLabel = document.getElementById('js-checkbox-label');
            setRedColor(checkboxLabel);
        }
    }))
}

validateForm();