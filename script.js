// //let jmeno = "       Michal      "
// const jmeno = "       Michal      "

// const heslo = "jkhjUKhka25466"

// console.log(jmeno)
// console.log(jmeno.trim())

// const rodneCislo = "980514/3366"
// const telCislo = "111222333"

// //jmeno = jmeno.trim()

// console.log(heslo.length)
// console.log(jmeno.length)

// const castHesla = heslo.slice(0, 4)

// console.log(castHesla)

// console.log(heslo.indexOf("hj"))

// const poziceLomitka = rodneCislo.indexOf("/")

// console.log(rodneCislo.slice(poziceLomitka + 1, poziceLomitka + 5))

// console.log(jmeno.toLowerCase())
// console.log(jmeno.toUpperCase())

// console.log(telCislo.padStart(13, "+420"))
// console.log(telCislo.padEnd(13, "0"))


// 
// const zprava = `
// <h1>Ahoj svete</h1>
// <p>Tve dnesni stastne cislo je ${Math.floor(Math.random() * 1000)}</p>

// <p>Tvoje mys je prave na souradnicich ${100 * 100}</p>
// `

// document.body.innerHTML = zprava

// V JavaScriptovém programu si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). Proveďte následující úkoly.

// Vypište do stránky počet znaků názvu.
// Vypište název filmu převedený na velká písmena.
// Vypište z názvu prvních pět písmen.
// Vypište z názvu posledních pět písmen.
// const title = "Pan prstenu"
// console.log(title.length)
// console.log(title.toUpperCase())

// const castNazvu = title.slice(0, 5)
// console.log(castNazvu)

// const castNazvuOdKonce = (title.slice((title.length - 5), title.length))
// console.log(castNazvuOdKonce)



// E-maily
// Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu

// jmeno.prijmeni@domena
// Tedy například:

// petr.novak@gmail.com
// romana.nejedla@czechitas.cz
// slavomir.ponuchalek@yahoo.com
// Postupujte dle následujících kroků.

// 1.Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
// 2.Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.
// 3.Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
// 4.Pomocí metody slice získejte z e-mailu první část představující uživatelské jméno uživatele.
// 5.Dále z e-mailu získejte název domény tedy například gmail.com.
// 6.Ze získaných informací vytvořte objekt, který bude vypadat například takto:
// const parsedEmail = {
//   userName: 'slavomir.ponuchalek',
//   domain: 'yahoo.com',
// };
// Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište jako odstavec.

// const email = prompt('Zadej e-mail')
// console.log(email)
// const atIndex = email.indexOf("@")
// console.log(atIndex)
// console.log(email.slice(0, atIndex))

// console.log(email.slice(atIndex + 1))

// const parsedEmail = {
//     userName: (email.slice(0, atIndex)),
//     domain: (email.slice(atIndex + 1)),
// }

// console.log(parsedEmail)



// Doručování
// Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení objednaného zboží. Požaduje ulici, číslo domu, město a PSČ.

// 1.Uložte všechny údaje do vhodně pojmenovaných proměnných.
// 2.Ze zadanách údajů sestavte pomocí interpolace řetězeců obsahující HTML ve formátu jako níže
// <address>
//   <p>Pod Stájemi 67</p>
//   <p>12754 Klysnov</p>
// </address>
// 3.Pomocí document.body.innerHTML vložte sestavené HTML do stránky.

// const ulice = prompt('Zadej ulici')
// const cisloDomu = prompt('Zadej cislo domu')
// const mesto = prompt('Zadej mesto')
// const psc = prompt('Zadej PSC')

// const address = `
// <address>
//    <p>ulice + cisloDomu</p>
//    <p>psc + mesto</p>
// </address>
// `
// document.body.innerHTML = address





// const vek = 18

// // < <= > >= === !== 
// if(vek >= 18) {
//   document.body.innerHTML = "<h1>Vitej na strance s nejlepsim alkoholem v CR</h1>"

//   const kategorie = prompt("Jakou kategorii alkoholu si prejes? (pivo, vino, tvrde)").toLowerCase()

//   if(kategorie === "pivo") {
//     document.body.innerHTML += "<p>Mame nejlepsi piva, treba StaroBrno </p>"
//   } else if(kategorie === "vino") {
//     document.body.innerHTML += "<p>Mame nejlepsi cervena, bila a mozna i jinak barevna vina</p>"
//   } else if(kategorie === "tvrde") {
//     document.body.innerHTML += "<p>Mame nejlepsi Becherovku, odebira od nas i Zeman</p>"
//   } else {
//     document.body.innerHTML += "<p>Error 404: alkohol not found</p>"
//   }
// } else {
//   document.body.innerHTML = "<h1>Na tuto stranku nemuzes vstoupit</h1>"
// }

// Michal Kučera (lektor)  to  Everyone 19:48
// const vek = 18
// const pravda = true
// const nepravda = false

