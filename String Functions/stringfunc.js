const sampleText = " Hello JavaScript World! ";
function showResult(text) 
{
    document.getElementById("result").innerHTML = "<b>Input: </b> " + sampleText + "<br>" +"<b>Result:</b> " + text;
}
document.getElementById("btn1").onclick = function() 
{
    showResult(`Length of string = ${sampleText.length}`);
}

document.getElementById("btn2").onclick = function() 
{
    showResult(sampleText.toUpperCase());
}
document.getElementById("btn3").onclick = function() 
{
    showResult(sampleText.toLowerCase());
}
document.getElementById("btn4").onclick = function() 
{
    showResult(sampleText.slice(2, 13));
}
document.getElementById("btn5").onclick = function() 
{
    showResult(sampleText.substring(2, 13));
}
document.getElementById("btn6").onclick = function() 
{
    showResult(sampleText.replace("JavaScript", "HTML"));
}
document.getElementById("btn7").onclick = function() 
{
    const text2 = " Let's learn!";
    showResult(sampleText.concat(text2));
}
document.getElementById("btn8").onclick = function() 
{
    showResult(sampleText.trim());
}
document.getElementById("btn9").onclick = function() 
{
    showResult(`Character at index 4 = ${sampleText.charAt(4)}`);
}
document.getElementById("btn10").onclick = function() 
{
    showResult(`Contains "JavaScript"? ${sampleText.includes("JavaScript")}`);
}
document.getElementById("btn11").onclick = function() 
{
    showResult(`Index of 'World' = ${sampleText.indexOf("World")}`);
}
