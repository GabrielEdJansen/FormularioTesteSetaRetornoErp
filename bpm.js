function exibiParcelasComValorAcimaDeZero() {

    if (document.getElementById("VlrParDois").value = 0) {
        let eBol2 = document.getElementById('parcela2');

        eBol2.style.display = 'none';

        let eBol = document.getElementById('parcela2Bol');

        eBol.style.display = 'none';
    }  

    if (document.getElementById("VlrParTres").value = 0) {
        let eBol3 = document.getElementById('parcela3');

        eBol3.style.display = 'none';

        let eBol = document.getElementById('parcela3Bol');

        eBol.style.display = 'none';
    } 

    if (document.getElementById("VlrParQuatro").value = 0) {
        let eBol4 = document.getElementById('parcela4');

        eBol4.style.display = 'none';

        let eBol = document.getElementById('parcela4Bol');

        eBol.style.display = 'none';
    } 

    if (document.getElementById("VlrParCinco").value = 0) {
        let eBol5 = document.getElementById('parcela5');

        eBol5.style.display = 'none';

        let eBol = document.getElementById('parcela5Bol');

        eBol.style.display = 'none';
    } 

    if (document.getElementById("VlrParSeis").value = 0) {
        let eBol6 = document.getElementById('parcela6');

        eBol6.style.display = 'none';

        let eBol = document.getElementById('parcela6Bol');

        eBol.style.display = 'none';
    } 

    if (document.getElementById("VlrParSete").value = 0) {
        let eBol7 = document.getElementById('parcela7');

        eBol7.style.display = 'none';

        let eBol = document.getElementById('parcela7Bol');

        eBol.style.display = 'none';
    } 

    if (document.getElementById("VlrParOito").value = 0) {
        let eBol8 = document.getElementById('parcela8');

        eBol8.style.display = 'none';

        let eBol = document.getElementById('parcela8Bol');

        eBol.style.display = 'none';
    } 

    if (document.getElementById("VlrParNove").value = 0) {
        let eBol9 = document.getElementById('parcela9');

        eBol9.style.display = 'none';

        let eBol = document.getElementById('parcela9Bol');

        eBol.style.display = 'none';
    } 

    if (document.getElementById("VlrParDez").value = 0) {
        let eBol10 = document.getElementById('parcela10');

        eBol10.style.display = 'none';

        let eBol = document.getElementById('parcela10Bol');

        eBol.style.display = 'none';
    } 

    if (document.getElementById("VlrParOnze").value = 0) {
        let eBol11 = document.getElementById('parcela11');

        eBol11.style.display = 'none';

        let eBol = document.getElementById('parcela11Bol');

        eBol.style.display = 'none';
    } 

    if (document.getElementById("VlrParDoze").value = 0) {
        let eBol12 = document.getElementById('parcela12');

        eBol12.style.display = 'none';

        let eBol = document.getElementById('parcela12Bol');

        eBol.style.display = 'none';
    } 

}

