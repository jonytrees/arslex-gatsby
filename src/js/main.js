$(document).ready(function(){

    var go_to;
    $('.goto > span, .goto > p').click(function(){
        $('html, body').stop().animate({ scrollTop: $('#'+$(this).attr('class')).offset().top }, 1000);
    });

    function filled(a) {
        if (document.getElementById(a).value!='') {
            if (!$('#'+a).hasClass('filled')) {
                $('#'+a).addClass('filled');
            }
        } else {
            if ($('#'+a).hasClass('filled')) {
                $('#'+a).removeClass('filled');
            }
        }
        return false;
    }
    
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    $('.form-div > input[type=text], .form-div > textarea').each(function(){
        fill_id = $(this).attr('id');
        filled(fill_id);
    });
    
    $('.form-div > input[type=text], .form-div > textarea').keyup(function(){
        fill_id = $(this).attr('id');
        filled(fill_id);
        if ($(this).hasClass('red_req')) {
            if (document.getElementById(fill_id).value!='') {
                $(this).removeClass('red_req');
            }
        }
    });
    
    $('.top-mob').click(function(){
        $(this).toggleClass('active');
    });
    
    var phone, email, reg, mes = '';
    $('#phone').blur(function(){
        phone = $(this).val();
        reg= phone.match(/\d+/g)?phone.match(/\d+/g):[];
        for(var i=0;i<reg.length;i++){ reg[i]=+reg[i] }
        phone = reg.join("");
        if (phone.length>5&&phone.length<14) {
            $('#phone').val(phone);
        }
        if (phone.length<=5||phone.length>=14) {
            if (!$('#phone').hasClass('red_req')) {
                $('#phone').addClass('red_req');
            }
        }
    });
    
    $('#email').blur(function(){
        if (!validateEmail($('#email').val())) {
            if (!$('#email').hasClass('red_req')) {
                $('#email').addClass('red_req');
            }
        }
    });
    
    $('.required').blur(function(){
        fill_id = $(this).attr('id');
        if (document.getElementById(fill_id).value=='') {
            $(this).removeClass('red_req').addClass('red_req');
        }
    });
    
    var err_form = 0;
    $('#submit').click(function(){
        mes = '';
        err_form = 0;
        $('.required').each(function(){
            fill_id = $(this).attr('id');
            if (document.getElementById(fill_id).value=='') {
                err_form = err_form + 1;
                if (!$(this).hasClass('red_req')) {
                    $(this).addClass('red_req');
                }
            }
        });
        if (err_form!=0) {
            mes = mes + '<p>Fill in the fields</p>';
        }
        phone = $('#phone').val();
        reg= phone.match(/\d+/g)?phone.match(/\d+/g):[];
        for(var i=0;i<reg.length;i++){ reg[i]=+reg[i] }
        phone = reg.join("");
        if (phone.length>5&&phone.length<14) {
            $('#phone').val(phone);
        }
        if (phone.length<=5||phone.length>=14) {
            err_form = err_form + 1;
            if (!$('#phone').hasClass('red_req')) {
                $('#phone').addClass('red_req');
            }
            mes = mes + '<p>Enter your valid phone number</p>';
        }
        
        if (!validateEmail($('#email').val())) {
            err_form = err_form + 1;
            mes = mes + '<p>Enter your valid email</p>';
        }

        if (err_form==0) {
            $(this).attr('type','submit');
        } else {
            $(this).attr('type','button');
        }
        if (mes!='') {
            $('.form-mess').html(mes);
        }
    });
});