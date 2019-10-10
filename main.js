$(document).ready(function(){

	$(".menu-toggle").click(function(){
		$(".menu-toggle").toggleClass("active"),
		$(".list-2").toggleClass("active")
	})




    $('#name').keyup(function () { 
       
        name=$('#name').val() 
         
        var nameReg = /^[A-Z][a-z]{3,12}$/;
        if (nameReg.test(name) == true) {
          console.log(true)
          $('#name').addClass("is-valid")
        } 
    
      });
    
      $('#email').keyup(function () { 
         
        email=$('#email').val() 
         
        var emailReg =/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (emailReg.test(email) == true) {
          console.log(true)
          $('#email').addClass("is-valid")
        } 
    
      });
    
      $('#zipCode').val({
        rules: {
          minfield: {
            required:true,
            integer: true,
            min:0,
            max:$("#maxfield").val(),
          },
          maxfield:{
            required:true,
            integer: true,
            min:$("#minfield").val(),
            max:5
          },
        },
       
      });

      $('#phone').keyup(function () { 
     
        phone=$('#phone').val()
         
        var phoneReg =/^(010|011|012)[0-10]{8}$/;
        if (phoneReg.test(phone) == true) {
          console.log(true)
          $('#phone').addClass("is-valid")
        }
    });

    $("#btn").click(function(){
      

    })


    
        
});



