class RandomCocktail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cocktailData: undefined
        }
    }

    getRandom = async ()=>{
        const dataRepository = new DataRepository();
        const res = await dataRepository.getRandomCocktail();
        console.log(res);
        this.setState({...this.state, cocktailData: res})
    }

    render() {
        return (
            <div>
                <button onClick={this.getRandom} >Get random</button>
                {
                    this.state.cocktailData?
                        <span>{this.state.cocktailData.name}</span>:
                        <h4>Not defined</h4>
                }
            </div>
        );
    }
}
