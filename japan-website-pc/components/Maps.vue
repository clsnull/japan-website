<template>
    <div class="relative w-full h-full overflow-hidden">
        <GmapMap
            :center="center"
            :zoom="zoom"
            style="width: 100%; height: 100%"
        >
            <GmapMarker
                :position="position"
                title="京都玉崎株式会社"
                label="京都玉崎株式会社"
            />
        </GmapMap>
    </div>
</template>
<script>
export default {
    data() {
        return {
            center: { lat: 34.67630369701061, lng: 135.48274054232948 },
            position: { lat: 34.67630369701061, lng: 135.48274054232948 },
            zoom: 18,
            options: {
                disableDefaultUI: true,
                zoomControl: true,
            },
        };
    },
    async mounted() {},
    methods: {
        
    },
};
</script>
