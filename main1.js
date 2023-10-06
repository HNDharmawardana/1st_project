$(document).ready(function () {
    $("#submit").click(function () {

        //regular expression
        var regEx = /^[a-zA-Z]{3,10}$/i;
        var regExdob = /^(?:\d{2,4}[-/\s]\d{1,2}[-/\s]'?\d{1,2})$/i;

        var fname = $.trim($("#fname").val());
        var lname = $.trim($("#lname").val());
        var age = $.trim($("#age").val());
        var faname = $.trim($("#faname").val());
        var moname = $.trim($("#moname").val());
        var dob = $.trim($("#dob").val());

        if ((age > 0) && (age <= 100) && regEx.test(fname) && regEx.test(lname) && regEx.test(faname) && regEx.test(moname) && regExdob.test(dob)) {

            var formData = new FormData();
            formData.append("fname", fname);
            formData.append("lname", lname);
            formData.append("age", age);
            formData.append("faname", faname);
            formData.append("moname", moname);
            formData.append("dob", dob);

            // console.log(Array.from(formData));

            var obj = new XMLHttpRequest();
            obj.onreadystatechange = function () {
                if (this.status == 200 && this.readyState == 4) {
                    alert(this.responseText);
                }
            };
            obj.open("POST", "./inc/action1.php", true);
            obj.send(formData);
        }
        else {
            alert("Invalid Inputs");
        }
    });
});