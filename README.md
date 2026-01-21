# React_Masters

A complete, structured, and beginner-friendly journey to master **React** from fundamentals to advanced concepts — with real-world examples, mini projects, and best practices.

This repository documents my learning path while building modern React and Next.js applications using **App Router**, **TypeScript**, and **Tailwind CSS**.

---

## 🔗 Live Projects / Demos

- 🌐 **React Masters**  
  https://react-masters.vercel.app/

- 🌐 **useState Demo**  
  https://use-state-five-wine.vercel.app/

- 🌐 **useEffect Demo**  
  https://use-effect-dun.vercel.app/

---

## 📚 Topics Covered So Far

1. React Basics  
2. Components  
3. Next.js App Router (Routing Concept)  
4. Route Groups `( … )`  
5. Layouts in App Router  
6. Props (Properties)  
7. Props with TypeScript  
8. **useState Hook**  
9. **useEffect Hook**

---

## 1. React Basics

React is a **JavaScript library for building user interfaces**.  
It allows developers to create fast, interactive UIs using **components**.

Key ideas:

- UI is broken into small reusable parts
- Components return JSX
- React updates the UI efficiently

### Example

```jsx
function Hello() {
  return <h1>Hello React</h1>;
}
```

---

## 2. Components

A **component** is a reusable function that returns UI.

* Components must start with a **capital letter**
* Components help keep code modular and readable
* Same component can be used multiple times

### Example

```jsx
function Button() {
  return <button>Click Me</button>;
}
```

Usage:

```jsx
<Button />
<Button />
```

---
## 3. Next.js App Router (Routing Concept)

Next.js uses **folder-based routing**.

* Each folder becomes a route
* `page.tsx` defines the UI for that route

### Example

```
app/
 ├─ page.tsx        → /
 ├─ chats/page.tsx → /chats
```

---

## 4. Route Groups `( … )`

Route groups are folders wrapped in parentheses `( )`.

* Used **only for organizing code**
* Do **not appear in the URL**
* Helpful for grouping related features

### Example

```
app/
 └─ (userprofile)/
     ├─ chats/page.tsx     → /chats
     ├─ calls/page.tsx     → /calls
     └─ channels/page.tsx → /channels
```

**Important:**
The `(userprofile)` folder does **not affect routing paths**.

---

## 5. Layouts in App Router

Layouts allow sharing UI across multiple pages.

* Used for sidebars, headers, footers
* Layouts persist between route changes

### Example

```tsx
export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
```

---

## 6. Props (Properties)

**Props** are used to pass data from a **parent component to a child component**.

Important points:

* Props make components **dynamic and reusable**
* Props are **read-only**
* Data flows **one-way (parent → child)**

### Example

```jsx
<Message name="Jagat" message="Hello there!" />
```

```tsx
const Message = ({ Props }: MessageProps) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.message}</p>
    </div>
  );
};
```
---

## 7. Props with TypeScript

In TypeScript, props must be **explicitly typed**.

Benefits:

* Prevents runtime bugs
* Improves editor auto-completion
* Makes code more reliable

### Example

```jsx
<Message name="Jagat" message="Hello there!" />
```

```tsx
type MessageProps = {
  name: string;
  message: string;
};

const Message = ({ name, message }: MessageProps) => {
  return (
    <div>
      <p>{name}</p>
      <p>{message}</p>
    </div>
  );
};
```

---
## 8. useState Hook

The **useState hook** allows components to manage **local state.**

* State updates trigger re-renders
* Useful for counters, forms, toggles, etc.

```jsx
const [count, setCount] = useState(0);
```
```jsx
<button onClick={() => setCount(count + 1)}>
  Increment
</button>
```

## 9. useEffect Hook

The useEffect hook is used to handle side effects such as:

* Data fetching
* DOM updates


### Example

```jsx
useEffect(() => {
  fetchData();
}, []);
```

## useEffect Dependency Array Syntax Types

The second argument of `useEffect` determines **when the effect runs**. There are **three main types**:

---

### 1. Empty Array `[]` — Run Once on Mount

```ts
useEffect(() => {
  console.log("Runs only once when component mounts");
}, []);
```
* -Called only once after the first render

### 2. No Array (Omitted) — Run on Every Render
```tsx
useEffect(() => {
  console.log("Runs after every render");
});
```
* -No dependency array means effect runs after every render.
* Use carefully — can cause infinite loops if you update state inside without conditions.

### 3. Array with Dependencies [dep1, dep2] — Run When Dependencies Change
```tsx
import { useState, useEffect } from "react";

const [count, setCount] = useState<number>(0);
const [name, setName] = useState<string>("");

useEffect(() => {
  console.log(`Count or Name changed: ${count}, ${name}`);
}, [count, name]);
```
* Runs only when one of the dependencies changes

| Dependency Array       | Runs When                       | Notes                                            |
|------------------------|---------------------------------|-------------------------------------------------|
| `[]`                   | Once, after first render        | Mount only                                      |
| *(omitted)*            | After **every render**          | Can cause infinite loops if state changes inside |
| `[dep1, dep2, ...]`    | When **any dependency changes** | Best for tracking specific state/props         |

---

### 🚀 Happy Learning
### Happy coding 🚀
