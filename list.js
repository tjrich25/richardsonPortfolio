
var list = [{
  title: "Japan",
  complete: false
},
{
  title: "Israel",
  complete: true
},
{
  title: "Brazil",
  complete: false
}];

var viewList = $('ol');

$(list).each(function(index){
  if(this.complete === true){
    viewList.append('<li class="completed">' + this.title +
    ' <span class="glyphicon glyphicon-ok green"></span> <span class="glyphicon glyphicon-trash red"></span></li>');
  } else {
    viewList.append('<li>' + this.title +
    ' <span class="glyphicon glyphicon-ok green"></span> <span class="glyphicon glyphicon-trash red"></span></li>');
  }
});

$(viewList).on("click", "li .glyphicon-ok", function (){
  var li = $(this).parent();


  li.toggleClass('completed');
});

$(viewList).on("click", "li .glyphicon-trash", function (){
  $(this).parent().remove();
});

$("#add-item").click(function(){
  var input = $('#add-item-text');
  viewList.append('<li>' + input.val() +
  ' <span class="glyphicon glyphicon-ok green"></span> <span class="glyphicon glyphicon-trash red"></span></li>');
  input.val('');
});

$('#add-item-text').keypress(function(evt) {
  if(evt.which === 13){
    viewList.append('<li>' + $(this).val() +
    ' <span class="glyphicon glyphicon-ok green"></span> <span class="glyphicon glyphicon-trash red"></span></li>');
    $(this).val('');
  }
});
