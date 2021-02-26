import React from 'react';
import './App.css';
import Header from '../components/Header'; 
import Table from "../components/Table"; 

const BASEURL = "https://randomuser.me/api/?results=20&nat=us,dk,fr,gb"; 


export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
