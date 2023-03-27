function CustomPrice({price}) {
    const str = (price === null) ? '' : price.toString();
    let count = 0;
    let newStr = '';
    let result = '';

    for(let i = str.length - 1; i >= 0; i--) {
        if(isNaN(str[i]) === false) {
            newStr += str[i];
            count++;
        }

        if(count % 3 === 0 && i !== 0 && isNaN(str[i]) === false) {
            newStr += '.';
        }
    } 

    let arr = newStr.split('');
    let reverseArr = arr.reverse();
    result = reverseArr.join('');   

    return(
        <>
            {result}
        </>
    )
}

export default CustomPrice;
