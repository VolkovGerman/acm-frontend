import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    handleLoadingCurrentCompetitionSection,
    handlePostCompetitionSection,
    handlePutCompetitionSection,
    flushCompetitionSection
} from '../../../actions/competitionSections';
import {setPageTitle} from '../../../actions/interfaces';
import CompetitionSectionCreate from './CompetitionSectionCreate';

const mapStateToProps = (state) => {
    return {
        competitionSections: state.competitionSections
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingCurrentCompetitionSection: bindActionCreators(handleLoadingCurrentCompetitionSection, dispatch),
        handlePostCompetitionSection: bindActionCreators(handlePostCompetitionSection, dispatch),
        handlePutCompetitionSection: bindActionCreators(handlePutCompetitionSection, dispatch),
        flushCompetitionSection: bindActionCreators(flushCompetitionSection, dispatch),
        setPageTitle: bindActionCreators(setPageTitle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionSectionCreate);