// const pizzerie = {
//   pizza1: "Hawaii",
//   pizza1Roznaska: true,
// }

// if(pizzerie.pizza1Roznaska) {
//   document.body.innerHTML = "<p>Ano, tuto pizzu rozvazime</p>"
// }

// if(pravda === true) {
//   console.log("Proslo to")
// }

// if(pravda) {
//   console.log("Proslo to")
// }





// 
// const zprava = `
// <h1>Ahoj svete</h1>
// <p>Tve dnesni stastne cislo je ${Math.floor(Math.random() * 1000)}</p>

// <p>Tvoje mys je prave na souradnicich ${100 * 100}</p>
// `

// document.body.innerHTML = zprava

// 

// const vek = 18
// const pravda = true
// const nepravda = false

// const pizzerie = {
//   pizza1: "Hawaii",
//   pizza1Roznaska: true,
// }

// if(pizzerie.pizza1Roznaska) {
//   document.body.innerHTML = "<p>Ano, tuto pizzu rozvazime</p>"
// }

// if(pravda === true) {
//   console.log("Proslo to")
// }

// if(pravda) {
//   console.log("Proslo to")
// }

// const pizzerie = {
//     pizza1: "Hawaii",
//     pizza1Roznaska: true,
//   }
  
  
//   // Varianta 1
//   if(pizzerie.pizza1Roznaska) {
//     document.body.innerHTML = "<p>Ano, tuto pizzu rozvazime</p>"
//   } else {
//     document.body.innerHTML = "<p>Ne, tuto pizzu nerozvazime</p>"
//   }
  
  
//   // Varianta 2
//   document.body.innerHTML += pizzerie.pizza1Roznaska ? "<p>Ano, tuto pizzu rozvazime</p>" : "<p>Ne, tuto pizzu nerozvazime</p>"




// Registrace na očkování
// V předchozí lekci jsem vytvářeli stránku pro registraci na očkování. Chtěli jsme po uživateli jméno a věk. Nyní budeme chtít, aby uživatel zadal také heslo. To bychom v pozdější verzi aplikaci mohli použít například k přihlášení do systému.

// Vytvořte novou stránku, nebo pokračujte ve stránce z předchozí lekce pro registraci na očkování.

// 1.Nejdříve nechte uživatele zadat všechny hodnoty, tedy jméno, věk i heslo. Uložte si je do dobře pojmenovaných proměnných.
// 2.Napište první podmínku, ve které zkontrolujte, že věk uživatele je větší nebo roven 65. Pokud ano, vypište do stránky „věk v pořádku“. Pokud uživateli není alespoň 65 let, vypište „nízký věk“.
// 3.Napište druhou podmínku, která zkontroluje, zda je zadané heslo delší než osm znaků. Pokud není, vypište „slabé heslo“. Heslo se bude kontrolovat pouze v případě, kdy uživatel splnil první podmínku (věk alespoň 65 let).

// const jmeno = prompt("Zadej jmeno a přijmeni")
// const vek = Number(prompt("Zadej věk"))
// const heslo = prompt("Zadej heslo")

// if(vek >= 65) {
//     document.body.innerHTML = "<p>vek v poradku</p>"
//  if (heslo.length < 8) {
//         document.body.innerHTML += "<p>slabe heslo</p>"
//     }

// } else {
//     document.body.innerHTML = "<p>nizky vek</p>"
// }



// Cena vstupenky
// Pokusme se o základ jednoduchého rezervačního sestému pro vstupenky do divadla.

// 1.Založte si webovou stránku s JavaScriptem.
// 2.Nechte uživatele zadat jeho věk.
// 3.Vytvořte si proměnnou plnaCena, udávající základní cenu vstupenky a uložte do ní hodnotu 12.
// 4.Vytvořte podmínku, která do proměnné cena uloží cenu spočítanou podle věku uživatele dle následujících pravidel:
// 0 euro pro návštěvníky mladší 6 let,
// 65 % ze základní ceny pro návštěvníky 6 až 26 let (žák, student),
// 100 % ze základní ceny pro návštěvníky 27 až 64 let (dospělý),
// 50 % ze základní ceny pro ostatní (senior).
// 1.Nezapomeňte na zaokrouhlování, ať nám cena vyjde v celých eurech.
// 2.Nakonec spočtenou cenu vypište s nějakou hezkou zprávou na výstup.


// const vek = Number(prompt("Zadej věk"))
// const plnaCena = 12

// let cena = '';
// if (vek < 6) {
//     cena = 0;
// } else if (vek >= 6 && vek <= 26) {
//     cena = Math.round(plnaCena * 0.65);
// } else if (vek >= 27 && vek <= 64) {
//     cena = plnaCena;
// } else if (vek >= 65) {
//     cena = Math.round(plnaCena * 0.5);
// } 

// console.log(cena)
// document.body.innerHTML += "<p>" + "Cena vstupneho: " + cena + " EUR" + "</p>"
