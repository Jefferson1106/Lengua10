var titulos = "aplico";

document.getElementById("pre1a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre1a"), 1);
});

document.getElementById("pre2a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre2a"), 1);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre3a"), 1);
});

document.getElementById("pre5a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre5a"), 1);
});
document.getElementById("pre6a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
  });
  document.getElementById("pre6a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre6a"), 1);
  });
  
var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
// #region Pregunta1
function pregunta1() {
  var pre1a = document.getElementById("pre1a").value;
  tpre1 = pre1a;
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
function pregunta2() {
  var pre2a = document.getElementById("pre2a").value;
  tpre2 = pre2a;
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3
function pregunta3() {
  var pre3a = document.getElementById("pre3a").value;
  tpre3 = pre3a;
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
$(".enc1").click(function() {
    if ($(this).hasClass("subrayar")) {
      $(this).removeClass("subrayar");
    } else {
      $(this).addClass("subrayar");
    }
  });
  
  function pregunta4() {
    var respr1 = 0,
      respr2 = 0;
    for (var i = 1; i <= 15; i++) {
      var caja = $("span[id=" + [i] + "]").text();
      if ($("#" + [i] + "").hasClass("subrayar")) {
        if (
          caja == "densidad inimaginable" ||
          caja == "energía pura" ||
          caja == "Big Bang" ||
          caja == "400 000 millones de galaxias" ||
          caja == "trillonésima parte de un centímetro" 
        ) {
          respr1 = respr1 + 1;
  
          $("#" + [i] + "").addClass("correcto");
        } else {
          respr2 = respr2 + 1;
  
          $("#" + [i] + "").addClass("incorrecto");
        }
      } else {
      }
    }
  
    var total = ((respr1 - respr2) * 1) / 5;
    if (total < 0) {
      total = 0;
      tpre4 = total;
    } else {
      tpre4 = total;
    }
  
    tpre4 = total.toFixed(2);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
  }
// #endregion

// #region Pregunta5
function pregunta5() {
  var pre5a = document.getElementById("pre5a").value;
  tpre5 = pre5a;
  $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6
function pregunta6() {
  var pre6a = document.getElementById("pre6a").value;
  tpre6 = pre6a;
  $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var pre1a = document.getElementById("pre1a").value;
  if (pre1a == "") {
    alert("Pregunta 1: Califiqué la pregunta");
  } else {
    var pre2a = document.getElementById("pre2a").value;
    if (pre2a == "") {
      alert("Pregunta 2: Califiqué la pregunta");
    } else {
      var pre3a = document.getElementById("pre3a").value;
      if (pre3a == "") {
        alert("Pregunta 3: Califiqué la pregunta");
      } else {
        var pre5a = document.getElementById("pre5a").value;
        if (pre5a == "") {
          alert("Pregunta 5: Califiqué la pregunta");
        } else {
          var pre6a = document.getElementById("pre6a").value;
          if (pre6a == "") {
            alert("Pregunta 6: Califiqué la pregunta");
          } else {
            pregunta1();
            pregunta2();
            pregunta3();
            pregunta4();
            pregunta5();
            pregunta6();
            var Nf =
              parseFloat(tpre1) +
              parseFloat(tpre2) +
              parseFloat(tpre3) +
              parseFloat(tpre4) +
              parseFloat(tpre5) +
              parseFloat(tpre6) ;
            var Vtotal = ((Nf*10)/6).toFixed(2);
            $("#txtNota").html(Vtotal + "/10");
            document.getElementById("bt_comprobar").disabled = true;
          }
        }
      }
    }
  }
}
// #endregion
