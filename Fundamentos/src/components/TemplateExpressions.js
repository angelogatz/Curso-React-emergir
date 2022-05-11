const TemplateExpressions = () => {

    const data = {
        name: "Angelo",
        age: 25,
        job: "Developper",
    }

    return(
        <div>
            <h1>Hello {data.name}</h1>
            <h2>Your age is {data.age}</h2>
            <h3>And you work as {data.job}</h3>
            {console.log("JSX react")}
        </div>
    )
}

export default TemplateExpressions