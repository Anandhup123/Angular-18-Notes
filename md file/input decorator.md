**Understanding @Input in Angular 18**

The `@Input` decorator in Angular is used to pass data from one component to another. It enables parent-to-child communication and is a core feature of Angular’s component interaction mechanism.

### **Basic Usage**
1. Decorate a property in the target component with `@Input`.
2. Use property binding (`[ ]`) in the source component to pass data.

#### Example:
**Source Component (HTML):**
```html
<app-profile-card [userName]="'John Doe'"></app-profile-card>
```

**Target Component (HTML):**
```html
<p>User: {{ userName }}</p>
```

**Target Component (TypeScript):**
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
})
export class ProfileCardComponent {
  @Input() userName!: string;
}
```

This binds the value `'John Doe'` to the `userName` property in the target component.

---

### **Default Values**
You can define a default value in the target component if the source does not pass one:
```typescript
@Input() userName: string = 'Default User';
```

---

### **Alias for Input Property**
Use an alias to change the property name used in the source component:
```typescript
@Input('aliasName') userName!: string;
```
In the source template:
```html
<app-profile-card [aliasName]="'John Doe'"></app-profile-card>
```

---

### **Tracking Input Changes**
Use the `ngOnChanges` lifecycle hook to respond to changes in input properties:
**Target Component (HTML):**
```html
<p>New Value: {{ userName }}</p>
```

**Target Component (TypeScript):**
```typescript
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
})
export class ProfileCardComponent implements OnChanges {
  @Input() userName!: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes:', changes['userName'].currentValue);
  }
}
```

---

### **Angular Signals with @Input**
Angular 18 introduces Signals for reactive state management. You can integrate Signals with `@Input`:
**Target Component (HTML):**
```html
<p>{{ userName() }}</p>
```

**Target Component (TypeScript):**
```typescript
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
})
export class ProfileCardComponent {
  private _userName = signal<string>('Default User');

  @Input()
  set userName(value: string) {
    this._userName.set(value);
  }

  get userName() {
    return this._userName();
  }
}
```

---

### **Standalone Components**
If using standalone components (introduced in Angular 18), `@Input` works the same way:
**Target Component (HTML):**
```html
<p>{{ userName }}</p>
```

**Target Component (TypeScript):**
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.component.html',
})
export class ProfileCardComponent {
  @Input() userName!: string;
}
```

