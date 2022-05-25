let mouseX = 0;
let mouseY = 0;
const byeArray = ['körişirbiz', 'görüşürüz', 'αντιο', 'ցտեսություն', 'bi xatirê te', 'ნახვამდის', 'довиждане', 'увидимся', 'хayr', 'көрүшкөнчө', 'кездескенше', 'találkozunk', '또 봐요', 'tschüss', 'goodbye', 'doei', 'au revoir', 'şalom', 'vale', 'hasta la vista', 'namaste', 'さようなら', 'vemo-nos', 'прощай', 'slán', 'hüvasti', 'hei hei'];
let span = document.querySelector('#korisirbiz');
let interval = null;
toggle = (element) => {
    if (document.querySelector(element).style.display === 'none')
        document.querySelector(element).style.display = 'flex';
    else
        document.querySelector(element).style.display = 'none';
}

hide = (element) => {
    document.querySelector(element).style.display = 'none';
}

show = (element) => {
    document.querySelector(element).style.display = 'flex';
}

loopMeNot = (span, array) => {
    // for first item
    let rand = Math.floor(Math.random() * array.length);
    span.innerText = array[rand];

    let index = 0;
    return setInterval(function(){
            if(array.length > index) {
                let rand = Math.floor(Math.random() * array.length);
                span.innerText = array[rand];
                index++;
            }
            else
                index = 0;
        },1000);
}
hide('#screen_saver');
document.addEventListener("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    hide('#screen_saver');
});

document.addEventListener("mouseleave", (function () {
    if (mouseY < 100) {
        toggle('#screen_saver')
        clearInterval(interval);
        interval = loopMeNot(span,byeArray);
    }
    else {
        clearInterval(interval);
        hide('#screen_saver');
    }
}));