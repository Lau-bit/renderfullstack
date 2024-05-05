const Content = (props) => {
    console.log(props.parts[0].name);

    const numbers = props.parts.map((part) => part.exercises);
    console.log(numbers);
    const total = numbers.reduce((acc, curr) => acc + curr);

    
    return (
        <>
        <h2>Parts</h2>
        {props.parts.map((part => (
                <li key={part.id} style={{listStyleType: "none"}}>{part.name} {part.exercises}</li>
        )))}
        <p>Total of {total} exercises</p>
        </>
    )
}

export default Content;