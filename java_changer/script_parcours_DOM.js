const changeTitles = () => {
    let targetH1 = document.getElementsByTagName("h1")[0]
    targetH1.innerHTML = "Ce que j'ai appris à THP"
    console.log("title =" + targetH1.innerHTML)

    let targetP = document.querySelectorAll("p.lead")[0]
    targetP.textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
    console.log("subtitle =" + targetP.textContent)
}

changeTitles()

function changeCallToActions() {
    let targetBtn1 = document.getElementsByClassName("btn-primary")[0]
    targetBtn1.innerHTML = "OK je veux tester !"
    console.log("first btn =" + targetBtn1.innerHTML)

    targetBtn1.setAttribute("href", "http://www.thehackingproject.org")
    console.log("lien changé en =" + targetBtn1.href)

    let targetBtn2 = document.getElementsByClassName("btn-secondary")[0]
    targetBtn2.innerHTML = "Non, merci"
    console.log("second btn =" + targetBtn2)

    targetBtn2.setAttribute("href", "https://www.pole-emploi.fr/accueil/")
    console.log("lien changé en =" + targetBtn2.href)
}

changeCallToActions()

function changeLogoName() {
    let navName = document.getElementsByTagName("strong")[0]
    navName.style = "font-size: 2em"

    console.log(navName.style)
}

changeLogoName()

function populateImages() {
    let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
    let targetsImg = document.getElementsByTagName("img")
    for(let count = 0; count <= targetsImg.length-1 ; count++){
        targetsImg[count].setAttribute("src", imagesArray[count])
    }
}

populateImages()

function deleteLastCards() {
    let targetsDiv = document.getElementsByClassName("col-md-4")
    for(let count = 0 ; count <= 2 ; count++){
        targetsDiv[targetsDiv.length-1].remove()
    }
}

deleteLastCards()

function changeCardsText() {
    let textArray = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",]
    textArray.push( "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML")
    textArray.push("JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype.")
    let targetsP = document.querySelectorAll("p.card-text")
    for(let count = 0 ; count <= textArray.length-1 ; count ++){
        targetsP[count].innerHTML = textArray[count]
    }
}

changeCardsText()

function changeViewButtons(){
    let btnArray = document.getElementsByClassName("btn-outline-secondary")
    for(let count = 0 ; count <= btnArray.length-1 ; count ++){
        let btn = btnArray[count]
        btn.classList.remove("btn-outline-secondary") 
        btn.classList.add("btn-outline-primary") 
    }
}

changeViewButtons()

function creepyMod() {
    targetDiv = document.getElementsByClassName("album")[0]
    targetParent = targetDiv.parentNode
    targetParent.appendChild("div")

}

creepyMod()