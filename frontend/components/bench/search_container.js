import React from 'react';
import {connect} from 'react-redux';
import BenchMap from './bench_map';
import Search from './search';
import {fetchAllBenches} from '../../actions/bench_actions';

const mapStateToProps = state => {
    return ({
        benches: Object.values(state.entities.benches)
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchBenches: () => dispatch(fetchAllBenches())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(() => {
    return (
        <div>
            <BenchMap />
            <Search />
        </div>
    )
})
 
