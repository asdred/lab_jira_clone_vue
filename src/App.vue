<template>
  <div id="app">
    <md-app md-mode="fixed">
      <md-app-toolbar class="md-medium">
        <span class="md-title">
          Жir
        </span>
        
        <md-button class="md-dense md-raised md-primary">Новая задача</md-button>
        <md-button class="md-dense md-primary">Стадии</md-button>
        <md-field style="width: 200px">
          <label for="filter">Фильтры</label>
          <md-select v-model="selectedFilters" name="filter" id="filter" multiple>
            <md-option value="fight-club">Fight Club</md-option>
            <md-option value="godfather">Godfather</md-option>
            <md-option value="godfather-ii">Godfather II</md-option>
            <md-option value="godfather-iii">Godfather III</md-option>
            <md-option value="godfellas">Godfellas</md-option>
            <md-option value="pulp-fiction">Pulp Fiction</md-option>
            <md-option value="scarface">Scarface</md-option>
          </md-select>
        </md-field>
        
        <div style="flex: 1"></div>
        
        <md-button class="md-primary" to="/">Проекты</md-button>
        
        <md-menu md-size="small" md-align-trigger>
          <md-button md-menu-trigger class="md-primary">
            Профиль
            <md-icon>more_vert</md-icon>
          </md-button>
    
          <md-menu-content>
            <md-menu-item to="/settings">Настройки</md-menu-item>
            <md-menu-item to="/auth">Выход</md-menu-item>
          </md-menu-content>
        </md-menu>
      </md-app-toolbar>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return { 
      selectedFilters: []
    } 
  }
}
</script>

<style lang="stylus" scoped>

    html
      height 100%
      
    #app
      height 100%

    .md-app
      height 100%
      .md-app-content
        border none
    
    .md-title
      font-size 32px
      margin-left 32px
      margin-right 64px
</style>
