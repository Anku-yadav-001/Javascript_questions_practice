let input1=["MA","SA","I","SCH","OOL"]
//Using Arrow function change the array of elements in Lower case.
    let changeinput1=element=>element.toLowerCase()
    let changearray=arr=>arr.map(changeinput1)
    console.log(changearray(input1));

//Using User-Defined function change the array of elements in Lower case.
    function changecase(arr)
    {
        for (let index = 0; index < arr.length; index++) {
            let  element = arr[index];
           console.log( element.toLowerCase());
        }
    }
    changecase(input1)
  