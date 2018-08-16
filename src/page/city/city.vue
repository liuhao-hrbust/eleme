<template>
    <div class="bgf5">
        <mt-header fixed :title="$store.state.nowCity.name">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <router-link to="/" slot="right">
                <mt-button >修改城市</mt-button>
            </router-link>
        </mt-header>
    </div>
</template>

<script>
  export default {
    name: 'city'
  }
</script>

<style scoped>

</style>