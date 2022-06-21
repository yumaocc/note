import { useJson, useSort } from '../Hooks'
import action from './action'

const initState = {
    note: {//笔记
        data: [{
            headline: '小明',
            content: '打豆豆',
            id: '2',
            date: '6月1号',
            done: false,
            classFy: {
                name: '个人',
                color: '#d9f7be'
            }
        },],
        notClassData: {//未定义数据
            background: '#f0f0f0',
            title: '未分类',
            data: []
        },
        selfData: {
            background: '#d9f7be',
            title: '个人',
            data: []
        },
        jobData: {
            background: '#ffccc7',
            title: '工作',
            data: []
        },
        lifeData: {
            background: '#ffffb8',
            title: '生活',
            data: []
        },
    },
    todo: {//待办
        data: [
            {
                content: '吃饭',
                id: '1',
                done: false
            }
        ],
        switch: {
            checkboxShow: false
        }
    },
    switch: { //组件显影的开关
        searchBtn: true,
        header: true,
        headline: true,
        footer: true,
        checked: false,
        deleteShow: false,
        search: true,
        checkedShow: false,
        layout: true,
        addBtn: true,
        list: true,
    }
}
const {
    searchBtn,
    header,
    headline,
    footer,
    revise,
    checkedChange,
    deleteShow,
    search,
    checkedShow,
    del,
    anyCheckboxFalse,
    anyCheckboxTrue,
    sort,
    addNote,
    layout,
    addBtn,
    list,
    checkboxShow,
    todoDel,
    todoAdd,
} = action()
export default function reducer(state = initState, action) {
    function add(action) { //增加一篇日记
        const name = action.data.classFy.name
        action.data.classFy.color = 'f0f0f0'
        switch (name) {
            case '未分类':
                state.note.notClassData.data.push(action.data)
                break
            case '个人':
                state.note.selfData.data.push(action.data)
                break
            case '工作':
                state.note.jobData.data.push(action.data)
                break
            case '生活':
                state.note.lifeData.data.push(action.data)
                break
        }
    }
    function modification(action) {//修改一篇日记
        const name = action.data.classFy.name
        const id = action.data.id
        switch (name) {
            case '未分类':
                state.note.notClassData.data.push(action.data)
                state.note.jobData.data = state.note.jobData.data.filter(e => e.id !== id)
                state.note.lifeData.data = state.note.lifeData.data.filter(e => e.id !== id)
                state.note.selfData.data = state.note.selfData.data.filter(e => e.id !== id)
                break
            case '个人':
                state.note.selfData.data.push(action.data)
                state.note.jobData.data = state.note.jobData.data.filter(e => e.id !== id)
                state.note.lifeData.data = state.note.lifeData.data.filter(e => e.id !== id)
                state.note.notClassData.data = state.note.notClassData.data.filter(e => e.id !== id)
                break
            case '工作':
                state.note.jobData.data.push(action.data)
                state.note.selfData.data = state.note.selfData.data.filter(e => e.id !== id)
                state.note.lifeData.data = state.note.lifeData.data.filter(e => e.id !== id)
                state.note.notClassData.data = state.note.notClassData.data.filter(e => e.id !== id)
                break
            case '生活':
                state.note.lifeData.data.push(action.data)
                state.note.selfData.data = state.note.selfData.data.filter(e => e.id !== id)
                state.note.jobData.data = state.note.jobData.data.filter(e => e.id !== id)
                state.note.notClassData.data = state.note.notClassData.data.filter(e => e.id !== id)
                break
        }
    }
    switch (action.type) {
        case addNote://新增加一篇日记
            state.note.data.push(action.data)
            let newAction = useJson(action)
            add(newAction)
            return useJson(state)
        case search: //搜做框
            state.switch.search = !state.switch.search
            return useJson(state)
        case searchBtn://搜索页面的按钮
            state.switch.searchBtn = !state.switch.searchBtn
            return useJson(state)
        case header://头部
            state.switch.header = !state.switch.header
            return useJson(state)
        case headline://标题
            state.switch.headline = !state.switch.headline
            return useJson(state)
        case footer://页脚
            state.switch.footer = !state.switch.footer
            return useJson(state)
        case checkedShow://单选框
            state.switch.checkedShow = !state.switch.checkedShow
            return useJson(state)
        case revise: //修改日记
            const nw = useJson(action)
            let s = state.note.data.map(e => {
                if (e.id === action.data.id) {
                    e = action.data
                }
                return e
            })
            modification(nw)
            state.note.data = s
            return useJson(state)
        case checkedChange://单选框是否选中
            state.note.data.map(e => {
                if (e.id === action.id) {
                    e.done = !e.done
                }
                return e
            })
            return useJson(state)
        case deleteShow: //删除按钮的显示和影藏
            state.switch.deleteShow = !state.switch.deleteShow
            return useJson(state)
        case del: //删除一篇日记
            const newState = state.note.data.filter(e => e.done !== true)
            state.note.data = newState
            return useJson(state)
        case anyCheckboxFalse: //全选
            state.note.data.forEach(e => e.done = false)
            return useJson(state)
        case anyCheckboxTrue: //全选取消
            state.note.data.forEach(e => e.done = true)
            return useJson(state)
        case sort:  //排序
            state.note.data = useSort(state.note.data)
            return useJson(state)
        case layout:
            state.switch.layout = !state.switch.layout
            return useJson(state)
        case addBtn://新增按钮的显示和影藏
            state.switch.addBtn = !state.switch.addBtn
            return useJson(state)
        case list://新增按钮的显示和影藏
            state.switch.list = !state.switch.list
            return useJson(state)
        case checkboxShow:
            state.todo.switch.checkboxShow = !state.todo.switch.checkboxShow
            return useJson(state)
        case todoDel:
            state.todo.data = state.todo.data.filter(e => e.id !== action.id)
            return useJson(state)
        case todoAdd:
            state.todo.data.push(action.data)
            return useJson(state)
        default:
            return state
    }
}