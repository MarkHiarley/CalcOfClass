
document.addEventListener("DOMContentLoaded", function() {
    function calcfaltas() {
        var NdiasL = parseInt(document.getElementById("diaS").value);
        var Naula = parseInt(document.getElementById("totalAulas").value);
        var DiasFaltas = parseInt(document.getElementById("Dfaltados").value);

        const totaldeaulas = NdiasL * Naula * 4 * 5; 
        const reprovacao = 0.25 * totaldeaulas;     

        const Faltas = DiasFaltas * Naula;           
        const resultado = totaldeaulas - Faltas;     
        
        if (resultado <= reprovacao) {
            console,console.log("Reprovado por falta");
            ("Reprovado por falta");
        } else {
            console.log("Aprovado");
           
        }
        return resultado;
    }

    document.getElementById("calcularbotao").addEventListener("click", calcfaltas);
});

