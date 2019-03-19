import React from 'react'
import CreateForm from 'components/CreateForm.react'
import RepoLists from 'components/RepoLists.react'

class Dashboard extends React.Component {
    render() {
        return (
            <>
                <CreateForm />
                <RepoLists />
            </>
        )
    }
}

export default Dashboard