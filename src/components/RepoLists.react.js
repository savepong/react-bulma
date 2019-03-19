import React from 'react'
import RepoListItem from './RepoListItem.react'

class RepoLists extends React.Component {
    
    state = {
        repositoryNames: [
            "facebook/react",
            "vuejs/vue",
            "angular/angular"
        ]
    }

    render() {
        const repositoryItems = this.state.repositoryNames.map( (name) => {
            return <RepoListItem repoName={name} key={name} />
        })
        return (
            <div className="section">
                { repositoryItems }
            </div>
        )
    }
}

export default RepoLists