<template>

<nav class="border-gray-200 p-3">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#" class="flex">
          <img src="~/assets/image/SUU.jpg" class="h-10 mr-3 rounded-full" alt="..." />
          <span class="self-center text-lg text-green-600 font-semibold whitespace-nowrap"
            >Sports University</span
          >
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden md:block w-full md:w-auto text-themeText" id="mobile-menu">
          <ul
            class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium"
          >
            <li>
              <a
                href="#"
                class="text-themeText md:bg-transparent block pl-3 pr-4 py-2 md:text-green-600 hover:text-green-600 md:p-0 rounded focus:outline-none"
                aria-current="page"
                >Student Portal</a
              >
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class=" text-themeText border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 hover:text-green-600 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
              >
                About Us
                <svg
                  class="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div
                id="dropdownNavbar"
                class="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
              >
                <ul class="py-1" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a
                      href="#"
                      class="text-black text-sm hover:text-green-600  block px-4 py-2"
                      >History</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-black text-sm hover:text-green-600  block px-4 py-2"
                      >Enquires</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-black text-sm hover:text-green-600  block px-4 py-2"
                      >Tuition Fees</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                class=" text-themeText  border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 hover:text-green-600 md:p-0"
                >Accomodation</a
              >
            </li>
            <li>
              <a
                href="#"
                class=" text-themeText border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 hover:text-green-600 md:p-0"
                >Registration</a
              >
            </li>
            <li>
              <a
                href="#"
                class=" text-themeText border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 hover:text-green-600 md:p-0"
                >Admission Form</a
              >
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar1"
                class="hover:text-green-600 border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2  md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
              >
                Academics
                <svg
                  class="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div
                id="dropdownNavbar1"
                class="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
              >
                <ul class="py-1" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a
                      href="#"
                      class="text-black text-sm hover:text-green-600  block px-4 py-2"
                      >Faculty of Science & Computing</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-black text-sm hover:text-green-600  block px-4 py-2"
                      >Faculty of Social & Management Science</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-black text-sm hover:text-green-600  block px-4 py-2"
                      >Faculty of Sports</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-black text-sm hover:text-green-600  block px-4 py-2"
                      >Faculty of Basic Medical Science</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <button class="bg-green-600 hover:bg-green-700 text-white p-2 rounded">Apply Now</button>
            <Toggle v-model="darkMode" off-label="L" on-label="D" class="flex items-center cursor-pointer pt-4 lg:pt-0 md:pt-4 text-2xl text-center"/>
          </ul>
        </div>
      </div>
    </nav>  
    
</template>

<script setup lang="ts">
import Toggle from "@vueform/toggle";
import { useState } from "#app";
import { watch } from "@vue/runtime-core";


type Theme = 'light' | 'dark';
const LOCAL_STORAGE_THEME_KEY = 'theme';
const darkMode = useState('theme', () => false);
const setTheme = (newTheme: Theme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  darkMode.value = newTheme === 'dark';
};
onMounted(() => {
  const isDarkModePreferred = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const themeFromLocalStorage = localStorage.getItem(
    LOCAL_STORAGE_THEME_KEY
  ) as Theme;
  if (themeFromLocalStorage) {
    setTheme(themeFromLocalStorage);
  } else {
    setTheme(isDarkModePreferred ? 'dark' : 'light');
  }
});
watch(darkMode, selected => {
  setTheme(selected ? 'dark' : 'light');
});

</script>
<style  src="@vueform/toggle/themes/default.css"></style>