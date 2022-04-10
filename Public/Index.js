console.log("Working")

let bowlvariable = 0
let knifevariable = 0
let jerkyGun = 0
let previousMultiplier = 1

let smokinessMultiplier = 1
let spicinessMultiplier = 1
let saltinessMultiplier = 0.9
let sweetnessMultiplier = 1
let toughnessMultiplier = 0.9
let shelflifeMultiplier = 0.9
let stepCounter = 0

let jerkyObject = {
    Smokiness: "",
    Spiciness: "",
    Sweetness: "",
    Saltiness: "",
    Toughness: "",
    Shelflife: "",
    Appliance: "",
    Meat: [],
    Baseingredients: [],
    Postingredients: [],
    Spice: [],
    Sugar: [],
    Items: [["Bowl", 1, "Small"], ["Plastic Wrap", 1, "Feet"], ["Knife", 1, "Medium"], ["Cutting Board", 1, "Small"], ["Jerky Gun", 1, "Medium"], ["Preparation Time", 1, "Minutes"],  ["Marination Time", 1, "Hours"],  ["Dehydration Time", 1, "Hours"]]
}

let submitbutton1 = document.getElementById("submitButton")
let submitbutton2 = document.getElementById("submitButton2")
let resetbutton = document.getElementById("resetButton")
const slider = document.getElementById("slider")
let meatmanualinput = document.getElementById("meatmanualinput")
let preparationdiv = document.getElementById("preparationdiv")
let listcolumndivbase = document.getElementById("listcolumndivbase")
let smokyItems = document.querySelectorAll(".smoky");
let notsmokyItems = document.querySelectorAll(".notsmoky");
let saltyItems = document.querySelectorAll(".salty");
let spicyItems = document.querySelectorAll(".spicy");
let sweetItems = document.querySelectorAll(".sweet");
let toughItems = document.querySelectorAll(".tough");
let tenderItems = document.querySelectorAll(".tender");
let lowshelflifeItems = document.querySelectorAll(".lowshelf");
let recipediv = document.getElementById("recipediv")



let updateList = function(){
   
    console.log(`previous multiplier` + previousMultiplier)

    for (const array of jerkyObject.Meat){
        let originalValue = array[1]
        array[1] = (originalValue / previousMultiplier) * meatmanualinput.value

    }

    for (const array of jerkyObject.Baseingredients){
        let originalValue = array[1]
        array[1] = (originalValue / previousMultiplier) * meatmanualinput.value
    }

    for (const array of jerkyObject.Postingredients){
        let originalValue = array[1]
        array[1] = (originalValue / previousMultiplier) * meatmanualinput.value

    }

    
    for (const array of jerkyObject.Spice){
        let originalValue = array[1] * spicinessMultiplier
        array[1] = (originalValue / previousMultiplier) * meatmanualinput.value
        spicinessMultiplier = 1

    }

    for (const array of jerkyObject.Sugar){
        let originalValue = array[1] * sweetnessMultiplier
        array[1] = (originalValue / previousMultiplier) * meatmanualinput.value
        sweetnessMultiplier = 1
    }

    makeTime = (meatmanualinput.value * 1) + 15
    cookTime = 4 + (meatmanualinput.value * 0.05)
    marinateTime = 12

    jerkyObject.Items[5][1] = makeTime 
    jerkyObject.Items[6][1] = marinateTime
    jerkyObject.Items[7][1] = cookTime  

    if (bowlvariable === 1) {
    if (meatmanualinput.value <= 2){
        jerkyObject.Items[0][2] = "Small"
        jerkyObject.Items[1][1] = 1
    } else if (meatmanualinput.value <= 5){
        jerkyObject.Items[0][2] = "Medium"
        jerkyObject.Items[1][1] = 3
    } else if (meatmanualinput.value <= 10){
        jerkyObject.Items[0][2] = "Large"
        jerkyObject.Items[1][1] = 6
    } else {
        jerkyObject.Items[0][2] = "Extremely Large"
        jerkyObject.Items[1][1] = 10
    }
    }


    if(jerkyObject.Appliance.length !== 0){
    if (meatmanualinput.value <= 8){
        jerkyObject.Appliance[0][2] = "Medium"
    } else if (meatmanualinput.value <= 15){
        jerkyObject.Appliance[0][2] = "Large"
    } else{
        jerkyObject.Appliance[0][2] = "Extremely Large"
    }
    }
    
    if (knifevariable === 1) {
        if (meatmanualinput.value <= 2){
            jerkyObject.Items[2][2] = "Small"
            jerkyObject.Items[3][2] = "Small"
        } else if (meatmanualinput.value <= 5){
            jerkyObject.Items[2][2] = "Medium"
            jerkyObject.Items[3][2] = "Medium"
        } else if (meatmanualinput.value <= 10){
            jerkyObject.Items[2][2] = "Large"
            jerkyObject.Items[3][2] = "Large"
        } else {
            jerkyObject.Items[2][2] = "Extremely Large"
            jerkyObject.Items[3][2] = "Extremely Large"
        }
        }

       


    console.log(jerkyObject)
    submitbutton1Function()
    previousMultiplier = meatmanualinput.value
}

