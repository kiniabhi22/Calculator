var a;
var q;
var sol;
var r;
function typo(p)
{   
    if(p<10)
    {
        document.getElementById("answer").innerHTML+=p;
        document.getElementById("answer").style.textAlign="center";
    }
    else if(p==10)
    {
        p+=document.getElementById("answer").innerHTML="00";
        document.getElementById("answer").style.textAlign="center";
    }
   else if(p==11)
    {
        document.getElementById("answer").innerHTML+="+";
        document.getElementById("answer").style.textAlign="center";
    }
    else if(p==12)
    {
        document.getElementById("answer").innerHTML+="-";
        document.getElementById("answer").style.textAlign="center";
    }
    else if(p==13)
    {
        document.getElementById("answer").innerHTML+="*";
        document.getElementById("answer").style.textAlign="center";
    }
    else if(p==14)
    {
        document.getElementById("answer").innerHTML+="/";
        document.getElementById("answer").style.textAlign="center";
    }
    // else if(p==15)
    // {
    //     document.getElementById("answer").innerHTML="";
    //     document.getElementById("answer").style.textAlign="center";
    // }
    else if(p==16)
    {
        document.getElementById("answer").innerHTML+=".";
        document.getElementById("answer").style.textAlign="center";
    }
    else if(p==17)
    {
        document.getElementById("answer").innerHTML+="X";
        document.getElementById("answer").style.textAlign="center";
    }
    else if(p==18)
    {
        document.getElementById("answer").innerHTML+="C";
        document.getElementById("answer").style.textAlign="center";
    }
    else if(p==19)
    {
        document.getElementById("answer").innerHTML+="%";
        document.getElementById("answer").style.textAlign="center";
    }
    
    
    
    // document.getElementById("answer").style.display="flex";
    // document.getElementById("answer").style.justifyContent="space-around";
    

}
function sum()
    {
       
            q=document.getElementById("answer").innerText;
            sol=eval(q);
            document.getElementById("answer").innerHTML=sol;

        
    }
function clea()
{
   
   document.getElementById("answer").innerHTML="";
    // while(r.firstChild) 
    // {
    //     r.removeChild(r.firstChild);
    // }
}