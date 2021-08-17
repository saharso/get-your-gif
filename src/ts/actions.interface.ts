import ActionsEnum from '../models/actions.enum';

export default interface IAction {
    type: ActionsEnum,
    payload?: any,
}