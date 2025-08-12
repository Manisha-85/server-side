$(function(){
             
    $("#rangeAmount").change(()=>{
         $("#txtAmount").val($("#rangeAmount").val());
    })

    $("#rangeYears").change(()=>{
        $("#txtYears").val($("#rangeYears").val());
    })

    $("#rangeRate").change(()=>{
        $("#txtRate").val($("#rangeRate").val());
    })


    $("#btnCalculate").click(()=>{

          var P = parseInt($("#txtAmount").val());
          var R = parseFloat($("#txtRate").val())/12/100;
          var N = parseInt($("#txtYears").val()) * 12;
          var EMI = P * R * (Math.pow(1+R,N)) / Math.pow(1+R,N) - 1;

          $("#msgEmi").html(`Installment amount is <b class="text-primary">${EMI.toLocaleString('en-in', {style:'currency', currency:'INR'})}</b> for next ${N} months`)
    })

})