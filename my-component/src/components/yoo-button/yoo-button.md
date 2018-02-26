---
name: Button
category: Core Components
---

Buttons can be used with `<yoo-button>` HTML tag.

## Attributes

|Name|Type|Default|Description|
|---|---|---|---|
|`title`|string|   |Text to be displayed in the button|
|`disabled`|boolean| `false`|Enable/Disable the button|
|`isLoading`|boolean|`false`|Displays loader animation in button|
|`icon`|string|     |Icon to add to the button|


```yoo-button.html
    <yoo-button title="Unstyled yoo-button"></yoo-button>
    <br>
    <yoo-button title="Button Disabled" disabled="true" class="accent"></yoo-button>
    <br>
    <yoo-button title="Button with icon" icon="yo-fire" class="accent"></yoo-button>
    <br>
    <yoo-button title="Button loading" is-loading="true"  class="accent"></yoo-button>
    <br>
```

```yoo-button.css hidden 
     yoo-button {
        display: block;
        margin-bottom: 5px;
    }
```


## CSS

Multiple button types may be specified via the class attribute.

|Type|Class|Usage|
|---|---|--------|
|Accent|`accent`| Provides extra visual weight and identifies the accent action in a set of buttons|
|Stable|`stable`|stable buttons are used for stable actions|
|Link|`link`| Standard, trasnparent link button
|Link transparent|`link transparent`|Toolbar transparent link button
|Danger|`danger`|Danger buttons are used for critical actions which are usually irreversible|
|Success|`success`| Indicates a successful or positive action|
|Info|`info`|Indicates an action that will provide information to the user|
|Gradient Accent|`gradient-accent`|button gradient accent|
|Gradient Danger|`gradient-danger`|button gradient danger|
|Gradient Info|`gradient-info`|button gradient info|
|Gradient Warning|`gradient-warning`|button gradient warning|
|Gradient Success|`gradient-success`|button gradient success|
|Gradient Grey|`gradient-grey`|button gradient grey|
|Icon Only|`icon-only`|Styles icon for icon-only format|
|Small|`small`|Small button|
|Block|`block`|Block button|
|Round|`round`|Rounded button|
```yoo-button-types.html
  <div attr-layout="row">
    <div attr-flex>
        <yoo-button title="Button accent" class="accent"></yoo-button>
        <br/>
        <yoo-button title="Button stable" class="stable"></yoo-button>
        <br/>
        <yoo-button title="Button link" class="link"></yoo-button>
        <br/>
        <yoo-button title="Button link transparent " class="link-transparent"></yoo-button>
        <br/>
        <yoo-button title="Button danger" class="danger"></yoo-button>
        <br/>
        <yoo-button title="Button info" class="info"></yoo-button>
        <br/>
        <yoo-button title="Button gradient-accent" class="gradient-accent"></yoo-button>
        <br/>
        <yoo-button title="Button gradient-accent" class="gradient-danger"></yoo-button>
        <br/>
        <yoo-button title="Button gradient-accent" class="gradient-info"></yoo-button>
        <br/>
        <yoo-button title="Button gradient-accent" class="gradient-warning"></yoo-button>
        <br/>
        <yoo-button title="Button gradient-accent" class="gradient-success"></yoo-button>
        <br/>
        <yoo-button title="Button gradient-accent" class="gradient-grey"></yoo-button>
        <br/>
        <yoo-button icon="yo-more-v" class="icon-only accent"></yoo-button>
        </br>
        <yoo-button icon="yo-plus" class="icon-only success"></yoo-button>
        <br/>
    </div>
        <div attr-flex>
        <yoo-button title="Button accent" class="round accent"></yoo-button>
        <br/>
        <yoo-button title="Button stable" class="round stable"></yoo-button>
        <br/>
        <yoo-button title="Button link" class="round link"></yoo-button>
        <br/>
        <yoo-button title="Button link transparent " class="rounded link-transparent"></yoo-button>
        <br/>
        <yoo-button title="Button danger" class="round danger"></yoo-button>
        <br/>
        <yoo-button title="Button info" class="round info"></yoo-button>
        <br/>
        <yoo-button title="Button gradient-accent" class="round gradient-accent"></yoo-button>
        <br/>
        <yoo-button title="Button gradient-accent" class="round gradient-danger"></yoo-button>
        <br/>
        <yoo-button title="Button gradient-accent" class="round gradient-info"></yoo-button>
        <br/>
        <yoo-button title="Button gradient-accent" class="round gradient-warning"></yoo-button>
        <br/>
        <yoo-button title="Button gradient-accent" class="round gradient-success"></yoo-button>
        <br/>
        <yoo-button title="Button gradient-accent" class="round gradient-grey"></yoo-button>
        <br/>
        <yoo-button icon="yo-more-v" class="rounded icon-only accent"></yoo-button>
        </br>
        <yoo-button icon="yo-plus" class="rounded icon-only success"></yoo-button>
        <br/>
    </div>
</div>
```
```yoo-button-types.css hidden
     yoo-button {
        display: block;
        margin-bottom: 5px;
    }
```

### Size Variations: 

**Small:**

Add `class="small"` for a small button:

```yoo-button-size.html
    <yoo-button title="Normal Button" class="accent"></yoo-button>
    <br/>
    <yoo-button title="Small button" class="accent small"></yoo-button>
    <br/>   
```
```yoo-button-size.css hidden
     yoo-button {
        display: block;
        margin-bottom: 5px;
    }
```

**Block:**

Add `class="block"` for a block button:

```yoo-button-block.html
    <yoo-button title="Button Block" class="accent block"></yoo-button>
    <br/>
```