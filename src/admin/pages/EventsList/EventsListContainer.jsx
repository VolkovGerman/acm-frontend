import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingEvents, handleDeleteEvents} from '../../actions/events';
import {setPageTitle} from '../../actions/interfaces';
import EventList from './EventList';

const mapStateToProps = (state) => {
    return {
        events: state.events,
        interfaces: state.interfaces
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingEvents: bindActionCreators(handleLoadingEvents, dispatch),
        handleDeleteEvents: bindActionCreators(handleDeleteEvents, dispatch),
        setPageTitle: bindActionCreators(setPageTitle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