function selecionaTipoFormulario() {
    if (document.getElementById("selectTipFor").value == 'Adiantamento') {

        let eVal = document.getElementById('PagNumNf');

        eVal.style.display = 'flex';

        document.getElementById("NumNf").value = ''
    }
    if (document.getElementById("selectTipFor").value == 'Pagamento') {

        let eVal = document.getElementById('PagNumNf');

        eVal.style.display = 'none';

        document.getElementById("NumNf").value = ''
    }
}
function ExibeBoleto() {
    if (document.getElementById("selectFormPag").value == 'Boleto') {

        document.getElementById("ForPagChavePix").value = ''

        document.getElementById("ForPagBanco").value = ''
        document.getElementById("ForPagAgencia").value = ''
        document.getElementById("ForPagConta").value = ''  


        if (document.getElementById("VlrParUm").value != 0) {

            let eBol1 = document.getElementById('parcela1Bol');

            eBol1.style.display = 'flex';
        }

        if (document.getElementById("VlrParDois").value != 0) {

            let eBol2 = document.getElementById('parcela2Bol');

            eBol2.style.display = 'flex';
        }

        if (document.getElementById("VlrParTres").value != 0) {

            let eBol3 = document.getElementById('parcela3Bol');

            eBol3.style.display = 'flex';
        }

        if (document.getElementById("VlrParQuatro").value != 0) {

            let eBol4 = document.getElementById('parcela4Bol');

            eBol4.style.display = 'flex';
        }

        if (document.getElementById("VlrParCinco").value != 0) {

            let eBol5 = document.getElementById('parcela5Bol');

            eBol5.style.display = 'flex';
        }

        if (document.getElementById("VlrParSeis").value != 0) {

            let eBol6 = document.getElementById('parcela6Bol');

            eBol6.style.display = 'flex';
        }

        if (document.getElementById("VlrParSete").value != 0) {

            let eBol7 = document.getElementById('parcela7Bol');

            eBol7.style.display = 'flex';
        }

        if (document.getElementById("VlrParOito").value != 0) {

            let eBol8 = document.getElementById('parcela8Bol');

            eBol8.style.display = 'flex';
        }

        if (document.getElementById("VlrParNove").value != 0) {

            let eBol9 = document.getElementById('parcela9Bol');

            eBol9.style.display = 'flex';
        }

        if (document.getElementById("VlrParDez").value != 0) {

            let eBol10 = document.getElementById('parcela10Bol');

            eBol10.style.display = 'flex';
        }

        if (document.getElementById("VlrParOnze").value != 0) {

            let eBol11 = document.getElementById('parcela11Bol');

            eBol11.style.display = 'flex';
        }

        if (document.getElementById("VlrParDoze").value != 0) {

            let eBol12 = document.getElementById('parcela12Bol');

            eBol12.style.display = 'flex';
        }

    }
}

