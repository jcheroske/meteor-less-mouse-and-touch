# Mouse and touchscreen LESS mixins

Three LESS mixins that allow for easy CSS styling of the basic mouse- and touchscreen-related UI conditions, such as 'click', 'hover', 'active', and 'touch'.

## Installation

```sh
$ meteor add jcheroske:less-mouse-and-touch
```

## Mixins

Note: all mixin detached rulesets are optional and default to the empty ruleset.

### .mouse mixin

A mixin for styling mouse events.

```less
.mouse(@default, @hover, @click, @active);
```

* **@default**

  A detached ruleset of styles applied initially.
  
* **@hover**

  A detached ruleset of styles applied when the mouse is hovering over the element.
  
* **@click**

  A detached ruleset of styles applied when the mouse is actually clicking.
  
* **@active**

  A detached ruleset of styles appliced when the element has the `active` class.

#### Example

```less
.common-button {
  .mouse(
    @hover: {
      background-color: blue;
      border-color: purple;
    };
    @click: {
      background-color: red;
      border-color: white;
    };
  )
}
```

### .touch mixin

A mixin for styling touch events.

```less
.touch(@default, @touch, @active);
```

* **@default**

  A detached ruleset of styles applied initially.
  
* **@touch**
  
  A detached ruleset of styles applied when the user is actively touching the element.
  
* **@active**

  A detached ruleset of styles applied when the element has the `active` class.
  
#### Example

```less
.dropdown-toggle {
  .touch(
    @touch: {
      background-color: green;
      span {
        color: black;
      }
    };
  )
}
```

### .mouse-and-touch mixin

A convience mixin that simply combines the functionality of the two previous mixins.

```less
.mouse-and-touch(@default, @hover, @click, @touch, @active);
```

* **@default**

  A detached ruleset of styles applied initially.
  
* **@hover**

  A detached ruleset of styles applied when the mouse is hovering over the element.
  
* **@click**

  A detached ruleset of styles applied when the mouse is actually clicking.

* **@touch**
  
  A detached ruleset of styles applied when the user is actively touching the element.
  
* **@active**

  A detached ruleset of styles applied when the element has the `active` class.

#### Example

```less
.navbar-button {
  .mouse-and-touch(
    @hover: {
      background-color: blue;
      border-color: purple;
    };
    @click: {
      background-color: red;
      border-color: white;
    };
    @touch: {
      background-color: green;
      border: 5px solid orange;
    }
  )
}
```
