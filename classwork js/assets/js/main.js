//Task2

    //const n=[1,2,3,4,5,6,7,8,9,10]
        
    //const a=n.filter((n)=>n % 2===0)

    //const b=n.filter((n)=>n % 2===1)

    //console.log(a,b);

//Task1
    // let btn=document.getElementById("btn")
    // const n=["salam","necesen","alma","armud"]
    // btn.onclick= function X() {
    //     if (n.includes("aa"))
    //     console.log(n.indexOf("aa"));
    //     else{
    //         console.log("no");
    //        }
    // } 
  
    //Task3
    function palindrome(str) {  
        const len = string.length;

        for (let i = 0; i < len / 2; i++) {

            if (string[i] !== string[len - 1 - i]) {  
                alert( 'Sehvdir');  
            }  
        }  
        alert( 'Dogrudur');  
    } 
    const string = prompt('Yoxlamaq istediyiniz sozu ve ya reqemi qeyd edin: ');  
      
    const value = palindrome(string);  
      
    console.log(value); 
    
    