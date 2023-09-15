export default function Favorite(props) {

    // props(properties)
    // We use props in React to 
    // pass data from one component to another
    // (from a parent component to a child component(s)).
    // props is just a shorter way of saying properties.
    // The are useful when you want the flow of data in your
    // app to be dynamic.

    let Myname = 'Debbieeee'
    return(
        <>

                My name is {Myname}
            <h1>My name is {props.name}, my favorite person is Debbie</h1>
        </>
    )
}