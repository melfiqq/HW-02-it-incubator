import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const sortedState = [...state].sort((a, b) => {
                return action.payload === 'up'
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name);
            });
            return sortedState;
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload);
        }
        default:
            return state;
    }
}