function ExibirFormaPagamento() {

    if (document.getElementById("selectFormPag").value == 'Pix') {

        document.getElementById("CodBolUm").value = ''
        document.getElementById("CodBolDois").value = ''
        document.getElementById("CodBolTres").value = ''
        document.getElementById("CodBolQuatro").value = ''
        document.getElementById("CodBolCinco").value = ''
        document.getElementById("CodBolSeis").value = ''
        document.getElementById("CodBolSete").value = ''
        document.getElementById("CodBolOito").value = ''
        document.getElementById("CodBolNove").value = ''
        document.getElementById("CodBolDez").value = ''
        document.getElementById("CodBolOnze").value = ''
        document.getElementById("CodBolDoze").value = ''

        document.getElementById("ForPagBanco").value = ''
        document.getElementById("ForPagAgencia").value = ''
        document.getElementById("ForPagConta").value = ''        

        let eVal2 = document.getElementById('PagPix');

        eVal2.style.display = 'flex';

        let eVal = document.getElementById('PagBanco');

        eVal.style.display = 'none';

        let eVal1 = document.getElementById('PagBancoAge');

        eVal1.style.display = 'none';

        let eBol1 = document.getElementById('parcela1Bol');
        eBol1.style.display = 'none';
        let eBol2 = document.getElementById('parcela2Bol');
        eBol2.style.display = 'none';
        let eBol3 = document.getElementById('parcela3Bol');
        eBol3.style.display = 'none';
        let eBol4 = document.getElementById('parcela4Bol');
        eBol4.style.display = 'none';
        let eBol5 = document.getElementById('parcela5Bol');
        eBol5.style.display = 'none';
        let eBol6 = document.getElementById('parcela6Bol');
        eBol6.style.display = 'none';
        let eBol7 = document.getElementById('parcela7Bol');
        eBol7.style.display = 'none';
        let eBol8 = document.getElementById('parcela8Bol');
        eBol8.style.display = 'none';
        let eBol9 = document.getElementById('parcela9Bol');
        eBol9.style.display = 'none';
        let eBol10 = document.getElementById('parcela10Bol');
        eBol10.style.display = 'none';
        let eBol11 = document.getElementById('parcela11Bol');
        eBol11.style.display = 'none';
        let eBol12 = document.getElementById('parcela12Bol');
        eBol12.style.display = 'none';

    }
    if (document.getElementById("selectFormPag").value == 'Depósito') {
        
        document.getElementById("CodBolUm").value = ''
        document.getElementById("CodBolDois").value = ''
        document.getElementById("CodBolTres").value = ''
        document.getElementById("CodBolQuatro").value = ''
        document.getElementById("CodBolCinco").value = ''
        document.getElementById("CodBolSeis").value = ''
        document.getElementById("CodBolSete").value = ''
        document.getElementById("CodBolOito").value = ''
        document.getElementById("CodBolNove").value = ''
        document.getElementById("CodBolDez").value = ''
        document.getElementById("CodBolOnze").value = ''
        document.getElementById("CodBolDoze").value = ''

        document.getElementById("ForPagChavePix").value = ''

        
        let eVal = document.getElementById('PagBanco');

        eVal.style.display = 'flex';

        let eVal1 = document.getElementById('PagBancoAge');

        eVal1.style.display = 'flex';

        let eVal2 = document.getElementById('PagPix');

        eVal2.style.display = 'none';

        let eBol1 = document.getElementById('parcela1Bol');
        eBol1.style.display = 'none';
        let eBol2 = document.getElementById('parcela2Bol');
        eBol2.style.display = 'none';
        let eBol3 = document.getElementById('parcela3Bol');
        eBol3.style.display = 'none';
        let eBol4 = document.getElementById('parcela4Bol');
        eBol4.style.display = 'none';
        let eBol5 = document.getElementById('parcela5Bol');
        eBol5.style.display = 'none';
        let eBol6 = document.getElementById('parcela6Bol');
        eBol6.style.display = 'none';
        let eBol7 = document.getElementById('parcela7Bol');
        eBol7.style.display = 'none';
        let eBol8 = document.getElementById('parcela8Bol');
        eBol8.style.display = 'none';
        let eBol9 = document.getElementById('parcela9Bol');
        eBol9.style.display = 'none';
        let eBol10 = document.getElementById('parcela10Bol');
        eBol10.style.display = 'none';
        let eBol11 = document.getElementById('parcela11Bol');
        eBol11.style.display = 'none';
        let eBol12 = document.getElementById('parcela12Bol');
        eBol12.style.display = 'none';
    }

    if (document.getElementById("selectFormPag").value == 'Boleto') {
        let eVal2 = document.getElementById('PagPix');

        eVal2.style.display = 'none';

        let eVal = document.getElementById('PagBanco');

        eVal.style.display = 'none';

        let eVal1 = document.getElementById('PagBancoAge');

        eVal1.style.display = 'none';

        ExibeBoleto()
    }
}

//Inicialização da API do workflow
this.workflowCockpit = workflowCockpit({
    init: _init,
    onSubmit: _saveData,
    onError: _rollback,
});