const submitbutton1Function = function(){
    listcolumndivbase.innerHTML = '';
    listcolumndivpost.innerHTML = '';
    preparationdiv.innerHTML = '';

    for (const item of jerkyObject.Meat){
        let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${item[0]}: ${item[1].toFixed(2)} ${item[2]}`)
        listcolumndivbase.appendChild(itemptag)
    }

    
    for (const item of jerkyObject.Baseingredients){
        let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${item[0]}: ${item[1].toFixed(2)} ${item[2]}`)
        listcolumndivbase.appendChild(itemptag)
    }

    for (const item of jerkyObject.Postingredients){
        let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${item[0]}: ${item[1].toFixed(2)} ${item[2]}`)
        listcolumndivpost.appendChild(itemptag)
    }

    for (const item of jerkyObject.Spice){
        let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${item[0]}: ${item[1].toFixed(3)} ${item[2]}`)
        listcolumndivpost.appendChild(itemptag)
    }

    for (const item of jerkyObject.Sugar){
        let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${item[0]}: ${item[1].toFixed(2)} ${item[2]}`)
        listcolumndivpost.appendChild(itemptag)
    }

    for (let i = 0; i < 1; i++){
        if (bowlvariable === 1){
            let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${jerkyObject.Items[0][1].toFixed()} ${jerkyObject.Items[0][2]} ${jerkyObject.Items[0][0]}`)
        preparationdiv.appendChild(itemptag)

        itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${jerkyObject.Items[1][1].toFixed()} ${jerkyObject.Items[1][2]} ${jerkyObject.Items[1][0]}`)
        preparationdiv.appendChild(itemptag)
        }
        if (knifevariable === 1){
            let itemptag = document.createElement("p");
            itemptag.classList.add("listItem")
            itemptag.innerHTML = (`${jerkyObject.Items[2][1].toFixed()} ${jerkyObject.Items[2][2]} ${jerkyObject.Items[2][0]}`)
            preparationdiv.appendChild(itemptag)

            itemptag = document.createElement("p");
            itemptag.classList.add("listItem")
            itemptag.innerHTML = (`${jerkyObject.Items[3][1].toFixed()} ${jerkyObject.Items[3][2]} ${jerkyObject.Items[3][0]}`)
            preparationdiv.appendChild(itemptag)
        }
        if (jerkyGun === 1){
            let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${jerkyObject.Items[4][1].toFixed()} ${jerkyObject.Items[4][2]} ${jerkyObject.Items[4][0]}`)
        preparationdiv.appendChild(itemptag)
        }

        let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${jerkyObject.Items[5][1].toFixed()} ${jerkyObject.Items[5][2]} ${jerkyObject.Items[5][0]}`)
        preparationdiv.appendChild(itemptag)

        itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${jerkyObject.Items[6][1].toFixed()} ${jerkyObject.Items[6][2]} ${jerkyObject.Items[6][0]}`)
        preparationdiv.appendChild(itemptag)

        itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${jerkyObject.Items[7][1].toFixed()} ${jerkyObject.Items[7][2]} ${jerkyObject.Items[7][0]}`)
        preparationdiv.appendChild(itemptag)

    }

    for (const item of jerkyObject.Appliance){
        let itemptag = document.createElement("p");
        itemptag.classList.add("listItem")
        itemptag.innerHTML = (`${item[1].toFixed()} ${item[2]} ${item[0]}(s)`)
        preparationdiv.appendChild(itemptag)
    }

}

let disableItems = function() {
    if (smokinessMultiplier === 0){
        for (i = 0; i < smokyItems.length; i++) {
            smokyItems[i].disabled = true
            smokyItems[i].checked = false

        }
    } else if (smokinessMultiplier === 5){
        for (i = 0; i < smokyItems.length; i++) {
            smokyItems[i].disabled = false
            smokyItems[0].checked = true
            
        }
        for (i = 0; i < notsmokyItems.length ; i++){
            notsmokyItems[i].disabled = true
            notsmokyItems[i].checked = false
            
        }
    } else {
        for (i = 0; i < notsmokyItems.length; i++) {
            smokyItems[0].disabled = false
            smokyItems[1].disabled = false
            notsmokyItems[i].disabled = false
        }
        
    }


    if (saltinessMultiplier === 0){
        for (i = 0; i < saltyItems.length; i++) {
            saltyItems[i].disabled = true
            saltyItems[i].checked = false

        }
    } else if (saltinessMultiplier === 1){
        for (i = 0; i < saltyItems.length - 1; i++) {
            saltyItems[i].disabled = false
            saltyItems[4].checked = false
            saltyItems[4].disabled = true
        }
    } else {
        for (i = 0; i < saltyItems.length; i++) {
            saltyItems[i].disabled = false
        }
    }

    if (spicinessMultiplier === 0){
        for (i = 0; i <  spicyItems.length; i++) {
            spicyItems[i].disabled = true
            spicyItems[i].checked = false

        }
    }else {
        for (i = 0; i <  spicyItems.length; i++) {
            spicyItems[i].disabled = false
        }
    }

    if (toughnessMultiplier === 0){
        for (i = 0; i < tenderItems.length; i++) {
            tenderItems[i].disabled = false
            tenderItems[5].checked = true
        }

    } else if (toughnessMultiplier === 1){
        for (i = 0; i < tenderItems.length; i++) {
            tenderItems[i].disabled = false
            tenderItems[5].disabled = true
            tenderItems[5].checked = false
        }
    } else if (toughnessMultiplier === 2) {
        for (i = 0; i < tenderItems.length; i++) {
            tenderItems[i].disabled = true
            tenderItems[i].checked = false

        }
    }

    if (shelflifeMultiplier === 0){
        for (i = 0; i < lowshelflifeItems.length; i++) {
            lowshelflifeItems[i].disabled = false
        }

    } else if (shelflifeMultiplier === 1){
        for (i = 0; i < lowshelflifeItems.length; i++) {
            lowshelflifeItems[i].disabled = true
            lowshelflifeItems[i].checked = false
            document.getElementById("nosweetness").checked = true
        }
    } else if (shelflifeMultiplier === 2) {
        for (i = 0; i < lowshelflifeItems.length; i++) {
            lowshelflifeItems[i].disabled = true
            lowshelflifeItems[i].checked = false
            document.getElementById("nosweetness").checked = true

        }
    }

    if (sweetnessMultiplier === 0){
        for (i = 0; i <  sweetItems.length; i++) {
            sweetItems[i].disabled = true
            sweetItems[i].checked = false

        }
    }else {
        for (i = 0; i <  sweetItems.length; i++) {
            sweetItems[i].disabled = false
        }
    }

}

const updateAllForms = function() {
    let smokiness = document.forms.smokiness.elements.smokiness.value
    jerkyObject.Smokiness = smokiness

    let spiciness = document.forms.spiciness.elements.spiciness.value
    jerkyObject.Spiciness = spiciness

    let sweetness = document.forms.sweetness.elements.sweetness.value
    jerkyObject.Sweetness = sweetness

    let saltiness = document.forms.saltiness.elements.saltiness.value
    jerkyObject.Saltiness = saltiness

    let toughness = document.forms.toughness.elements.toughness.value
    jerkyObject.Toughness = toughness

    let shelflife = document.forms.shelflife.elements.shelflife.value
    jerkyObject.Shelflife = shelflife

 

    if (document.querySelectorAll("input[type=radio][value='Ground meats,1,lbs']:checked").length > 0){
        jerkyGun = 1
    } else {
        jerkyGun = 0
    }

    if (document.querySelectorAll("input[type=checkbox][value='Ghost Peppers,0.076,Medium Peppers']:checked").length > 0 || document.querySelectorAll("input[type=checkbox][value='Carolina Reaper Peppers,0.046,Medium Peppers']:checked").length > 0 || document.querySelectorAll("input[type=checkbox][value='Habanero Peppers,0.23,Medium Peppers']:checked").length > 0 || document.querySelectorAll("input[type=checkbox][value='Jalapeno Peppers,0.7,Medium Peppers']:checked").length > 0 || ((document.querySelectorAll("input[type=radio][name=meat]:checked").length > 0) && (document.querySelectorAll("input[type=radio][value='Ground meats,1,lbs']:checked").length === 0))){
        knifevariable = 1
    } else {
        knifevariable = 0
    }

    if(jerkyObject.Smokiness === "Genuine"){
        smokinessMultiplier = 5
    } else if (jerkyObject.Smokiness === "Heavy"){
        smokinessMultiplier = 3
    } else if (jerkyObject.Smokiness === "Light"){
        smokinessMultiplier = 1
    } else if (jerkyObject.Smokiness === "None"){
        smokinessMultiplier = 0
    }

    if(jerkyObject.Spiciness === "Hellfire"){
        spicinessMultiplier = 3
    } else if (jerkyObject.Spiciness === "Scorching"){
        spicinessMultiplier = 1
    } else if (jerkyObject.Spiciness === "White"){
        spicinessMultiplier = 0.5
    } else if (jerkyObject.Spiciness === "None"){
        spicinessMultiplier = 0
    }


    if(jerkyObject.Saltiness === "Cured"){
        saltinessMultiplier = 3
    } else if (jerkyObject.Saltiness === "Moderate"){
        saltinessMultiplier = 2
    } else if (jerkyObject.Saltiness === "Light"){
        saltinessMultiplier = 1
    } else if (jerkyObject.Saltiness === "None"){
        saltinessMultiplier = 0
    }

    if(jerkyObject.Sweetness === "Sweet"){
        sweetnessMultiplier = 2
    } else if (jerkyObject.Sweetness === "Mild"){
        sweetnessMultiplier = 1
    } else if (jerkyObject.Sweetness === "None"){
        sweetnessMultiplier = 0
    }

    if(jerkyObject.Toughness === "Tough"){
        toughnessMultiplier = 2
    } else if (jerkyObject.Toughness === "Standard"){
        toughnessMultiplier = 1
    } else if (jerkyObject.Toughness === "Tender"){
        toughnessMultiplier = 0
    }

    if(jerkyObject.Shelflife === "Years++"){
        shelflifeMultiplier = 2
    } else if (jerkyObject.Shelflife === "~Month"){
        shelflifeMultiplier = 1
    } else if (jerkyObject.Shelflife === "2 Weeks"){
        shelflifeMultiplier = 0
    } else if (jerkyObject.Shelflife === "Don't Care"){
        shelflifeMultiplier = 0
    }

    disableItems()

    let myappliancearray = Array.from(document.querySelectorAll("input[type=radio][name=appliance]:checked"), e => e.value.split(','));
    for (const item of myappliancearray){
        item[1] = parseFloat(item[1])
    }
    jerkyObject.Appliance = myappliancearray

    let mymeatarray = Array.from(document.querySelectorAll("input[type=radio][name=meat]:checked"), e => e.value.split(','));
    for (const item of mymeatarray){
        item[1] = parseFloat(item[1])
    }
    jerkyObject.Meat = mymeatarray

    let mybasearray = Array.from(document.querySelectorAll("input[type=checkbox][name=baseingredients]:checked"), e => e.value.split(','));
    for (const item of mybasearray){
        item[1] = parseFloat(item[1])
    }
    jerkyObject.Baseingredients = mybasearray

    let mypostarray = Array.from(document.querySelectorAll("input[type=checkbox][name=postingredients]:checked"), e => e.value.split(','));
    for (const item of mypostarray){
        item[1] = parseFloat(item[1])
    }
    jerkyObject.Postingredients = mypostarray

    let myspicearray = Array.from(document.querySelectorAll("input[type=checkbox][name=spice]:checked"), e => e.value.split(','));
    for (const item of myspicearray){
        item[1] = parseFloat(item[1])
    }
    jerkyObject.Spice = myspicearray

    let mysugararray = Array.from(document.querySelectorAll("input[type=checkbox][name=sugar]:checked"), e => e.value.split(','));
    for (const item of mysugararray){
        item[1] = parseFloat(item[1])
    }
    jerkyObject.Sugar = mysugararray
    
    
    updateList()
    console.log(jerkyObject)
 
    previousMultiplier = 1
    
}


let printRecipe = function() {
    recipediv.innerHTML = '';

    for (i = 0; i < 13; i++) {
        stepCounter++

        if (stepCounter > 13) {
            stepCounter === 0
            return
        }else if (stepCounter === 1){
            steptext = `Take your ${jerkyObject.Meat[0][1]} ${jerkyObject.Meat[0][2]} of ${jerkyObject.Meat[0][0]} and place it in the freezer for approximately 15 minutes, or until frost has just started to accumulate. This is done so the ${jerkyObject.Meat[0][0]} will be easier to cut into in a later step.`
        } else if (stepCounter === 2) {

            steptext = `Gather everything you will need to prepare your Jerky: `
            jerkyObject.Items.forEach(element => steptext += element[1].toFixed(1) + ' ' + element[2] + ' ' + element[0] + ', ')
        } else if (stepCounter === 3) {

            steptext = `Gather the ingredients you have selected for your Jerky: `
            jerkyObject.Baseingredients.forEach(element => steptext += element[1].toFixed(2) + ' ' + element[2] + ' ' + element[0] + ', ')
            jerkyObject.Postingredients.forEach(element => steptext += element[1].toFixed(2) + ' ' + element[2] + ' ' + element[0] + ', ')
            jerkyObject.Spice.forEach(element => steptext += element[1].toFixed(3) + ' ' + element[2] + ' ' + element[0] + ', ')
            jerkyObject.Sugar.forEach(element => steptext += element[1].toFixed(2) + ' ' + element[2] + ' ' + element[0] + ', ')
        } else if (stepCounter === 4) {
            steptext = `On a stovetop, place all of your ingredients(Base Ingredients, Post Ingredients, Spices and/or Sugars) into your Medium Pot or Saucepan. Turn on the stove and raise the temperature high enough for the pot/saucepan to maintain a light simmer. (Note - Stronger simmering and boiling can BURN the ingredients, so keep the simmer as low as possible). Simmer the ingredients together for approximately 10 minutes or until the amount of liquid has reduced by half. Stir regularly. `
        } else if (stepCounter === 5) {
            steptext = `Check the ${jerkyObject.Meat[0][0]} in the freezer. If the flesh does not immediatly bounce back when you press it, it is ready. Take it out and place it on your ${jerkyObject.Items[3][2]} ${jerkyObject.Items[3][0]}. Prepare your ${jerkyObject.Items[2][2]} ${jerkyObject.Items[2][0]} as well. Sharpen if needed.`
        } else if (stepCounter === 6) {
            steptext = `Inspect the ${jerkyObject.Meat[0][0]}. Trim away all of the visble outer fat. The more you remove the better, as it will make the Jerky spoil faster. Then, cut the ${jerkyObject.Meat[0][0]} muscle against the grain, slicing each strip to be approximately 1/4 inch thick. If you are bad at measuring, slice them about twice as thick as you want the thickness of your finished Jerky to be. It will shrink in the dehydration process.`
        } else if (stepCounter === 7) {
            steptext = `Place the sliced ${jerkyObject.Meat[0][0]} into your ${jerkyObject.Items[0][2]} ${jerkyObject.Items[0][0]}. Next, check the temperature of the simmered ingredients. If the mixture is any higher than mildy warm, wait for it to cool. After it is done cooling, add it to the ${jerkyObject.Items[0][0]} with your ${jerkyObject.Meat[0][0]}. (Note - adding moderatly warm or hot mixture will COOK the thin strips of ${jerkyObject.Meat[0][0]}, ruining the texture of the Jerky.)`
        } else if (stepCounter === 8) {
            steptext = `In the ${jerkyObject.Items[0][2]} ${jerkyObject.Items[0][0]}, stir and fold the mixture into the ${jerkyObject.Meat[0][0]} until you are postive each side has been coated thoroughly. Then, take out your ${jerkyObject.Items[1][1]} ${jerkyObject.Items[1][2]} of ${jerkyObject.Items[1][0]} and cover the ${jerkyObject.Items[0][2]} ${jerkyObject.Items[0][0]} completely, leaving no air gaps. Place the ${jerkyObject.Items[0][0]} into the Refrigerator, leaving it there for 12-24 Hours. The longer you leave it in there, the more flavor the ${jerkyObject.Meat[0][0]} will absorb.`
        } else if (stepCounter === 9) {
            steptext = `Contemplate how good your Jerky will taste when it is finished. Meanwhile, stir and fold the ${jerkyObject.Meat[0][0]} a few times throughout the marination process. As the allotted time comes to an end, prepare your ${jerkyObject.Appliance[0][0]}.`
        } else if (stepCounter === 10) {
            steptext = `Take the marinated strips of ${jerkyObject.Meat[0][0]} out of the ${jerkyObject.Items[0][0]} and place them in your ${jerkyObject.Appliance[0][0]}. Fire up your ${jerkyObject.Appliance[0][0]} (We are assuming you know how to use it) and have it dehydrate the meat for approximately 4 hours. Check the Jerky every 30-45 minutes after 4 hours to see if the Jerky has reached your desired consistancy. Details on step 11.`
        } else if (stepCounter === 11) {
            steptext = `Finished Jerky should be completely dry to the touch. Take a piece of the Jerky from the ${jerkyObject.Appliance[0][0]} and let it cool to room temperature. Then, bend the meat. It should resist bending, but fracture. If it breaks in half, you have had it in for too long. For Beef, you should see white muscle fibers holding the Jerky together at the fracture points. If these descriptors do not describe your Jerky, place it back into the ${jerkyObject.Appliance[0][0]} for additional time.`
        } else if (stepCounter === 12) {
            steptext = `When the desired texture is reached, take the Jerky out of your ${jerkyObject.Appliance[0][0]}. let the Jerky cool and Enjoy. `
        } else if (stepCounter === 13) {
            steptext = `Additional Step: If you intend to keep your Jerky stored and eat it later, do note that meats with lower fat percentage store longer. Also, if you intend to store the Jerky for longer than a few months, place them in sealable bags and store them in your freezer for refrigerator, and keep it away from moisture for better success. Thats all. Hope you enjoy the Jerky.`
            stepCounter === 14
        } 


        let itemdiv = document.createElement("div");
        let itemh3 = document.createElement("h3");
        let itemptag = document.createElement("p");
        itemdiv.classList.add("recipeItem")
        itemh3.classList.add("stepnumber")
        itemptag.classList.add("steptext")
    
        itemh3.innerHTML = (`Step ${stepCounter}:`)
        itemptag.innerHTML = (steptext)
    
        itemdiv.appendChild(itemh3)
        itemdiv.appendChild(itemptag)
        recipediv.appendChild(itemdiv)
    }

    console.log(stepCounter)



}




//event listeners to change the Jerky Object
smokinessform.addEventListener('change', () => {
    updateAllForms()
    
})

spicinessform.addEventListener('change', () => {
    updateAllForms()
})

sweetnessform.addEventListener('change', () => {
    updateAllForms()
})

saltinessform.addEventListener('change', () => {
    updateAllForms()
})

toughnessform.addEventListener('change', () => {
    updateAllForms()
})

shelflifeform.addEventListener('change', () => {
    updateAllForms()
})

applianceform.addEventListener('change', () => {
    updateAllForms()
})

meatform.addEventListener('change', () => {

    updateAllForms()
})

baseingredientsform.addEventListener('change', () => {

    if (document.querySelectorAll("input[type=checkbox][name=baseingredients]:checked").length > 0){
        bowlvariable = 1
    } else {
        bowlvariable = 0
    }
    updateAllForms()
})

postingredientsform.addEventListener('change', () => {
    updateAllForms()
})

spiceform.addEventListener('change', () => {
    updateAllForms()
})

sugarform.addEventListener('change', () => {
    updateAllForms()
})

//resetbutton. Unchecks all checked inputs, then re-defines JerkyObject to empty again.
resetbutton.addEventListener('click', () => {
    let allcheckboxes = Array.from(document.querySelectorAll("input[type=checkbox]:checked, input[type=radio]:checked"))
    for (i = 0; i < allcheckboxes.length; i++){
        allcheckboxes[i].checked = false;
    }
    jerkyObject = {
        Smokiness: "",
        Spiciness: "",
        Sweetness: "",
        Saltiness: "",
        Toughness: "",
        Shelflife: "",
        Appliance: "",
        Meat: [],
        Baseingredients: [],
        Postingredients: [],
        Spice: [],
        Sugar: [],
        Items: [["Bowl", 1, "Small"], ["Plastic Wrap", 1, "Feet"], ["Knife", 1, "Medium"], ["Cutting Board", 1, "Small"], ["Jerky Gun", 1, "Medium"], ["Preparation Time", 1, "Minutes"],  ["Marination Time", 1, "Hours"],  ["Dehydration Time", 1, "Hours"]]
    }
    bowlvariable = 0
    submitbutton1Function()
})



submitbutton1.addEventListener('click', () => {
    submitbutton1Function()
})







//slider event listener to change the meat manual input
slider.addEventListener('input', () => {
    meatmanualinput.value = slider.value
    updateList()
})

meatmanualinput.addEventListener('change', ()=> {
    updateList()
})

submitbutton2.addEventListener('click', () => {
    stepCounter = 0
    updateList()
    printRecipe()
})


