<template>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title"><b>Пользователи</b></h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Главная</router-link>>
          <router-link class="breadcrumb__item breadcrumb__actived" to="/users"
            >Пользователи</router-link
          >
        </div>
      </div>
      <button @click="show(new User({}))" class="btn btn-primarys me-3">
        Добавить
      </button>
    </div>
    <app-table :items="items" :columns="columns">
      <template #id="{ item }">{{ item.id }} </template>
      <template #firstName="{ item }"
        ><router-link :to="`/users/${item.id}`">{{
          item.name
        }}</router-link></template
      >
      <template #username="{ item }">{{ item.username }}</template>
      <template #email="{ item }">{{ item.email }}</template>
      <template #action="{ item }">
        <div class="d-flex justify-content-end">
          <button @click="show(item)" class="btn btn-primarys me-3">
            Обновить
          </button>
          <button @click="remove(item.id)" class="btn btn-danger">
            Удалить
          </button>
        </div>
      </template>
    </app-table>
    <app-dialog title="Посмотреть пост" v-if="item != null" ref="dialog">
      <template #body>
        <div class="mb-3">
          <label class="form-label">Имя</label>
          <input v-model="item.firstName" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Фамилия</label>
          <input
            v-model="item.username"
            type="text"
            class="form-control"
            rowspan="6"
          />
          <div class="mb-3">
            <label class="form-label">email</label>
            <input v-model="item.email" type="text" class="form-control" />
          </div>
        </div>
      </template>
      <template #footer
        ><button @click="add" class="btn btn-primary">Добавить</button>
        <button @click="update" class="btn btn-success">Сохранить</button>
        <button @click="dialog.modal.hide()" class="btn btn-secondary">
          Закрыть
        </button>
      </template>
    </app-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import AppDialog from "../../components/app-dialog.vue";
import AppTable from "../../components/app-table.vue";
import { User } from "../../entities/user/User";
import { useEntities } from "../../hooks/useEntities";
import { TableColumn } from "../../models/TableColumn";

const { item, add, show, dialog, items, loaded, update, remove, get } =
  useEntities<User>("users");

const columns: TableColumn[] = [
  new TableColumn({
    name: "id",
    caption: "#",
  }),
  new TableColumn({
    name: "firstName",
    caption: "Имя",
  }),
  new TableColumn({
    name: "username",
    caption: "username",
  }),
  new TableColumn({
    name: "email",
    caption: "email",
  }),
  new TableColumn({
    name: "action",
  }),
];
</script>
<style src="../../assets/css/style.css"></style>
<style>
.userToggle::after {
  top: 0px;
  position: absolute;
  background-color: red;
  content: "";
  display: block;
  height: 0px;
  width: 1100px;
}
.rotate {
  background-color: transparent;
  border: none;
  transform: rotate(90deg);
  margin-bottom: 0px;
  font-size: 20px;
}
.my__search {
  width: 100%;
}
.form-select {
  width: 100px;
}
h1::selection {
  color: yellow;
  background: red;
}
.my__row {
  width: 100%;
  overflow-x: scroll;
  display: flex;
  width: fit-content;
}
.my__row::-webkit-scrollbar {
  display: none;
}
.myBlock {
  background-color: rgb(172, 214, 154);
  border-radius: 50%;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;
  font-size: 20px;
  color: black;
  transition: 0.3s;
  box-shadow: 2px 3px 2px black;
  margin: 20px 5px;
}
.myBlock:hover {
  background-color: rgb(97, 146, 86);
  transform: scale(1.03);
}
.myBlock-active {
  background-color: rgb(97, 146, 86);
}
</style>
