// getting needed elements from dom
let st_btn = document.getElementById('start');
let stp_btn = document.getElementById('stop');
let rst_btn = document.getElementById('reset');
let sec = document.getElementById('second');
let min = document.getElementById('minute');
let hour = document.getElementById('hour');

let sec_val = 0, min_val=0, hour_val=0;


let id = null;
// reset function
function reset(){
    stop();
  sec_val = 0;
  min_val = 0;
  hour_val = 0;

  sec.innerText = '00';
  min.innerText = '00 : ';
  hour.innerText = '00 : ';

}


function increse_minute(){
    min_val += 1;
   if(min_val > 59){
     increse_hour();
     min_val = 0;
     min.innerText = '00 : ';
   }else if(min_val > 9){
       min.innerText = `${min_val} : `;
   }else{
       min.innerText = `0${min_val} : ` ;
   }
}

function increse_hour(){
    hour_val += 1;
    if(hour_val > 59){
      increse_hour();
      hour_val = 0;
      min.innerText = '00 : ';
    }else if(hour_val > 9){
        hour.innerText = `${min_val} : `;
    }else{
        hour.innerText = `0${hour_val} : ` ;
    }
}
function update_time(){
   sec_val += 1;
   if(sec_val > 59){
       increse_minute();
       sec_val = 0;
       sec.innerText = '00';

   }else if(sec_val > 9){
       sec.innerText = sec_val;
   }else{
       sec.innerText = `0${sec_val}`;
   }
}
function start(){
//timer is sarted and clicked on start
if(id != null){
    return;
}
id = setInterval(update_time, 10);
}

function stop(){
   clearInterval(id);
   id = null;
}


rst_btn.addEventListener('click', reset);
st_btn.addEventListener('click', start);

stp_btn.addEventListener('click', stop);