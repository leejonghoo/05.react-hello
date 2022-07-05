// Componet : 재사용 가능한 코드 조각(HTML, CSS, JS)
class Booldook extends React.Component {
    render() {
        return <div>Booldook</div>
    }
}

class Hello extends React.Component {
    render() {
        // 코드를 작성 
        const str = 'Hello jhoolee';

        // return JSX 
        return (
            <h1>
                { str }
                <Booldook />
            </h1>
        )
    }
}

ReactDOM.render(<Hello />, document.querySelector('#app'));


