function displayBtn()
{
    var btn = document.getElementById("btn");

    if(document.getElementById("interadir").checked)
    {
        btn.style.display = "none";
    }
    else
    {
        btn.style.display = "block";
    }
}