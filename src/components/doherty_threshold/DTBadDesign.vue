<template>
    <v-container fluid>
        <v-row>
            <v-col cols="4">
                <v-list flat>
                    <v-list-item
                            @click="selectItem"
                    >
                        <v-list-item-content>
                            <v-list-item-title>
                                First item
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                            @click="selectItem"
                    >
                        <v-list-item-content>
                            <v-list-item-title>
                                Second item
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
            <v-col cols="8">
                <v-card
                        id="card"
                        class="mx-auto"
                        max-width="400"
                >
                    <v-img
                            class="white--text align-end"
                            height="200px"
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                        <v-card-title>Top 10 Australian beaches</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

                    <v-card-text class="text--primary">
                        <div>Whitehaven Beach</div>

                        <div>Whitsunday Island, Whitsunday Islands</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                                color="orange"
                                text
                        >
                            Share
                        </v-btn>

                        <v-btn
                                color="orange"
                                text
                        >
                            Explore
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-btn
                    fab
                    dark
                    absolute
                    color="primary"
                    style="bottom: 10px;right: 10px"
                    to="/doherty_threshold/good_design"
            >
                <v-icon>fas fa-check</v-icon>
            </v-btn>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        name: 'DTBadDesign',
        methods: {
            selectItem: async function () {
                const wait = Math.random() * (2000 - 800) + 800;

                document.getElementById('card').style.display = 'none'
                await new Promise(r => setTimeout(r, wait));
                document.getElementById('card').style.display = 'block'
            }
        }
    }
</script>