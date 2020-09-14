const groceries = {
    "Baking": {
        "Baking Powder": {
            "category": "Baking",
            "item": "Baking Powder",
            "status": 0
        },
        "Baking Soda": {
            "category": "Baking",
            "item": "Baking Soda",
            "status": 0
        },
        "Flour": {
            "category": "Baking",
            "item": "Flour",
            "status": 0
        },
        "Pepper": {
            "category": "Baking",
            "item": "Pepper",
            "status": 0
        },
        "Salt": {
            "category": "Baking",
            "item": "Salt",
            "status": 0
        },
        "Sugar": {
            "category": "Baking",
            "item": "Sugar",
            "status": 0
        },
        "Vanilla": {
            "category": "Baking",
            "item": "Vanilla",
            "status": 0
        },
        "Yeast": {
            "category": "Baking",
            "item": "Yeast",
            "status": 0
        }
    },
    "Basics": {
        "Bread": {
            "category": "Basics",
            "item": "Bread",
            "status": 0
        },
        "Butter": {
            "category": "Basics",
            "item": "Butter",
            "status": 0
        },
        "Cheese": {
            "category": "Basics",
            "item": "Cheese",
            "status": 0
        },
        "Eggs": {
            "category": "Basics",
            "item": "Eggs",
            "status": 0
        },
        "Milk": {
            "category": "Basics",
            "item": "Milk",
            "status": 0
        },
        "Oil": {
            "category": "Basics",
            "item": "Oil",
            "status": 0
        },
        "Orange Juice": {
            "category": "Basics",
            "item": "Orange Juice",
            "status": 0
        },
        "Seltzer": {
            "category": "Basics",
            "item": "Seltzer",
            "status": 0
        },
        "Turkey": {
            "category": "Basics",
            "item": "Turkey",
            "status": 0
        },
        "Yogurt": {
            "category": "Basics",
            "item": "Yogurt",
            "status": 0
        }
    },
    "Condiments": {
        "Dressing": {
            "category": "Condiments",
            "item": "Dressing",
            "status": 0
        },
        "Hot Sauce": {
            "category": "Condiments",
            "item": "Hot Sauce",
            "status": 0
        },
        "Hummus": {
            "category": "Condiments",
            "item": "Hummus",
            "status": 0
        },
        "Mayo": {
            "category": "Condiments",
            "item": "Mayo",
            "status": 0
        },
        "Steak Sauce": {
            "category": "Condiments",
            "item": "Steak Sauce",
            "status": 0
        }
    },
    "Fruit": {
        "Apples": {
            "category": "Fruit",
            "item": "Apples",
            "status": 0
        },
        "Bananas": {
            "category": "Fruit",
            "item": "Bananas",
            "status": 0
        }
    },
    "Meat": {
        "Chicken": {
            "category": "Meat",
            "item": "Chicken",
            "status": 0
        },
        "Ground Beef": {
            "category": "Meat",
            "item": "Ground Beef",
            "status": 0
        }
    },
    "Pantry": {
        "Beans": {
            "category": "Pantry",
            "item": "Beans",
            "status": 0
        },
        "Cereal": {
            "category": "Pantry",
            "item": "Cereal",
            "status": 0
        },
        "Coffee": {
            "category": "Pantry",
            "item": "Coffee",
            "status": 0
        },
        "Marinara": {
            "category": "Pantry",
            "item": "Marinara",
            "status": 0
        },
        "Oats": {
            "category": "Pantry",
            "item": "Oats",
            "status": 0
        },
        "Pasta": {
            "category": "Pantry",
            "item": "Pasta",
            "status": 0
        },
        "Rice": {
            "category": "Pantry",
            "item": "Rice",
            "status": 0
        },
        "Soup": {
            "category": "Pantry",
            "item": "Soup",
            "status": 0
        },
        "Tea": {
            "category": "Pantry",
            "item": "Tea",
            "status": 0
        }
    },
    "Supplies": {
        "Cleaning Spray": {
            "category": "Supplies",
            "item": "Cleaning Spray",
            "status": 0
        },
        "Coffee Filters": {
            "category": "Supplies",
            "item": "Coffee Filters",
            "status": 0
        },
        "Dish Pods": {
            "category": "Supplies",
            "item": "Dish Pods",
            "status": 0
        },
        "Dish Soap": {
            "category": "Supplies",
            "item": "Dish Soap",
            "status": 0
        },
        "Garbage Bags": {
            "category": "Supplies",
            "item": "Garbage Bags",
            "status": 0
        },
        "Paper Towels": {
            "category": "Supplies",
            "item": "Paper Towels",
            "status": 0
        }
    },
    "Veggies": {
        "Avocado": {
            "category": "Veggies",
            "item": "Avocado",
            "status": 0
        },
        "Broccoli": {
            "category": "Veggies",
            "item": "Broccoli",
            "status": 0
        },
        "Carrots": {
            "category": "Veggies",
            "item": "Carrots",
            "status": 0
        },
        "Garlic": {
            "category": "Veggies",
            "item": "Garlic",
            "status": 0
        },
        "Lettuce": {
            "category": "Veggies",
            "item": "Lettuce",
            "status": 0
        },
        "Mushrooms": {
            "category": "Veggies",
            "item": "Mushrooms",
            "status": 0
        },
        "Onion": {
            "category": "Veggies",
            "item": "Onion",
            "status": 0
        },
        "Tomato": {
            "category": "Veggies",
            "item": "Tomato",
            "status": 0
        }
    }
}
/* ------------------------------------------------------------------------- //
3   GREEN
2   YELLOW
1   RED
0   GRAY (disabled)
// ------------------------------------------------------------------------- */
// console.log(JSON.stringify(groceries))
const app = document.getElementById("app")

