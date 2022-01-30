
function mean_of_grades(){
    var tb = document.querySelector("table");
    let result = 0;
    var count = 0;
    var i = 1;
    while (i < tb.rows.length) {
        if (tb.rows[i].cells[3].getElementsByTagName("input")[0].value != '' && tb.rows[i].cells[3].getElementsByTagName("input")[1].value != '') {
            var in1 = parseInt(tb.rows[i].cells[3].getElementsByTagName("input")[0].value);
            var in2 = parseInt(tb.rows[i].cells[3].getElementsByTagName("input")[1].value);
            var cell5 = tb.rows[i].cells[4];
            var percent = (in1 / in2) * 100;
            percent = parseFloat(percent.toFixed(2));
            cell5.innerHTML = percent.toString() + "%";
            result += in1 / in2;
            count++;
        }
        i++;
    }
    result = result/count;
    result = result*100;
    result = parseFloat(result.toFixed(2))
    document.getElementById('showGrades').style.display = "block";
    document.getElementById("grades").innerHTML = result;
}

function weightedGrades(){
    var tb = document.querySelector("table");
    let result = 0;
    var i = 1;
    var totalWeight = 0;
    var weight = 0;
    while (i < tb.rows.length) {
        if (tb.rows[i].cells[3].getElementsByTagName("input")[0].value != '' && tb.rows[i].cells[3].getElementsByTagName("input")[1].value != '') {
            if (tb.rows[i].cells[2].getElementsByTagName("input")[0].value == ""){
                window.alert("Activity " + i + " weighted input is empty, we consider it as 1");
                weight = 1;
            }
            else{
                weight = parseInt(tb.rows[i].cells[2].getElementsByTagName("input")[0].value);
            }
            var in1 = parseInt(tb.rows[i].cells[3].getElementsByTagName("input")[0].value);
            var in2 = parseInt(tb.rows[i].cells[3].getElementsByTagName("input")[1].value);
            var cell5 = tb.rows[i].cells[4];
            var percent = (in1 / in2) * 100;
            percent = parseFloat(percent.toFixed(2));
            cell5.innerHTML = percent.toString() + "%";
            result += (in1 / in2) * weight;
            totalWeight += weight;
        }
        i++;
    }
    result = result/(totalWeight);
    result = result*100;
    result = parseFloat(result.toFixed(2))
    document.getElementById('showGrades').style.display = "block";
    document.getElementById("grades").innerHTML = result;
}

function add_entry(){
    document.querySelector("table").appendChild(
        document.getElementById("secondRow").cloneNode(true)
    );
    var tb = document.querySelector("table");
    var cell1 = tb.rows[tb.rows.length - 1].cells[0];
    var cell2 = tb.rows[tb.rows.length - 1].cells[1];
    cell1.innerHTML = "Activity " + (tb.rows.length - 1); 
    cell2.innerHTML = "A" + (tb.rows.length - 1); 
    var cell3 = tb.rows[tb.rows.length - 1].cells[2];
    cell3.getElementsByTagName("input")[0].value = "";
    var cell4 = tb.rows[tb.rows.length - 1].cells[3];
    cell4.getElementsByTagName("input")[0].value = "";
    cell4.getElementsByTagName("input")[1].value = "";
    var cell5 = tb.rows[tb.rows.length - 1].cells[4];
    cell5.innerHTML = "";
}
