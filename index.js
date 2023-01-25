let form = document.getElementById("formulario");
form.addEventListener ("submit",validarformulario);
function validarformulario(e){
    let datos = [];
    for (let i = 0; i < form.length; i++) {
        e.preventDefault(e);
        datos.push(e.target.children[i].value);
    }
    console.log(datos);
    imprimir2(datos);
}

let form2 = document.getElementById("formulario2");
form2.addEventListener ("submit",validarformulario2);
function validarformulario2(e){
    let datos2 = [];
    for (let i = 0; i < form2.length; i++) {
        e.preventDefault(e);
        datos2.push(e.target.children[i].value);
    }
    imprimir(datos2);
}

function imprimir2(datos) {
    console.log("2 tels");
    text = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="color-scheme" content="light">
        <meta name="supported-color-schemes" content="light">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet">
    </head>

    <body>
        <table width="500">
            <tr>
                <td style="width: 39%;" height="180" valign="top" style="padding-top:15px;">
                    <img src="https://www.cloudsolutionslatam.com/wp-content/uploads/2022/06/Copia-de-Propuesta-nueva-firma-corporativa-6.png"
                            width="180" height="180">
                </td>
    
                <td width="250" height="180" style="vertical-align: top;color: #311E6D; font-family: Quicksand,Arial;">
                    <div style="font-size:13px;">
                        <b>${datos[0]}</b> <br>
                        <span>${datos[1]}</span> 
                    </div>
                    <hr width="235" style="margin-left: 0px;background-color:#8068D8;" />
                    <div class="links" style="font-size:11px;">
                        <ul style="padding-left: 0px;">
                            <li style="padding-bottom: 4px;list-style-type: none;"><a style = "text-decoration: none;color: #311E6D;" href=''>${datos[2]}</a></li>
                            <li style="padding-bottom: 4px;list-style-type: none;"><b>Tel Ofic.</b><a style = "text-decoration: none;color: #311E6D;" href="tel:${datos[3]}">: ${datos[3]}</a></li>
                            <li style="padding-bottom: 4px;list-style-type: none;"><b>Tel Cel.</b><a style = "text-decoration: none;color: #311E6D;" href="tel:${datos[4]}">: ${datos[4]} </a></li>
                            <li style="list-style-type: none;"><b>Dirección</b><a style = "text-decoration: none;color: #311E6D;" href="https://www.google.com/maps/place/Arcos+2215,+Buenos+Aires,+Argentina/@-34.5591455,-58.4547172,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb5d328c6712d:0xdb3f53472f0c90d2!8m2!3d-34.5591455!4d-58.4547172">: Arcos 2215 Of. 101,</a></li>
                            <li style="padding-bottom: 4px;list-style-type: none;"><a style = "text-decoration: none;color: #311E6D;" href="https://www.google.com/maps/place/Arcos+2215,+Buenos+Aires,+Argentina/@-34.5591455,-58.4547172,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb5d328c6712d:0xdb3f53472f0c90d2!8m2!3d-34.5591455!4d-58.4547172">Belgrano Buenos Aires - Argentina</a></li>
                            <li style="padding-bottom: 4px;list-style-type: none;"><a style = "text-decoration: none;color: #311E6D;" href="https://www.cloudsolutionslatam.com/?utm_source=Firma+email&utm_medium=Correo+electronico&utm_campaign=Firma+corporativa" target="_blank"><b>www.cloudsolutionslatam.com</b></a></li>
                        </ul>                   
                    </div>
                    <div style="padding-top: 3px;">
                        <a  href="https://wa.link/dvdygo"
                            target="_blank"><img
                                src="https://www.cloudsolutionslatam.com/wp-content/uploads/2022/06/boton-whatsapp.png"
                                width="24" height="24"></a>
                        <a style="padding-left: 15px;" href="https://www.linkedin.com/company/16252975/admin/"
                            target="_blank"><img
                                src="https://www.cloudsolutionslatam.com/wp-content/uploads/2022/06/boton-linkedin.png"
                                width="24" height="24"></a>
                        <a style="padding-left: 15px;" href="https://www.instagram.com/cloudsolutionslatam"
                            target="_blank"><img
                                src="https://www.cloudsolutionslatam.com/wp-content/uploads/2022/06/boton-instagram.png"
                                width="24" height="24"></a>
                        <a style="padding-left: 15px;" href="https://www.facebook.com/cloudsolutionslatam"
                            target="_blank"><img
                                src="https://www.cloudsolutionslatam.com/wp-content/uploads/2022/06/boton-facebook.png"
                                width="24" height="24"></a>
                        <a style="padding-left: 15px;"
                            href="https://www.youtube.com/channel/UC6kJ_YlnsuLPKRLUlAOJwYQ/featured " target="_blank"><img
                                src="https://www.cloudsolutionslatam.com/wp-content/uploads/2022/06/boton-youtube.png"
                                width="24" height="24"></a>
                    </div>
                </td>
            </tr>
        </table>
    </body>

    </html>`;
    console.log(text);
        
}
function imprimir(datos) {
    text = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="color-scheme" content="light">
        <meta name="supported-color-schemes" content="light">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet">
    </head>
    
    <body>
        <table width="500">
            <tr>
                <td style="width: 39%;" height="180" valign="top" style="padding-top:15px;">
                    <img src="https://www.cloudsolutionslatam.com/wp-content/uploads/2022/06/Copia-de-Propuesta-nueva-firma-corporativa-6.png"
                            width="180" height="180">
                </td>
    
                <td width="250" height="180" style="vertical-align: top;color: #311E6D; font-family: Quicksand,Arial;">
                    <div style="font-size:13px;">
                        <b>${datos[0]}</b> <br>
                        <span>${datos[1]}</span> 
                    </div>
                    <hr width="235" style="margin-left: 0px;background-color:#8068D8;" />
                    </div>
                    <div class="links" style="font-size:11.5px;">
                        <ul style="padding-left: 0px;">
                            <li style="padding-bottom: 4px;list-style-type: none;"><a style = "text-decoration: none;color: #311E6D;" href=''>${datos[2]}</a></li>
                            <li style="padding-bottom: 4px;list-style-type: none;"><b>Tel Ofic.</b><a style = "text-decoration: none;color: #311E6D;" href="tel:${datos[3]}">: ${datos[3]}</a></li>
                            <li style="list-style-type: none;"><b>Dirección</b><a style = "text-decoration: none;color: #311E6D;" href="https://www.google.com/maps/place/Arcos+2215,+Buenos+Aires,+Argentina/@-34.5591455,-58.4547172,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb5d328c6712d:0xdb3f53472f0c90d2!8m2!3d-34.5591455!4d-58.4547172">: Arcos 2215 Of. 101,</a></li>
                            <li style="padding-bottom: 4px;list-style-type: none;"><a style = "text-decoration: none;color: #311E6D;" href="https://www.google.com/maps/place/Arcos+2215,+Buenos+Aires,+Argentina/@-34.5591455,-58.4547172,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb5d328c6712d:0xdb3f53472f0c90d2!8m2!3d-34.5591455!4d-58.4547172">Belgrano Buenos Aires - Argentina</a></li>
                            <li style="padding-bottom: 4px;list-style-type: none;"><a style = "text-decoration: none;color: #311E6D;" href="https://www.cloudsolutionslatam.com/?utm_source=Firma+email&utm_medium=Correo+electronico&utm_campaign=Firma+corporativa" target="_blank"><b>www.cloudsolutionslatam.com</b></a></li>
                        </ul>                   
                    </div>
                    <div style="padding-top: 6px;">
                        <a  href="https://wa.link/dvdygo"
                            target="_blank"><img
                                src="https://www.cloudsolutionslatam.com/wp-content/uploads/2022/06/boton-whatsapp.png"
                                width="24" height="24"></a>
                        <a style="padding-left: 15px;" href="https://www.linkedin.com/company/16252975/admin/"
                            target="_blank"><img
                                src="https://www.cloudsolutionslatam.com/wp-content/uploads/2022/06/boton-linkedin.png"
                                width="24" height="24"></a>
                        <a style="padding-left: 15px;" href="https://www.instagram.com/cloudsolutionslatam"
                            target="_blank"><img
                                src="https://www.cloudsolutionslatam.com/wp-content/uploads/2022/06/boton-instagram.png"
                                width="24" height="24"></a>
                        <a style="padding-left: 15px;" href="https://www.facebook.com/cloudsolutionslatam"
                            target="_blank"><img
                                src="https://www.cloudsolutionslatam.com/wp-content/uploads/2022/06/boton-facebook.png"
                                width="24" height="24"></a>
                        <a style="padding-left: 15px;"
                            href="https://www.youtube.com/channel/UC6kJ_YlnsuLPKRLUlAOJwYQ/featured " target="_blank"><img
                                src="https://www.cloudsolutionslatam.com/wp-content/uploads/2022/06/boton-youtube.png"
                                width="24" height="24"></a>
                    </div>
                </td>
            </tr>
    
        </table>
    </body>
    
    </html>
    `;
    console.log(text);
}
