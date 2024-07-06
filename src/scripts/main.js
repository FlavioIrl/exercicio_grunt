document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('alertButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Olá GruntJS');
        });
    }
});