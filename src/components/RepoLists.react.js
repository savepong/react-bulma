import React from 'react'
import RepoListItem from './RepoListItem.react'

class RepoLists extends React.Component {
    render() {
        return (
            <div className="section">
                <RepoListItem />
                <RepoListItem />
                <RepoListItem />
            </div>
        )
    }
}

export default RepoLists