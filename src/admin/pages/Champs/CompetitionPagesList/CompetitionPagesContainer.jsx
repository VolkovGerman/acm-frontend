import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingCompetitionPages, handleDeleteCompetitionPages} from '../../../actions/competitionPages';
import {setPageTitle} from '../../../actions/interfaces';
import CompetitionPagesList from './CompetitionPagesList';

const mapStateToProps = (state) => {
    return {
        competitionPages: state.competitionPages,
        interfaces: state.interfaces
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingCompetitionPages: bindActionCreators(handleLoadingCompetitionPages, dispatch),
        handleDeleteCompetitionPages: bindActionCreators(handleDeleteCompetitionPages, dispatch),
        setPageTitle: bindActionCreators(setPageTitle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionPagesList);
