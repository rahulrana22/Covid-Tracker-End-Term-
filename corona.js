
function showData()
{
    event.preventDefault();
    var country=document.getElementById("countryName").value;
    var startDate=document.getElementById("startingDate").value;
    var endDate=document.getElementById("endingDate").value;

    var confirmed=document.getElementById("confirmed");
    var active=document.getElementById("active");
    var deaths=document.getElementById("deaths");

    console.log(startDate);

    if(country=='' || startDate=='' || endDate=='')
    alert("Please enter the required field.");

    else
    {
        var url="https://api.covid19api.com/country/"+country+"?from="+startDate+"T00:00:00Z&to="+endDate+"T00:00:00Z";

        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            //for Length
            var length=res.length;
            //for index
            var idx=length-1;

            var c=res[idx].Confirmed;
            var a=res[idx].Active;
            var d=res[idx].Deaths;

            confirmed.innerHTML=c;
            active.innerHTML=a;
            deaths.innerHTML=d;

            document.getElementById("res").style.display="block";
            
        })
    }
}
