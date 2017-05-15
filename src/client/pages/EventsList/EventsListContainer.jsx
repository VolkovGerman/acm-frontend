import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingEvents} from '../../actions/events';

import EventsList from './EventsList';

const mapStateToProps = (state) => {
    return {
        events: state.events,
        langs: state.langs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingEvents: bindActionCreators(handleLoadingEvents, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
