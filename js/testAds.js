document.getElementById("adBlockerAlert").style.display = "none";
if(!document.getElementById('fakeAd')){
    document.getElementById("adBlockerAlert").style.display = "inline";
    document.getElementById("adBlockerAlert").style.fontSize ="20px";
    document.getElementById("adBlockerAlert").style.border = "solid";
    document.getElementById("adBlockerAlert").style.borderColor = "red";
    document.getElementById("adBlockerAlert").style.padding= "5px";
}