// Função init é chamada ao abrir o formulário
function _init(data, info) {

    // Caso seja executado algum serviço externo ao abrir o formulário e o retorno dele seja atribuído a variáveis de execução
    // essas variáveis serão preenchidas
    const { initialVariables } = data.loadContext;
    console.log(initialVariables);

    info
        .getUserData()
        .then(function () {
            info.getPlatformData().then(function (platformData) {
                // Informações da G7
                console.log(platformData);
            });
        });

    // Retorna os dados que já foram previamente preenchidos no formulário
    info.getInfoFromProcessVariables().then(function (data) {
        // Somente recupera os dados caso não seja a criação de uma tarefa (somente se estiver tratando a tarefa)
        if (!info.isRequestNew() && Array.isArray(data)) {
            var map = new Map();
            var i;
            for (i = 0; i < data.length; i++) {
                map.set(data[i].key, data[i].value);
            }

            console.log("Carregando Dados", map);
            const nomFun = map.get("nomFun");
            const emaFun = map.get("emaFun");
            const DatPag = map.get("DatPag");
            const selectEmpFil = map.get("selectEmpFil");
            const selectTipFor = map.get("selectTipFor");
            const selectFormPag = map.get("selectFormPag");
            const DatSol = map.get("DatSol");
            const Fornec = map.get("Fornec");
            const Cnpj = map.get("Cnpj");
            const Proj = map.get("Proj");
            const ConFin = map.get("ConFin");
            const CenCus = map.get("CenCus");
            
            const NumNf = map.get("NumNf");
            const DatPre = map.get("DatPre");
            const ObsPag = map.get("ObsPag");

            const DescParUm = map.get("DescParUm");
            const VlrParUm = map.get("VlrParUm");
            const DatParUm = map.get("DatParUm");
            const CodBolUm = map.get("CodBolUm");

            const DescParDois = map.get("DescParDois");
            const VlrParDois = map.get("VlrParDois");
            const DatParDois = map.get("DatParDois");
            const CodBolDois = map.get("CodBolDois");

            const DescParTres = map.get("DescParTres");
            const VlrParTres = map.get("VlrParTres");
            const DatParTres = map.get("DatParTres");
            const CodBolTres = map.get("CodBolTres");

            const DescParQuatro = map.get("DescParQuatro");
            const VlrParQuatro = map.get("VlrParQuatro");
            const DatParQuatro = map.get("DatParQuatro");
            const CodBolQuatro = map.get("CodBolQuatro");

            const DescParCinco = map.get("DescParCinco");
            const VlrParCinco = map.get("VlrParCinco");
            const DatParCinco = map.get("DatParCinco");
            const CodBolCinco = map.get("CodBolCinco");

            const DescParSeis = map.get("DescParSeis");
            const VlrParSeis = map.get("VlrParSeis");
            const DatParSeis = map.get("DatParSeis");
            const CodBolSeis = map.get("CodBolSeis");

            const DescParSete = map.get("DescParSete");
            const VlrParSete = map.get("VlrParSete");
            const DatParSete = map.get("DatParSete");
            const CodBolSete = map.get("CodBolSete");

            const DescParOito = map.get("DescParOito");
            const VlrParOito = map.get("VlrParOito");
            const DatParOito = map.get("DatParOito");
            const CodBolOito = map.get("CodBolOito");

            const DescParNove = map.get("DescParNove");
            const VlrParNove = map.get("VlrParNove");
            const DatParNove = map.get("DatParNove");
            const CodBolNove = map.get("CodBolNove");

            const DescParDez = map.get("DescParDez");
            const VlrParDez = map.get("VlrParDez");
            const DatParDez = map.get("DatParDez");
            const CodBolDez = map.get("CodBolDez");

            const DescParOnze = map.get("DescParOnze");
            const VlrParOnze = map.get("VlrParOnze");
            const DatParOnze = map.get("DatParOnze");
            const CodBolOnze = map.get("CodBolOnze");

            const DescParDoze = map.get("DescParDoze");
            const VlrParDoze = map.get("VlrParDoze");
            const DatParDoze = map.get("DatParDoze");
            const CodBolDoze = map.get("CodBolDoze");

            const TotalPagarPar = map.get("TotalPagarPar");
            const ForPagBanco = map.get("ForPagBanco");
            const ForPagAgencia = map.get("ForPagAgencia");
            const ForPagConta = map.get("ForPagConta");
            const ForPagChavePix = map.get("ForPagChavePix");

            document.getElementById("nomFun").setAttribute("value", nomFun);
            document.getElementById("emaFun").setAttribute("value", emaFun);
            document.getElementById("selectEmpFil").value = selectEmpFil;
            document.getElementById("selectTipFor").value = selectTipFor;
            document.getElementById("selectFormPag").value = selectFormPag;
            document.getElementById("DatSol").setAttribute("value", DatSol);
            document.getElementById("Fornec").setAttribute("value", Fornec);
            document.getElementById("Cnpj").setAttribute("value", Cnpj);
            document.getElementById("Proj").setAttribute("value", Proj);
            document.getElementById("ConFin").setAttribute("value", ConFin);
            document.getElementById("CenCus").setAttribute("value", CenCus);
            document.getElementById("DatPag").setAttribute("value", DatPag);
            document.getElementById("NumNf").setAttribute("value", NumNf);
            document.getElementById("DatPre").setAttribute("value", DatPre);
            document.getElementById("ObsPag").setAttribute("value", ObsPag);

            document.getElementById("DescParUm").setAttribute("value", DescParUm);
            document.getElementById("VlrParUm").setAttribute("value", VlrParUm);
            document.getElementById("DatParUm").setAttribute("value", DatParUm);
            document.getElementById("CodBolUm").setAttribute("value", CodBolUm);

            document.getElementById("DescParDois").setAttribute("value", DescParDois);
            document.getElementById("VlrParDois").setAttribute("value", VlrParDois);
            document.getElementById("DatParDois").setAttribute("value", DatParDois);
            document.getElementById("CodBolDois").setAttribute("value", CodBolDois);

            document.getElementById("DescParTres").setAttribute("value", DescParTres);
            document.getElementById("VlrParTres").setAttribute("value", VlrParTres);
            document.getElementById("DatParTres").setAttribute("value", DatParTres);
            document.getElementById("CodBolTres").setAttribute("value", CodBolTres);

            document.getElementById("DescParQuatro").setAttribute("value", DescParQuatro);
            document.getElementById("VlrParQuatro").setAttribute("value", VlrParQuatro);
            document.getElementById("DatParQuatro").setAttribute("value", DatParQuatro);
            document.getElementById("CodBolQuatro").setAttribute("value", CodBolQuatro);

            document.getElementById("DescParCinco").setAttribute("value", DescParCinco);
            document.getElementById("VlrParCinco").setAttribute("value", VlrParCinco);
            document.getElementById("DatParCinco").setAttribute("value", DatParCinco);
            document.getElementById("CodBolCinco").setAttribute("value", CodBolCinco);

            document.getElementById("DescParSeis").setAttribute("value", DescParSeis);
            document.getElementById("VlrParSeis").setAttribute("value", VlrParSeis);
            document.getElementById("DatParSeis").setAttribute("value", DatParSeis);
            document.getElementById("CodBolSeis").setAttribute("value", CodBolSeis);

            document.getElementById("DescParSete").setAttribute("value", DescParSete);
            document.getElementById("VlrParSete").setAttribute("value", VlrParSete);
            document.getElementById("DatParSete").setAttribute("value", DatParSete);
            document.getElementById("CodBolSete").setAttribute("value", CodBolSete);

            document.getElementById("DescParOito").setAttribute("value", DescParOito);
            document.getElementById("VlrParOito").setAttribute("value", VlrParOito);
            document.getElementById("DatParOito").setAttribute("value", DatParOito);
            document.getElementById("CodBolOito").setAttribute("value", CodBolOito);

            document.getElementById("DescParNove").setAttribute("value", DescParNove);
            document.getElementById("VlrParNove").setAttribute("value", VlrParNove);
            document.getElementById("DatParNove").setAttribute("value", DatParNove);
            document.getElementById("CodBolNove").setAttribute("value", CodBolNove);

            document.getElementById("DescParDez").setAttribute("value", DescParDez);
            document.getElementById("VlrParDez").setAttribute("value", VlrParDez);
            document.getElementById("DatParDez").setAttribute("value", DatParDez);
            document.getElementById("CodBolDez").setAttribute("value", CodBolDez);

            document.getElementById("DescParOnze").setAttribute("value", DescParOnze);
            document.getElementById("VlrParOnze").setAttribute("value", VlrParOnze);
            document.getElementById("DatParOnze").setAttribute("value", DatParOnze);
            document.getElementById("CodBolOnze").setAttribute("value", CodBolOnze);

            document.getElementById("DescParDoze").setAttribute("value", DescParDoze);
            document.getElementById("VlrParDoze").setAttribute("value", VlrParDoze);
            document.getElementById("DatParDoze").setAttribute("value", DatParDoze);
            document.getElementById("CodBolDoze").setAttribute("value", CodBolDoze);

            document.getElementById("TotalPagarPar").setAttribute("value", TotalPagarPar);
            document.getElementById("ForPagBanco").setAttribute("value", ForPagBanco);
            document.getElementById("ForPagAgencia").setAttribute("value", ForPagAgencia);
            document.getElementById("ForPagConta").setAttribute("value", ForPagConta);
            document.getElementById("ForPagChavePix").setAttribute("value", ForPagChavePix);
            
            selecionaTipoFormulario()
            ExibeBoleto()
            ExibirFormaPagamento()
            exibiParcelasComValorAcimaDeZero()
        }
    });
}

