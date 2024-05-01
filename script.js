let sect = document.querySelector('section');
let para = document.createElement('p');
para.textContent = "JavaScript is fun!";
sect.appendChild(para);
        
para.style.color = 'azure';
para.style.backgroundColor = 'darkkhaki';
para.style.padding = '20px';
para.style.width = '250px';
para.style.textAlign = 'center';
        
let but = document.createElement('button');
but.textContent = "Dark Mode";
sect.appendChild(but);
        


let back = document.querySelector('body');
back.style.backgroundColor = 'violet';
but.addEventListener('click', () => {
    if (back.style.backgroundColor == 'violet'){
        but.textContent = "Light Mode";
        back.style.color = 'deepskyblue';
        back.style.backgroundColor = 'darkorchid';
    }else{
        but.textContent = "Dark Mode";
        back.style.color = 'royalblue';
        back.style.backgroundColor = 'violet';
    }
});