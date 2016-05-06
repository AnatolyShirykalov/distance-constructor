var point = ["kaka","picya","kokoko"]
var pair = [[1,0,-1],[2,0,-1],[2,1,-1]]
function add_point(){
  point.push("");
  for (var i=0; i<point.length-1;i++) pair.push([point.size-1,i,-1]);
}
function show(){
  document.getElementById("points").innerHTML = ""
  document.getElementById("pairs").innerHTML = "Пары<br>";
  point.forEach(function(name,index,arr){
    document.getElementById("points").innerHTML+='<input type="text" id="pt'+index+'" value='+name+' onchange="point['+index+']=document.getElementById(\'pt'+index+'\').value; show();"/><br/>'
  });
  pair.forEach(function(pa,index,arr){
    document.getElementById("pairs").innerHTML+=""+point[pa[0]]+", "+point[pa[1]]+" ";
    document.getElementById("pairs").innerHTML+='<input type="text" id="pair'+index+'" value="'+show_dist(pa[2])+'" onchange="pair['+index+'][2]=digit(document.getElementById(\'pair'+index+'\').value); show();"/><br/>'
  });
}
/*
 * ограничения неравенством треугольника
 */
function restrict(index){
  var i=0,rests=[];
  for (i=0;i<pair.length;i++){
    if (i==index) continue;
    if ((pair[i][0]==pair[index][0]) || (pair[i][0]==pair[index][1]) || (pair[i][1]==pair[index][0]) || (pair[i][1]==pair[index][1])){
      ;
    }
  }
}
function show_dist(num){
  if (num==-1) return "";
  else return num;
}
function digit(str){
  var res = parseFloat(str);
  if (res==NaN) return -1;
  else return res;
}
$(document).ready(function(){
  show();
});
