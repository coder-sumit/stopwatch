(function () {
    // getting needed elements from dom
    let st_btn = document.getElementById('start');
    let stp_btn = document.getElementById('stop');
    let rst_btn = document.getElementById('reset');
    let pt = document.getElementById('points');
    let sec = document.getElementById('seconds');
    let min = document.getElementById('minute');

    let pt_val = 0, sec_val = 0, min_val = 0;


    let id = null;
    // reset function
    function reset() {
        stop();
        pt_val = 0;
        sec_val = 0;
        min_val = 0;

        pt.innerText = '00';
        sec.innerText = '00 : ';
        min.innerText = '00 : ';

    }
    // start functionality
    function increse_min() {
        min_val += 1;
        if (min_val > 59) {
            min_val = 0;
            min.innerText = '00 : ';
        } else if (min_val > 9) {
            min.innerText = `${min_val} : `;
        } else {
            min.innerText = `0${min_val} : `;
        }
    }


    function increse_sec() {
        sec_val += 1;
        if (sec_val > 59) {
            increse_min();
            sec_val = 0;
            sec.innerText = '00 : ';
        } else if (sec_val > 9) {
            sec.innerText = `${sec_val} : `;
        } else {
            sec.innerText = `0${sec_val} : `;
        }
    }


    function update_time() {
        pt_val += 1;
        if (pt_val > 99) {
            increse_sec();
            pt_val = 0;
            pt.innerText = '00';

        } else if (pt_val > 9) {
            pt.innerText = pt_val;
        } else {
            pt.innerText = `0${pt_val}`;
        }
    }
    function start() {
        //timer is sarted and clicked on start
        if (id != null) {
            return;
        }
        id = setInterval(update_time, 10);
    }

    // stop function

    function stop() {
        clearInterval(id);
        id = null;
    }


    rst_btn.addEventListener('click', reset);
    st_btn.addEventListener('click', start);

    stp_btn.addEventListener('click', stop);

})();