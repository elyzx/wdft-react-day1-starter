// Once you link both React and ReactDOM libraries 
// you will have access to two global variables `React` and `ReactDOM`

console.log('Page loads')

// enables us to create react applications
console.log('React library ', React)

// enables us to render applications on the DOM
console.log('ReactDOM library ', ReactDOM)

// let myHeader = React.createElement('h1', null, 'Hello World')

// A simple functional component that returns a JSX element
function MyCode(){
    return <h2>Look Mum, no hands!</h2>
}

// React always needs a parent element

function HelloWorld(){
    return <h3>Ooooft</h3>
}

class Description extends React.Component {
    render(){
        return <div>Hi, I am Ellen</div>
    }
}

let myHeader = (
    <div>
        <h1>Hello</h1>
        {/* two ways to invoke componenets */}
        <MyCode />
        <HelloWorld ></HelloWorld>
        <Description />
    </div>
) 

// To render the root of the application - only once
ReactDOM.render(myHeader, document.querySelector('#myRoot'))