// Componet : 재사용 가능한 코드 조각(HTML, CSS, JS)

class Lists extends React.Component {
    render() {
        const users = [{
                name: '홍길동',
                age: 35
            },
            {
                name: '홍길만',
                age: 45
            },
            {
                name: '홍길순',
                age: 25
            },
        ]
        return (
            <ul>
                <li>
                    {
                        users.map(user => (
                            <li> {users.name} | {users.age} </li>
                        ))
                    }

                </li>

            </ul>

        )
    }
}


ReactDOM.render( < Lists / > , document.querySelector('#app'));