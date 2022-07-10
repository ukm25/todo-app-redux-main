// REDUCERS
// la 1 function
const initValue = {value: 0};

const rootReducer = (state = initValue, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {
                ...state,
                state: state.value + 1,
            }
        case 'todoList/increment':
            return {
                ...state,
                value: state.value + action.payload,
            }
        // không được gán trực tiếp state.value = state.value + 1
        // không sử dụng hàm bất đồng bộ: Math.random(), Date.now()
        // không sử dụng side effect: request toi server,...
        // vì mỗi lần thực thi tạo 1 giá trị khác
        // nên mình không thể dự đoán được giá trị trả về, kết quả cuối cùng

        // PURE FUNCTION

        // time-travel debugging
        default:
            return state;
    }
}

// ACTION

// là 1 object
const INCREMENT = {
    type: 'todoList/increment',
    payload: 10,
}
    // Action creators
    const incrementCreator = (data) => {
        return {
            type: 'todoList/increment',
            payload: data,
        };
    }

    incrementCreator(10);

// DISPATCH
// la 1 function

dispatch(INCREMENT)
dispatch(incrementCreator(15));