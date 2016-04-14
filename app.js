

function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
}

// document.addEventListener("deviceready", onAppReady, false) ;
// document.addEventListener("onload", onAppReady, false) ;

// The app.Ready event shown above is generated by the init-dev.js file; it
// unifies a variety of common "ready" events. See the init-dev.js file for
// more details. You can use a different event to start your app, instead of
// this event. A few examples are shown in the sample code above. If you are
// using Cordova plugins you need to either use this app.Ready event or the
// standard Crordova deviceready event. Others will either not work or will
// work poorly.

// NOTE: change "dev.LOG" in "init-dev.js" to "true" to enable some console.log
// messages that can help you debug Cordova app initialization issues.


(function () {
    "use strict";
    /*
      hook up event handlers
    */
    function register_event_handlers() {

        // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

        var notificationOpenedCallback = function (jsonData) {

            alert("Message was \n" + jsonData.message);
        };

        window.plugins.OneSignal.init("xc1be215c-fb68-4577-bb00-b32efe6e02e0", {
                googleProjectNumber: "183974030001"
            },
            notificationOpenedCallback);



        // Show an alert box if a notification comes in when the user is in your app.
        //    window.plugins.OneSignal.enableInAppAlertNotification(true);

        /* button  #btn_push */
        $(document).on("click", "#btn_push", function (evt) {

            window.plugins.OneSignal.sendTag("Group", "My Testgroup");
          //  alert("Registered");

            window.plugins.OneSignal.getIds(function (ids) {
                alert("ID : "+ids.userId + "\nToken "+  ids.pushToken);
            });

        });

    }
    document.addEventListener("app.Ready", register_event_handlers, false);
})();
