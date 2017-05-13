import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingCompetitionSections, handleDeleteCompetitionSections} from '../../../actions/competitionSections';
import {setPageTitle} from '../../../actions/interfaces';
import CompetitionSectionsList from './CompetitionSectionsList';

const mapStateToProps = (state) => {
    return {
        competitionSections: state.competitionSections,
        interfaces: state.interfaces
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingCompetitionSections: bindActionCreators(handleLoadingCompetitionSections, dispatch),
        handleDeleteCompetitionSections: bindActionCreators(handleDeleteCompetitionSections, dispatch),
        setPageTitle: bindActionCreators(setPageTitle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionSectionsList);
