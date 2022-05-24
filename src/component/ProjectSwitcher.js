import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default class ProjectSwitcher extends React.Component {
    constructor(props) {
        super(props);
        // Set initial states
        this.state = {
            owner: "cyrus92"
        };    
        // bind Change Owner event
        this.handleChangeOwner = this.handleChangeOwner.bind(this);
        // bind Change Repo event
        this.handleChangeRepo = this.handleChangeRepo.bind(this);
    }

    // Change Owner event
    handleChangeOwner(e) {
        this.setState({owner: e.target.value})
        this.setState({totalCommits: ""})
        this.setState({commits: ""})
    }

    // Change Repo event
    handleChangeRepo(e) {
        this.setState({repo: e.target.value})
        this.setState({totalCommits: ""})
        this.setState({commits: ""})
    }

    // Render component
    render() {
        return (
            <div className="row" >
                {/* Input to change owner and fetch commits */}
                <div className="col-md-5" >
                    <label className="float-left" >Owner</label>
                    <input
                        id="owner"
                        type="text"
                        placeholder="Enter owner name"
                        className="form-control"
                        onChange={this.handleChangeOwner}
                        required
                    />
                </div>
                
                <div className="col-md-7" >
                    <div className="row" >
                        {/* Input to change repo and fetch commits */}
                        <div className="col-md-8" >
                            <label className="float-left" >Repo</label><br/>
                            <input
                                id="repo"
                                type="text"
                                placeholder="Enter repo name"
                                className="form-control"
                                onChange={this.handleChangeRepo}
                                required
                            />
                            {/* <Button variant="primary">Show commits</Button> */}
                        </div>
                        {/* Button to start updating commitsList */}
                        <div className="col-md-4" >
                            <br/>
                            <Button variant="primary">Show commits</Button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}