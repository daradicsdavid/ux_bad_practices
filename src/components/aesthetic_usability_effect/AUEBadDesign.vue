<template>
    <div>
        <v-row align="center">
            <v-form ref="form">
                <v-text-field
                        :counter="10"
                        label="Name"
                        required
                ></v-text-field>

                <v-text-field
                        label="E-mail"
                        required
                ></v-text-field>

                <v-select
                        :rules="[v => !!v || 'Item is required']"
                        label="Item"
                        required
                ></v-select>

                <v-checkbox
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Do you agree?"
                        required
                ></v-checkbox>

                <v-btn
                        class="mr-4"

                >
                    Validate
                </v-btn>
            </v-form>
        </v-row>
        <v-btn
                fab
                bottom
                right
                color="primary"
                to="/aesthetic_usability_effect/good_design"
        >
            <v-icon>fas fa-check</v-icon>
        </v-btn>
    </div>

</template>
<script>
    export default {
        name: "AUEBadDesign",
        mounted: function () {

        }
    }
</script>