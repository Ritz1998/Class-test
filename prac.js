//  Sleep function using promise

// function sleep(){
//     return forsleep=new Promise((res,rej)=>{

//         setTimeout(()=>{
//             res("Coming out from sleep")
//         },3000)
//     })
// }
// console.log("After 3 seconds")
// sleep().then(res=>console.log(res))


  //transform the object coming from ASYNC  source into formatted string value
  //formatted string value must be returned asynchronously

//   function Dosome(value){
//       return string= new Promise((res,rej)=>{
//           if(value==="5"){
//               setTimeout(()=>{
//                   res("Value coming out async in string")
//               },2000)
//           }else{
//               rej("this is not your value")
//           }
//       })
//   }
//   Dosome("5").then(res=> console.log(res))
//   .catch(rej=>console.log(rej))

      //Question no 4

    //   function DoSum(n){
    //      let result=0
    //       for(let i=0;i<=n;i++){
    //           result += i
    //         //   console.log(i)
              


    //       }
    //       return result

    //   }
    //  console.log( DoSum(prompt("Enter the value to get sum")))

       // Question no 5

    //    function Check(n){
              
    //            if(n<=100){
    //                console.log("The number is available")
                   
    //            }else{
    //                prompt("Enter the correct number")
    //                console.log("You entered the number which is out of range")
    //            }
          
    //    }
    //    Check(prompt("Enter the number to check availability"))


         // Question no -6
        
        //  let array=[11,22,33,44,55],d=4;
        //  for(var i=d;i<array.length;i++){
        //      array.unshift(array.pop())
        //      console.log(array)
        //  }

         //Question no-7
       
        //  function combostring(string){
        //     let Add=[]
        //      for(let i=0;i<string.length;i++){
        //          for(let j=i+1;j<string.length+1;j++){
        //          Add.push(string.slice(i,j));
        //          }
        //      }
        //      return Add
            
        //  }
        //  console.log(combostring("Dog"))

        //Question no-8

        // let string=["theoneinmillionsoldier"];


        //question no-9


        //  const arr=[12,35,1,10,34,2];
        //  function findsecondhighest(){
        //    var sort=  arr.sort((a,b)=>{
        //          return b-a
        //      })[1]
        //      return sort
             
        //  }
        //  console.log(findsecondhighest())


        //Question no -10

    //     function findprime(arr){
    //         for(let i=0;i<=arr.Math.sqrt(i);i++){
    //             if(i%2!==0){
    //                 console.log(i)
    //        }
    //     }
    // }
    //     console.log(findprime(1,3,5,6,4,9,7,11))


       // Question no-11


    //    let arr=[2,6,4,3,8]
    //    function sumofmaxmin(){
    //        max=arr.sort((a,b)=>b-a)[0]
    //     //    console.log(max)
    //        min=arr.sort((a,b)=>a-b)[0]
    //     //    console.log(min)
    //        return max+min

    //    }
    //    console.log(sumofmaxmin())



      // Question <No-12>
      
    //    arr=[1,7,-6,15,7,9,0,2,-3]

    //    arr.tostring()
    //    console.log(arr)


    // Question no-13

    //  let arr1=[2,5,6,8,7,9];
    //  let arr2=[6,4,5,8,9]
    //  function addarrays(){
    //      sum1=arr1.reduce((curr,store)=>curr+store)
    //      sum2=arr2.reduce((curr,store)=>curr+store)

    //     //  console.log(sum1)
    //     return sum1+sum2
    //  }
    //  console.log(addarrays())


    //Question no-14

    let arr1=[2,5,6,8,7,9];
     let arr2=[6,4,5,8,9]

     function indexsum(){
        let indexsum1=[];
        sum=arr1.map((ele)=>{
            index=indexOf(ele)
            indexsum1.push(index)
            console.log(indexsum1)
        })
      
    
         
     }
     indexsum()






         