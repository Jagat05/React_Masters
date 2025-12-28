## 01-reactbasic

### 01. Fundamentals & Core Concepts
- React basics 
- App Routing in Next.js (App Router, folder-based routing)
- Tailwind CSS for styling
- Modern React patterns and best practices.

### 02. Project & Component Organization
- Components structure in Next.js
- Organizing different pages under `( … )` folders in App Router (route groups)
  - **Note:** `( … )` folder groups **do not affect the URL**, but help organize layouts and pages

---

## Project Structure Example
app/
 └─ (userprofile)/
     ├─ calls/page.tsx
     ├─ chats/page.tsx
     └─ channels/page.tsx

### 03. Props
- JSX and component rendering
- **Props (Properties)**
  - Passing data from parent to child components
  - Using props to make components reusable
  - Destructuring props for clean code
  - Passing strings, numbers, booleans, objects, arrays, and functions as props
  - Understanding read-only nature of props