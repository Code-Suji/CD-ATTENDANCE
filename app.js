//window.location.replace("hunt1.html");
$.getJSON("https://api.ipify.org?format=json", 
function(data) { 

    const form = document.querySelector('#para');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var address= data.ip;
    
    form.addEventListener('submit', (e) => {
        alert("You will be notified when round four goes live");
        e.preventDefault();
        db.collection('attendance').doc(address).set({
            name: form.pname.value,
            rno: form.rno.value,
            time:Date().toString().substring(0, 24),
            ip:address,
        });
        form.name.value = '';
        form.rno.value = '';
        //window.location.replace("hunt1.html");
    });

}) 