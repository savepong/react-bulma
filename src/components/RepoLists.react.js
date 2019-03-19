import React from 'react'
import RepoListItem from './RepoListItem.react'

class RepoLists extends React.Component {
    render() {
        return (
            <div className="section">
                <RepoListItem repoName="facebook/react" />
                <RepoListItem repoName="vuejs/vue"/>
                <RepoListItem repoName="angular/angular"/>
            </div>
        )
    }
}

export default RepoLists