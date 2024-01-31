
$(function () {

    $("#btnCreate").click(function () {

        $("#rowQR").removeClass("d-none");
        $("#rowQR").addClass("d-block");
        
        let url = $('#txtURL').val();
        $('#qrcode').text('');

        new QRCode(document.getElementById("qrcode"), {
            text: url,
            width: 300,
            height: 300,
            colorDark: "#5868bf",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

    });

    $("#btnClear").click(function () {
        $('#qrcode').text('');
        $("#rowQR").removeClass("d-block");
        $("#rowQR").addClass("d-none");
    });

})