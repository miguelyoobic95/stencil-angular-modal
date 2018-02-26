---
name: Modal
category: Core Components
---

Modals can be customized with multiple properties. Properties conform to the ModalEntry interface below:

```ts
export interface ModalEntry {
    title?: string;
    titleIcon?: string;
    hasHeader?: boolean;
    hasFooter?: boolean;
    footerText?: string;
    content?: HTMLElement;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    cssClass?: string;
}
```

## Attributes
|Name|Type|Default|Description|
|---|---|---|---|
|`title`|string|   |the title of the modal, will only be displayed if `hasHeader` property is `true`|
|`titleIcon`|string| |the icon to display to the left of the title|
|`content`|HTMLElement| |the content inside the body of the modal|
|`hasHeader`|boolean|`true`|defines if the modal has a header|
|`hasFooter`|boolean|`false`|defines if the modal has a footer|
|`primaryButtonText`|string|`Confirm`  |the text inside the primary button, will only be displayed if `hasFooter` property is `true`|
|`secondaryButtonText`|string|`Cancel`|the text inside the secondary button, will only be displayed if `hasFooter` property is `true`|
|`cssClass`|string| |space separated classes to add to the modal|

### Basic

```yoo-modal-basic.html
    <yoo-modal title="Basic Modal">
        <div slot="modal-content">Test content</div>        
    </yoo-modal>
```

### With Footer

```yoo-modal-footer.html
    <yoo-modal class="accent" icon="yo-fire" title="Modal with footer" has-footer="true" primary-button-text="Confirm" secondary-button-text="Cancel">
        <div slot="modal-content">Test content</div>
    </yoo-modal>
```

### Without Header

```yoo-modal-no-header.html
    <yoo-modal has-footer="true" has-header="false">
        <div slot="modal-content">Test content</div>
    </yoo-modal>
```
## CSS
|Type|Name|Description|
|---|---|---|
|Accent|`accent`|yoo-modal accent|
|Stable|`stable`|yoo-modal stable|
|Success|`success`|yoo-modal success|
|Danger|`danger`|yoo-modal danger|
|Info|`info`|yoo-modal info|
|Warning|`warning`|yoo-modal warning|
|Gradient Accent|`gradient-accent`|yoo-modal gradient-accent|
|Gradient Stable|`gradient-grey`|yoo-modal gradient-grey|
|Gradient Success|`gradient-success`|yoo-modal gradient-success|
|Gradient Danger|`gradient-danger`|yoo-modal gradient-danger|
|Gradient Info|`gradient-info`|yoo-modal gradient-info|
|Gradient Warning|`gradient-warning`|yoo-modal gradient-warning|
|Fullscreen|`fullscreen`|yoo-modal fullscreen|
|Drawer|`drawer`|yoo-modal drawer|

```yoo-modal-danger.html
    <yoo-modal class="danger" icon="yo-fire" title="Modal danger" has-footer="true" primary-button-text="Confirm" secondary-button-text="Cancel">
        <div slot="modal-content">Test content</div>
    </yoo-modal>
```

```yoo-modal-success.html
    <yoo-modal class="success" icon="yo-fire" title="Modal success" has-footer="true" primary-button-text="Confirm" secondary-button-text="Cancel">
        <div slot="modal-content">Test content</div>
    </yoo-modal>
```

```yoo-modal-info.html
    <yoo-modal class="info" icon="yo-fire" title="Modal info" has-footer="true" primary-button-text="Confirm" secondary-button-text="Cancel">
        <div slot="modal-content">Test content</div>
    </yoo-modal>
```

```yoo-modal-warning.html
    <yoo-modal class="warning" icon="yo-fire" title="Modal warning" has-footer="true" primary-button-text="Confirm" secondary-button-text="Cancel">
        <div slot="modal-content">Test content</div>
    </yoo-modal>
```

```yoo-modal-stable.html
    <yoo-modal class="stable" icon="yo-fire" title="Modal stable" has-footer="true" primary-button-text="Confirm" secondary-button-text="Dismiss">
        <div slot="modal-content">Test content</div>
    </yoo-modal>
```

## Events
|Attr|Description|
|---|---|
|`onPrimaryButtonClicked`|called when the primary button is clicked|
|`onClose`|called when the modal is closed|