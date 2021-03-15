import React, {Component} from 'react'
import Table from "react-bootstrap/Table";

class Albums extends Component {

    constructor(props) {
        super(props)
        this.state = {
            albums: [],
            isLoading: false,
            isError: false
        }
    }

    async componentDidMount() {
        this.setState({isLoading: true})
        const response = await fetch("https://jsonplaceholder.typicode.com/albums")
        if (response.ok) {
            const albums = await response.json()
            this.setState({albums, isLoading: false})
        } else {
            this.setState({isError: true, isLoading: false})
        }

    }

    renderTableHeader = () => {
        return Object.keys(this.state.albums[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
    }

    renderTableRows = () => {
        return this.state.albums.map(album => {
            return (
                <tr key={album.id}>
                    <td>{album.id}</td>
                    <td>{album.userId}</td>
                    <td>{album.title}</td>
                </tr>
            )
        })
    }

    render() {
        const {albums, isLoading, isError} = this.state

        if (isLoading) {
            return <div>Loading...</div>
        }

        if (isError) {
            return <div>Error</div>
        }


        return albums.length > 0 ? (
            <Table striped bordered hover size="sm" responsive="xl">
                <thead>
                <tr>
                    {this.renderTableHeader()}
                </tr>
                </thead>
                <tbody>
                {this.renderTableRows()}
                </tbody>
            </Table>
        ) : (
            <div>
                No data.
            </div>
        )
    }
}

export default Albums