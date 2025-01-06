The `OnInit` lifecycle hook in Angular is part of the component lifecycle that gets invoked when the component is initialized. It provides a place to write initialization logic for a component.

### Purpose of `ngOnInit`:

1. **Component Initialization**:
   - It is called once after the component is instantiated and Angular has initialized its input properties.
   - It's a good place to put initialization logic that requires access to the component's inputs or any other setup that needs to be done when the component is created.

2. **Separation of Constructor Logic**:
   - Angular recommends keeping the constructor light and only for dependency injection. Any initialization logic (e.g., API calls, data fetching, or setting up observables) should go in `ngOnInit`.

3. **Safe Access to Bound Properties**:
   - The `ngOnInit` lifecycle hook ensures that Angular has fully set up the component's input properties (`@Input` bindings) before executing the code inside it.

4. **Preparation for Template Rendering**:
   - You can use `ngOnInit` to initialize data structures or states that are required for the component’s template.

### Example:
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <h1>{{ title }}</h1>
  `,
})
export class ExampleComponent implements OnInit {
  title: string;

  constructor() {
    // Avoid heavy logic here
    console.log('Constructor called');
  }

  ngOnInit(): void {
    // Ideal place for initialization logic
    this.title = 'Hello, Angular!';
    console.log('ngOnInit called');
  }
}
```

### Key Notes:
- `ngOnInit` is optional but commonly used when you need initialization logic.
- If you don't implement the `OnInit` interface, Angular won't call `ngOnInit`, even if it's defined in the component.
- If you need to perform actions periodically after initialization, consider other lifecycle hooks like `ngOnChanges`, `ngAfterViewInit`, etc.
