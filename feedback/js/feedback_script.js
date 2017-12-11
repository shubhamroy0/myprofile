$(function(){


$("#button_act").click(function(){
var cmnt=$("#comment");
if(!cmnt.val())
{
toastr["error"]("Please ! Enter some comomment ");
}
var c=0,b=true;
var co_rad=$("input[name=co_act]:checked");
var building=$('input[name="building"]:checked');
var faculty=$('input[name="faculty"]:checked');

if(!co_rad.val())
{toastr["error"]("please enter the first column");b=false;}
else
c+=parseInt(co_rad.val());

if(!building.val())
{toastr["error"]("please enter the second column");b=false;}
else
c+=parseInt(building.val());

if(!faculty.val())
{toastr["error"]("please enter the third column");b=false;}
else
c+=parseInt(faculty.val());
if(b)
{
var str="The percentage of marks given : "+((c/15)*100)+"% . ";
$("#body").html(str);
$("#myModal").modal("show");
}
});

});