function getColor(int) {
    const index = parseInt(int)
    const colors = {
        3: "list-group-item-success",
        2: "list-group-item-warning",
        1: "list-group-item-danger",
        0: "list-group-item-light",
    }
    return colors[index]
}

function increment(value) {
    const next = parseInt(value) - 1
    return next >= 0 ? next : next + 4 
}

function cycleStatus(id) {
    var element = document.getElementById(id)
    var oldValue = parseInt(element.value)
    var newValue = increment(oldValue)
    console.log(`#${id}: ${oldValue} -> ${newValue}`)
    var oldClass = element.className.split(" ").slice(element.className.split(" ").length - 1, element.className.split(" ").length)
    var newClass = getColor(newValue)
    element.value = `${newValue}`
    element.classList.remove(oldClass)
    element.classList.add(newClass)
    return newValue
}

function createListGroupComponent(parent, children) {
    console.log(`createListGroupComponent(parent=${parent}, children=${children})`)
    var element = ""
    element += `<div class="grocery-group">`
    element += `<fieldset class="border p-2">`
    element += `<legend class="w-auto">${parent}</legend>`
    element += `<div class="list-group">`
    for (const child of Object.values(children)) {
        var id = child.item.replace(" ", "").toLowerCase()
        element += `
            <button 
            onclick="cycleStatus('${id}')" 
            type="button" 
            class="grocery-item list-group-item list-group-item-action ${getColor([child.status])}"
            value="${child.status}" 
            id="${id}">
                ${child.item}
            </button>`
    }
    element += `</div>`
    element += `</fieldset>`
    element += `</div>`
    return element
}

function getElementsByValue(value) {
    var array = []
    console.log(`getElementsByValue(value=${value})`)
    var allItems = document.getElementsByClassName("grocery-item")
    for (var i = 0; i < allItems.length; i++) {
        if (allItems[i].value === value) {
            array.push(allItems[i])
        }
    }
    return array
}

function toggleStrike(id) {
    console.log(`toggleStrike(id=${id})`)
    const element = document.getElementById(id)
    if (element.style["text-decoration"]==="line-through") {
        element.style["text-decoration"] = ""
    } else {
        element.style["text-decoration"] = "line-through"
    }
}

function populateModalComponent(items) {
    console.log(`populateModalComponent()`)
    // TODO: print a message if no items are present
    const modal = document.getElementById("shoppingListModalBody")
    var element = ""
    if (Object.keys(items).length === 0) {
        element += `<p>Hooray!&nbsp;🥳<br>You're all stocked up!</p>`
        modal.innerHTML = element
        return
    }
    element += `<div class="list-group">`
    const entries = Object.entries(items)
    for (const [name, value] of entries) {
        var id = `${name.replace(" ","-")}-modal`
        element += `<button onclick="toggleStrike('${id}')" type="button" id="${id}" class="list-group-item list-group-item-action">`
        element += `<div style="display: block;"><span>${name}</span>`
        element += value==="1" ? `<span style="float: right;">&excl;</span>` : ``
        element += `</div>`
        element += `</button>`
    }
    element += `</div>`
    modal.innerHTML = element
}

function generateShoppingList() {
    console.log(`generateShoppingList()`)
    var items = {}
    var mustBuy = getElementsByValue("1")
    var shouldBuy = getElementsByValue("2")
    for (var i=0; i<mustBuy.length; i++) {
        var item = mustBuy[i]
        items[item.innerText] = item.value
    }
    for (var i=0; i<shouldBuy.length; i++) {
        var item = shouldBuy[i]
        items[item.innerText] = item.value
    }
    populateModalComponent(items)
}

function init() {
    console.log("init()")
    const entries = Object.entries(groceries)
    for (const [parent, children] of entries) {
        var component = createListGroupComponent(parent, children)
        app.innerHTML += component
    }
}

window.addEventListener("load", init)
window.onbeforeunload = function(e) {
    // confirm before reloading or leaving page (does not work in iOS Safari)
    return true
}
