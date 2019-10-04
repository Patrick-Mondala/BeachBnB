import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import {fetchBench, createBench } from './util/bench_api_util';
import {fetchAllBenches} from './actions/bench_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // window.fetchBench = fetchBench;
    window.fetchBenches = fetchAllBenches;
    window.createBench = createBench;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store} />, root);
});