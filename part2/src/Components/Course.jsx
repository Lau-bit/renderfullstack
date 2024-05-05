import Header from "./Header"
import Content from "./Content"

const Course = (props) => {
    return (
        <>
        {props.courses.map((course => (
        <ul key={course.id}>
        <Header title={course.name}></Header>
        <Content parts={course.parts}></Content>
        </ul>
        )))}

        </>
    )
}

export default Course