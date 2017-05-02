import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingCurrentEvent, handlePostEvent, handlePutEvent, flushEvent} from '../../actions/events';
import {setPageTitle} from '../../actions/interfaces';
import EventCreate from './EventCreate';

const mapStateToProps = (state) => {
    return {
        events: state.events
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingCurrentEvent: bindActionCreators(handleLoadingCurrentEvent, dispatch),
        handlePostEvent: bindActionCreators(handlePostEvent, dispatch),
        handlePutEvent: bindActionCreators(handlePutEvent, dispatch),
        flushEvent: bindActionCreators(flushEvent, dispatch),
        setPageTitle: bindActionCreators(setPageTitle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCreate);
