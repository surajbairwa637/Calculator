let result=document.getElementById('result')
let flag =1;
function display(number){
    if(flag==0)
    {
        result.value='';
        
        // result.value="";
    }
    result.value+=number;
    flag=1;

}
// function solve(x)
// {

// }
function calculate(paranthesis) {
    let ans = 0;
    let sn = 1;
    let len = paranthesis.length;
    let st = [];

    for (let i = 0; i < len; i++) {
        if (paranthesis[i] >= '0' && paranthesis[i] <= '9') {
            let num = 0;
            while (i < len && paranthesis[i] >= '0' && paranthesis[i] <= '9') {
                num = num * 10 + parseInt(s[i]);
                i++;
            }
            i--;
            ans += num * sn;
            sn = 1;
        } else if (paranthesis[i] === '(') {
            st.push(ans);
            st.push(sn);
            ans = 0;
            sn = 1;
        } else if (paranthesis[i] === ')') {
            ans *= st.pop();
            ans += st.pop();
        } else if (paranthesis[i] === '-') {
            sn *= -1;
        }
    }
    return ans;
}


function solve() {

    let x = result.value

    let y = eval(x);
    // let y=calculate(x);
    flag=0;
    result.value = y

}


function clearinp(){

    result.value = ''
    


}
function deleteLast(){

    result.value=result.value.slice(0,-1)
    
}
