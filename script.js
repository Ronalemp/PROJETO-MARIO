const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function mostrarfomulario(){
  form.style.left = "10%"
  form.style.transform ="traslateX (-20)"
  mascara.style.visibility = "visible"
}

function esconderform(){
    form.style.left = "-400px"
    form.style.transform ="traslateX (0)"
    mascara.style.visibility = "hidden"
  } 

