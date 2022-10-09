
let SubmitElement = document.getElementById("SUBMIT")
let RequiredElements = document.getElementsByClassName("required_")
let SuccessAnouncer = document.getElementById("Sukces")

let Proccessing = false
SubmitElement.addEventListener('click',() => {

    if (Proccessing) {
        return
    }
    Proccessing = true

    let length = RequiredElements.length
    let Success = true
    let DataSet = {}
    for (let i = 0; i < length; i++)
    {
     let Element = RequiredElements[i]   
     let Value = Element.value
     if (Value == "") {
        Success=false;
        break}
     DataSet[Element.getAttribute("id")] = Value
    }
    if (Success)
    {
     SuccessAnouncer.innerHTML = "Udało się wysłać dane do serwera"
     setTimeout(() => {
      SuccessAnouncer.innerHTML = ""
      Proccessing = false
      return
     },3000)
    }
    else
    {
    SuccessAnouncer.innerHTML = "Nie udało się wysłać danych do serwera (Nie wszystkie wymagane pola zostały wypełnione)"
    setTimeout(() => {
        SuccessAnouncer.innerHTML = ""
        Proccessing = false
        return
    },3000)
    }

})