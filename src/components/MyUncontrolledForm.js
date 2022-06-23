import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Input } from "reactstrap";

class MyUncontrolledForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isCase:false
        }
        
    }

    changeIsCase() {
        const value = this.inputText.value;
        this.setState(isCase: !this.state.isCase);
        if(this.state.isCase) this.inputText.value = value.toUperCase();
        else this.inputText.value = value.toLowerCase();
    }
    render() {
        return(
            <div className="container">
                <div className="row m-5">
                    <div className="col-2 col-sm-2">
                        <Form>
                            <p><Input type="text" innerRef={inputControl}></Input></p>
                        </Form>

                    </div>
                </div>
            </div>
        )
    }
}