function getFirstSelector(selector) {
  var el = document.querySelector(selector)
  return el
}

function nestedTarget() {
  var el = document.querySelector('#nested div.target')
  return el
}

function deepestChild(){
  var el = document.querySelectorAll('#grand-node div')
  var lastEl = el[el.length-1]
  return lastEl
}

function increaseRankBy(n) {
  var el = document.querySelectorAll(".ranked-list li");
    for(var i=0; i<el.length; i++){
    el[i].innerHTML = parseInt(el[i].innerHTML) + n;
    }

}
