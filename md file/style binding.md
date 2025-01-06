In Angular (including Angular 18), **style binding** is used to dynamically set styles on an element. Style bindings allow you to conditionally apply styles or dynamically change styles based on component data.

There are three primary types of style bindings in Angular:

---

### 1. **Inline Style Binding (Single Style Property Binding)**

You can bind a specific CSS property to a component variable or expression using the `[style.property]` syntax.

#### Syntax:
```html
<div [style.color]="color">This text color is bound dynamically</div>
```

#### Example:
```typescript
@Component({
  selector: 'app-example',
  template: `<div [style.fontSize.px]="fontSize">Dynamic Font Size</div>`
})
export class ExampleComponent {
  fontSize = 20; // Font size in pixels
}
```

---

### 2. **Object-Based Style Binding (Multiple Styles)**

You can bind multiple styles at once using the `[ngStyle]` directive with an object. Each key in the object corresponds to a CSS property, and the value determines its value.

#### Syntax:
```html
<div [ngStyle]="styles">This text has multiple dynamic styles</div>
```

#### Example:
```typescript
@Component({
  selector: 'app-example',
  template: `<div [ngStyle]="styles">Dynamic Styles</div>`
})
export class ExampleComponent {
  styles = {
    color: 'blue',
    fontSize: '20px',
    backgroundColor: 'lightgray'
  };
}
```

---

### 3. **Conditional Style Binding**

You can conditionally apply styles based on expressions, often combined with ternary operators.

#### Syntax:
```html
<div [style.backgroundColor]="isActive ? 'green' : 'red'">Conditional Background</div>
```

#### Example:
```typescript
@Component({
  selector: 'app-example',
  template: `<div [style.textDecoration]="isCompleted ? 'line-through' : 'none'">Task Status</div>`
})
export class ExampleComponent {
  isCompleted = false; // Set to true or false to toggle style
}
```
