### **Interpolation in Angular**

**Description**:
Interpolation is a feature in Angular that allows you to embed dynamic values in the HTML template. It is used to display data from the component to the view.

**Syntax**:
```html
{{ expression }}
```

- **Expression**: The expression within the double curly braces is evaluated and the result is displayed in the template.

### **Key Points**:
- The expression inside the curly braces is evaluated in the component context.
- It is commonly used to display data from the component's properties or methods.
- You can perform simple expressions, such as string concatenation, arithmetic operations, etc.

---

### **Examples**:

#### 1. **Displaying Component Property**:
```html
<!-- Component Template -->
<p>{{ name }}</p>
```
In the component:
```typescript
export class AppComponent {
  name = 'Angular';
}
```
**Output**:
```plaintext
Angular
```

#### 2. **String Interpolation**:
```html
<!-- Component Template -->
<p>{{ 'Hello, ' + name }}</p>
```
In the component:
```typescript
export class AppComponent {
  name = 'Angular';
}
```
**Output**:
```plaintext
Hello, Angular
```

#### 3. **Arithmetic Operations**:
```html
<!-- Component Template -->
<p>{{ 5 + 3 }}</p>
```
**Output**:
```plaintext
8
```

#### 4. **Method Call**:
```html
<!-- Component Template -->
<p>{{ getGreeting() }}</p>
```
In the component:
```typescript
export class AppComponent {
  getGreeting() {
    return 'Hello from the method!';
  }
}
```
**Output**:
```plaintext
Hello from the method!
```

#### 5. **Binding to HTML Attributes**:
You can also use interpolation for binding to attributes:
```html
<!-- Component Template -->
<img [src]="{{ imageUrl }}">
```
In the component:
```typescript
export class AppComponent {
  imageUrl = 'https://example.com/image.jpg';
}
```

### **Important Notes**:
- **One-way Data Binding**: Interpolation is a form of one-way data binding, where the data flows from the component to the template.
- **Limitations**: You cannot use expressions that involve function calls with side effects (e.g., changing values) inside the interpolation.