import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    handleLoadingCurrentCompetitionPage,
    handlePostCompetitionPage,
    handlePutCompetitionPage,
    flushCompetitionPage
} from '../../../actions/competitionPages';
import {setPageTitle} from '../../../actions/interfaces';
import CompetitionPageCreate from './CompetitionPageCreate';

const mapStateToProps = (state) => {
    return {
        competitionPages: state.competitionPages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingCurrentCompetitionPage: bindActionCreators(handleLoadingCurrentCompetitionPage, dispatch),
        handlePostCompetitionPage: bindActionCreators(handlePostCompetitionPage, dispatch),
        handlePutCompetitionPage: bindActionCreators(handlePutCompetitionPage, dispatch),
        flushCompetitionPage: bindActionCreators(flushCompetitionPage, dispatch),
        setPageTitle: bindActionCreators(setPageTitle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionPageCreate);
