let heads = document.querySelector("#heads");
let tails = document.querySelector("#tails");
let result = document.querySelector("#result");

function coinflip1(){
  let coin=Math.random();
      if(coin<=0.5){
        return("heads, Congrats!");
      }else{
        return("tails, Better luck next time.");
      }
}

function coinflip2(){
  let coin=Math.random();
      if(coin<=0.5){
        return("heads, Better luck next time.");
      }else{
        return("tails, Congrats!");
      }

}

heads.addEventListener("click", function(){
  result.textContent = coinflip1();
});

tails.addEventListener("click", function(){
  result.textContent = coinflip2();
})