# Mouse and touchscreen LESS mixins

Three LESS mixins that allow for easy CSS styling of the basic mouse- and touchscreen-related UI conditions, such as 'click', 'hover', 'active', and 'touch'.

## Installation

```sh
$ meteor add jcheroske:less-mouse-and-touch
```

## Mixins

Note: all mixin detached rulesets are optional and default to the empty ruleset.

### .mouse mixin

```less
.mouse(@default, @hover, @click, @active);
```

* @default

  A detached ruleset of styles applied initially.
  
* @hover

  A detached ruleset of styles applied when the mouse is hovering over the element.
  
* @click

  A detached ruleset of styles applied when the mouse is actually clicking.
  
* @active

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

```less
.touch(@default, @touch, @active);
```

* @default

  A detached ruleset of styles applied initially.
  
* @touch
  
  A detached ruleset of styles applied when the user is actively touching the element.
  
* @active

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