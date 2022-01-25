let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
function primeMover(n){
    var primes = [2];
    var x = 3;
    var count = 0;
    do{
        for(var y=2; y<x; y++){
            if(x%y===0){
                count++;
            }
        }
        if(count===0){
            primes.push(x);
            x++;
        }else{
            x++;
            count=0;
        }
    }
    while(primes.length<n);
    return primes[primes.length-1];
}
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case "Area of square":
                if(display.innerText){
                    display.innerText= (display.innerText * display.innerText);
                }
                break;
            case "Area of circle":
                if(display.innerText){
                    display.innerText= (3.14 * display.innerText * display.innerText);
                }
                break;
            case "Nth prime":
                if(display.innerText){
                    display.innerText= primeMover(display.innerText);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});