$(document).ready(function(){
  $(".word-form").submit(function(event){
    var subject = $("#subject").val();
    var array = subject.split(/[\s,. !]+/);
    array.sort();
    // alert(array);

var arrayOne = []

if
    function foo(array) {
    var a = [], b = [], prev;
    array.sort();
    for ( var i = 0; i < array.length; i++ ) {
        if ( array[i] !== prev ) {
            a.push(array[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = array[i];
    }

    return [a, b];

}

var result = foo(arr);
document.write('[' + result[0] + ']<br>[' + result[1] + ']') 



    event.preventDefault();
    $(".subject1").text(subject);

  });
});
