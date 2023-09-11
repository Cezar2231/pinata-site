function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

var btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
e.preventDefault()
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var phone = document.getElementById('phone').value;
var message = document.getElementById('message').value;
var body = 'name: ' + name + '<br/> email: ' + email + '<br/> phone: ' + phone + '<br/> message: ' + message; 

    //hidden

