/** @format */

var menu = JSON.parse(localStorage.getItem('menu-card'))
var menuItem = ''
const user = localStorage.getItem('user')

function Menu() {
  if (user === 'admin') {
    var table = document.createElement('table')
    for (var i = 0; i < menu.length; i++) {
      var child = menu[i]

      var x = document.createElement('a')
      var space = document.createTextNode(' ')
      var edit = document.createTextNode('edit')

      var row = table.insertRow()
      Object.keys(child).forEach(function (k) {
        var cell = row.insertCell()

        cell.appendChild(document.createTextNode(child[k]))
        cell.appendChild(space)

        x.setAttribute('href', `./edit-menu-item.html`)
        x.setAttribute('id', `${menu[i].name}`)

        x.appendChild(edit)
        cell.appendChild(space)
        cell.appendChild(x)
      })
    }

    document.getElementById('menu-card').appendChild(table)

    document.querySelectorAll('#menu-card a').forEach(function (a) {
      a.onclick = function (e) {
        localStorage.setItem('item', e.toElement.id)
      }
    })
  } else {
    var table = document.createElement('table')
    for (var i = 0; i < menu.length; i++) {
      var child = menu[i]

      var x = document.createElement('a')
      var addToCart = document.createTextNode(' ' + 'Add to Cart')
      var row = table.insertRow()

      Object.keys(child).forEach(function (k) {
        var cell = row.insertCell()
        cell.appendChild(document.createTextNode(child[k]))
        x.setAttribute('href', `./check.html`)
        x.setAttribute('id', `${menu[i].name}`)

        x.appendChild(addToCart)
        cell.appendChild(x)
      })
    }

    document.getElementById('menu-card').appendChild(table)

    document.querySelectorAll('#menu-card a').forEach((a) => {
      a.onclick = (e) => {
        var cart = []

        cart = JSON.parse(localStorage.getItem('cart')) || []

        cart.push(e.toElement.id)

        localStorage.setItem('cart', JSON.stringify(cart))
      }
    })
  }
}

function cart() {
  var cartItems = JSON.parse(localStorage.getItem('cart'))

  var Total = 0
  var table = document.createElement('table')

  for (var i = 0; i < menu.length; i++) {
    for (var j = 0; j < cartItems.length; j++) {
      if (menu[i].name === cartItems[j]) {
        Total = Total + Number(menu[i].Price)

        var cartObject = {
          menu: menu[i].name,
          delivery: menu[i].Delivery,
          price: menu[i].Price,
        }

        var row = table.insertRow()

        Object.keys(cartObject).forEach(function (k) {
          var cell = row.insertCell()
          cell.appendChild(document.createTextNode(cartObject[k]))
        })

        document.getElementById('menu-card').appendChild(table)
      }
    }
  }
  var row = table.insertRow()
  var x = document.createTextNode('Total')
  var y = document.createTextNode(Total)

  row.insertCell().appendChild(x)
  row.insertCell().appendChild(document.createTextNode(''))
  row.insertCell().appendChild(y)
}

function editMenu() {
  const itemName = localStorage.getItem('item')

  var item = menu.filter((menuItem) => menuItem.name === itemName)[0]

  document.getElementById('item-name').value = item.name
  document.getElementById('item-price').value = item.Price
  document.getElementById('inStock').value = item.Active
  document.getElementById('dateOfLaunch').value = item.LaunchDate
  document.getElementById('category').value = item.Category
  if (document.getElementById('freeDelivery').value == 'Yes') {
    document.getElementById('freeDelivery').checked
  }

  document.getElementById('saveBtn').addEventListener('click', function () {
    var itemName = document.getElementById('item-name').value

    var itemPrice = document.getElementById('item-price').value
    var inStock = document.getElementById('inStock').value
    var dateOfLaunch = document.getElementById('dateOfLaunch').value
    var category = document.getElementById('category').value
    if (document.getElementById('freeDelivery').checked) {
      var delivery = 'Yes'
    } else {
      var delivery = 'NO'
    }

    for (let i = 0; i < menu.length; i++) {
      if (menu[i].name == itemName) {
        menu[i].Price = itemPrice
        menu[i].Active = 'Yes'
        menu[i].LaunchDate = dateOfLaunch
        menu[i].Category = category
        menu[i].Delivery = delivery
        localStorage.setItem('menu-card', JSON.stringify(menu))
      }
    }
  })
}
