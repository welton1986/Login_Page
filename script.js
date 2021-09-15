function validar() {
    var email = form_user.email.value;
    var senha = form_user.senha.value;


    if (email == "" || email.indexOf('@') == -1) {
        alert('Preencha o campo E-mail.');
        form_user.email.focus();
        return false;
    }


    if (email == "" || email.indexOf('.') == -1) {
        alert('Preencha o campo E-mail.');
        form_user.email.focus();
        return false;
    }


    if (email == "" || email.indexOf('_') == -1) {
        alert('Preencha o campo E-mail.');
        form_user.email.focus();
        return false;
    }

    if (email == "" || email.indexOf('com') == -1) {
        alert('Preencha o campo E-mail.');
        form_user.email.focus();
        return false;
    }

    if (email == "" || email.indexOf('br') == -1) {
        alert('Preencha o campo E-mail.');
        form_user.email.focus();
        return false;
    }


    if (senha == "" || senha.length > 6) {
        alert('Preencha o campo senha com no maximo 6 caracteres.');
        form_user.senha.focus();
        return false;
    }


    document.getElementById("log").innerHTML = "Você esta logado, Parabéns!";
}