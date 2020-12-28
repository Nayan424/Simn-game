var st=0;
br=["green","red","yellow","blue"];
var l=0;
var ar1=[];
var ar2=[]

$(document).on('keypress',function(){
    if(st==0){
        random_play();
    }
});

$('.btn').on('click',function(){
    var c=$(this).attr('id');
    sound(c);
    animate(c);
    ar2.push(c);
    check(ar2.length-1);
});

function check(x){
    console.log(x);
    console.log(ar1);
    console.log(ar2);
    if(ar1[x]===ar2[x]){
        if(ar1.length===ar2.length){
            setTimeout(function(){
                random_play();
                ar2=[];
            },1000);
        }
    }
    else{
        wrong();
        start();
    }
}

function random_play(){
    $('#level-title').text('Level '+l);
    l++;
    var a=Math.floor(Math.random()*4);
    var ch=br[a];
    ar1.push(ch);
    $('#'+ch).fadeIn(100).fadeOut(100).fadeIn(100);
    sound(ch);
    st=1;
}

function wrong()
{
    t=new Audio('sounds/wrong.mp3');
    t.play();
    $('h1').text('Game Over, Press Any Key to Restart');
    $('body').css('background-color','red');
    setTimeout(function(){
        $('body').css('background-color','#011F3F');
        $('h1').text('Press A Key to Start');
        start();
    },2000);
}

function sound(so){
    t=new Audio('sounds/'+so+'.mp3');
    t.play();
}

function animate(an){
    $('#'+an).addClass('pressed');
    setTimeout(function(){$('#'+an).removeClass('pressed');},100);
}

function start(){
    
    st=0;
    ar1=[];
    ar2=[]
    l=0;
}