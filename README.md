 Dev Stack

This is a web application that helps developers explore different types of technologies. Users can choose the technologies they need and add them to their own development stack.

--> Used Technologies <--

1. React
2. TypeScript
3. Tailwind CSS
4. DaisyUI
5. React Toastify
6. Vite

--> Features <--

1. Explore Technologies
2. Build Your Stack
3. Easy Stack Management

---------------------------------------------------

### 1. What is JSX, and why is it used in React?

Ans : Jsx is a syntax that write html like code inside JS . We use JSX to make our code easier .

### 2. What is the difference between props and state?

Ans : Pros are used to pass data parents to child component . State is used to store and manage data .

### 3. What does the useState hook do, and where did you use it in this project?

Ans: useState is used to create and manage changing data is a component . i use it in technologies component .

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

Ans : useEffect is used to perform side effect like fetching data . in this project i didn't use it . i used fetch() with use() to load data .

### 5. Why does every item in a .map() list need a unique key prop?

Ans: React use the key to identify each item is a list . Unique key help to update the correct item when the list changes

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Ans : Conditional rendering means showing different types of content based on a condition . i use in the Your Stack section . it show no technology selected when there are no selected technology.

            Example:-

              {selectedTechnologies.length === 0 ? (
              
                <p className="text-center text-gray-400 p-10">
                  Your Stack is empty
                </p>
            ) : (
              selectedTechnologies.map((technologies) => (
                <div
                
                </div>
              )))}
### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Ans : A parent send data to a child through props . a child can send information back to parent by calling function that the parent passes through props .

