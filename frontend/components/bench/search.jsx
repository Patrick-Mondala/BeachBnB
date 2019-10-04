import React from 'react';
import BenchIndex from './bench_index';
import { fetchAllBenches } from '../../actions/bench_actions';

export default ({benches, fetchBenches}) => {
    return (
        <div>
            <BenchIndex benches={benches} fetchBenches={fetchAllBenches}  />
        </div>
    )
};