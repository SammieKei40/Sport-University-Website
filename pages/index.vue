<template>
<div>
  <nav class="border-gray-200 p-3">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#" class="flex">
            <img
        src="~/assets/image/SUU.jpg"
        class="h-10 mr-3 rounded-full"
        alt="..."
      />
        <span class="self-center text-lg text-green-600 font-semibold whitespace-nowrap">Sports University</span>
        </a>
        <button data-collapse-toggle="mobile-menu" type="button" class="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden md:block w-full md:w-auto" id="mobile-menu">
        <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
            <a href="#" class="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-green-600 md:p-0 rounded focus:outline-none" aria-current="page">Student Portal</a>
            </li>
            <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-green-600 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">About Us <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                <!-- Dropdown menu -->
                <div id="dropdownNavbar" class="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                    <ul class="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">History</a>
                    </li>
                    <li>
                        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Enquires</a>
                    </li>
                    <li>
                        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Tuition Fees</a>
                    </li>
                    </ul>
                   
                </div>
            </li>
            <li>
            <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-green-600 md:p-0">Accomodation</a>
            </li>
            <li>
            <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-green-600 md:p-0">Registration</a>
            </li>
            <li>
            <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-green-600 md:p-0">Admission Form</a>
            </li>
            <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar1" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-green-600 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">Academics <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                <!-- Dropdown menu -->
                <div id="dropdownNavbar1" class="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                    <ul class="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Faculty of Science & Computing</a>
                    </li>
                    <li>
                        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Faculty of Social & Management Science</a>
                    </li>
                    <li>
                        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Faculty of Sports</a>
                    </li>
                    <li>
                        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Faculty of Basic Medical Science</a>
                    </li>
                    </ul>
                </div>
            </li>
        </ul>
        </div>
    </div>
    </nav>

<!-- <div class="hero min-h-screen hero1">
  <div class="hero-overlay bg-opacity-60"></div>
</div> -->

