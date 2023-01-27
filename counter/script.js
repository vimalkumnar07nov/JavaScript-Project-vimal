
const counter = document.querySelectorAll('.counter');

counter.forEach((count) => {
    // console.log(count);
    count.innerHTML = 0;

    const updateCounter = () => {
        const targetCount = +count.getAttribute('data-target');
        const startingCount = Number(count.innerHTML);

        // console.log(typeof(targetCount));
        // console.log(targetCount);
        //--------------data get in string formate------so----
        //--------- convert string in to number formate add plus (+) sign OR (Number) in count
        // var n = +str => it convert string into Number
        const inc = targetCount / 100;

        if (startingCount<targetCount) {
            count.innerHTML = `${Math.round(startingCount + inc)}`;
            setTimeout(updateCounter, 10);
        } else {
            count.innerHTML = targetCount;
        }
        
    }
    updateCounter();

})