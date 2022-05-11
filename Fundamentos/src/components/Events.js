const Events = () => {

    const handleMyEvent = (event) => {
        console.log(event)
    };

    const renderSomething = (x) => {
        if(x){
            return <h1>renderizando isso!</h1>
        }else{
            return <h1>renderizando tambem isso!</h1>
        }
    };

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou dentro do botão")}>Clique aqui</button>
                <button onClick={() => {
                    if(true){
                        console.log("Isto é errado")
                    }
                }}>Clique aqui</button>
            </div>
            {renderSomething(true)}
            {renderSomething()}
        </div>
    );
};

export default Events;