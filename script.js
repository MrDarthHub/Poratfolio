function validardatos(){
    window.event.preventDefault();

    if(document.form.nombre.value==""){
        alert('Campo nombre obligatorio')
        document.form.nombre.focus();
    }else if (document.form.email.value==""){
        alert('Campo email obligatorio')
        document.form.email.focus();
    }else if (document.form.asunto.value==""){
        alert('Campo asunto obligatorio')
        document.form.asunto.focus();
    }else if (document.form.email.value.indexOf("@")==-1 && document.form.email.value.indexOf(".")==-1){
        alert('email es invalido')
        document.form.focus();
    }
    
    
    
    
    
    
    else if (document.form.mensaje.value=="" && document.form.mensaje.lenght <=50){
        alert('Campo mensaje es obligatorio y debe contener maximo 50 caracteres')
        document.form.mensaje.focus();
    }
}
document.querySelector("form").addEventListener("submit", validardatos)