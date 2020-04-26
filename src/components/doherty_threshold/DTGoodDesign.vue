<template>
    <v-container fluid>
        <v-row>
            <v-col cols="4">
                <v-list flat>
                    <v-list-item
                            @click="selectItem(1)"
                    >
                        <v-list-item-content>
                            <v-list-item-title>
                                First item
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                            @click="selectItem(2)"
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
                <v-skeleton-loader
                        v-if="loading"
                        class="mx-auto"
                        max-width="400"
                        type="card"
                ></v-skeleton-loader>


                <template v-else>

                    <v-card
                            v-if="visible===1"
                            class="mx-auto cardItem"
                            max-width="400"
                    >
                        <v-img
                                class="white--text align-end"
                                height="200px"
                                src="   https://cdn.vuetifyjs.com/images/cards/house.jpg"
                        >
                            <v-card-title>Houses to not buy</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pb-0">House</v-card-subtitle>

                        <v-card-text class="text--primary">
                            <div>Big house</div>
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


                    <v-card
                            v-if="visible===2"
                            class="mx-auto cardItem"
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

                </template>
            </v-col>
            <v-btn
                    fab
                    dark
                    absolute
                    color="error"
                    style="bottom: 10px;right: 10px"
                    to="/doherty_threshold/bad_design"
            >
                <v-icon>fas fa-times</v-icon>
            </v-btn>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        name: 'DTGoodDesign',
        data: function () {
            return {
                loading: false,
                visible: undefined
            }
        },
        methods: {
            selectItem: async function (index) {
                this.visible = index
                this.loading = true
                await new Promise(r => setTimeout(r, 350));
                this.loading = false


            }
        }
    }
</script>