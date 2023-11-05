import { defineStore } from 'pinia'

const TaskStore = defineStore('TaskStore',{
    state: () => {
        return {
          count: 0,
          name: 'Eduardo',
          isAdmin: true,
          items: [],
          hasChanged: true,
        }
      },
      getters:{

      },
      actions:{

      }
})
export default TaskStore