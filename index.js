document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        createFormIcon()
        // createForm()
    }
}

function loadxchng() {
    var scrpt_exchng = document.createElement('script');
    scrpt_exchng.type = 'text/javascript';
    // scrpt_exchng.src = '//stagepublisher.torcai.com/ad-server/v2/js/xchng.js';
    scrpt_exchng.src = './xchng.orig.js'
    // scrpt_exchng.src = '../xchng.js';
    document.body.append(scrpt_exchng);
    scrpt_exchng.onload = function () {
        var allElements = document.querySelectorAll("[id='ionAdTagScript']");
        for (var i = 0; i < allElements.length; i++) {
            callAdtagUrl(allElements[i]);
        }
    }
}
function createFormIcon() {
    var my_awesome_script = document.createElement('script');

    my_awesome_script.setAttribute('src', 'https://kit.fontawesome.com/a076d05399.js');

    my_awesome_script.setAttribute('content', "width=device-width, initial-scale=1")
    document.head.appendChild(my_awesome_script);
    var i = document.createElement("i");
    i.setAttribute("class", 'fas fa-comment-dots');
    // i.setAttribute('style', 'font-size:48px;color:rgb(240,127,32)');
    i.style.cssText = 'position:fixed;right:1px;bottom:2px;width:100px;height:50px;z-index:1111;font-size:48px;color:rgb(240,127,32);cursor: -webkit-grab; cursor: grab';
    i.addEventListener("click", e=>createForm(e, i))
    document.getElementsByTagName("body")[0]
        .appendChild(i);
    }

function createForm(e, i) {
    i.style.display = "none"
    var br = document.createElement("br");
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", "https://script.google.com/macros/s/AKfycbyDqOiQXWOAZuQqqeNe2He3ju6SYed_qxGRdm87GVkw3vQs7JowNFAdpXTxzTuJYK7E/exec");
    form.style.cssText = 'position:fixed;right:1px;bottom:2px;width:160px;height:80px;z-index:1111;';

    // Create an input element for Full Name
    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "Name");
    FN.setAttribute("placeholder", "Full Name");

    // Create an input element for date of birth
    //  var DOB = document.createElement("input");
    //  DOB.setAttribute("type", "text");
    //  DOB.setAttribute("name", "dob");
    //  DOB.setAttribute("placeholder", "DOB");

    // Create an input element for emailID
    var EID = document.createElement("input");
    EID.setAttribute("type", "text");
    EID.setAttribute("name", "Email");
    EID.setAttribute("placeholder", "E-Mail ID");

    // Create an input element for password
    //  var PWD = document.createElement("input");
    //   PWD.setAttribute("type", "password");
    //   PWD.setAttribute("name", "password");
    //   PWD.setAttribute("placeholder", "Password");

    // Create an input element for retype-password
    //    var RPWD = document.createElement("input");
    //    RPWD.setAttribute("type", "password");
    //    RPWD.setAttribute("name", "reTypePassword");
    //    RPWD.setAttribute("placeholder", "ReEnter Password");

    // create a submit button
    var s = document.createElement("input");
    var x = document.createElement("a");
    x.innerHTML = "X"
    x.style.cssText = 'position:fixed;right:5px;bottom:90px;width:auto;height:auto;z-index:1111;cursor: -webkit-grab; cursor: grab;text-decoration: none';

    // position:fixed;right:1px;bottom:2px;width:160px;height:80px;z-index:1111
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
    // x.setAttribute("type", "cancel");
    // x.setAttribute("value", "Cancel");
    x.addEventListener("click", e=>hideForm(e, form));

    // Append the full name input to the form
    form.appendChild(FN);

    // Inserting a line break
    form.appendChild(br.cloneNode());

    // Append the DOB to the form
    // form.appendChild(DOB);
    // form.appendChild(br.cloneNode());

    // Append the emailID to the form
    form.appendChild(EID);
    form.appendChild(br.cloneNode());

    // Append the Password to the form
    // form.appendChild(PWD);
    // form.appendChild(br.cloneNode());

    // Append the ReEnterPassword to the form
    // form.appendChild(RPWD);
    // form.appendChild(br.cloneNode());

    // Append the submit button to the form
    form.appendChild(s);
    
    document.getElementsByTagName("body")[0]
    .appendChild(form);
    
    form.appendChild(x);
    // var down = document.getElementById("123");

}

const hideForm = (e, form) => {
    form.style.display = "none";
    createFormIcon();
}

const submit = (e) => {
    e.preventDefault()
    console.log("CEYCEol");
    //Deployment ID
    // AKfycbxHQzjcs8EjuTgKXEagA_rLjV_9-FbvZaYX53OPIGUPy6vgRNV7bNwCqITLmqzjzz2o
    // AKfycbyDqOiQXWOAZuQqqeNe2He3ju6SYed_qxGRdm87GVkw3vQs7JowNFAdpXTxzTuJYK7E
    //submit Address
    // https://script.google.com/macros/s/AKfycbxHQzjcs8EjuTgKXEagA_rLjV_9-FbvZaYX53OPIGUPy6vgRNV7bNwCqITLmqzjzz2o/exec
}
