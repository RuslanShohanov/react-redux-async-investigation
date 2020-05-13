import { connect } from 'react-redux';

import { AsyncAppComponent } from '../components/async-app-component';
import { AppState } from '../store/interfaces';

const mapStateToProps = (state: AppState) => {
    const { selectedSubreddit, postsBySubreddit } = state;
    const { isFetching, lastUpdated, items } = postsBySubreddit[
        selectedSubreddit
    ] || { isFetching: true, items: [] };

    return {
        selectedSubreddit,
        posts: items,
        isFetching,
        lastUpdated,
    };
};

export const AsyncApp = connect(mapStateToProps)(AsyncAppComponent);
