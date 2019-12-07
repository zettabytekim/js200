var person = 'zetta';

function print() {
    var person2 = 'taiji';

    function innerPrint() {
        console.log(person);
        console.log(person2);    
    }
    innerPrint();
    console.log('print finished');
}

print();
console.log('finished');
