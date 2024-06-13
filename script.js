function cal1()
{
    const year=document.getElementById('year').value;
    const sem=document.getElementById('sem').value;
    document.getElementById('output').style.display='none';
    document.getElementById('cgpa').style.display='none';
    document.getElementById('final-output').style.display='none';
    if(year=="1st" && sem=="1sem"){
        document.getElementById('sub3').style.display='none';
        document.getElementById('sub2').style.display='block';
        document.getElementById('sub5').style.display='none';
        document.getElementById('sub4').style.display='none';
        document.getElementById('sub6').style.display='none';
        document.getElementById('sub7').style.display='none';
        document.getElementById('sub8').style.display='none';
        document.getElementById('sub9').style.display='none';
    }
    else if(year=="1st" && sem=="2sem")
        {
            document.getElementById('sub2').style.display='none';
            document.getElementById('sub5').style.display='none';
            document.getElementById('sub3').style.display='block';
            document.getElementById('sub4').style.display='none';
            document.getElementById('sub6').style.display='none';
            document.getElementById('sub7').style.display='none';
            document.getElementById('sub8').style.display='none';
            document.getElementById('sub9').style.display='none';
        }
        else if(year=="2nd" && sem=="1sem")
            {
                document.getElementById('sub2').style.display='none';
                document.getElementById('sub5').style.display='none';
                document.getElementById('sub3').style.display='none';
                document.getElementById('sub4').style.display='block';
                document.getElementById('sub6').style.display='none';
                document.getElementById('sub7').style.display='none';
                document.getElementById('sub8').style.display='none';
                document.getElementById('sub9').style.display='none';
            }
    else if(year=="2nd" && sem=="2sem")
    {
        document.getElementById('sub2').style.display='none';
        document.getElementById('sub3').style.display='none';
        document.getElementById('sub4').style.display='none';
        document.getElementById('sub5').style.display='block';
        document.getElementById('sub6').style.display='none';
        document.getElementById('sub7').style.display='none';
        document.getElementById('sub8').style.display='none';
        document.getElementById('sub9').style.display='none';
    }
    else if(year=="3rd" && sem=="1sem")
        {
            document.getElementById('sub2').style.display='none';
            document.getElementById('sub3').style.display='none';
            document.getElementById('sub4').style.display='none';
            document.getElementById('sub5').style.display='none';
            document.getElementById('sub6').style.display='block';
            document.getElementById('sub7').style.display='none';
            document.getElementById('sub8').style.display='none';
            document.getElementById('sub9').style.display='none';
        }
        else if(year=="3rd" && sem=="2sem")
            {
                document.getElementById('sub2').style.display='none';
                document.getElementById('sub3').style.display='none';
                document.getElementById('sub4').style.display='none';
                document.getElementById('sub5').style.display='none';
                document.getElementById('sub6').style.display='none';
                document.getElementById('sub7').style.display='block';
                document.getElementById('sub8').style.display='none';
                document.getElementById('sub9').style.display='none';
            }
        
            else if(year=="4th" && sem=="1sem")
                {
                    document.getElementById('sub2').style.display='none';
                    document.getElementById('sub3').style.display='none';
                    document.getElementById('sub4').style.display='none';
                    document.getElementById('sub5').style.display='none';
                    document.getElementById('sub6').style.display='none';
                    document.getElementById('sub7').style.display='none';
                    document.getElementById('sub8').style.display='block';
                    document.getElementById('sub9').style.display='none';
                }
                else if(year=="4th" && sem=="2sem")
                    {
                        document.getElementById('sub2').style.display='none';
                        document.getElementById('sub3').style.display='none';
                        document.getElementById('sub4').style.display='none';
                        document.getElementById('sub5').style.display='none';
                        document.getElementById('sub6').style.display='none';
                        document.getElementById('sub7').style.display='none';
                        document.getElementById('sub8').style.display='none';
                        document.getElementById('sub9').style.display='block';
                }
}
function cal2(){
    
    const m1=document.getElementById('m1').value;
    const phy=document.getElementById('phy').value;
    const beee=document.getElementById('beee').value;
    const pps=document.getElementById('pps').value;
    const phylab=document.getElementById('phylab').value
    const beeelab=document.getElementById('beeelab').value;
    const ppslab=document.getElementById('ppslab').value;
    const egd=document.getElementById('egd').value;
    var sgpa=(m1*3+phy*3+beee*3+pps*3+egd*3+phylab*1.5+beeelab*1.5+ppslab*1.5)/19.5;
    document.getElementById('output').style.display='block';
    document.getElementById('sgpa').innerHTML=`Your SGPA is ${sgpa.toFixed(2)}`;
    window.currentSGPA = sgpa;
}

function cal3(){
    
    const m2=document.getElementById('m2').value;
    const ec=document.getElementById('ec').value;
    const de=document.getElementById('de').value;
    const ecs=document.getElementById('ecs').value;
    const pp=document.getElementById('pp').value;
    const eclab=document.getElementById('eclab').value
    const pplab=document.getElementById('pplab').value;
    const cew=document.getElementById('cew').value;
    const elcslab=document.getElementById('elcs').value;
    var sgpa=(m2*3+ec*3+de*3+pp*2+ecs*3+eclab*1.5+pplab*1+elcslab*1.5+cew*1.5)/19.5;
    document.getElementById('output').style.display='block';
    document.getElementById('sgpa').innerHTML=`Your SGPA is ${sgpa.toFixed(2)}`;
    window.currentSGPA = sgpa;
}
function cal4(){
    
    const ps=document.getElementById('p&s').value;
    const dms=document.getElementById('dms').value;
    const co=document.getElementById('co').value;
    const ds=document.getElementById('ds').value;
    const oop=document.getElementById('oop').value;
    const pslab=document.getElementById('p&slab').value;
    const dslab=document.getElementById('dslab').value
    const ooplab=document.getElementById('ooplab').value;
    const soc1=document.getElementById('soc1').value;
   
    var sgpa=(ps*3+dms*3+co*3+ds*3+oop*3+pslab*1.5+dslab*1.5+ooplab*1.5+soc1*2)/21.5;
    document.getElementById('output').style.display='block';
    document.getElementById('sgpa').innerHTML=`Your SGPA is ${sgpa.toFixed(2)}`;
    window.currentSGPA = sgpa;
}

