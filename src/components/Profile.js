import React from "react";
import { Redirect } from "react-router-dom";

function Profile({match}) {
    return (
        <div>
            <h2>url: {match.url}</h2>
            <h2>path: {match.path}</h2>
            <h2>param: {match.params.isLogin}</h2>
        </div>
    )
}

export default Profile;