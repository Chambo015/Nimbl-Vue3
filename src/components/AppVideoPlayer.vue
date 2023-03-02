<template>
    <div>
        <video class="object-fill" controls loop >
            <source
                src="https://storage.googleapis.com/nimbl_next/NFTs%20and%20the%20%2413B%20marketplace%2C%20explained.mp4"
                type="video/mp4" />
        </video>
    </div>
</template>

<style scoped lang="scss">
video {
    width: 100%;
    height: 100%;
    aspect-ratio: 16 / 9;
    background: transparent url('/img/video-card/1.jpg') 50% 50% / cover no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
</style>
