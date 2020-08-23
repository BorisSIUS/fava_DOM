
console.log("Number of <p> :" + document.getElementsByTagName("p").length)

console.log("Content of id='coucou' :" + document.getElementById("coucou").innerHTML)

console.log("url of 3rd <a> :" + document.getElementsByTagName("a")[2].href)

console.log("Number of class='comte-moi' :" + document.getElementsByClassName("compte-moi").length)

console.log("Number of <li> with class='compte-moi' :" + document.querySelectorAll("li.compte-moi").length)

targetDiv = document.getElementsByTagName("div")[0]

TargetUl = targetDiv.getElementsByTagName('ul')[1]

SercretText = TargetUl.getElementsByTagName("li")[0].innerHTML

console.log("Reveal the secret <li> :" + "Secret text")
