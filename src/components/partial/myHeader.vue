<template>
    <div id="header-section">
        <header class="header">
            <nav class="navbar navbar-expand-lg bg-light">
                <a href="" class="navbar-brand">brand</a>

                <div class="navbar-link-item">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <button class="nav-link"  @click="$root.scrollToElement('about')">
                                about
                            </button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link"  @click="$root.scrollToElement('about')">
                                skills
                            </button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link"  @click="$root.scrollToElement('about')">
                                portfolio
                            </button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link"  @click="$root.scrollToElement('about')">
                                experience
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
        name: "myHeader"
    }
</script>

<style scoped>

</style>