<!-- <section id="text" class="">
        <div class="text-box">
            <h1>World's Biggest University</h1>
            <p>Making website is now one of the easiest thing in the world. You just need to learn
                HTML,CSS,<br>Javascript and you are good to go.</p>
            <a class="hero-btn" href="">Visit us to know more</a>
        </div>
    </section> -->

  <!-- Background image -->
  <div
    class="p-12 text-center hero1 relative overflow-hidden bg-no-repeat bg-cover lg:h-screen"
      >
    <div
      class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
      style="background-color: rgba(2, 56, 53, 0.7)"
    >
      <div class="flex justify-center items-center h-full">
        <div class="text-white">
          <h1 class="font-semibold text-4xl mb-4">
            Sports University of Nigeria 
          </h1>
          <h4 class="font-semibold text-xl mb-6">
            Welcome to the official website of the Sports University of Nigeria (SUN)
          </h4>
          <a
            class="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            href="#!"
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            >Know More About The School</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- Background image -->

  <div id="carouselExampleCaptions" class="carousel slide relative mt-3" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="3"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="4"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="5"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="6"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="7"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src="~/assets/image/1.jpeg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="~/assets/image/2.jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="~/assets/image/4.jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
       
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="~/assets/image/5.jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
       
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="~/assets/image/6.jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
       
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="~/assets/image/8.jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
       
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="~/assets/image/9.jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
       
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    <!-- Course -->
    <section class="course mt-3">
        <div>
            <h1>Studying At Sport University</h1>
        </div>
        <div class="row">
            <div class="course-col">
                <img src="~/assets/image/prospective.png" alt="Campus Image">
            </div>
            <div class="course-col">
                <img src="~/assets/image/undergraduate.png" alt="Campus Image">
            </div>
            <div class="course-col">
                <img src="~/assets/image/postgraduate.png" alt="Campus Image">
            </div>
        </div>
    </section>

    <!-- Course -->
    <section class="course mt-3">
        <div>
            <h1>Sports University Courses Offer</h1> 
            <p class="text-lg">The University disclosed its Institution focuses 80% on Sports Development, while 20% on conventional academy study.</p>
        </div>
        <div class="row">
            <div class="course-col ">
                <h1 class="text-2xl font-bold text-green-600">• Faculty Of Science &amp; Computing</h1>
                <p class="text-lg">Departments & Programme</p>
                <ul class="py-5 text-left m-2">
                    <li class="mb-2">1. Chemical Sciences (B.sc.) Biochemistry</li>

                <li class="mb-2">2. Biological Sciences (B.sc.) Microbiology</li>

                <ul class="mb-2">3. Mathematics & Computing (B.Sc.) Computer Science
                    
                    <li>
                    B.Sc. Cyber Security

                    B.Sc. Software Engineering

                    B.Sc. Mathematics
                 </li>
                </ul>
                    

                <li>4. Physics (B.Sc.) Physics With Electronics</li>
                </ul>
            </div>
            <div class="course-col">
                <h1 class="text-2xl font-bold text-green-600">• Faculty Of Social &amp; Management Sciences</h1>
                <p class="text-lg">Departments & Programme</p>
                <ul class="py-5 text-left m-2">
                    <li class="mb-2">1. Economics (B.sc.) Economics</li>

                <li class="mb-2">2.  Accounting (B.sc.) Accounting</li>

                <li class="mb-2">3. Business Administration (B.Sc.) Entrepreneurship Studies                </li>
                
                <li>4. Sociology (B.sc.) Criminology & Security Studies</li>
                <li>5.  Mass Communication (B.Sc.) Mass Communication</li>
                <li>6.  Political Science (B.sc.) Political Science</li>
                </ul>

            </div>
            <div class="course-col">
                <h1 class="text-2xl font-bold text-green-600">• Faculty Of Sports</h1>
                <p class="text-lg">Departments & Programme</p>
                <ul class="py-5 text-left m-2">
                    <li class="mb-2">Sports (B.sc.) Sports</li>
                </ul>

            </div>
            <div class="course-col">
                <h1 class="text-2xl font-bold text-green-600">• Faculty Of Basic Medical Sciences</h1>
                <p class="text-lg">Departments & Programme</p>
                <ul class="py-5 text-left m-2">
                    <li class="mb-2">1.Medical Science</li>
                    <li class="mb-2">2. Laboratory Science (B.M.L.S)</li>
                    <li class="mb-2">Public Health (B.Sc.) Public Health</li>
                </ul>

            </div>
        </div>
    </section>

    <!-- Campus -->
    <section class="campus mt-3">
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque vitae libero.</p>

        <div class="row">
            <div class="campus-col">
                <img src="~/assets/css/hero.jpg" alt="Campus Image">
                <div class="layer">
                    <h3>LONDON</h3>
                </div>
            </div>
            <div class="campus-col">
                <img src="~/assets/css/hero.jpg" alt="Campus Image">
                <div class="layer">
                    <h3>NEW YORK</h3>
                </div>
            </div>
            <div class="campus-col">
                <img src="~/assets/css/hero.jpg" alt="Campus Image">
                <div class="layer">
                    <h3>WASHINGTON</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- ------Facilities--------- -->
    <section class="facilities mt-3">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit impedit numquam.</p>

        <div class="row">
            <div class="facilities-col">
                <img src="~/assets/css/hero.jpg" alt="Library image">
                <h3>World Class Library</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum doloremque distinctio est?</p>
            </div>
            <div class="facilities-col">
                <img src="~/assets/css/hero.jpg" alt="Play ground image">
                <h3>Largest Play Ground</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum doloremque distinctio est?</p>
            </div>
            <div class="facilities-col">
                <img src="~/assets/css/hero.jpg" alt="Cafeteria image">
                <h3>Tasty and Healthy Food</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum doloremque distinctio est?</p>
            </div>
        </div>
    </section>

    <!-- ----Testimonials---- -->
    <section class="testimonials mt-3">
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi exercitationem pariatur amet.</p>

        <div class="row">
            <div class="testimonial-col">
                <img src="~/assets/css/hero.jpg" alt="User 1">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nobis perferendis? Hic officiis
                        quisquam consequuntur placeat fugit, quis incidunt numquam libero voluptas natus.</p>
                    <h3>Christine Berkley</h3>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-o"></i>
                </div>
            </div>
            <div class="testimonial-col">
                <img src="~/assets/css/hero.jpg" alt="User 1">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nobis perferendis? Hic officiis
                        quisquam consequuntur placeat fugit, quis incidunt numquam libero voluptas natus.</p>
                    <h3>David Byer</h3>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half"></i>
                </div>
            </div>
        </div>
    </section>

    <!-- ----Call To Action---- -->

    <section class="cta">
        <h1>Enroll For Our Various Online Courses<br> From The World</h1>
        <a href="" class="hero-btn">CONTACT US</a>
    </section>

    <!-- ---Footer--- -->
    
<footer class="p-4 bg-white sm:p-6 dark:bg-gray-900">
    <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <a href="https://flowbite.com/" class="flex items-center">
                <img
        src="~/assets/image/SUU.jpg"
        class="h-10 mr-3 rounded-full"
        alt="..."
      />
        <span class="self-center text-lg text-green-600 font-semibold whitespace-nowrap">Sports University</span>
            </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="" class="hover:underline">Records</a>
                        <a href="" class="hover:underline">Give to SUN</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact us</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Enterprises</a>
                    </li>
                    <li>
                        <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Payment Portal</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" class="hover:underline">Sports University™</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Facebook page</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Instagram page</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                <span class="sr-only">Twitter page</span>
            </a>
        </div>
    </div>
</footer>
</div>
</template>

<script setup>

useHead({
  // title: "Sports University",
  // // or, instead:
  // // titleTemplate: (title) => `My App - ${title}`,
  // viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  // charset: "utf-8",
  // meta: [{ name: "description", content: "My amazing site." }],
  // bodyAttrs: {
  //   class: "test",
  // },
  script: [
			{ 
        src: "https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js", 
        type: "text/javascript",
        body:true
      }, 
			{ 
        src: "https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js", 
        type: "text/javascript",
        body:true
      }, 
			],
});
</script>


<style>
.hero1{
    background-image: url(~/assets/css/hero.jpg);
    background-color: #cccccc;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

*{
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Poppins', sans-serif;
}
#text::before{
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    background: url("~/assets/css/hero.jpg") no-repeat center center/cover;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}


.text-box{
    width: 61%;
    color: white;
    position: absolute;
    text-align: center;
    left: 20%;
    top: 40%;
    box-sizing: border-box;
}

.text-box h1{
    font-size: 61px;
}

.text-box p{
    margin: 10px 0 30px;
    color: white;
    font-size: 17px;
}

.hero-btn{
    text-decoration: none;
    color: white;
    border: 1px solid black;
    padding: 10px 34px;
    font-size: 1rem;
    background: transparent;
    cursor: pointer;
}

.hero-btn:hover{
    background: orange;
    text-decoration: underline;
    transition: 0.2s;
}

.course{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

h1{
    font-size: 35px;
    font-weight: 600;
}

p{
    color: #777;
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
    padding: 10px;
}

.row{
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.course-col{
   background: #fff3f3;
   margin: 0px 26px;
   border-radius: 10px;
   margin-bottom: 5%;
   padding: 20px 12px;
   box-sizing: border-box;
   transition: 0.5s;
}

h3{
    text-align: center;
    font-weight: 600;
    margin: 10px  0; 
}

.course-col:hover{
    box-shadow: 2px 2px 20px 2px rgb(173, 131, 131);
    cursor: pointer;
}

/* Campus section */
.campus{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.campus-col{
    border-radius: 10px;
    margin: 0px 23px;
    position: relative;
    overflow: hidden;
    margin-bottom: 5%;
}

.campus-col img{
    width: 100%;
    height: 400px;
    display: block;
}

.layer{
    background: transparent;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;
}

.layer:hover{
    background: rgba(226,0,0,0.6);
    cursor: pointer;
}

.layer h3{
    width: 100%;
    font-weight: 500;
    color: #fff;
    font-size: 20px;
    position: absolute;
    bottom: 0;
    opacity: 0;
    transition: 0.5s;
}

.layer:hover h3{
    bottom: 50%;
    opacity: 1;
}

/* Facilities section */
.facilities{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0px 60px;
}

.facilities-col{
    flex-basis: 31%;
    border-radius: 10px;
    margin-bottom: 5%;
    transition: 0.5s;
}

.facilities-col:hover{
    box-shadow: 2px 2px 20px rgb(150, 113, 113);

}

.facilities-col img{
    width: 100%;
    border-radius: 10px;
}

.facilities-col p{
    padding: 0;
    text-align: left;
}

.facilities-col h3{
    margin-top: 16px;
    margin-bottom:15px;
    text-align: left;
}

/* Testimonials section */
.testimonials{
    width: 80%;
    margin: auto;
    text-align: center;
    position: relative;
}

.testimonial-col{
    flex-basis: 44%;
    border-radius: 10px;
    margin-bottom: 5%;
    text-align: left;
    background: #fff3f3;
    padding: 25px;
    cursor: pointer;
    display: flex;
}

.testimonial-col img{
    height: 54px;
    margin-left: 5px;
    margin-right: 30px;
    border-radius: 50%;
}

.testimonial-col p{
    padding: 0;
}

.testimonial-col h3{
    margin-top: 15px;
    text-align: left;
}

/* Call To Action section */
.cta{
    position: relative;
    margin: 75px auto;
    text-align: center;
    background:url(../assets/image/9.jpg) no-repeat center center/cover;
    border-radius: 10px;
    padding: 50px 0;
    width: 80%;
}

.cta h1{
    color: #fff;
    margin-bottom: 40px;
    padding: 0;
}

/* Footer section */
.footer{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.footer h4{
    margin-bottom: 15px;
    margin-top: 5px;
    font-weight: 600;
}

.icons .fa{
    color: red;
    margin: 0 13px;
    cursor: pointer;
    padding: 18px 0;
}
/* Media Query */
@media(max-width:700px){
    .text-box h1{
        font-size: 35px;
    }
    #navbar ul li{
        display: block;
    }

    #navbar ul{
        position: absolute;
        height: 100vh;
        width: 200px;
        top: 0px;
        right: 0px;
        text-align: left;
        display: inline-block;
        z-index: 2;
    }

    .row{
        flex-direction: column;
    }

    .campus-col{
        margin-top: 15px;
    }

    .cta h1{
        font-size: 24px;
    }
}
</style>