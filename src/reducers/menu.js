const initialMenu = [
    {
        link: '/',
        label: 'Чемпионат БГУИР 2016'
    },
    {
        link: '/about',
        label: 'Чемпионат БГУИР'
    },
    {
        link: '/about',
        label: 'Соревнования'
    },
    {
        link: '/about',
        label: 'Школа олимпиадника'
    },
];

export default function menu(state = initialMenu, action) {
    if (action.type === 'ADD_MENU_ITEM') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}
