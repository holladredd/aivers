  
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()






$(document).ready(function () {

  $('#logindir').click(function (event) {
    $('#login_modal').load('login.php');
    event.preventDefault();

    $.ajax({
      url: 'login.php',
      
    });
  });
});




$(document).ready(function () {
  
  $('#creatbtn').click(function (event) {
    $('#signup_modal').load('signup.php');
    event.preventDefault();
    
    $.ajax({
      url:'signup.php',
    });
  });
});


$(document).ready(function () {
  
  $('#barbtn').click(function (event) {
    $('#subnav').load('subnav.php');
    event.preventDefault();
    $.ajax({
      url:'subnav.php',
    });
  });
});

$(document).ready(function () {
  
  $('#barbtn').click(function (event) {
    $('#subnav').load('subnav.php');
    event.preventDefault();
    $.ajax({
      url:'subnav.php',
    });
  });
});


window.sr = ScrollReveal();
sr.reveal('.navbar, h2', {
  duration: 3000,
  origin: 'top',
  distance: '20px'
});

sr.reveal('#searchnav, #leftsidebar, ', {
  duration: 2000,
  origin: 'left',
  distance: '20px',
  delay: 0.2,
});
sr.reveal('#nav-start, #righsidebar, ', {
  duration: 2000,
  origin: 'right',
  distance: '20px',
  delay: 0.2,
});

sr.reveal('.card-img,.card, p,h4,h2,li, #img, #catnav', {
  duration: 2000,
  origin: 'bottom',
  distance: '20px',
  scale: 0.9,
  viewfactor: 0.2
});

sr.reveal('#logo', {
  duration: 2000,
  origin: 'bottom',
  distance: '20px',
  scale: 0.9,
  viewfactor: 0.2,
  delay: 0.4,
});
sr.reveal('#cat-card, #start, #vid', {
  duration: 2000,
  origin: 'bottom',
  distance: '60px',
  scale: 0.9,
  viewfactor: 0.2,
  viewport: window.document.documentElement,
});
