import React from "react";


class Welcome extends React.Component {
    constructor(props){ //truyền data từ bên ngoài vào obj
        super(props);
    }  

    render(){   //trỉnh bày nội dung ra web
        return (
            <h1>Kha doi</h1>
        );
    }
}

export default Welcome; //có quyền đặt name khác component