import axios from "axios"
export function fetchAllTimeUsers() {
    return function (dispatch) {
        dispatch({ type: "FETCH_ALL_TIME_USERS_STARTED" })
        axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
                .then((response) => {
                    dispatch({type: "FETCH_ALL_TIME_USERS_FULFILLED",payload:response.data});
                })
                .catch((err) => {
                     dispatch({type: "FETCH_ALL_TIME_USERS_REJECTED",payload:err});
                })
    }
} 
export function fetchLastMonthUsers() {
    return function (dispatch) {
        dispatch({ type: "FETCH_LAST_MONTH_USERS_STARTED" })
        axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
                .then((response) => {
                    dispatch({type: "FETCH_LAST_MONTH_USERS_FULFILLED",payload:response.data});
                })
                .catch((err) => {
                     dispatch({type: "FETCH_LAST_MONTH_USERS_REJECTED",payload:err});
                })
    }
}
export function sortByAllTime(){
    return {type:"SORT_BY_ALL_TIME"}
}
export function sortByLastMonth(){
    return {type:"SORT_BY_LAST_MONTH"}
}