import React, { Component } from "react";
import Axios from "axios";

class Request extends Component {

    serverURL = 'http://192.168.8.182:8000'

    Register(data) { 
        const _API = '/register';
        return Axios.post(this.serverURL + _API, data);
    };

    Login(data) {
        const _API = '/login';
        return Axios.post(this.serverURL + _API, data);
    };

    List() {
        const _API = '/cropList';
        return Axios.get(this.serverURL + _API);
    }

    Recommendations(data) {
        const _API = '/recommendation';
        return Axios.post(this.serverURL + _API, data);
    }

    Conditions(data) {
        const _API = '/marketConditions';
        return Axios.post(this.serverURL + _API, data);
    }

    Advice() {
        const _API = '/advisiory';
        return Axios.get(this.serverURL + _API);
    }

    //-----------------------------------------------------------
    Add_Crop(data) {
        const _API = '/add';
        return Axios.post(this.serverURL + _API, data);
    }

    Add_Market(data) {
        const _API = '/condition';
        return Axios.post(this.serverURL + _API, data);
    }
}

export default Request;