<template>
  <div class="settings">
    <md-card id="profile">
      <md-card-header>
        <div class="md-title">Настройки профиля</div>
      </md-card-header>

      <md-card-content id="content" class="md-layout md-gutter">
        <div class="md-layout-item">
          <md-field>
            <label>Фамилия</label>
            <md-input v-model="surname"></md-input>
          </md-field>
          
          <md-field>
            <label>Имя</label>
            <md-input v-model="name"></md-input>
          </md-field>
          
          <md-field>
            <label>Отчество</label>
            <md-input v-model="patronymic"></md-input>
          </md-field>
        </div>
        
        <div class="md-layout-item">
          <md-field>
            <label>Почта</label>
            <md-input type="email" name="email" id="email" v-model="email"/>
          </md-field>
          
          <md-field>
            <label for="role">Роль</label>
            <md-select v-model="role" name="role" id="role">
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather-ii">Godfather II</md-option>
              <md-option value="godfather-iii">Godfather III</md-option>
            </md-select>
        </md-field>
        </div>
        
      </md-card-content>

      <md-card-actions>
        <md-button class="md-primary">Сохранить</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'settings',
  data () {
    return {
      name: 'Иван',
      surname: 'Кузнецов',
      patronymic: 'Сергеевич',
      email: 'gopa@gmail.com',
      role: 'godfather'
    }
  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  
  .settings
    height 100%
    
  #profile
    width 40%
    margin 0 auto
    
</style>
