<template>
  <div class="tasks">
    <div class="md-layout">
      <div class="md-layout-item md-size-25 stady" v-for="stady in stadies" :key="stady.id">
        <div class="stady-header">
          <h3>{{ stady.name }}</h3>
        </div>
        <md-card v-for="task in stady.tasks" :key="task.id" style="margin-bottom: 16px">
          <md-card-header>
            <div class="md-title">{{ task.name }}</div>
          </md-card-header>
    
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
          </md-card-content>
    
          <md-card-actions>
            <md-button @click="selectTask(task.id); showTaskDialog = true">Редактировать</md-button>
            <md-button>Выполнить</md-button>
          </md-card-actions>
        </md-card>
      </div>
      
      <md-dialog :md-active.sync="showTaskDialog">
        <md-dialog-title>Задача: имя</md-dialog-title>
        
        
  
        <md-dialog-actions>
          <md-button class="md-primary" @click="showTaskDialog = false">Close</md-button>
          <md-button class="md-primary" @click="showTaskDialog = false">Save</md-button>
        </md-dialog-actions>
      </md-dialog>
      
      <md-dialog :md-active.sync="showStadiesDialog">
        <md-dialog-title>Стадии</md-dialog-title>
  
        <md-dialog-actions>
          <md-button class="md-primary" @click="showStadiesDialog = false">Close</md-button>
          <md-button class="md-primary" @click="showStadiesDialog = false">Save</md-button>
        </md-dialog-actions>
      </md-dialog>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'tasks',
  data () {
    return {
      showTaskDialog: false,
      showStadiesDialog: false,
      stadies: [
        { id: 1, 
          name: 'Планирование', 
          tasks: [
            { id: 1, name: 'задача 1'},
            { id: 2, name: 'задача 2'},
          ] 
        },
        { 
          id: 2, 
          name: 'Разработка', 
          tasks: [
            { id: 1, name: 'задача 1'},
            { id: 2, name: 'задача 2'},
            { id: 3, name: 'задача 3'},
            { id: 4, name: 'задача 4'},
            { id: 5, name: 'задача 5'},
            { id: 6, name: 'задача 6'},
          ]  
        },
        { 
          id: 3, 
          name: 'Тестирование', 
          tasks: [
            { id: 1, name: 'задача 1'},
          ]  
        },
        { 
          id: 4, 
          name: 'Завершение', 
          tasks: [
            { id: 1, name: 'задача 1'},
            { id: 2, name: 'задача 2'},
          ]  
        }
      ],
    }
  },
  methods: {
    selectTask(id) {
      
    }
  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  
  .stady
    height 100%
    border-right 2px solid #e0e0e0
    .stady-header
      margin 0 16px
  
  .tasks
    height 100%
    .md-layout
      flex-flow nowrap
      height 100%
    
  #profile
    width 40%
    margin 0 auto
    
</style>
