const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);

const App = () => {
    return (<React.Fragment>
        <RandomCocktail/>
    </React.Fragment>);
}


root.render(<App/>);
