import React from "react";
import { render } from "react-dom";
import App from "./views/app";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import routes from './routes';
render(<Router routes={routes}/>, document.getElementById('app'));
