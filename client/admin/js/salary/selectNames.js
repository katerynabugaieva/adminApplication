export default function selectWorker(workers) {


    var arr = [];
    var i = 0;

    for (var country in workers) {
        var obj = {};
        obj.value = workers[i];
        obj.selected = "";
        arr[i] = obj;
        i += 1;
    }
  //  console.log(workers)
    return arr;
}

