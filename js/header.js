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

Email.send({
  SecureToken : "7aef9683-a83b-4269-a214-0025887c76a8",
  To : 'koochico@gmail.com',
  From : 'sisko.10@abv.bg',
  Subject : "This is the subject",
  Body : body
}).then(
message => alert(message)
);
})




