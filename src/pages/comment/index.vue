<template>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title"><b>Комментарии</b></h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Главная</router-link>>
          <router-link
            class="breadcrumb__item breadcrumb__actived"
            to="/comments"
            >Комментарии</router-link
          >
        </div>
      </div>
      <button @click="show(new Comment({}))" class="btn btn-primarys me-3">
        Добавить
      </button>
    </div>
    <app-table :items="items" :columns="columns">
      <template #id="{ item }">{{ item.id }}</template>
      <template #body="{ item }"
        ><router-link :to="`comments/${item.id}`">{{
          item.body
        }}</router-link></template
      >
      <template #postId="{ item }">{{ item.postId }}</template>

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
          <label class="form-label">Заголовок</label>
          <input v-model="item.title" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Содержание</label>
          <textarea
            v-model="item.body"
            type="text"
            class="form-control"
            rowspan="6"
          ></textarea>
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
import { onMounted } from "vue";
import AppDialog from "../../components/app-dialog.vue";
import AppTable from "../../components/app-table.vue";
import { Comment } from "../../entities/Comment";
import { useEntities } from "../../hooks/useEntities";
import { TableColumn } from "../../models/TableColumn";

const { add, show, dialog, items, loaded, update, remove, item, get } =
  useEntities<Comment>("comments");

const columns: TableColumn[] = [
  new TableColumn({
    name: "id",
    caption: "#",
  }),

  new TableColumn({
    name: "body",
    caption: "Содержание",
  }),
  new TableColumn({
    name: "postId",
    caption: "postId",
  }),
  new TableColumn({
    name: "action",
  }),
];
</script>
<style src="../../assets/css/style.css"></style>
<style>
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
