function JsonOutput({ fields, missingFields, route, reasoning}){
const output={ extractedFields:fields, missingFields:missingFields, recommendedRoute:route, reasoning:reasoning}
function copyJSON(){
navigator.clipboard.writeText(
JSON.stringify(output,null,4)
)
alert("Copied!")
}

function downloadJSON(){
const blob=new Blob(
[JSON.stringify(output,null,4)],
{type:"application/json"}
)
const url=URL.createObjectURL(blob)
const a=document.createElement("a")
a.href=url
a.download="claim.json"
a.click()
}

return(
<div className="card">
<h2>JSON Output</h2>
<pre>{JSON.stringify(output,null,4)}</pre>
<button onClick={copyJSON}>Copy JSON</button>

<button onClick={downloadJSON}>Download JSON</button>
</div>
)

}

export default JsonOutput;