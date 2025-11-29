<template >
    <div class="fix-container mt-5">
        <p class="text-4xl font-bold text-center underline">HOT PROMOTION</p>
    </div>
    <div class="card fix-container">
        <Carousel :value="products" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="rounded m-2 p-2 border-1 surface-border shadow-5">
                    
                    <div class="mb-2">
                        <div class="relative mx-auto">
                            <img :src="'ASUS/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                        </div>
                        <Chip label="Instock"  class="font-bold bg-green-500"/>
                    </div>
                    <div class="mb-1 font-medium">{{ slotProps.data.name }}</div>
                    <div class="flex justify-between items-center">
                        <div class="mt-0 font-semibold text-xl mb-2 font-bold">${{ slotProps.data.price }}</div>
                        <span>
                            <Button icon="pi pi-heart" severity="secondary" variant="outlined" />
                            <Button icon="pi pi-shopping-cart" class="ml-2"/>
                        </span>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
    
</template>

<script setup>
import { ref, onMounted } from "vue";
 
import Carousel from 'primevue/carousel';
import Chip from 'primevue/chip';
 
const products = ref([
    {
        name: " ROG ZEPHYRUS G14 GA403WW 2025",
        image: "ASUS1.jpg",
        price: 45,
        inventoryStatus: "INSTOCK"
    },
    {
        name: " ROG ZEPHYRUS G14 GA403WW 2025",
        image: "ASUS1.jpg",
        price: 60,
        inventoryStatus: "LOWSTOCK"
    },
    {
        name: " ROG ZEPHYRUS G14 GA403WW 2025",
        image: "ASUS1.jpg",
        price: 30,
        inventoryStatus: "OUTOFSTOCK"
    },
    {
        name: " ROG ZEPHYRUS G14 GA403WW 2025",
        image: "ASUS1.jpg",
        price: 30,
        inventoryStatus: "OUTOFSTOCK"
    },
    {
        name: " ROG ZEPHYRUS G14 GA403WW 2025",
        image: "ASUS1.jpg",
        price: 30,
        inventoryStatus: "OUTOFSTOCK"
    },
    {
        name: " ROG ZEPHYRUS G14 GA403WW 2025",
        image: "ASUS1.jpg",
        price: 30,
        inventoryStatus: "OUTOFSTOCK"
    },
    {
        name: " ROG ZEPHYRUS G14 GA403WW 2025",
        image: "ASUS1.jpg",
        price: 30,
        inventoryStatus: "OUTOFSTOCK"
    },
    {
        name: " ROG ZEPHYRUS G14 GA403WW 2025",
        image: "ASUS1.jpg",
        price: 30,
        inventoryStatus: "OUTOFSTOCK"
    },
    {
        name: " ROG ZEPHYRUS G14 GA403WW 2025",
        image: "ASUS1.jpg",
        price: 30,
        inventoryStatus: "OUTOFSTOCK"
    },
]);

const responsiveOptions = [
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
];

const getSeverity = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warn';
        case 'OUTOFSTOCK':
            return 'danger';
        default:
            return null;
    }
};

</script>