import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state= initialState.courseReducer, action) {
    switch (action.type) {
        case types.TOGGLE_SHOW_IMAGE:
            return {
                ...state,
                showImage: !state.showImage
            };
        case types.LOAD_COURSES_SUCCESS:
            return {
                ...state,
                data: action.courses,
            };
        case types.CREATE_COURSE_SUCCESS:
            return {
                ...state,
                data: [...state.data, action.course],
            }
        case types.UPDATE_COURSE_SUCCESS:
            return {
                ...state,
                data: state.data.map((course) => action.course.id === course.id ? action.course : course),
            }
        default:
            return state;
    }
}