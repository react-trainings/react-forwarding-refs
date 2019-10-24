# react-forwaring-refs

Example on how to use forwarding ref pattern

-   Step 1: Create a class component say UserInput
-   Step 2: Create a ref that would be passed to the child component whose reference you need in the parent component. I - e.g.
    `inputReference =React.createRef()`
-   Step 3: Create a child functional component that would be wrapper over input element say Input component
-   Step 4: Pass the Input component to `React.ForwardRef((props, ref) => <input type="text" ref={ref}>)`
-   Step 5: You can now manipulate the Input component from UserInput component by using this.inputReference.current
