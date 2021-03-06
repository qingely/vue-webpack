<template>
    <section class="real-app">
        <input type="text"
               class="add-input"
               autofocus="autofocus"
               placeholder="Press 'Enter' to add task"
               @keyup.enter="addTodo"
        >

        <!-- 使用items组件 -->
        <!-- :todo="todo" 往子组件item.vue 传入todo对象
             v-for="todo in filteredTodos" 遍历 todos 数组
             @del="deleteTodo" 接收子组件要触发的del方法
        -->
        <Item :todo="todo"
                  v-for="todo in filteredTodos"
                  :key="todo.id"
                  @del="deleteTodo"
        >
        </Item>
        <!--
            用 key 管理可复用的元素
            Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。
            这么做除了使 Vue 变得非常快之外，还有其它一些好处。
        -->


        <!-- 使用tabs组件 -->
        <Tabs :filter="filter"
                  :todos="todos"
                  v-show="todos.length"
                  @toggle="toggleFilter"
                  @clearAllCompleted="clearAllCompleted"
        >
        </Tabs>
    </section>
</template>

<script>
    import Item from './items.vue';
    import Tabs from './tabs.vue';

    // 采用 localStorage 保存 todos
    const STORAGE_KEY = 'todos-vuejs-2.0'
    const todoStorage = {
        fetch: function () {
            let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
            todos.forEach(function (todo, index) {
                todo.id = index
            })
            todoStorage.uid = todos.length
            return todos
        },
        save: function (todos) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
        }
    }

    export default {
        // data() 声明数据
        data() {
            return {
                todos:  todoStorage.fetch(),
                filter: 'all'
            }

        },
        // 观察 todos 数组，发生变化了就自动跟新 todos 到 localStorage
        watch: {
          todos: {
            handler: function (todos) {
              todoStorage.save(todos)
            },
            deep: true
          }
        },        

        // 计算
        computed: {
            filteredTodos() {
                if (this.filter === 'all') {
                    return this.todos;
                }
                const completed = this.filter === 'completed';

                // 将todos数组中，completed为true的值过滤出来，并返回一个新数组
                return this.todos.filter(todo => completed === todo.completed);

            }
        },

        // 组件
        components: {
            Item,
            Tabs,
        },

        //方法
        methods: {
            addTodo(e) {
                if (e.target.value.trim()) {
                    this.todos.unshift({
                        id: todoStorage.uid++,
                        content: e.target.value.trim(),
                        completed: false
                    });
                    e.target.value = '';
                } else {
                    alert('输入不能为空哦！');
                }
            },
            deleteTodo(id) {
                this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
            },
            toggleFilter(state) {
                this.filter = state;

            },
            clearAllCompleted() {
                // 给todos赋一个新的值（即todo.completed为false的值）
                this.todos = this.todos.filter(todo => todo.completed === false)

            }
        }
    };
</script>

<style lang="stylus" scoped>
    .real-app {
        width 600px
        margin 0 auto
        box-shadow 0 0 5px #666
    }

    .add-input {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        box-sizing: border-box;
        font-smoothing: antialiased;
        padding: 16px 16px 16px 36px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    }
</style>