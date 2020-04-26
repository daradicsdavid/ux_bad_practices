<template>
    <v-container fluid>
        <v-carousel
                hide-delimiter-background
                show-arrows-on-hover
        >
            <v-carousel-item
                    v-for="(item,index) in items" :key="index"
            >
                <v-sheet
                        height="100%"
                        :color="item.color"
                >
                    <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                    >
                        <v-col cols="12" class="display-2 text-center">
                            {{item.name}}
                        </v-col>
                        <v-col cols="12" class="headline text-center">
                            {{item.description}}
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-carousel-item>

        </v-carousel>
    </v-container>
</template>
<script>
    export default {
        name: 'Rules',
        data: function () {
            return {
                items: [
                    {
                        name: 'Aesthetic Usability Effect',
                        description: 'Users often perceive aesthetically pleasing design as design that’s more usable.',
                        color: '#506485'
                    },
                    {
                        name: 'Doherty Threshold',
                        description: 'Productivity soars when a computer and its users interact at a pace (400ms) that ensures that neither has to wait on the other.',
                        color: '#C44F9D'
                    },
                    {
                        name: 'Fitts’s Law',
                        description: 'The time to acquire a target is a function of the distance to and size of the target.',
                        color: '#7BB24D'
                    },
                    {
                        name: 'Jakob’s Law',
                        description: 'Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know.',
                        color: '#D6C229'
                    },
                    {
                        name: 'Law of Proximity',
                        description: 'Objects that are near, or proximate to each other, tend to be grouped together.',
                        color: '#EA7E38'
                    },
                    {
                        name: 'Law of Uniform Connectedness',
                        description: 'Elements that are visually connected are perceived as more related than elements with no connection.',
                        color: '#819DD6'
                    },
                    {
                        name: 'Postel’s Law',
                        description: 'Be liberal in what you accept, and conservative in what you send.',
                        color: '#43A852'
                    },
                    {
                        name: 'Zeigarnik Effect',
                        description: 'People remember uncompleted or interrupted tasks better than completed tasks.',
                        color: '#42928C'
                    },
                ]
            }
        }
    }
</script>