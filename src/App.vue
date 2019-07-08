<template>
    <div id="app">
        <top-nav></top-nav>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>
<script>
import topNav from './components/nav';

export default {
    components: {
        topNav
    }
}
</script>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .content {
        padding: 25px;
    }
</style>
