(function(){
    var actualizarHora = function(){
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();
        
        /*p = PARRAFO*/
        var pHoras = document.getElementById('Horas'),
            pAMPM = document.getElementById('AMPM'),
            pMinutos = document.getElementById('Minutos'),
            pSegundos = document.getElementById('Segundos'),
            pDiaSemana = document.getElementById('DiaSemana'),
            pDia = document.getElementById('Dia'),
            pMes = document.getElementById('Mes'),
            pYear = document.getElementById('Year');
        
        
        /* OBTENER FECHA  DIASEMANA/DIA/MES/AÑO*/    
        var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
        pDiaSemana.textContent = semana[diaSemana];
        
        pDia.textContent = dia;
        
        var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        pMes.textContent = meses[mes];
        
        pYear.textContent = year;
        
        /*OBTENER HORAS/MINUTOS/SEGUNDOS
        if(horas >= 12) TRANSFORMAR RELOJ DE 24HRS A 12AM/PM
            {
                horas = horas -12;
                ampm = 'PM';
            }else{
                ampm = 'AM';
            }*/
        /*ESPECIFICAR QUE MUESTRE 12:00AM Y NO 0:00AM*/
        if(horas == 0)
            {
                horas = 12;
            }
        
        /*MOSTRARA HORAS EN PARRAFO*/
        pHoras.textContent = horas;
        pAMPM.textContent = ampm;
        
        /*AGREGAR CERO A LA IZQUIERDA A MINUTOS & SEGUNDOS*/
        if(minutos < 10)
            {
                minutos = "0" + minutos;
            }
        if(segundos < 10)
            {
                segundos = "0" + segundos;
            }
        
        /*MOSTRAR MINUTOS Y SEGUNDOS*/
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
        
        
    };
    
    /*MOSTRAR ACTUALIZAR HORA*/
    actualizarHora();
    
    /*ACTUALIZAR HORA CADA SEGUNDO|*/
    var intervalo = setInterval(actualizarHora, 1000);
}())