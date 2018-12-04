<template>
  <div class="projects">
    <md-table v-model="projects" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Список проектов</h1>
      </md-table-toolbar>

      <md-table-row style="cursor: pointer" slot="md-table-row" slot-scope="{ item }" @click="selectProject(item.id)">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Название" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Дата начала" md-sort-by="date_begin">{{ item.date_begin }}</md-table-cell>
        <md-table-cell md-label="Дата окончания" md-sort-by="date_end">{{ item.date_end }}</md-table-cell>
        <md-table-cell md-label="Статус" md-sort-by="status">{{ item.status }}</md-table-cell>
        <md-table-cell md-label="Действия"><md-button class="md-accent">Закрыть</md-button></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'projects',
  data () {
    return {
      projects: [
        { id: 1, name: 'проект 1', date_begin: '10-10-2018', date_end: '10-12-2018', status: 'в работе' },
        { id: 2, name: 'проект 1', date_begin: '10-10-2018', date_end: '10-12-2018', status: 'в работе' },
        { id: 3, name: 'проект 1', date_begin: '10-10-2018', date_end: '10-12-2018', status: 'в работе' },
        { id: 4, name: 'проект 1', date_begin: '10-10-2018', date_end: '10-12-2018', status: 'в работе' },
        { id: 5, name: 'проект 1', date_begin: '10-10-2018', date_end: '10-12-2018', status: 'в работе' }
      ]
    }
  },
  methods: {
    selectProject(id) {
      this.$router.push({ name: 'Tasks', params: { projectId: id }});
    }
  },
  created() {
    console.log(this.$store)
    console.log(this.$http)
    console.log(this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