// Essa função é chamada quando o usuário clicar no botão 'Enviar'
function _saveData(data, info) {
    if (!isFormValid()) {
        throw new Error("Ainda falta ser preenchidos alguns campos");
    }
    let newData = {};

    let selectForm = document.getElementById("selectTipFor");
    newData.selectTipFor = selectForm.options[selectForm.selectedIndex].value;

    let selectEmp = document.getElementById("selectEmpFil");
    newData.selectEmpFil = selectEmp.options[selectEmp.selectedIndex].value;

    let selectFormPagamento = document.getElementById("selectFormPag");
    newData.selectFormPag = selectFormPagamento.options[selectFormPagamento.selectedIndex].value;

    newData.DatSol = document.getElementById("DatSol").value;
    newData.Fornec = document.getElementById("Fornec").value;
    newData.Cnpj = document.getElementById("Cnpj").value;
    newData.Proj = document.getElementById("Proj").value;
    newData.ConFin = document.getElementById("ConFin").value;
    newData.CenCus = document.getElementById("CenCus").value;
    newData.DatPag = document.getElementById("DatPag").value;
    newData.NumNf = document.getElementById("NumNf").value;
    newData.DatPre = document.getElementById("DatPre").value;
    newData.ObsPag = document.getElementById("ObsPag").value;

    newData.nomFun = document.getElementById("nomFun").value;
    newData.emaFun = document.getElementById("emaFun").value;

    newData.DescParUm = document.getElementById("DescParUm").value;
    newData.VlrParUm = document.getElementById("VlrParUm").value;
    newData.DatParUm = document.getElementById("DatParUm").value;
    newData.CodBolUm = document.getElementById("CodBolUm").value;

    newData.DescParDois = document.getElementById("DescParDois").value;
    newData.VlrParDois = document.getElementById("VlrParDois").value;
    newData.DatParDois = document.getElementById("DatParDois").value;
    newData.CodBolDois = document.getElementById("CodBolDois").value;

    newData.DescParTres = document.getElementById("DescParTres").value;
    newData.VlrParTres = document.getElementById("VlrParTres").value;
    newData.DatParTres = document.getElementById("DatParTres").value;
    newData.CodBolTres = document.getElementById("CodBolTres").value;

    newData.DescParQuatro = document.getElementById("DescParQuatro").value;
    newData.VlrParQuatro = document.getElementById("VlrParQuatro").value;
    newData.DatParQuatro = document.getElementById("DatParQuatro").value;
    newData.CodBolQuatro = document.getElementById("CodBolQuatro").value;

    newData.DescParCinco = document.getElementById("DescParCinco").value;
    newData.VlrParCinco = document.getElementById("VlrParCinco").value;
    newData.DatParCinco = document.getElementById("DatParCinco").value;
    newData.CodBolCinco = document.getElementById("CodBolCinco").value;

    newData.DescParSeis = document.getElementById("DescParSeis").value;
    newData.VlrParSeis = document.getElementById("VlrParSeis").value;
    newData.DatParSeis = document.getElementById("DatParSeis").value;
    newData.CodBolSeis = document.getElementById("CodBolSeis").value;

    newData.DescParSete = document.getElementById("DescParSete").value;
    newData.VlrParSete = document.getElementById("VlrParSete").value;
    newData.DatParSete = document.getElementById("DatParSete").value;
    newData.CodBolSete = document.getElementById("CodBolSete").value;

    newData.DescParOito = document.getElementById("DescParOito").value;
    newData.VlrParOito = document.getElementById("VlrParOito").value;
    newData.DatParOito = document.getElementById("DatParOito").value;
    newData.CodBolOito = document.getElementById("CodBolOito").value;

    newData.DescParNove = document.getElementById("DescParNove").value;
    newData.VlrParNove = document.getElementById("VlrParNove").value;
    newData.DatParNove = document.getElementById("DatParNove").value;
    newData.CodBolNove = document.getElementById("CodBolNove").value;

    newData.DescParDez = document.getElementById("DescParDez").value;
    newData.VlrParDez = document.getElementById("VlrParDez").value;
    newData.DatParDez = document.getElementById("DatParDez").value;
    newData.CodBolDez = document.getElementById("CodBolDez").value;

    newData.DescParOnze = document.getElementById("DescParOnze").value;
    newData.VlrParOnze = document.getElementById("VlrParOnze").value;
    newData.DatParOnze = document.getElementById("DatParOnze").value;
    newData.CodBolOnze = document.getElementById("CodBolOnze").value;

    newData.DescParDoze = document.getElementById("DescParDoze").value;
    newData.VlrParDoze = document.getElementById("VlrParDoze").value;
    newData.DatParDoze = document.getElementById("DatParDoze").value;
    newData.CodBolDoze = document.getElementById("CodBolDoze").value;

    newData.TotalPagarPar = document.getElementById("TotalPagarPar").value;
    newData.ForPagBanco = document.getElementById("ForPagBanco").value;
    newData.ForPagAgencia = document.getElementById("ForPagAgencia").value;
    newData.ForPagConta = document.getElementById("ForPagConta").value;
    newData.ForPagChavePix = document.getElementById("ForPagChavePix").value;

    console.log(newData);
    return {
        formData: newData,
    };
}

