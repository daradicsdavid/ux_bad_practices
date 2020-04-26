<template>
    <v-container fluid>
        <v-btn
                fab
                dark
                absolute
                large
                color="error"
                style="bottom: 10px;right: 10px"
                to="/fitts_law/bad_design"
        >
            <v-icon>fas fa-times</v-icon>
        </v-btn>
    </v-container>

</template>
<script>
    export default {
        name: "FTGoodDesign",
        mounted: function () {

        }
    }
</script>