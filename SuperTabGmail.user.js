// ==UserScript==
// @name             SuperTabGmail
// @author           justalemon
// @version          1.0
// @description      Avoid the creation of new tabs when you change the Google Account on Gmail
// @description:es   Evita la creacion de nuevas pestañas cuando cambias la Cuenta de Google en Gmail
// @license          MIT
// @include          https://mail.google.com/mail/*
// @namespace        https://github.com/justalemon/UserScripts
// @icon             https://ssl.gstatic.com/ui/v1/icons/mail/images/favicon5.ico
// @downloadURL      https://github.com/justalemon/UserScripts/raw/master/SuperTabGmail.user.js
// @updateURL        https://github.com/justalemon/UserScripts/raw/master/SuperTabGmail.user.js
// @grant            none
// @run-at           document-end
// ==/UserScript==

(function() {
    "use strict";
    setInterval(refresh, 2500);

    function refresh()
    {
        Array.from(document.getElementsByClassName("gb_Ob")).forEach(link => link.removeAttribute("target"));
    }
})();
