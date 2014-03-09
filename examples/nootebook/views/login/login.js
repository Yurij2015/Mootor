(function ($) {
    
    "use strict";

    var view = m.app.view("login");
    
    view.on("load", function() {
        // code here
        $("#btnLogin").on("tap click", function(e) {
            //
            login();
            e.preventDefault();
        });    
    });
    
    var goToList = function() {
        var email = $("#inputEmail")[0].value;
        m.app.go("#list/" + email );
    }

    function login() {
        $.ajax({url:"https://dev.voolks.com/users/login/?username=nootebookuser&password=12345", 
            headers: {"X-Voolks-Api-Key":"1234", "X-Voolks-App-Id":"1"}, 
            success: processLogin,
            error: processError
        });          
    }

    function processLogin(r) {
        if (r.code == "666") {
            alert(r.text);
        }
        if (r.sessionId) {
            m.app.settings("sessionId",r.sessionId);
            m.app.settings("user",r.username);
            m.app.settings("headers",{"X-Voolks-Api-Key":"1234", "X-Voolks-App-Id":"1", "X-Voolks-Session-Id": m.app.settings("sessionId")});
            goToList();
        }

        
    }
    function processError(r) {
        throw(new Error(r));
    }


}(window.$));