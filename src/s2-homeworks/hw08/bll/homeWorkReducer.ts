import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const sortedState = [...state].sort((a, b) => {
                if (action.payload === 'up') {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
            });
            return sortedState;
        }
        case 'check': {
            const filteredState = state.filter(user => user.age >= action.payload);
            // Sort the filtered users by age in descending order
            return filteredState.sort((a, b) => b.age - a.age);
        }
        default:
            return state;
    }
}