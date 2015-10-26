$(function() {

  minutes = 0;
  seconds = 0;
  centi = 0;
  minuteEl = $("#minutes");
  $("#convert").click(function () {
    var units = $("#units").attr("value");
    alert(units);
  });

  $("#minutes").hammer({ direction: Hammer.DIRECTION_ALL }).bind("panup pandown", handlePan);
  $("#seconds").hammer({ direction: Hammer.DIRECTION_ALL }).bind("panup pandown", handlePan);
  $("#centi").hammer({ direction: Hammer.DIRECTION_ALL }).bind("panup pandown", handlePan);


  function handlePan(e) {
    if (e.type === "panup") {
      if (this.id === "centi") {
        incrementVals(this, false);
      } else {
      incrementVals(this);
    }
    }
    if (e.type === "pandown") {
      decrementVals(this);
    }
  }

  function incrementVals(e, sixtySec) {
    if (sixtySec === undefined) sixtySec = true;
    if (sixtySec) {
      eval("if (" + e.id + "< 59)" + e.id + "++;");
      e.innerHTML = eval(e.id);
    } else {
      eval("if (" + e.id + "< 99)" + e.id + "++;");
      e.innerHTML = eval(e.id);
    }
  }

  function decrementVals(e) {
    eval("if (" + e.id + "> 0)" + e.id + "--;");
    e.innerHTML = eval(e.id);  }
});