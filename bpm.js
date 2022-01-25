<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" type="text/css" href="stryle.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.min.js"></script>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
    crossorigin="anonymous"></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.contentWindow.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.js"></script>


  <script type="text/javascript" src="jquery.maskMoney.js"></script>
  <script type="text/javascript">
    $(document).ready(function () {
      $("input.dinheiro").maskMoney({ showSymbol: true, symbol: "R$", decimal: ",", thousands: "." });
    });
  </script>

  <script type="text/javascript" src="https://cdn.senior.com.br/bpm/1.10.0/workflow-cockpit.min.js"></script>
  <script type="text/javascript" src="bpm.js"></script>
  <title>Example BPM</title>
</head>

<body style="margin: revert">
  <form class="row g-3 needs-validation" id="form" novalidate>

    <h5>TIPO DA REQUISIÇÃO</h5>

    <!-- Linha Html -->
    <table id="linha" border cellpadding="0" cellpacing="0">
      <tr>
        <td>
        </td>
      </tr>
    </table>


    <label for=""></label>
    <div disabled class="row">
      <div class="col-md-6">
        <label for="nomFun" class="form-label">Nome solicitante</label>
        <input type="text" class="form-control" id="nomFun" disabled />
      </div>
      <div disabled class="col-md-6">
        <label for="emaFun" class="form-label">Email</label>
        <input type="email" class="form-control" id="emaFun" disabled />
      </div>
    </div>
     <!--Empresa/Filial -->
     <div class="row">
      <div class="col-md-8">
        <label required for="selectEmpFil" class="form-label">Empresa/Filial</label>
        <select disabled name="select" id="selectEmpFil" class="form-select" aria-label="Default select example">
          <option selected>Selecione a Empresa/Filial</option>
          <option id="Emp1Fil1" value="1-1">Empresa 1-Elastri Engenharia S.A. / Filial 1-Elastri Engenharia S/A</option>
          <option id="Emp1Fil2" value="1-2">Empresa 1-Elastri Engenharia S.A. / Filial 2-Elastri Engenharia S/A</option>
          <option id="Emp1Fil3" value="1-3">Empresa 1-Elastri Engenharia S.A. / Filial 3-Elastri Engenharia S/A - VERDE 4 A</option>
          <option id="Emp1Fil4" value="1-4">Empresa 1-Elastri Engenharia S.A. / Filial 4-Elastri Engenharia S/A - CE VENTOS DA BAHIA III</option>
          <option id="Emp1Fil5" value="1-5">Empresa 1-Elastri Engenharia S.A. / Filial 5-Elastri Engenharia S/A- PEDÁGIOS BR 386 CCR</option>
          <option id="Emp1Fil6" value="1-6">Empresa 1-Elastri Engenharia S.A. / Filial 6-Elastri Engenharia S/A</option>
          <option id="Emp1Fil7" value="1-7">Empresa 1-Elastri Engenharia S.A. / Filial 7-Elastri Engenharia S/A- CE MARAL/RMTVSM III e IV/MEL I e II</option>
          <option id="Emp1Fil8" value="1-8">Empresa 1-Elastri Engenharia S.A. / Filial 8-Elastri Engenharia S/A-UEE TERRA SANTA</option>
          <option id="Emp1Fil9" value="1-9">Empresa 1-Elastri Engenharia S.A. / Filial 9-Elastri Engenharia S/A- CE AFONSO BEZERRA</option>
          <option id="Emp1Fil10" value="1-10">Empresa 1-Elastri Engenharia S.A. / Filial 10-Elastri Engenharia S/A - LT CHAFARIZ</option>
          <option id="Emp1Fil11" value="1-11">Empresa 1-Elastri Engenharia S.A. / Filial 11-Elastri Engenharia - Filial PI</option>
          <option id="Emp1Fil12" value="1-12">Empresa 1-Elastri Engenharia S.A. / Filial 12-Elastri Engenharia S/A</option>
          <option id="Emp1Fil13" value="1-13">Empresa 1-Elastri Engenharia S.A. / Filial 13-Elastri Engenharia S/A</option>
          <option id="Emp1Fil14" value="1-14">Empresa 1-Elastri Engenharia S.A. / Filial 14-Elastri Engenharia S/A</option>
          <option id="Emp1Fil15" value="1-15">Empresa 1-Elastri Engenharia S.A. / Filial 15-Elastri Engenharia S/A</option>
          <option id="Emp1Fil16" value="1-16">Empresa 1-Elastri Engenharia S.A. / Filial 16-Elastri Engenharia S/A</option>
          <option id="Emp1Fil17" value="1-17">Empresa 1-Elastri Engenharia S.A. / Filial 17-Elastri Engenharia S/A</option>
          <option id="Emp1Fil18" value="1-18">Empresa 1-Elastri Engenharia S.A. / Filial 18-Elastri Engenharia S/A</option>
          <option id="Emp1Fil19" value="1-19">Empresa 1-Elastri Engenharia S.A. / Filial 19-Elastri Engenharia S/A</option>
          <option id="Emp1Fil96" value="1-96">Empresa 1-Elastri Engenharia S.A. / Filial 96-Integraçao Totvs</option>
          <option id="Emp1Fil97" value="1-97">Empresa 1-Elastri Engenharia S.A. / Filial 97-Integraçao CRTI x Sapiens (Serviços)</option>
          <option id="Emp1Fil98" value="1-98">Empresa 1-Elastri Engenharia S.A. / Filial 98-Integraçao CRTI x Sapiens (Materiais)</option>
          <option id="Emp1Fil99" value="1-99">Empresa 1-Elastri Engenharia S.A. / Filial 99-Elastri Engenharia - Totalizadora</option>
          <option id="Emp2Fil1" value="2-1">2-SETA Construções S.A. / Filial 1-SETA CONSTRUCOES S/A</option>
          <option id="Emp2Fil2" value="2-2">Empresa 2-SETA Construções S.A. / Filial 2-SETA CONSTRUCOES S/A- FLORIANÓPOLIS</option>
          <option id="Emp2Fil3" value="2-3">Empresa 2-SETA Construções S.A. / Filial 3-SETA CONSTRUCOES S/A- MULUNGU DO MORRO</option>
          <option id="Emp2Fil97" value="2-97">Empresa 2-SETA Construções S.A. / Filial 97-Integraçao CRTI x Sapiens (Serviços)</option>
          <option id="Emp2Fil98" value="2-98">Empresa 2-SETA Construções S.A. / Filial 98-Integraçao CRTI x Sapiens (Materiais)</option>
          <option id="Emp3Fil1" value="3-1">Empresa 3-C.M.Participações S/A / Filial 1-C.M. PARTICIPACOES S/A</option>
          <option id="Emp4Fil1" value="4-1">Empresa 4-Basalto Do Rio Grande Ltda / Filial 4-BASALTO DO RIO GRANDE LTDA</option>
          <option id="Emp5Fil1" value="5-1">Empresa 5-Consórcio SETA - Tucumann I / Filial 1-CONSORCIO SETA-TUCUMANN I</option>
          <option id="Emp6Fil1" value="6-1">Empresa 6-Consórcio SETA - Tucumann II / Filial 1 CONSORCIO SETA-TUCUMANN II</option>
          <option id="Emp7Fil1" value="7-1">Empresa 7-CEQ Rental Locadora de Equipamentos S.A. / Filial 1-CEQ Rental Locadora de Equipamentos S.A.</option>
          <option id="Emp7Fil2" value="7-2">Empresa 7-CEQ Rental Locadora de Equipamentos S.A. / Filial 2-CEQ Rental Locadora de Equipamentos S.A</option>
          <option id="Emp7Fil97" value="7-97">7-CEQ Rental Locadora de Equipamentos S.A. / Filial 97-Integraçao CRTI x Sapiens (Serviços)</option>
          <option id="Emp7Fil98" value="7-98">Empresa 7-CEQ Rental Locadora de Equipamentos S.A. / Filial 98-Integraçao CRTI x Sapiens (Materiais)</option>
          <option id="Emp8Fil1" value="8-1">Empresa 8-CAB Participações LTDA / Filial 1-CAB PARTICIPACOES LTDA</option>
          <option id="Emp9Fil1" value="9-1">Empresa 9-MOG Participações LTDA / Filial 1-MOG PARTICIPACOES LTDA</option>
          <option id="Emp10Fil1" value="10-1">Empresa 10-JLS Participações LTDA / Filial 1-JLS PARTICIPACOES LTDA</option>
          <option id="Emp11Fil1" value="11-1">Empresa 11-SPB Participações LTDA / Filial 1-SPB PARTICIPACOES LTDA</option>
          <option id="Emp12Fil1" value="12-1">Empresa 12-MLM Participações LTDA / Filial 1-MLM PARTICIPACOES LTDA</option>
          <option id="Emp13Fil1" value="13-1">Empresa 13-Consórcio SETA Construções x Araxá (UFV Assu) / Filial 1-CONSORCIO SETA E ARAXA</option>
          <option id="Emp14Fil1" value="14-1">Empresa 14-MIL COMÉRCIO DE MÁQUINAS E EQUIPAMENTOS LTDA / Filial 1-MIL PARTICIPACOES E INVESTIMENTOS LTDA</option>
          <option id="Emp15Fil1" value="15-1">Empresa 15-INFRASOFT Desenvolvimento de Software Ltda / Filial 1-INFRASOFT DESENVOLVIMENTO DE SOFTWARE LTDA</option>
          <option id="Emp16Fil1" value="16-1">Empresa 16-Oeste Energia Investimentos e Participações / Filial 1-OESTE ENERGIA INVESTIMENTOS E PARTICIPACOES S.A.</option>
          <option id="Emp16Fil97" value="16-97">Empresa 16-Oeste Energia Investimentos e Participações / Filial 97-Integraçao CRTI x Sapiens (Serviços)</option>
          <option id="Emp16Fil98" value="16-98">Empresa 16-Oeste Energia Investimentos e Participações / Filial 98-Integraçao CRTI x Sapiens (Materiais)</option>
          <option id="Emp17Fil1" value="17-1">Empresa 17-RSP EMPREENDIMENTOS E NEGÓCIOS IMOBILIÁRIOS LTDA / Filial 1-RSP EMPREENDIMENTOS E NEGÓCIOS IMOBILIÁRIOS LTDA</option>
          <option id="Emp18Fil1" value="18-1">Empresa 18-SETA Concessionaria de Rodovias SPE Ltda / Filial 1-SETA CONCESSIONARIA DE RODOVIAS SPE LTDA</option>
          <option id="Emp19Fil1" value="19-1">Empresa 19-TC Future Ltda / Filial 1-TC FUTURE ENGENHARIA E DESENVOLVIMENTO DE PROJETOS LTDA</option>
          <option id="Emp19Fil97" value="19-97">Empresa 19-TC Future Ltda / Filial 97-Integraçao CRTI x Sapiens (Serviços)</option>
          <option id="Emp20Fil1" value="20-1">Empresa 20-BASE Investimentos e Participações SA / Filial 1-BASE INVESTIMENTOS E PARTICIPACOES SA</option>
          <option id="Emp20Fil97" value="20-97">Empresa 20-BASE Investimentos e Participações SA / Filial 97-Integraçao CRTI x Sapiens (Serviços)</option>
          <option id="Emp20Fil98" value="20-98">Empresa 20-BASE Investimentos e Participações SA / Filial 98-Integraçao CRTI x Sapiens (Materiais)</option>
          <option id="Emp21Fil1" value="21-1">Empresa 21-INFINITO Energy / Filial 1-INFINITO ENERGY INVESTIMENTOS E PARTICIPACOES SA</option>
          <option id="Emp21Fil97" value="21-97">Empresa 21-INFINITO Energy / Filial 97-Integraçao CRTI x Sapiens (Serviços)</option>
          <option id="Emp21Fil98" value="21-98">Empresa 21-INFINITO Energy / Filial 98-Integraçao CRTI x Sapiens (Materiais)</option>
          <option id="Emp22Fil1" value="22-1">Empresa 22-AQUA Energy S.A. / Filial 1-AQUA ENERGY INVESTIMENTOS E PARTICIPACOES S/A</option>
          <option id="Emp22Fil97" value="22-97">Empresa 22-AQUA Energy S.A. / Filial 97-Integraçao CRTI x Sapiens (Serviços)</option>
          <option id="Emp22Fil98" value="22-98">Empresa 22-AQUA Energy S.A. / Filial 98-Integraçao CRTI x Sapiens (Materiais)</option>
          <option id="Emp23Fil1" value="23-1">Empresa 23-SPE CGH Jacutinga LTDA / Filial 1-SPE JACUTINGA SA</option>
          <option id="Emp23Fil97" value="23-97">Empresa 23-SPE CGH Jacutinga LTDA / Filial 97-Integração CRTI x Sapiens (Serviços)</option>
          <option id="Emp23Fil98" value="23-98">Empresa 23-SPE CGH Jacutinga LTDA / Filial 98-Integração CRTI x Sapiens (Materiais)</option>
          <option id="Emp24Fil1" value="24-1">Empresa 24-SPE CGH Alto Farias LTDA / Filial 1-SPE ALTO FARIAS SA</option>
          <option id="Emp24Fil97" value="24-97">Empresa 24-SPE CGH Alto Farias LTDA / Filial 97-Integração CRTI x Sapiens (Serviços</option>
          <option id="Emp24Fil98" value="24-98">Empresa 24-SPE CGH Alto Farias LTDA / Filial 98-Integração CRTI x Sapiens (Materiais)</option>
          <option id="Emp25Fil1" value="25-1">Empresa 25-Consórcio SETA Engenharia x Araxá (UFV São Gonçalo) / Filial 1-CONSORCIO SETA E ARAXÁ- SÃO GONÇALO</option>
          <option id="Emp25Fil97" value="25-97">Empresa 25-Consórcio SETA Engenharia x Araxá (UFV São Gonçalo) / Filial 97-Integraçao CRTI x Sapiens (Serviços)</option>
          <option id="Emp25Fil98" value="25-98">Empresa 25-Consórcio SETA Engenharia x Araxá (UFV São Gonçalo) / Filial 98-Integraçao CRTI x Sapiens (Materiais)</option>
          <option id="Emp26Fil1" value="26-1">Empresa 26-Consórcio SETA Engenharia x Araxá (UFV Sol do Sertão) / Filial 1-CONSÓRCIO SETA E ARAXÁ - SOL DO SERTÃO</option>
          <option id="Emp26Fil97" value="26-97">Empresa 26-Consórcio SETA Engenharia x Araxá (UFV Sol do Sertão) / Filial 97-Integraçao CRTI x Sapiens (Serviços)</option>
          <option id="Emp25Fil97" value="26-98">Empresa 26-Consórcio SETA Engenharia x Araxá (UFV Sol do Sertão) / Filial 98-Integraçao CRTI x Sapiens (Materiais)</option>
          <option id="Emp27Fil1" value="27-1">Empresa 27-Nhamandu Energia SPE S/A / Filial 1-Nhamandu Energia SPE S/A</option>
          <option id="Emp27Fil97" value="27-97">Empresa 27-Nhamandu Energia SPE S/A / Filial 97-Integraçao CRTI x Sapiens (Serviços)</option>
          <option id="Emp27Fil98" value="27-98">Empresa 27-Nhamandu Energia SPE S/A / Filial 98-Integraçao CRTI x Sapiens (Materiais)</option>
          <option id="Emp28Fil1" value="28-1">Empresa 28-Assu Sol Geração de Energia SPE S/A / Filial 1-Assu Sol Geração de Energia SPE S/A</option>
          <option id="Emp28Fil97" value="28-97">Empresa 28-Assu Sol Geração de Energia SPE S/A / Filial 97-Integraçao CRTI x Sapiens (Serviços)</option>
          <option id="Emp28Fil98" value="28-98">Empresa 28-Assu Sol Geração de Energia SPE S/A / Filial 98-Integraçao CRTI x Sapiens (Materiais)</option>
          <option id="Emp29Fil1" value="29-1">Empresa 29-SX Rental Locadora de Equipamentos LTDA / Filial 1-SX Rental Locadora de Equipamentos LTDA</option>
          <option id="Emp29Fil2" value="29-2">Empresa 29-SX Rental Locadora de Equipamentos LTDA / Filial 2-SX RENTAL LOCADORA DE EQUIPAMENTOS LTDA</option>
          <option id="Emp29Fil97" value="29-97">Empresa 29-SX Rental Locadora de Equipamentos LTDA / Filial 97-Integraçao CRTI x Sapiens (Serviços)</option>
          <option id="Emp29Fil98" value="29-98">Empresa 29-SX Rental Locadora de Equipamentos LTDA / Filial 98-Integraçao CRTI x Sapiens (Materiais)</option>
          <option id="Emp30Fil1" value="30-1">Empresa 30-ROCA Participações LTDA / Filial 1-ROCA Participações LTDA</option>
          <option id="Emp31Fil1" value="31-1">Empresa 31-Leve Educação Ltda / Filial 1-Leve Educação LTDA</option>
          <option id="Emp31Fil97" value="31-97">Empresa 31-Leve Educação Ltda / Filial 97-Integração CRTI x Sapiens (Serviços)</option>
          <option id="Emp31Fil98" value="31-98">Empresa 31-Leve Educação Ltda / Filial 98-Integraçao CRTI x Sapiens (Materiais)</option>
          <option id="Emp31Fil99" value="31-99">Empresa 31-Leve Educação Ltda / Filial 99-Leve Educação - Totalizadora</option>
          <option id="Emp32Fil1" value="32-1">Empresa 32-SPE UFV Flores de Goiás / Filial 1-UFV FLORES DE GOIÁS</option>
          <option id="Emp32Fil97" value="32-97">Empresa 32-SPE UFV Flores de Goiás / Filial 97-Integraçao CRTI x Sapiens (Serviços)</option>
          <option id="Emp32Fil98" value="32-98">Empresa 32-SPE UFV Flores de Goiás / Filial 98-Integraçao CRTI x Sapiens (Materiais)</option>
          <option id="Emp33Fil1" value="33-1">Empresa 33-Consórcio Elastri x Araxá (UFV Caldeirão Grande) / Filial 1-CONSORCIO SETA E ARAXÁ- CALDEIRÃO GRANDE</option>
          <option id="Emp33Fil97" value="33-97">Empresa 33-Consórcio Elastri x Araxá (UFV Caldeirão Grande) / Filial 97-Integraçao CRTI x Sapiens (Serviços)</option>
          <option id="Emp33Fil98" value="33-98">Empresa 33-Consórcio Elastri x Araxá (UFV Caldeirão Grande) / Filial 98-Integraçao CRTI x Sapiens (Materiais)</option>
          <option id="Emp34Fil1" value="34-1">Empresa 34-TC Energia Solar Ltda / Filial 1-TC Energia Solar Ltda</option>
          <option id="Emp34Fil97" value="34-97">Empresa 34-TC Energia Solar Ltda / Filial 97-Integraçao CRTI x Sapiens (Serviços)</option>
          <option id="Emp34Fil98" value="34-98">Empresa 34-TC Energia Solar Ltda / Filial 98-Integraçao CRTI x Sapiens (Materiais)</option>
        </select>
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    <!-- Tipo de Formulario -->
    <div class="row">
      <div class="col-md-4">
        <label required for="selectTipFor" class="form-label">Tipo de Formulario</label>
        <select disabled name="select" id="selectTipFor" class="form-select" aria-label="Default select example"
        onchange="javascript:selecionaTipoFormulario();">
          <option selected>Selecione o tipo do formulário</option>
          <option id="TipForPag" value="Pagamento">Pagamento</option>
          <option id="TipForAdi" value="Adiantamento">Adiantamento</option>
        </select>
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- <input type="button" value="teste" onclick="testeselect()" />-->
    <!-- Data Solicitação -->
    <div class="row">
      <div class="col-md-4">
        <label for="DatSol" class="form-label">Data Solicitação</label>
        <input disabled  id="DatSol" type="date" required
          class="form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Fornecedor/CNPJ -->
    <div class="row">
      <div class="col-md-6">
        <label for="Fornec" class="form-label">Fornecedor</label>
        <input id="Fornec" type="text" required
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>

      <div class="col-md-6">
        <label for="Cnpj" class="form-label">CNPJ/CPF</label>
        <input id="Cnpj" name="Cnpj" required
          class="form-control ng-scope ng-touched ng-dirty ng-empty ng-valid-mask ng-valid ng-valid-parse ng-valid-required ng-valid-pattern">
        <script type="text/javascript">
          $('#Cnpj').mask('000.000.000-00', {
            onKeyPress: function (Cnpj, e, field, options) {
              const masks = ['000.000.000-000', '00.000.000/0000-00'];
              const mask = (Cnpj.length > 14) ? masks[1] : masks[0];
              $('#Cnpj').mask(mask, options);
            }
          });
        </script>
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Projeto/Conta Financeira/Centro de Custo -->
    <div class="row">
      <div class="col-md-6">
        <label for="Proj" class="form-label">Projeto</label>
        <input id="Proj" type="number" required
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
      <div class="col-md-3">
        <label for="ConFin" class="form-label">Conta Financeira</label>
        <input id="ConFin" type="number" required
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
      <div class="col-md-3">
        <label for="CenCus" class="form-label">Centro de Custo</label>
        <input id="CenCus" type="text" required
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    </div>
    <!---------------------------------------------------------------------------------------------------->
    <h5>DADOS PAGAMENTO</h5>

    <!-- Linha Html -->
    <table id="linha" border cellpadding="0" cellpacing="0">
      <tr>
        <td>
        </td>
      </tr>
    </table>
    <!-- Data Pagamento/Número da NF -->
    <div class="row">
      <div class="col-md-6">
        <label for="DatPag" class="form-label">Data Pagamento</label>
        <input disabled id="DatPag" type="date" required
          class="form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
      <div class="col-md-6">
        <label for="NumNf" class="form-label">Número da NF</label>
        <input disabled id="NumNf" type="text" required
          class="form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Data Prevista Recebimento NF -->
    <div class="row">
      <div class="col-md-6">
        <label for="DatPre" class="form-label">Data Prevista Recebimento NF</label>
        <input disabled id="DatPre" type="date"
          class="form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Observação -->
    <div class="row">
      <div class="col-md-12">
        <label for="ObsPag" class="form-label">Observação</label>
        <input disabled id="ObsPag" type="text" required
          class="form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date">
      </div>
    </div>

    <!---------------------------------------------------------------------------------------------------->
    <h5>FORMA DO PAGAMENTO</h5>

    <!-- Linha Html -->
    <table id="linha" border cellpadding="0" cellpacing="0">
      <tr>
        <td>
        </td>
      </tr>
    </table>
    <div class="row">
      <div class="col-md-4">
        <label required for="selectFormPag" class="form-label">Forma de Pagamento</label>
        <select disabled name="select" id="selectFormPag" class="form-select" aria-label="Default select example"
          onchange="javascript:ExibirFormaPagamento();">
          <option selected>Selecione a Forma de Pagamento</option>
          <option id="ForPagDep" value="Depósito">Depósito</option>
          <option id="ForPagPix" value="Pix">Pix</option>
          <option id="ForPagBol" value="Boleto">Boleto</option>
        </select>
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Banco -->
    <div class="row" id="PagBanco" style="display: flex;">
      <div class="col-md-12">
        <label for="ForPagBanco" class="form-label">Banco</label>
        <input disabled id="ForPagBanco" type="text"
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Agencia/Conta -->
    <div class="row" id="PagBancoAge" style="display: flex;">
      <div class="col-md-6">
        <label for="ForPagAgencia" class="form-label">Agencia</label>
        <input disabled id="ForPagAgencia" type="text"
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
      <div class="col-md-6">
        <label for="ForPagConta" class="form-label">Conta</label>
        <input disabled id="ForPagConta" type="text"
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Chave PIX -->
    <div class="row" id="PagPix" style="display: flex;">
      <div class="col-md-6">
        <label for="ForPagChavePix" class="form-label">Chave PIX</label>
        <input disabled id="ForPagChavePix" type="text"
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!---------------------------------------------------------------------------------------------------->
    <h5>DESCRIÇÃO DE PAGAMENTO / PARCELAMENTO</h5>

    <!-- Linha Html -->
    <table id="linha" border cellpadding="0" cellpacing="0">
      <tr>
        <td>
        </td>
      </tr>
    </table>
    <!----------------------------------------------------------------Parcela 1---------------------------------------------------------------->
    <!-- Parcela 1 em Boleto? -->
    <!-- <div class="row">
      <div class="col-md-3">
        <label for="ParUmBol" class="form-label">Parcela 1 em Boleto?</label>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="ParUmBol">
        </div>
      </div>
    </div> -->
    <!-- Seq1/Descrição Parcela 1/Valor Parcela 1/Data Parcela 1 -->
    <div class="row" id="parcela1" style="display: flex;">
      <!-- <div class="col-md-3">
        <label for="SeqUm" class="form-label">Seq1</label>
        <input id="SeqUm" type="text" disabled
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
      </div>-->
      <div class="col-md-3">
        <label for="DescParUm" class="form-label">Descrição Parcela 1</label>
        <input disabled id="DescParUm" type="text"
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
      <div class="col-md-3">
        <label for="VlrParUm" class="form-label">Valor Parcela 1</label>
        <input disabled id="VlrParUm" type="text" oninput="ExibeBoleto()" onKeyUp="mascaraMoeda(this, event)" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required"
          placeholder="Digite o valor da parcela 1" required>
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
      <div class="col-md-3">
        <label for="DatParUm" class="form-label">Data Parcela 1</label>
        <input disabled id="DatParUm" type="date"
          class="form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Código Boleto 1 -->
    <div class="row" id="parcela1Bol" style="display: flex;">
      <div class="col-md-12">
        <label for="CodBolUm" class="form-label">Código Boleto 1</label>
        <input disabled id="CodBolUm" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!----------------------------------------------------------------Parcela 2---------------------------------------------------------------->
    <!-- Parcela 2 em Boleto? -->
    <!-- <div class="row">
      <div class="col-md-3">
        <label for="ParDoisBol" class="form-label">Parcela 2 em Boleto?</label>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="ParDoisBol">
        </div>
      </div>
    </div>-->
    <!-- Seq2/Descrição Parcela 2/Valor Parcela 2/Data Parcela 2 -->
    <div class="row" id="parcela2" style="display: flex;">
      <!--  <div class="col-md-3">
        <label for="SeqDois" class="form-label">Seq2</label>
        <input id="SeqDois" type="text" disabled
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
      </div>-->
      <div class="col-md-3">
        <label for="DescParDois" class="form-label">Descrição Parcela 2</label>
        <input disabled id="DescParDois" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
      <div class="col-md-3">
        <label for="VlrParDois" class="form-label">Valor Parcela 2</label>
        <input disabled id="VlrParDois" type="text" oninput="ExibeBoleto()" onKeyUp="mascaraMoeda(this, event)" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required"
          placeholder="Digite o valor da parcela 2">
      </div>
      <div class="col-md-3">
        <label for="DatParDois" class="form-label">Data Parcela 2</label>
        <input disabled id="DatParDois" type="date"
          class="form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Código Boleto 2 -->
    <div class="row" id="parcela2Bol" style="display: flex">
      <div class="col-md-12">
        <label for="CodBolDois" class="form-label">Código Boleto 2</label>
        <input disabled id="CodBolDois" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!----------------------------------------------------------------Parcela 3---------------------------------------------------------------->
    <!-- Parcela 3 em Boleto? -->
    <!--<div class="row">
      <div class="col-md-3">
        <label for="ParTresBol" class="form-label">Parcela 3 em Boleto?</label>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="ParDoisBol">
        </div>
      </div>
    </div>-->
    <!-- Seq3/Descrição Parcela 3/Valor Parcela 3/Data Parcela 3 -->
    <div class="row" id="parcela3" style="display: flex;">
      <!--<div class="col-md-3">
        <label for="SeqTres" class="form-label">Seq3</label>
        <input id="SeqTres" type="text" disabled
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
      </div>-->
      <div class="col-md-3">
        <label for="DescParTres" class="form-label">Descrição Parcela 3</label>
        <input disabled id="DescParTres" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
      <div class="col-md-3">
        <label for="VlrParTres" class="form-label">Valor Parcela 3</label>
        <input disabled id="VlrParTres" type="text" oninput="ExibeBoleto()" onKeyUp="mascaraMoeda(this, event)" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required"
          placeholder="Digite o valor da parcela 3">
      </div>
      <div class="col-md-3">
        <label for="DatParTres" class="form-label">Data Parcela 3</label>
        <input disabled id="DatParTres" type="date"
          class="form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Código Boleto 3 -->
    <div class="row" id="parcela3Bol" style="display: flex;">
      <div class="col-md-12">
        <label for="CodBolTres" class="form-label">Código Boleto 3</label>
        <input disabled id="CodBolTres" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>

    <!----------------------------------------------------------------Parcela 4---------------------------------------------------------------->
    <div class="row" id="parcela4" style="display: flex;">
      <div class="col-md-3">
        <label for="DescParQuatro" class="form-label">Descrição Parcela 4</label>
        <input disabled id="DescParQuatro" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
      <div class="col-md-3">
        <label for="VlrParQuatro" class="form-label">Valor Parcela 4</label>
        <input disabled id="VlrParQuatro" type="text" oninput="ExibeBoleto()" onKeyUp="mascaraMoeda(this, event)"
          
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required"
          placeholder="Digite o valor da parcela 4">
      </div>
      <div class="col-md-3">
        <label for="DatParQuatro" class="form-label">Data Parcela 4</label>
        <input disabled id="DatParQuatro" type="date"
          class="form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Código Boleto 4 -->
    <div class="row" id="parcela4Bol" style="display: flex;">
      <div class="col-md-12">
        <label for="CodBolQuatro" class="form-label">Código Boleto 4</label>
        <input disabled id="CodBolQuatro" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>

    <!----------------------------------------------------------------Parcela 5---------------------------------------------------------------->
    <div class="row" id="parcela5" style="display: flex;">
      <div class="col-md-3">
        <label for="DescParCinco" class="form-label">Descrição Parcela 5</label>
        <input disabled id="DescParCinco" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
      <div class="col-md-3">
        <label for="VlrParCinco" class="form-label">Valor Parcela 5</label>
        <input disabled id="VlrParCinco" type="text" oninput="ExibeBoleto()" onKeyUp="mascaraMoeda(this, event)"
          
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required"
          placeholder="Digite o valor da parcela 5">
      </div>
      <div class="col-md-3">
        <label for="DatParCinco" class="form-label">Data Parcela 5</label>
        <input disabled id="DatParCinco" type="date"
          class="form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Código Boleto 5 -->
    <div class="row" id="parcela5Bol" style="display: flex;">
      <div class="col-md-12">
        <label for="CodBolCinco" class="form-label">Código Boleto 5</label>
        <input disabled id="CodBolCinco" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>

    <!----------------------------------------------------------------Parcela 6---------------------------------------------------------------->
    <div class="row" id="parcela6" style="display: flex;">
      <div class="col-md-3">
        <label for="DescParSeis" class="form-label">Descrição Parcela 6</label>
        <input disabled id="DescParSeis" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
      <div class="col-md-3">
        <label for="VlrParSeis" class="form-label">Valor Parcela 6</label>
        <input disabled id="VlrParSeis" type="text" oninput="ExibeBoleto()" onKeyUp="mascaraMoeda(this, event)" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required"
          placeholder="Digite o valor da parcela 6">
      </div>
      <div class="col-md-3">
        <label for="DatParSeis" class="form-label">Data Parcela 6</label>
        <input disabled id="DatParSeis" type="date"
          class="form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Código Boleto 6 -->
    <div class="row" id="parcela6Bol" style="display: flex;">
      <div class="col-md-12">
        <label for="CodBolSeis" class="form-label">Código Boleto 6</label>
        <input disabled id="CodBolSeis" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>

    <!----------------------------------------------------------------Parcela 7---------------------------------------------------------------->
    <div class="row" id="parcela7" style="display: flex;">
      <div class="col-md-3">
        <label for="DescParSete" class="form-label">Descrição Parcela 7</label>
        <input disabled id="DescParSete" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
      <div class="col-md-3">
        <label for="VlrParSete" class="form-label">Valor Parcela 7</label>
        <input disabled id="VlrParSete" type="text" oninput="ExibeBoleto()" onKeyUp="mascaraMoeda(this, event)" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required"
          placeholder="Digite o valor da parcela 7">
      </div>
      <div class="col-md-3">
        <label for="DatParSete" class="form-label">Data Parcela 7</label>
        <input disabled id="DatParSete" type="date"
          class="form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Código Boleto 7 -->
    <div class="row" id="parcela7Bol" style="display: flex;">
      <div class="col-md-12">
        <label for="CodBolSete" class="form-label">Código Boleto 7</label>
        <input disabled id="CodBolSete" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>

    <!----------------------------------------------------------------Parcela 8---------------------------------------------------------------->
    <div class="row" id="parcela8" style="display: flex;">
      <div class="col-md-3">
        <label for="DescParOito" class="form-label">Descrição Parcela 8</label>
        <input disabled id="DescParOito" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
      <div class="col-md-3">
        <label for="VlrParOito" class="form-label">Valor Parcela 8</label>
        <input disabled id="VlrParOito" type="text" oninput="ExibeBoleto()" onKeyUp="mascaraMoeda(this, event)" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required"
          placeholder="Digite o valor da parcela 8">
      </div>
      <div class="col-md-3">
        <label for="DatParOito" class="form-label">Data Parcela 8</label>
        <input disabled id="DatParOito" type="date"
          class="form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Código Boleto 8 -->
    <div class="row" id="parcela8Bol" style="display: flex;">
      <div class="col-md-12">
        <label for="CodBolOito" class="form-label">Código Boleto 8</label>
        <input disabled id="CodBolOito" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>

    <!----------------------------------------------------------------Parcela 9---------------------------------------------------------------->
    <div class="row" id="parcela9" style="display: flex;">
      <div class="col-md-3">
        <label for="DescParNove" class="form-label">Descrição Parcela 9</label>
        <input disabled id="DescParNove" type="text" oninput="javascript:calculaTotal();" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
      <div class="col-md-3">
        <label for="VlrParNove" class="form-label">Valor Parcela 9</label>
        <input disabled id="VlrParNove" type="text" oninput="ExibeBoleto()" onKeyUp="mascaraMoeda(this, event)" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required"
          placeholder="Digite o valor da parcela 9">
      </div>
      <div class="col-md-3">
        <label for="DatParNove" class="form-label">Data Parcela 9</label>
        <input disabled id="DatParNove" type="date"
          class="form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Código Boleto 9 -->
    <div class="row" id="parcela9Bol" style="display: flex;">
      <div class="col-md-12">
        <label for="CodBolNove" class="form-label">Código Boleto 9</label>
        <input disabled id="CodBolNove" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>

    <!----------------------------------------------------------------Parcela 10---------------------------------------------------------------->
    <div class="row" id="parcela10" style="display: flex;">
      <div class="col-md-3">
        <label for="DescParDez" class="form-label">Descrição Parcela 10</label>
        <input disabled id="DescParDez" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
      <div class="col-md-3">
        <label for="VlrParDez" class="form-label">Valor Parcela 10</label>
        <input disabled id="VlrParDez" type="text" oninput="ExibeBoleto()" onKeyUp="mascaraMoeda(this, event)" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required"
          placeholder="Digite o valor da parcela 10">
      </div>
      <div class="col-md-3">
        <label for="DatParDez" class="form-label">Data Parcela 10</label>
        <input disabled id="DatParDez" type="date"
          class="form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Código Boleto 10 -->
    <div class="row" id="parcela10Bol" style="display: flex;">
      <div class="col-md-12">
        <label for="CodBolDez" class="form-label">Código Boleto 10</label>
        <input disabled id="CodBolDez" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>

    <!----------------------------------------------------------------Parcela 11---------------------------------------------------------------->
    <div class="row" id="parcela11" style="display: flex;">
      <div class="col-md-3">
        <label for="DescParOnze" class="form-label">Descrição Parcela 11</label>
        <input disabled id="DescParOnze" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
      <div class="col-md-3">
        <label for="VlrParOnze" class="form-label">Valor Parcela 11</label>
        <input disabled id="VlrParOnze" type="text" oninput="ExibeBoleto()" onKeyUp="mascaraMoeda(this, event)" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required"
          placeholder="Digite o valor da parcela 11">
      </div>
      <div class="col-md-3">
        <label for="DatParOnze" class="form-label">Data Parcela 11</label>
        <input disabled id="DatParOnze" type="date"
          class="form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Código Boleto 11 -->
    <div class="row" id="parcela11Bol" style="display: flex;">
      <div class="col-md-12">
        <label for="CodBolOnze" class="form-label">Código Boleto 11</label>
        <input disabled id="CodBolOnze" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>

    <!----------------------------------------------------------------Parcela 12---------------------------------------------------------------->
    <div class="row" id="parcela12" style="display: flex;">
      <div class="col-md-3">
        <label for="DescParDoze" class="form-label">Descrição Parcela 12</label>
        <input disabled id="DescParDoze" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
      <div class="col-md-3">
        <label for="VlrParDoze" class="form-label">Valor Parcela 12</label>
        <input disabled id="VlrParDoze" type="text" oninput="ExibeBoleto()" onKeyUp="mascaraMoeda(this, event)" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required"
          placeholder="Digite o valor da parcela 12">
      </div>
      <div class="col-md-3">
        <label for="DatParDoze" class="form-label">Data Parcela 12</label>
        <input disabled id="DatParDoze" type="date"
          class="form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!-- Código Boleto 12 -->
    <div class="row" id="parcela12Bol" style="display: flex;">
      <div class="col-md-12">
        <label for="CodBolDoze" class="form-label">Código Boleto 12</label>
        <input disabled id="CodBolDoze" type="text" 
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
        <div class="invalid-feedback">*Campo Obrigatório</div>
      </div>
    </div>
    <!----------------------------------------------------------------Adicionar/Cálcular Parcela---------------------------------------------------------------->
    <!--<div class="row">
      <div class="col-md-6">
        <input class="btn btn-outline-success" type="button" value="Adicionar parcela" onclick="inserirLinhaTabela()" />

      </div>
    </div>-->
    <!-- Total a Pagar -->
    <div class="row">
      <div class="col-md-12">
        <label for="TotalPagarPar" class="form-label">Total a Pagar:</label>
        <input disabled id="TotalPagarPar" onKeyUp="mascaraMoeda(this, event)"
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
      </div>
    </div>

    <!---------------------------------------------------------------------------------------------------->
    <!-- <h5>APROVAÇÃO SUPERVISOR</h5>-->

    <!-- Linha Html -->
    <!--<table id="linha" border cellpadding="0" cellpacing="0">
      <tr>
        <td>
        </td>
      </tr>
    </table>-->
    <!-- Nome Supervisor -->
    <!--  <div class="row">
      <div class="col-md-6">
        <label for="NomSuper" class="form-label">Nome Supervisor</label>
        <input id="NomSuper" type="text"
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
      </div>
    </div>-->
    <!-- Aprovado/Reprovado -->
    <!-- <div class="row">
      <div class="col-md-6">
        <div class="form-checkSup">
          <input class="form-check-input" type="radio" name="form-checkSup" id="AproSup">
          <label class="form-check-label" for="AproSup">
            Aprovado
          </label>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-checkSup">
          <input class="form-check-input" type="radio" name="form-checkSup" id="ReproSup" checked>
          <label class="form-check-label" for="ReproSup">
            Reprovado
          </label>
        </div>
      </div>
    </div>-->
    <!-- Justificativa -->
    <!--<div class="row">
      <div class="col-md-12">
        <label for="SupAproJusti" class="form-label">Justificativa</label>
        <input id="SupAproJusti" type="text"
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
      </div>
    </div>-->
    <!---------------------------------------------------------------------------------------------------->
    <!--  <h5>APROVAÇÃO DIRETORIA</h5>-->

    <!-- Linha Html -->
    <!-- <table id="linha" border cellpadding="0" cellpacing="0">
      <tr>
        <td>
        </td>
      </tr>
    </table>-->
    <!-- Nome Diretor -->
    <!--<div class="row">
      <div class="col-md-6">
        <label for="NomDir" class="form-label">Nome Diretor</label>
        <input id="NomDir" type="text"
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
      </div>
    </div>-->
    <!-- Aprovado/Reprovado -->
    <!-- <div class="row">
      <div class="col-md-6">
        <div class="form-checkDir">
          <input class="form-check-input" type="radio" name="form-checkDir" id="AproDir">
          <label class="form-check-label" for="AproDir">
            Aprovado
          </label>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-checkDir">
          <input class="form-check-input" type="radio" name="form-checkDir" id="ReproDir" checked>
          <label class="form-check-label" for="ReproDir">
            Reprovado
          </label>
        </div>
      </div>
    </div>-->
    <!-- Justificativa -->
    <!--<div class="row">
      <div class="col-md-12">
        <label for="DirAproJusti" class="form-label">Justificativa</label>
        <input id="DirAproJusti" type="text"
          class="form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required">
      </div>
    </div>-->

    <!--<input type="button" value="teste" onclick="testeselect()" />
     <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck" onclick="onSelect()" required />
        <label class="form-check-label" for="gridCheck">
          Declaro que estou ciente com os termos de empréstimo
        </label>
        <div class="invalid-feedback">
          Você precisa aceitar os termos para prosseguir.
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <input class="btn btn-outline-success" type="button" value="Validador" onclick="isFormValid()" />-->


    </div>
    </div>

  </form>
</body>

</html>
