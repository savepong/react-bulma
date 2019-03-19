import React from 'react'

class CreateForm extends React.Component {
    render() {
        return (
            <div className="section">
                <form>
                    <div className="field">
                        <label htmlFor="" className="label">Add Repository</label>
                        <p className="control">
                            <input className="input is-large" type="repoName" placeholder="Enter Repository Name"></input>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateForm