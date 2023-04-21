<template>
  <h1>{{ loaded }}</h1>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title">
          <b>{{ model.name }}</b>
        </h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Главная</router-link>>
          <router-link class="breadcrumb__item" to="/users"
            >Пользователи</router-link
          >>
          <router-link
            class="breadcrumb__item breadcrumb__actived"
            to="/users/:id"
            >{{ model.name }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="card p-4">
      <p class="mb-2"><b>Номер: </b>{{ model.id }}</p>
      <p class="mb-2"><b>Имя:</b>{{ model.name }}</p>
      <p class="mb-2"><b>username:</b>{{ model.username }}</p>
      <p class="mb-2"><b>Телефон:</b>{{ model.phone }}</p>
      <p class="mb-2"><b>e-mail:</b>{{ model.email }}</p>
      <p class="mb-2"><b>website:</b>{{ model.website }}</p>
      <p class="mb-2">
        <b>address:</b>
        <span class="ms-4">
          <p class="mb-1"><b>city:</b>{{ model.address.city }}</p>
          <p class="mb-1">
            <b>geo:</b>
            <span class="ms-4">
              <p class="mb-1"><b>lat:</b>{{ model.address.geo.lat }}</p>
              <p class="mb-1"><b>lng:</b>{{ model.address.geo.lng }}</p>
            </span>
          </p>
          <p class="mb-1"><b>street:</b>{{ model.address.street }}</p>
          <p class="mb-1"><b>suite:</b>{{ model.address.suite }}</p>
          <p class="mb-1"><b>zipcode:</b>{{ model.address.zipcode }}</p>
        </span>
      </p>
      <p class="mb-2">
        <b>company:</b>
        <span class="ms-4">
          <p class="mb-1"><b>bs:</b>{{ model.company.bs }}</p>
          <p class="mb-1"><b>catchPhrase:</b>{{ model.company.catchPhrase }}</p>
          <p class="mb-1"><b>name:</b>{{ model.company.name }}</p>
        </span>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { User } from "../../entities/user/User";
import { useEntity } from "../../hooks/useEntity";
const { params } = useRoute();
const { model, loaded } = useEntity<User>(`users`, +params.id);
</script>
<style src="../../assets/css/style.css"></style>
<style src="../../assets/css/product.css"></style>
