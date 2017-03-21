import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import Breadcrumbs from '../BreadcrumbsComponent/Breadcrumbs';

require('./ChampCustom.scss');

const pageParams = {
    champLogo: require('../../../../static/images/logo/acm_logo.png'),
    breadcrumbs: [
        {
            link: '/',
            name: 'Главная'
        },
        {
            link: '/champs',
            name: 'Чемпионат БГУИР'
        },
        {
            link: '/champs/1',
            name: 'Чемпионат БГУИР 2016'
        },
        {
            link: '/champs/1/',
            name: 'Общая информация'
        },
    ],
    customText: 'Первый отборочный тур проводится в заочной форме.<br>Его продолжительность составляет 96 часов (4 дня). Жюри имеет право продлить соревнования в случае каких-либо непредвиденных обстоятельств. Для прохождения на следующий этап участникам необходимо решить не менее половины задач. <br>Команды, чьи решения имеют НЕСОМНЕННЫЕ ПРИЗНАКИ «СПИСЫВАНИЯ» ИСХОДНОГО ТЕКСТА программы, при подведении итогов тура будут дисквалифицированы. В случае особенно явных нарушений участники, отославшие такие решения, также могут быть дисквалифицированы для участия в чемпионате на следующий год. Первый отборочный тур является обязательным для команд БГУИР и школьных команд. Команды других вузов Республики Беларусь и стран зарубежья приглашаются для участия сразу во втором отборочном туре соревнования (полуфинале), однако также могут принимать участие в четвертьфинале.<br>Команды средних общеобразовательных учреждений (школ, гимназий, лицеев), в состав которых входит более половины призеров заключительного этапа республиканской олимпиады по информатике (диплом 1, 2 и 3 степени), допускаются к участию в полуфинале без прохождения отборочного этапа.'
};

class ChampsCustomPage extends Component {

    componentDidMount = () => {
        this.props.updateLoadedStatus(true, 1);
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render() {
        return (
            <div className="ChampsCustom">
                <Breadcrumbs breadcrumbs={pageParams.breadcrumbs}/>
                <div className="ChampCustom__content">
                    <div className="customPage">
                        <div className="customPage__header">
                            <div className="customPage__title">Общая информация</div>
                            <div className="historyBack">
                                <Link className="historyBack__btn" to="/champs/1">{this.props.lang.back}</Link>
                            </div>
                        </div>
                        <div className="customPage__content" dangerouslySetInnerHTML={{__html: pageParams.customText}}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        lang: state.lang
    })
)(ChampsCustomPage);
