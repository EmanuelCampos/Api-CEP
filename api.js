$(document).ready(function() {
    $("#txtCep").focusout(function() {
        var cep = $("#txtCep").val();
        cep = cep.replace("-", "");

        var urlStr = "http://viacep.com.br/ws/" + cep + "/json";

        $.ajax({
            url: urlStr,
            type : "get",
            dataType : "json",
            success : function (data) {
                console.log(data);

                $("#txtCidade").val(data.localidade);
                $("#txtEstado").val(data.uf);
                $("#txtBairro").val(data.bairro);
                $("#txtRua").val(data.logradouro);
                $("#txtComp").val(data.complemento);

            },
            error : function(erro) {
                console.log(erro)
            }
        });
    });
});