function _rollback(data, info) {
    /*data: ({
         error: obj
         processInstanceId: int
      })*/
}


function isFormValid() {
    var retornaResultado = 0

    //Fornecedor
    var isNullFornec = document.getElementById("Fornec").value;
    if (isNullFornec == '') {
        document.getElementById("Fornec").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
    } else {
        document.getElementById("Fornec").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        retornaResultado++
    }
    //CNPJ
    var isNullCnpj = document.getElementById("Cnpj").value;
    if (isNullCnpj == '') {
        document.getElementById("Cnpj").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
    } else {
        document.getElementById("Cnpj").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        retornaResultado++
    }

    //Projeto
    var isNullProj = document.getElementById("Proj").value;
    if (isNullProj == '') {
        document.getElementById("Proj").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
    } else {
        document.getElementById("Proj").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        retornaResultado++
    }

    //Conta Financeira
    var isNullConFin = document.getElementById("ConFin").value;
    if (isNullConFin == '') {
        document.getElementById("ConFin").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
    } else {
        document.getElementById("ConFin").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        retornaResultado++
    }

    //Centro de Custo
    var isNullCenCus = document.getElementById("CenCus").value;
    if (isNullCenCus == '') {
        document.getElementById("CenCus").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
    } else {
        document.getElementById("CenCus").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        retornaResultado++
    }
    //--------------------------------------------------RETORNO FUNÇÃO--------------------------------------------------  
    TotalCampos = 5

    if (TotalCampos == retornaResultado) {
        return true
    }
}

// Disabling form submissions if there are invalid fields
(function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();
