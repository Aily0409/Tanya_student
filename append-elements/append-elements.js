function makeElements(){
    let container = document.querySelector("#container");
    
    let paragraph = document.createElement("p");
    paragraph.style.cssText="color:red";
    paragraph.textContent= "Hey! I'm red";
    container.appendChild(paragraph);
    
    let header = document.createElement("h3");
    header.style.cssText="color:blue";
    header.textContent="I'm a blue h3!";
    container.appendChild(header);
    
    
    let div = document.createElement("div");
    div.style.cssText="border-style: solid; border-color:black; background-color: pink;";
    container.appendChild(div);
    
    let head1 = document.createElement("h1");
    head1.textContent = "I'm in a div...";
    div.appendChild(head1);
    
    let para2 = document.createElement("p");
    para2.textContent="ME TOO!!";
    div.appendChild(para2);
  
  }