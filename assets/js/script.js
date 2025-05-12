let contactButton = document.getElementById('contactButton');
 
if (contactButton) {
    contactButton.addEventListener('click', function() {
        window.location.href = "../pages/contact.html"
        });
    }
 

 
// let buttonList = ['contactButton', 'facebook', 'pinterest', 'twitter'];
// let linkList = ['../pages/contact.html', 'https://www.facebook.com', 'https://www.pinterest.com', 'https://x.com/'];
 
// for(i = 0; i < buttonList.length; i++){
//     let button = document.getElementById(buttonList[i]);
 
//     if (button) {
//         button.addEventListener('click', function() {
//         window.location.href = linkList[i];
//         });
//     }
// }
