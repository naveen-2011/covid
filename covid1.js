function fetchDetails(){
    const country=document.getElementById("country").value;
    const url=`https://api.covid19api.com/live/country/${country}`
    fetch(url).then((response)=>{return response.json()}).then(data=>{
         fetchdata(data);
        }).catch(err=>console.log(err))
        function fetchdata(d){
            document.write("<table border='1'>");
            document.write("<tr><td>State</td><td>Date</td><td>Active</td><td>Deaths</td><td>Recovered</td></tr>")
            d.forEach(x => {
                document.write(`<tr><td>${x.Province}</td><td>${x.Date}</td><td>${x.Active}</td><td>${x.Deaths}</td><td>${x.Recovered}</td></tr>`)
           });
            document.write("</table>")
        }
    }
