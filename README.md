
# Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path"


- Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks
- useState() -> superpowerful state variable in react.
- useEffect() 

- we have to import useState as named Import.
- useState helps to maintain the state of component.
- whenever the state variable update , react re-render the component. 

# Shimmer UI
- basically we load a fake page until we get data from API.
- if we want to various shimmer ui cards then;
- Array.from({length:15}).map((el) => return {
    <div classname = "shimmer-card"></div>
})
- above array.from method will create a array of length 15 and will return 15 simmer card;

# Routing in Web App 
- There are two types of Routing in Web App 
- Client Side Routing
- Server Side Side Routing 

- Server Side Routing -> is that when we made a network call and that page u have called is coming from server.

- Client Side Routing -> is that when we don't make a network call.

# React is a single page application 
- React is a single page application becoz it's just one page and component just get interchanged via Client Side Routing.

# User and UserClass components are made just to understand functional and class based components.

# Redux Toolkit
- install @reduxjs/toolkit and react-redux 
- Build our Store
- Slice (cart Slice)
- dispatch(action)
- selector