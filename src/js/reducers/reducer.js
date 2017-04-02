
const initalState = {
    users: [],
    sortedByAllTime: true
}
var bestUsersLastMonth;
var bestUsersAllTime;
export default function reducer(store = initalState, action) {
    switch (action.type) {
        case "FETCH_LAST_MONTH_USERS_STARTED": {
            console.log("started fetching last month users.")
            break
        }
        case "FETCH_LAST_MONTH_USERS_FULFILLED": {
            const users = action.payload
            bestUsersLastMonth = users
            break
        }
        case "FETCH_LAST_MONTH_USERS_REJECTED": {
            alert("There was a problem with fetching the users.")
            break
        }
        case "FETCH_ALL_TIME_USERS_STARTED": {
            console.log("started fetching all time users")
            break

        }
        case "FETCH_ALL_TIME_USERS_FULFILLED": {
            const users = action.payload
            bestUsersAllTime = users
            break
        }
        case "FETCH_ALL_TIME_USERS_REJECTED": {
              alert("There was a problem with fetching the users.")
        }
        case "SORT_BY_ALL_TIME": {
            if (!store.sortedByAllTime) {
                return {...store,users:bestUsersAllTime,sortedByAllTime:true}
            }
            break
        }
        case "SORT_BY_LAST_MONTH": {
            if (store.sortedByAllTime) {
               return{...store,users:bestUsersLastMonth,sortedByAllTime:false}
            }
            break
        }
    }
    return store;
}