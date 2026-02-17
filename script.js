//C button design, DeleteMe
function DeleteMe() {
    document.getElementById('MyResult').value = ""
}




function calculator(NewValue) {
    document.getElementById('MyResult').value += NewValue;

}




// sum button design
function answer() {
    var a = document.getElementById('MyResult').value;
    var b = eval(a);
    document.getElementById('MyResult').value = b;

}