function cal5(){
   
    const cs=document.getElementById('cs').value;
    const dbms=document.getElementById('dbms').value;
    const os=document.getElementById('os').value;
    const se=document.getElementById('se').value;
    const wt=document.getElementById('wt').value
    const cslab=document.getElementById('cslab').value;
    const dbmslab=document.getElementById('dbmslab').value;
    const wtlab=document.getElementById('wtlab').value;
    const soc2=document.getElementById('soc2').value;
    var sgpa=(cs*3+dbms*3+os*3+se*3+wt*3+cslab*1.5+dbmslab*1.5+wtlab*1.5+soc2*2)/21.5;
    document.getElementById('output').style.display='block';
    document.getElementById('sgpa').innerHTML=`Your SGPA is ${sgpa.toFixed(2)}`;
    window.currentSGPA = sgpa;
}
function cal6(){
   
    const atfl=document.getElementById('atfl').value;
    const cn=document.getElementById('cn').value;
    const daa=document.getElementById('daa').value;
    const pe1=document.getElementById('pe1').value;
    const joe1=document.getElementById('joe1').value
    const daalab=document.getElementById('daalab').value;
    const dalab=document.getElementById('dalab').value;
    const si=document.getElementById('si').value;
    const soc3=document.getElementById('soc3').value;
    var sgpa=(atfl*3+cn*3+daa*3+pe1*3+joe1*3+daalab*1.5+dalab*1.5+si*1.5+soc3*2)/21.5;
    document.getElementById('output').style.display='block';
    document.getElementById('sgpa').innerHTML=`Your SGPA is ${sgpa.toFixed(2)}`;
    window.currentSGPA = sgpa;
}

function cal7(){
   
    const ai=document.getElementById('ai').value;
    const cns=document.getElementById('cns').value;
    const ml=document.getElementById('ml').value;
    const pe2=document.getElementById('pe2').value;
    const joe2=document.getElementById('joe2').value
    const ailab=document.getElementById('ailab').value;
    const mllab=document.getElementById('mllab').value;
    const tp=document.getElementById('tp').value;
    const soc4=document.getElementById('soc4').value;
    var sgpa=(ai*3+cns*3+ml*3+pe2*3+joe2*3+ailab*1.5+mllab*1.5+tp*1.5+soc4*2)/21.5;
    document.getElementById('output').style.display='block';
    document.getElementById('sgpa').innerHTML=`Your SGPA is ${sgpa.toFixed(2)}`;
    window.currentSGPA = sgpa;
}
function cal7(){
   
    const ai=document.getElementById('ai').value;
    const cns=document.getElementById('cns').value;
    const ml=document.getElementById('ml').value;
    const pe2=document.getElementById('pe2').value;
    const joe2=document.getElementById('joe2').value
    const ailab=document.getElementById('ailab').value;
    const mllab=document.getElementById('mllab').value;
    const tp=document.getElementById('tp').value;
    const soc4=document.getElementById('soc4').value;
    var sgpa=(ai*3+cns*3+ml*3+pe2*3+joe2*3+ailab*1.5+mllab*1.5+tp*1.5+soc4*2)/21.5;
    document.getElementById('output').style.display='block';
    document.getElementById('sgpa').innerHTML=`Your SGPA is ${sgpa.toFixed(2)}`;
    window.currentSGPA = sgpa;
}
function cal8(){
   
    const hss=document.getElementById('hss').value;
    const pe3=document.getElementById('pe3').value;
    const pe4=document.getElementById('pe4').value;
    const pe5=document.getElementById('pe5').value;
    const joe3=document.getElementById('joe3').value
    const joe4=document.getElementById('joe4').value;
    const intern=document.getElementById('intern').value;
    const soc5=document.getElementById('soc5').value;
    var sgpa=(hss*3+pe3*3+pe4*3+pe5*3+joe3*3+joe4*3+intern*3+soc5*2)/23;
    document.getElementById('output').style.display='block';
    document.getElementById('sgpa').innerHTML=`Your SGPA is ${sgpa.toFixed(2)}`;
    window.currentSGPA = sgpa;
}
function cal9(){
    const pw=document.getElementById('pw').value;
    var sgpa=(pw*12)/12;
    document.getElementById('output').style.display='block';
    document.getElementById('sgpa').innerHTML=`Your SGPA is ${sgpa.toFixed(2)}`;
    window.currentSGPA = sgpa;

}
function cal10(){
    const cgpa1=parseFloat(document.getElementById('cgpa1').value);
    document.getElementById('cgpa1').value='';
    const sgpa = window.currentSGPA;
    const cgpa = (sgpa + cgpa1) / 2;
    document.getElementById('final-output').style.display='block';
    document.getElementById('cgpa').style.display='block';
    document.getElementById('cgpa').innerHTML = `Your CGPA is ${cgpa.toFixed(2)}`;
}
