Introduction
This is a complete YouTube course playlist by The Net Ninja.

GitHub repo - https://github.com/iamshaunjp/react-context-hooks

YouTube playlist - React Context & Hooks Tutorial

Note: this will not be a detailed note of this tutorial. This is because I am already familiar on most React concepts after taking CodingAddict's React Course and React Projects, which are both documented.

Accessing Context API
There are 3 ways to access Context API:

Context via contextType
this only works on class-based components who want to access context
to consume context using this method; import the context file in to the component, then inside the component:
    static contextType = ThemeContext;
Note: static contextType is from react, and ThemeContext is the instantiation of Context object you created.

Note: use this.context to access the values in the context.

Consumer
when we use .createContext() to instantiate a Context Object, it comes with Provider and Consumer components
this approach can be used on both class and function based components
here is how we consume context using .Consumer ( inside Return )
<ThemeContext.Consumer>
    {themeContext = > {
        const { ...destructured properties... } = themeContext;
        return (
            // write your jsx here
        )
    }}
</ThemeContext.Consumer>
You can consume multiple context with this method, that is by nesting one Consumer tag into another, like so:
<AuthContext.Consumer>
    {authContext => {
        <ThemeContext.Consumer>
            {themeContext = > {
                const { ...destructured properties... } = authContext;
                const { ...destructured properties... } = themeContext;
                return (
                    // write your jsx here
                )
            }}
        </ThemeContext.Consumer>
    }}

</AuthContextt.Consumer>
Using useContext() Hook
Read my notes here Context API and useContext() Hook to review how to use this method.
Here is the Reading List - React Project for this tutorial series.
