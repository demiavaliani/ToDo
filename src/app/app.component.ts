import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ShoppingList'; // application name
  products = []; // array declaration
  counter = 1;
  itemToAdd;
  itemToRemove;

  /* --- adds an item in the array --- */
  addNewItem () {
    if (this.itemToAdd !== null) {
      this.products.push(this.itemToAdd)
    }
  }

  /* --- removes all items from array --- */
  removeItem () {
    const index = this.products.indexOf(this.itemToRemove)
    if (index > -1) {
      this.products.splice(index)
    }
  }

  /* --- creates new list  --- */
  createNewList () {
    const elementToClone = document.getElementById('listCardArea')
    const clone = elementToClone.cloneNode(true)
    document.getElementById('listCardAreaIsolate').appendChild(clone)
    console.log(this.products)
    console.log(clone)

    // const newElement = document.createElement('div')
    // newElement.setAttribute('class', 'listCardArea')
    // const currentElement = document.getElementById('listCardAreaIsolate')
    // currentElement.appendChild(newElement)

    // const elementToClone = document.getElementById('listCardHidden')
    // const clone = elementToClone.cloneNode(true)
    // document.getElementById('listCardAreaIsolate').appendChild(clone)
    // const buttonToClone = document.getElementById('newToDoButton')
    // const cloneButton = buttonToClone.cloneNode(true)
    // document.getElementById('listCardHidden').appendChild(cloneButton)
    // const styleOf = document.getElementById('listCardHidden').style
    // styleOf.setProperty('position', 'relative')
    // styleOf.setProperty('visibility', 'visible')
  }
}
