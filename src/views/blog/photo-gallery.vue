<template>
    <div>
        <div class="photo-gallery-inner">
            <div class="dark-overlay">

            </div>
        </div>

        <section id="photo-gallery" class="py-5" >
            <div class="container">
                <div uk-lightbox>
                    <a class="uk-button uk-button-default" href="./popcorn.jpg" data-caption="Image" height="200px">
                        <img src="./popcorn.jpg" width="120px" height="auto">
                    </a>
                    <a class="uk-button uk-button-default" href="https://yootheme.com/site/images/media/yootheme-pro.mp4" data-caption="Video">Video</a>
                    <a class="uk-button uk-button-default" href="https://www.youtube.com/watch?v=c2pz2mlSfXA" data-caption="YouTube">YouTube</a>
                    <a class="uk-button uk-button-default" href="https://vimeo.com/1084537" data-caption="Vimeo">Vimeo</a>
                    <a class="uk-button uk-button-default" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4740.819266853735!2d9.99008871708242!3d53.550454675412404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f9d24afe84a0263!2sRathaus!5e0!3m2!1sde!2sde!4v1499675200938" data-caption="Google Maps" data-type="iframe">Google Maps</a>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        name: "photo-gallery"
    }
</script>

<style scoped>

</style>