/** @format */

const menu = [
  {
    name: 'Sandwich',
    Price: 99,
    Active: 'Yes',
    LaunchDate: '2017/03/15',
    Category: 'Main Course',
    Delivery: 'Free',
  },
  {
    name: 'Burger',
    Price: 129,
    Active: 'Yes',
    LaunchDate: '2017/12/23',
    Category: 'Main Course',
    Delivery: 'No',
  },
  {
    name: 'Pizza',
    Price: 149,
    Active: 'Yes',
    LaunchDate: '2017/08/13',
    Category: 'Main Course',
    Delivery: 'No',
  },
  {
    name: 'French Fries',
    Price: 57,
    Active: 'No',
    LaunchDate: '2017/08/13',
    Category: 'Starters',
    Delivery: 'Free',
  },
  {
    name: 'Chocolate Brownie',
    Price: 32,
    Active: 'Yes',
    LaunchDate: '2017/12/23',
    Category: 'Dessert',
    Delivery: 'Free',
  },
]

localStorage.setItem('menu-card', JSON.stringify(menu))
