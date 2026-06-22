function validarInfor(event){
    event.preventDefault();

    const txtOrigem = window.document.querySelector('#origem');
    const txtDestino = window.document.querySelector('#destino');
    const txtIda = window.document.querySelector('#ida');
    const txtVolta = window.document.querySelector('#volta');
    
 
    if(txtOrigem.value === ""){
        alert('ERRO: Por favor, preencha o campo Origem.');
        return;
    }
     if(txtDestino.value === ""){
        alert('ERRO: Por favor, preencha o campo Destino.');
        return;
    }
     if(txtIda.value === ""){
        alert('ERRO: Por favor, preencha o campo de Ida.');
        return;
    }
     if(txtVolta.value === ""){
        alert('ERRO: Por favor, preencha o campo de Volta.');
        return;
    }

    //validação de datas

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); ///altera a data de "hoje" para meia noite
    const dataIda = new Date(txtIda.value);
    const dataVolta = new Date(txtVolta.value);

    if(dataIda < hoje){
        alert('ERRO: A data de ida não pode ser anterior a hoje');
        return;
    }
    if(dataVolta < dataIda){
        alert('ERRO: A data de volta não pode ser anterior a data de ida.');
        return;
    }

}


