---
name: ModalController
category: Core Components
---

The Modal Controller acts as a placeholder for a modal to be inserted. Different modals may be inserted into the same controller. The controller provides the backdrop for that modal so that the content behind it is greyed out. It has no attributes.

The modal is contructed by calling the `generateModal(props: ModalEntry)` method which receives a Modal Entry as an argument.

```yoo-modal-controller.html
    <p>This is a random text in a random page</p>
    <p> Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo. While the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....</p>

    <yoo-modal-controller></yoo-modal-controller>
    <yoo-button title="Trigger Modal" class="gradient-info" onclick="generate1()"></yoo-button>
    <yoo-button title="Trigger Fullscreen Modal" class="gradient-info" onclick="generate2()"></yoo-button>
    <yoo-button title="Trigger Drawer Modal" class="gradient-info" onclick="generate3()"></yoo-button>
```

```yoo-modal-controller.js

  var modalCtrl = document.querySelector('yoo-modal-controller');
  var modal = document.createElement('yoo-modal');
  modal.title = "Gutten Morgen";
  modal.hasFooter = true;
  modal.classList.add("info");

  var htmlElement = document.createElement('div');
  htmlElement.innerHTML = `<div class="test">This is the test text</div>`;
  var modalProps1 = {title: "Aligato ?", hasFooter : true, content: htmlElement,primaryButtonText: "Confirm", secondaryButtonText: "Cancel"};
  var modalProps2 = {title: "Aligato ?", hasFooter : true, content: htmlElement,primaryButtonText: "Confirm", secondaryButtonText: "Cancel", cssClass: "fullscreen"};
  var modalProps3 = {title: "Aligato ?", hasFooter : true, content: htmlElement,primaryButtonText: "Confirm", secondaryButtonText: "Cancel", cssClass: "drawer"};
  
  function populateShow() {
    modalCtrl.populateModal(modal);
    modal.title = "updated title";
    modal.content = htmlElement;
    modalCtrl.show();
  }

  function generate1() {
    modalCtrl.generateModal(modalProps1);
    console.log('generated', modalCtrl);
    modalCtrl.show();
  }

  function generate2() {
    modalCtrl.generateModal(modalProps2);
    console.log('generated', modalCtrl);
    modalCtrl.show();
  }

  function generate3() {
    modalCtrl.generateModal(modalProps3);
    console.log('generated', modalCtrl);
    modalCtrl.show();
  }

```

## Methods
|Name|Parameters|Description|
|---|---|---|
|`show`|none| Interrupt the current page and display content above|
|`populateModal`|`modal: HTMLElement`| Set the content to be displayed|
|`generateModal`|`props: ModalEntry`| Set the content to be displayed to a Modal created using the ModalEntry parameter|
|`close`|none| Close the modal and placeholder|
