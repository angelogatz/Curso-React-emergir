import MyComponent from "./MyComponent";

// arquivo de estilo
const FirstComponent = () => {
    //essa função faz:
    /*
        multiplas linhas
    */
    return(
        <div>
            {/*comentário dentro do component*/}
            <h1>My First Component</h1>
            <p className="text">Meu texto</p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;