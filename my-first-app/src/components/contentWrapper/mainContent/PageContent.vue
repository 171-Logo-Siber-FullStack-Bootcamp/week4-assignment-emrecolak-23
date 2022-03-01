<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <div class="col-md-12 mb-3">
      <button
        type="button"
        class="btn btn-primary ml-3"
        v-on:click="showTodosData()"
      >
        Get Todo Data
      </button>
      <button
        type="button"
        class="btn btn-secondary ml-3"
        v-on:click="showPostsData()"
      >
        Get Posts Data
      </button>
      <button
        type="button"
        class="btn btn-success ml-3"
        v-on:click="showUsersData()"
      >
        Get Users Data
      </button>
    </div>
    <div class="row">
      <!-- Get Users Data -->
      <div v-if="isUserEnabled">
        <div v-for="user in usersData" :key="user.id">
          <div class="offset-4 col-12 col-md-6 mb-2">
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">Full Name: {{ user.name }}</h5>
                <p class="card-text">User Name: {{ user.username }}</p>
                <a href="#" class="btn btn-primary"
                  >User Email: {{ user.email }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Get Post Data -->
      <div v-if="isPostEnabled">
        <div v-for="post in postsData" :key="post.id">
          <div class="offset-4 col-12 col-md-6 mb-2">
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">{{ post.userId }}</h5>
                <p class="card-text">{{ post.body }}</p>
                <a href="#" class="btn btn-primary">{{ post.title }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Get ToDo Data -->
      <div class="offset-1 col-12 col-md-5" v-if="isTodoEnabled">
        <div class="alert alert-light" role="alert" v-if="todosData.length > 0">
          Tamamlananlar
        </div>
        <div class="row" v-for="todo in todosData" :key="todo.id">
          <div v-if="todo.completed">
            <div class="col-md-12">
              <div class="alert alert-success" role="alert">
                {{ todo.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="offset-1 col-12 col-md-5" v-if="isTodoEnabled">
        <div
          class="alert alert-primary"
          role="alert"
          v-if="todosData.length > 0"
        >
          Tamamlanmayanlar
        </div>
        <div class="row" v-for="todo in todosData" :key="todo.id">
          <div v-if="!todo.completed">
            <div class="col-md-12">
              <div class="alert alert-danger" role="alert">
                {{ todo.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageContent",
  data: function () {
    return {
      todosData: [],
      postsData: [],
      usersData: [],
      isUserEnabled: false,
      isPostEnabled: false,
      isTodoEnabled: false,
    };
  },
  methods: {
    showUsersData() {
      this.isUserEnabled = true;
      this.isPostEnabled = false;
      this.isTodoEnabled = false;
      fetch("http://localhost:10000/users")
        .then((response) => response.json())
        .then((responseJSON) => (this.usersData = responseJSON));
    },
    showPostsData() {
      this.isPostEnabled = true;
      this.isUserEnabled = false;
      this.isTodoEnabled = false;
      fetch("http://localhost:10000/posts")
        .then((response) => response.json())
        .then((responseJSON) => (this.postsData = responseJSON));
    },
    showTodosData() {
      this.isTodoEnabled = true;
      this.isPostEnabled = false;
      this.isUserEnabled = false;
      fetch("http://localhost:10000/todos")
        .then((response) => response.json())
        .then((responseJSON) => (this.todosData = responseJSON));
    },
  },
};
</script>
