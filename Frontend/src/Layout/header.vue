<template>
    <div class="surface-800 text-white">
        <div class="fix-container">
            <div class="py-3 flex gap-5">
                <p id="font"><i class="bi bi-telephone mr-2 text-red-500" ></i>012 345 678 / 098 496 8496</p>
                <p id="font"><i class="bi bi-geo-alt-fill mr-2 text-red-500"></i>ទីតាំង:ខាងក្រោយអាការាអង្គរ
ផ្លូវ 60ម
ផ្ទះលេខ 07C
សង្កាត់ច្រើនទឹក
ក្រុងសៀមរាប Cambodia</p>
            </div>
            <div class="flex gap-4 pb-4">
                <div class="flex gap-1">
                    <h1 class="text-4xl font-bold">Sabrey</h1>
                    <h1 class="text-4xl font-bold text-red-500">Tech</h1>
                </div>
                <div class="flex items-center rounded-full overflow-hidden w-80">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        class="flex-1 px-4 py-2 focus:outline-none"
                    >
                    <button class="  text-white px-4 py-2 flex items-center justify-center">
                        <i class="bi bi-search text-red-500"></i>
                    </button>
                </div>

                <div class="flex gap-4">
                    <button class="bg-transparent text-white py-2 flex items-center justify-center">
                        <i class="bi bi-heart text-4xl"></i>
                    </button>
                    <button class="bg-transparent text-white py-2 flex items-center justify-center">
                        <i class="bi bi-cart3 text-4xl"></i>
                    </button>
                </div>
                <!-- <div class="card flex justify-center">
                    <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="  bg-transparent text-white" />
                </div> -->
                 
            </div>
            
        </div>
         
    </div>
    <div class="flex bg-white shadow-5">
        <ul class="flex gap-5 fix-container text-xl font-bold p-2">
            <li><a href="">Categories</a>
                <!-- <div class="sub-categories">
                    <ul>
                        <li><a href="">Laptops</a></li>
                        <li><a href="">PC-Parts</a></li>
                        <li><a href="">Accessories</a></li>
                        <li><a href="">Monitors</a></li>
                        <li><a href="">PC-Sets</a></li>
                        <li><a href="">Others</a></li>

                    </ul>
                </div> -->
            </li>
            <li><a href="">Home</a></li>
            <li><a href="#ROG">Laptop ROG</a></li>
            <li><a href="#MSI">MSI</a></li>
            <li><a href="#ASUS">ASUS</a></li>
            <li><a href="#APPLE">APPLE</a></li>
            <li><a href="#TUFGAMING">TUF</a></li>
            <li><a href="#CPU">CPU</a></li>
            <li><a href="#DELL">DELL</a></li>
            <li><a href="#Monitor">Monitor</a></li>
            <li><a href="#Chair">Chair</a></li>
            <li><a href="#Custom-PC-Build">Custom PC Builder</a></li>

        </ul>
    </div>
    <div class="card flex mt-2 fix-container">
        <Breadcrumb :model="items" />
    </div>
     
</template>

<script setup>
import { ref } from "vue";

import Breadcrumb from 'primevue/breadcrumb';
 
const items = ref([
   
    { label: 'Home' },
    { label: 'Wireless' }
]);

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>