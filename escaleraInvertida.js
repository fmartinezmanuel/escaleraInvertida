function result(num){
  //console.log('num is: '+num);
  var first = 0;
  var space = ' ';
  var saveAr = [];

  for(i=0; i < num; i++){
    var iteration = i + 1;
    first = num - iteration;
    //console.log('first is: '+first+' i is: '+ i);
    saveAr = [];
    for(j=0; j < first; j++){
      saveAr.push(space);
    }
    //console.log(saveAr);

    var remain = num - first;
    //console.log('remain is:'+remain);
    for(k=0; k < remain; k++){
      saveAr.push('*');
    }
    console.log(saveAr);

  }//for ends..
}//function ends..


 result(5);//<- Run funcion
